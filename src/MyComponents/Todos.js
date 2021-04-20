import React from 'react'
import { TodoItem } from './TodoItem';

let myStyle = {
    minHeight: "70vh",
    margin: "50px auto"
}

export const Todos = (props) => {
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {props.todos.length === 0 ? <div className="alert alert-danger" role="alert">
                There is no Todos to display!
            </div> : props.todos.map((todo) => {
                return (
                    <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />

                )
            })}
        </div>
    )
}
