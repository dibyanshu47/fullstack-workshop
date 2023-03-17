import './App.css';
import { useState, useEffect } from "react"
// import { v4 } from "uuid";

import { getTodos, addTodo, deleteTodo } from "./services/service.js";

function TodoInput({ todoInput, setTodoInput, todoList, setTodoList }) {

    async function handleClick() {
        if (todoInput === '') return;

        try {
            const { data } = await addTodo({ text: todoInput });
            setTodoList([...todoList, data])
            setTodoInput('');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='mt-3'>
            <label className="form-label">Enter a new Todo:</label>
            <input
                type="text"
                placeholder="Type Something..."
                className="form-control"
                value={todoInput}
                onChange={(e) => setTodoInput(e.target.value)}
                onKeyPress={(e) => {
                    if(e.key === "Enter")   handleClick();
                }}
            />
            <button
                className="btn btn-primary mt-3"
                onClick={handleClick}
            >
                Add
            </button>
        </div>
    );
}

function TodoList({ todoList, setTodoList }) {

    async function handleClick(_id) {
        try {
            const { data } = await deleteTodo(_id);
            setTodoList(todoList.filter(item => item._id !== data._id))
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='mt-3'>
            <p className='h1'>My Todos:</p>
            <ul className='list-group'>
                {todoList.map(item => (
                    <li key={item._id} className='list-group-item d-flex justify-content-between align-items-center'>
                        {item.text}
                        <button onClick={() => handleClick(item._id)} className='btn btn-light'><i className='bi bi-trash'></i></button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function App() {

    const [todoInput, setTodoInput] = useState('');
    const [todoList, setTodoList] = useState([]);

    useEffect(function () {
        async function fetchTodos() {
            const { data } = await getTodos();
            setTodoList(data);
        }
        fetchTodos();
    }, []);

    return (
        <div className="App">
            <TodoInput
                todoInput={todoInput}
                setTodoInput={setTodoInput}
                todoList={todoList}
                setTodoList={setTodoList}
            />
            <TodoList
                todoList={todoList}
                setTodoList={setTodoList}
            />
        </div>
    );
}

export default App;