import React, { useEffect } from "react";
import { v4 as uuidV4 } from "uuid"
const Form = ({ input, setInput, todos, setTodos, editTodo, seteditTodo }) => {
    const updateTodo = (tittle, id, completed) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? { tittle, id, completed } : todo
        )
        setTodos(newTodo)
        seteditTodo("")
    }
    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.tittle)
        } else {
            setInput("")
        }
    }, [setInput, editTodo])
    const onInputChange = (event) => {
        setInput(event.target.value)
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!editTodo) {
            setTodos([...todos, { id: uuidV4(), tittle: input, completed: false }])
            setInput("");
        }
        else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }

    }
    return (
        <div className="form-div">
            <form onSubmit={onFormSubmit}>

                <input type="text" placeholder="Enter a item......" className="task-input" value={input}
                    required onChange={onInputChange} />
                <button className="button-add" type="submit">Add</button>
          </form>

        </div>

    );
}
export default Form