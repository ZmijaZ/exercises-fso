
const Person = ({person}) => {
    return(
      <div>
        <p>{person.name} {person.number}</p>
      </div>
    )
  }

const AllPersons = ({persons}) => {
    return (
        <div>
            {persons.map(person => <Person key = {person.name} person = {person}/>)}
        </div>
    )
}

export default AllPersons