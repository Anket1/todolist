import React from 'react'

export const Todo = ({todo,onDelete}) => {
  return (
    <div>
    <h4 id="title1">{todo.title}</h4>
    <p>{todo.desc}</p>
    <button className="btn btn-sm btn-danger" id="btn2" onClick={() => {onDelete(todo)}}>Delete</button>
    </div>
  )
}
