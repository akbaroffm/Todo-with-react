import React, { useState } from 'react'

function TodoForm({setTodo, todo}) {

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            id:todo.length ? todo[todo.length - 1].id + 1 : 1,
            value: e.target.todoValue.value
        }
        setTodo([...todo, data])
        e.target.reset()
    }
  return (
    <form onSubmit={handleSubmit} className='w-[500px] rounded-lg mx-auto mt-10 bg-slate-200 p-5 flex flex-col items-center gap-5'>
        <label className='flex flex-col w-full items-center gap-2'>
            <span>Enter Your Todo</span>
            <input type='text' placeholder='Enter Your Todo' name='todoValue' required autoComplete='off' className='w-[90%] p-2 rounded-md'/>
        </label>
        <button className='bg-blue-300 text-white fontn-[500] p-2 w-[25%] rounded-md'>Submit</button>
    </form>
  )
}

export default TodoForm