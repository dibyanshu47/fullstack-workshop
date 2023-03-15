import './App.css';
import { useState } from "react"

function TodoInput({ todoInput, setTodoInput, todoList, setTodoList }) {

    function handleClick() {
        setTodoList([...todoList, todoInput])
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
    return (
        <div className='mt-3'>
            <p className='h1'>My Todos:</p>
            <ul className='list-group'>
                {todoList.map(item => <li className='list-group-item'>{item}</li>)}
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
