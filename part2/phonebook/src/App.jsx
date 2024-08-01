import { useEffect, useState } from 'react'
import Persons from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import personService from './services/persons'
import './index.css'
import Footer from './components/Footer'
import Error from './components/Error'

function App() {

  const showErrorMessage = (message) => {
    setError(
      `${message}`
    )
    setTimeout(() => setError(null), 5000)
  }

  const showNotification = (message) => {
    setNotification(message)
    setTimeout(() => setNotification(null), 1000)
  }

  const emptyPerson = ({
    name: '',
    number: ''
  })
  const [persons, setPersons] = useState([]) 
  const [newPerson, setNewPerson] = useState(emptyPerson)
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(data => {
        setPersons(data)
        showNotification(`Fetched all ${data.length} persons`)
      })
      .catch(error => {
        showErrorMessage('Failed getting all data')
        console.log('Error when getting data', error)
      })
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    const checkNameExistence = persons.findIndex(p => p.name === newPerson.name)
    if (checkNameExistence != -1){
      if(window.confirm(`${newPerson.name} already exists, replace number?`)){
        console.log(persons[checkNameExistence].id)
        personService
          .update(newPerson, persons[checkNameExistence].id)
          .then(data => {
            setPersons(persons.map(p => p.id === data.id ? data : p))
            setNewPerson(emptyPerson)
            showNotification(`${newPerson.name}'s number updated`)
          })
          .catch(error => {
            showErrorMessage(`Failed updating ${newPerson.name}`)
            console.log("Error when updating", error)
          })
      }
    } else {
      personService
        .create(newPerson)
        .then(data => {
          setPersons([...persons, data])
          setNewPerson(emptyPerson)
          showNotification(`${newPerson.name} added`)
        })
        .catch(error => {
          // showErrorMessage(`Failed creating ${newPerson.name}`)
          showErrorMessage(error.response.data.error)
          console.log('Error when adding data', error)
        })
    }
  }

  const handlePersonChange = e => {
    const {name, value} = e.target
    setNewPerson({...newPerson, [name]: value})
  }

  const handleFilterChange = e => {
    setFilter(e.target.value)
    setPersons(persons.filter(p => p.name.includes(e.target.value)))
  }

  const handleDelete = (e, number) => {
    e.preventDefault()
    const personToDelete = persons[persons.findIndex(p => p.number === number)]
    if(window.confirm(`Delete ${personToDelete.name} ?`)){
      personService
        .deletePerson(personToDelete.id)
        .then(response => {
          setPersons(persons.filter(p => p.id !== personToDelete.id))
          showNotification(`${personToDelete.name} deleted`)
          console.log(response)
        })
        .catch(error => {
          console.log('Error deleting item', error)
          showErrorMessage(`Failed deleting ${newPerson.name}`)
        })
    }
  }



  return (
    <>
      <h2>Phonebook</h2>
      <Error message = {error}/>
      <Notification message = {notification}/>
      <Filter filter = {filter} handleFilterChange={handleFilterChange}/>
      <PersonForm newPerson={newPerson} handlePersonChange={handlePersonChange} handleSubmit={handleSubmit}/>
      <h2>Numbers</h2>
      <Persons persons = {persons} handleDelete={handleDelete}/>
      <Footer></Footer>
    </>
  )
}

export default App
