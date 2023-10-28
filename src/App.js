import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';                  
import { Addtodo } from './MyComponents/Addtodo';
import { Aboutt } from './MyComponents/Aboutt';
import './Styles.css';
import React, { useState, useEffect } from 'react';



import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I'm On Delete of Todo", todo);

    setTodos(todos.filter((e) => {
      return e!== todo;
    }));
    console.log("deleted",todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this Todo", title, desc)
    let sno;
    if (todos.length == 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, mytodo]);
    console.log(mytodo);

  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  

  return (
    <> 
  <Router>
      <Header title="My Todos List" searchBar={false} /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <Addtodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
            </>)
          }}> 
          </Route>
          <Route exact path="/aboutt">
            <Aboutt />
          </Route> 
        </Switch> 
      <Footer />
    </Router>
    </>

  );
}

export default App;
