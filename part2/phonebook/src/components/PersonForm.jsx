
const PersonForm = ({newPerson, handlePersonChange, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
            name: <input name = 'name' value = {newPerson.name} onChange = {handlePersonChange}/>
            </div>
            <div>
            number: <input name = 'number' value = {newPerson.number} onChange = {handlePersonChange}/>
            </div>
            
            <div>
            <button type="submit">add</button>
            </div>

        </form>
    )
}

export default PersonForm