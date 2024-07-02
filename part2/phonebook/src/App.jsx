import { useEffect, useState } from 'react'
import PersonForm from './components/PersonForm'
import AllPersons from './components/Person'
import FilterPersons from './components/FilterPersons'
import personService from '../services/persons.js'

const baseUrl = 'http://localhost:3001/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(persons => {
        console.log('promise fulfilled')
        setPersons(persons)
      })
  }, [])

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  //TODO use one function only
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleSubmitClick = (e) => {
    e.preventDefault();
    
    const duplicates = persons.filter(person => person.name === newName)
    if (duplicates.length > 0)
      alert(`${newName} is already added to phonebook`)
    else{
      const newPerson = {name: newName, number: newNumber}
      personService
        .create(newPerson)
        .then(newPerson => setPersons([...persons, newPerson]))
    }
  }

  //TODO return values when deleting filtered string
  const handleFilterName = (e) => {
    const currentValue = e.target.value
    setFilterName(currentValue)
    const filteredNames = persons.filter(person => person.name.includes(currentValue))
    setPersons(filteredNames)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterPersons 
        filterName = {filterName}
        changeFilterName = {handleFilterName}
      />
      <h2>add a new</h2>

      <PersonForm 
        name = {newName}
        number = {newNumber}
        nameChange = {handleNameChange}
        numberChange = {handleNumberChange}
        formSubmit  =  {handleSubmitClick}
      />
        
      <h2>Numbers</h2>
      <AllPersons persons = {persons}/>
    </div>
  )
}

export default App
