

const Person = ({person, handleDelete}) => {
    return(
      <div>
        <span>{person.name} {person.number}</span>
        <button onClick = {() => handleDelete(person)}>delete</button>
      </div>
    )
}

const AllPersons = ({persons, handleDelete}) => {
    return (
        <div>
            {persons.map(person => <Person key = {person.name} person = {person} handleDelete = {handleDelete}/>)}
        </div>
    )
}

export default AllPersons