import React, { useState } from 'react'

let myStyle = {
    width: "100%",
    align: "center"
}

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();  //to prevent reload of page
        if (!title || !desc) {
            alert("Title or Description can not be blank")
        }
        else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container my-3 text-align-center">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }}
                        className="form-control" id="title" aria-describedby="emailHelp" style = {myStyle} />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }}
                        className="form-control" id="desc" style = {myStyle} />
                </div>
                <button type="submit" className="btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
