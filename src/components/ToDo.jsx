import React from 'react';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
export const ToDo = ({task, toggleComplete, deleteTodo,editTodo}) => {
  return (
    <div className='todo'>
        <p onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? 'completed' : ""}`}
        >{task.task}</p>
        <div className='icons1'>
          <FontAwesomeIcon icon={faPenSquare}
          onClick={() => editTodo(task.id) }
          />
          <FontAwesomeIcon icon={faTrash} 
          onClick={()=> deleteTodo(task.id)} />

        </div>
    </div>
  )
}
