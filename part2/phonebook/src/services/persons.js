import axios from "axios";

const baseURL = 'http://localhost:3001/api/persons'

const getAll = () => {
    return axios.get(baseURL).then(response => response.data)
}

const create = newObject => {
    return axios.post(baseURL, newObject).then(response => response.data)
}

const update = (newObject, id) => {
    return axios.put(`${baseURL}/${id}`, newObject).then(response => response.data)
}

const deletePerson = (id) => {
    return axios.delete(`${baseURL}/${id}`)
}

export default {
    getAll,
    create,
    update,
    deletePerson
}