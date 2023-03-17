import axios from "axios";

const URL = "http://localhost:5000/api/todo/";

function getTodos() {
    return axios.get(URL);
}

function addTodo(todo) {
    return axios.post(URL, todo);
}

function deleteTodo(id) {
    return axios.delete(URL + id);
}

export { getTodos, addTodo, deleteTodo };