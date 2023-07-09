import React from 'react'

const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='todo'>
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
        <button onClick={() => editTodo(task.id)}>Edit</button>
        <button onClick={() => {deleteTodo(task.id)}}>Delete</button>
        <div>

        </div>
    </div>
  )
}

export default Todo