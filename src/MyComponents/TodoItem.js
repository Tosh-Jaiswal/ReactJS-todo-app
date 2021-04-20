import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <p className="text-muted">Created At:{" "+todo.currTime}{" | "+todo.currDate}</p>
            <button type="button" className="btn-sm btn-danger my-1" onClick = {() => {onDelete(todo)}}>Delete</button>
        </div>
        <hr/>
        </>
    )
}
