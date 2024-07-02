import { useState } from 'react'

const Person = ({person}) => {
  return(
    <div>
      <p>{person.name} {person.number}</p>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "12-54-552589812" },
    { name: 'Ada Lovelace', number: "39-44-5323523" },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

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
    else
      setPersons([...persons, {name: newName, number: newNumber}])
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
      <form>
        <div>filter shown with <input value = {filterName} onChange = {handleFilterName}></input></div>
      </form>
      <h2>add a new</h2>
      <form>
        <div>name: <input value = {newName} onChange={handleNameChange}/></div>
        <div>number: <input value = {newNumber} onChange = {handleNumberChange}/></div>
        <div><button type="submit" onClick={handleSubmitClick}>add</button></div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => <Person key = {person.name} person = {person}/>)}
      </div>
    </div>
  )
}

export default App
