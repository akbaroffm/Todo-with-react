import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem("todo")) || [])

  localStorage.setItem("todo", JSON.stringify(todo))
  
  return (
    <>
    <TodoForm todo={todo} setTodo={setTodo}/>
    <TodoList todo={todo} setTodo={setTodo}/>
    </>
  );
}

export default App;
