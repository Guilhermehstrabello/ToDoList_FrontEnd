import axios from 'axios'

const baseUrl = "https://todolist-backend-3h0e.onrender.com"

const getAllToDo = (setToDo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data --->', data);
        setToDo(data)
    })
}

const addToDo = (text, setText, setToDo) => {

    axios
    .post(`${baseUrl}/salvar`, {text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {

    axios
    .put(`${baseUrl}/atualizar`, {_id: toDoId, text})
    .then((data) => {
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))

}

const deleteToDo = (_id, setToDo) => {

    axios
    .delete(`${baseUrl}/deletar`, { data: { _id } })
    .then((data) => {
        console.log(data)
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))

}
  
export { getAllToDo, addToDo, updateToDo, deleteToDo };