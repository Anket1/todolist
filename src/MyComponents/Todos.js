import React from 'react'
import {Todo} from '../MyComponents/Todo';
export const Todos = (props) => {

  let mystyle = {
    minHeight:"70vh",
    margin:"40px auto"
  }


  return (
    <div className="container my-3" style={mystyle}>
      <h3 className="my-3" id="text1"><b>To do's List</b></h3 ><hr/>
    {props.todos.length===0? "Nothing to do.":
    props.todos.map((todo)=>{
      return  (
        <>
      <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
      </>
    )
    })}



  
      </div>
  )
}
