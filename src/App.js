import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'
import { uuid } from 'uuidv4'

const LOCAL_STORAGE_KEY = 'todoApp.todos'
function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
  const API = process.env.REACT_APP_API;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handelAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return 
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuid(), name: name, complete: false}]
    })
    console.log(name)
    todoNameRef.current.value = null
  }

  function handelClearTodos() {
    
    setName("sukkwon on");
    setEmail("skwon2345@gmail.com");
    setPassword("0123jdlfei");
    const res = fetch(`${API}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then(response => response.json())
    .then(response => {
      console.log('efe')
    })

    getUsers();
  }

  const getUsers = async () => {
    const res = await fetch(`${API}/users`);
    const data = await res.json();
    console.log(data)
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handelAddTodo}>Add Todo</button>
      <button onClick={handelClearTodos}>Clear Completed</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  )
}

export default App;
