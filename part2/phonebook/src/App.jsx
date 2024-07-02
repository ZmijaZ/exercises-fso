import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleOnChange = (e) => {
    setNewName(e.target.value)
  }

  const handleSubmitClick = (e) => {
    e.preventDefault();
    
    console.log(persons)
    setPersons([...persons, {name: newName}])
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value = {newName} onChange = {handleOnChange}/>
        </div>
        <div>
          <button onClick = {handleSubmitClick} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
