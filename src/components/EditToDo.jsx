import React,{ useState,useEffect } from 'react'
import '../App.css';
export const EditToDo= ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id);

        setValue("");
    }
    useEffect(() =>{
      alert('Do you want to update the task');
    },[]);
  return (
    <form className='Todoform' onSubmit={handleSubmit}>
        <input type="text" name="" placeholder='Update task...?' 
        value={value} className='edit-input' onChange={(e) => setValue(e.target.value)}/>
        <button className="update-btn">Update Task</button>

    </form>
  )
}
