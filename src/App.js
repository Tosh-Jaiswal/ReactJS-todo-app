import './App.css'
import Header from './MyComponents/header'
import Footer from './MyComponents/footer'
import { Todos } from './MyComponents/Todos'
import { AddTodo } from './MyComponents/AddTodo'
import { About } from './MyComponents/About'
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
let state = {
  currentDate: date,
  currentTime: time
}

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am ondDelete of todo", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc, currDate, currTime) => {
    console.log("I am ", title, desc, currDate, currTime);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      currDate: state.currentDate,
      currTime: state.currentTime
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); //jaise hi todos change ho useeffect ko call kr do
  }, [todos])

  return (
    <div>
      <Router>
        <Header title="React Todo App" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
