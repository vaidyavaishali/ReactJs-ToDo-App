import React, { useState } from "react";
import "./../styles/App.css";
import Form from './form.js'
import TodoList from "./todolist";
function App() 

{
   const [input, setInput] = useState("")
   const [todos, setTodos] = useState([])
   const [editTodo, seteditTodo] = useState()
	return (
	<div id="main">
	{/* //Do not alter main div
	Please do not alter the functional component as tests depend on the type of component. */}
	<div>
	<Form input={input}
	setInput={setInput}
	todos ={todos}
	setTodos = {setTodos}
	editTodo={editTodo}
	seteditTodo = {seteditTodo}/>
	</div>
	<div>
		<TodoList todos = {todos} setTodos={setTodos} seteditTodo={seteditTodo}/>
	</div>
	</div>
	);
}


export default App;
