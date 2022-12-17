import React from "react";

const TodoList = ({todos, setTodos, seteditTodo})=>{
    const handleDelete = ({id}) => { 
        setTodos(todos.filter((todo) => todo.id !== id))
}
const handleEdit = ({id})=>{
    const findTodo = todos.find((todo) => todo.id == id)
    seteditTodo(findTodo)
}
    return( 
    <div className="form-div">
        {todos.map((todo)=>(
            <li className="list-item" key = {todo.id} >
                <input type="textarea" value={todo.tittle} className="list" onChange={(event)=> event.preventDefault()}/>
        <button className="btn-edit" onClick={()=>{handleEdit(todo)}}>
                Edit
             </button>
             <button className="btn-dlt" onClick={()=>{handleDelete(todo)}}>
               Delete
             </button>
                
                   
            </li>
    
        ))}
    </div>
    )
}
export default TodoList