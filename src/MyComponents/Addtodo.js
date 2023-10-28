import React, { useState } from 'react'

export const Addtodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit=(e)=>{
      e.preventDefault();
      if(!title || !desc)
      {
        alert("Title or Decription cannot be blanck!!!")
      }
      else{
      addTodo(title,desc);
      setTitle("");
      setDesc("");
      }

    }




  return (
  
    <div className='container my-3'>
    <h3 id="text1"><b>Add a Todo</b></h3> <hr/>
  
    <form onSubmit={submit}>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Todo Title</label>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} 
      className="form-control" id="title" aria-describedby="emailHelp"/>
      
    </div>
    <div className="mb-3">
      <label htmlFor="desc" className="form-label">Todo Description</label>
      <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} 
      className="form-control" id="desc"/>
    </div>
    <div className="mb-3 form-check">
    </div>
    <button type="submit" className="  btn btn-success" id="btn1" ><span>Add Task</span></button><br/><br/>
  </form></div>
  
  )
}
