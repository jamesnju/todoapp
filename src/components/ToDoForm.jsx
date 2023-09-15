import React,{ useState,useEffect } from 'react'
import '../App.css';
export const ToDoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value);

        setValue("");
    }
    useEffect(() => {
      alert('Do you want to update the task');
    },[]);
  return (
    <form className='Todoform' onSubmit={handleSubmit}>
        <input type="text" name="" placeholder='Enter the task...?' 
        id="" value={value} className='todo-input' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' value="add" className="todo-btn">Add Task</button>
    </form>
  )
}
