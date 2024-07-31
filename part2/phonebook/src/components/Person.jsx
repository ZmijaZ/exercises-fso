

const Person = ({person, handleDelete}) => {
  return (
      <>
          <p>{person.name} {person.number}</p>
          <button onClick = {e => handleDelete(e, person.number)}>delete</button>
      </>
  )
}

const Persons = ({persons, handleDelete}) => {
  return (
      <>
          {persons.map(p => <Person key = {p.id} person = {p} handleDelete={handleDelete}/>)}
      </>
  )
}

export default Persons