import './App.css';
import { useState } from "react"
import { v4 } from "uuid";

function TodoInput({ todoInput, setTodoInput, todoList, setTodoList }) {

    function handleClick() {
        if(todoInput === '')    return;
        setTodoList([...todoList, { id: v4(), text: todoInput }])
        setTodoInput('');
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

    function handleClick(id) {
        setTodoList(todoList.filter(item => item.id !== id))
    }

    return (
        <div className='mt-3'>
            <p className='h1'>My Todos:</p>
            <ul className='list-group'>
                {todoList.map(item => (
                    <li key={item.id} className='list-group-item d-flex justify-content-between align-items-center'>
                        {item.text}
                        <button onClick={() => handleClick(item.id)} className='btn btn-light'><i className='bi bi-trash'></i></button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function App() {
    
    const [todoInput, setTodoInput] = useState('');
    const [todoList, setTodoList] = useState([]);

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