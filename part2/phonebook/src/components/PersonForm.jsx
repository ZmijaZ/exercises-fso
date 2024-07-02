
const PersonForm = (props) => {

    const {name, nameChange, number, numberChange, formSubmit} = props

    return (
        <form>
            <div>name: <input value = {name} onChange={nameChange}/></div>
            <div>number: <input value = {number} onChange = {numberChange}/></div>
            <div><button type="submit" onClick={formSubmit}>add</button></div>
        </form>
    )
}


export default PersonForm