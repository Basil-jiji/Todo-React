import React, {useState} from 'react'


const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('') 
    
    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value);

        setValue('')
    }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder='Todays Task' onChange={(e) => setValue(e.target.value)} value={value}/>   
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm