const FilterPersons = (props) => {
    const {filterName, changeFilterName} = props
    return (
        <form>
            <div>filter shown with <input value = {filterName} onChange = {changeFilterName}></input></div>
        </form>
    )
}

export default FilterPersons