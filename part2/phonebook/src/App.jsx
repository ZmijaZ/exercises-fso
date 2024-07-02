import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "12-54-552589812" }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>name: <input value = {newName} onChange={handleNameChange}/></div>
        <div>number: <input value = {newNumber} onChange = {handleNumberChange}/></div>
        <div><button type="submit" onClick={handleSubmitClick}>add</button></div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
