import React, { useState } from 'react'
import EditIcon from '../../assets/Images/edit.svg'
import DeleteIcon from '../../assets/Images/delete.svg'
import Modal from '../Modal/Modal'
import { Toaster, toast } from 'react-hot-toast'

function TodoList({ todo, setTodo }) {
  const [showModal, setShowModal] = useState(false)
  const [deleteShowModal, setdeleteShowModal] = useState(false)
  const [updateValue, setUpdateValue] = useState("")
  const [updateId, setUpdateId] = useState(null)

  const handleUpdate = (id) => {
    setShowModal(true);
    setUpdateId(id);
    const data = todo.find(item => item.id == id);
    if (data) {
      setUpdateValue(data.value);
    }
  };

  const handleInputChange = (e) => {
    setUpdateValue(e.target.value);
  };

  const updateForm = (e) => {
    e.preventDefault();
    const updateTodo = todo.find(item => item.id == updateId);
    if (updateTodo) {
      updateTodo.value = updateValue;
    }
    setShowModal(false);
    toast.success("Ma'lumot o'zgartirildi!")
    setTodo([...todo])
  }
  const [deleteId, setDeleteId] = useState(null)
  const deleteBtn = (id) => {
    setdeleteShowModal(true);
    setDeleteId(id);
  };

  const handleDelete = () => {
    const findedTodoDelete = todo.findIndex(item => item.id == deleteId)
    todo.splice(findedTodoDelete, 1)
    setdeleteShowModal(false)
    toast.success("Ma'lumot o'chirildi!")
    setTodo([...todo])
  }
  return (
    <>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <ul className='w-[500px] mx-auto m-5 flex flex-col space-y-2'>
      {todo.length > 0 && todo.map((item, index) => (
        <li key={index} className='bg-slate-200 p-2 rounded-md flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <span>{index + 1}.</span>
            <span>{item.value}</span>
          </div>
          <div className='flex items-center space-x-4'>
            <button id={item.id} onClick={() => handleUpdate(item.id)}>
              <img src={EditIcon} alt="Edit" />
            </button>
            <button id={item.id} onClick={() => deleteBtn(item.id)}>
              <img src={DeleteIcon} alt="Delete" />
            </button>
          </div>
        </li>
      ))}
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <form onSubmit={updateForm} className='rounded-lg mx-auto p-5 flex flex-col items-center gap-5'>
          <label className='flex flex-col w-full items-center gap-2'>
            <span className='font-[500] text-[20px]'>Update Your Todo</span>
            <input value={updateValue} onChange={handleInputChange} type='text' placeholder='Update Your Todo' name='todoValue' required autoComplete='off' className='w-[90%] p-2 rounded-md' />
          </label>
          <button className='bg-blue-500 text-white font-[500] p-2 w-[25%] rounded-md'>Update</button>
        </form>
      </Modal>
      <Modal showModal={deleteShowModal} setShowModal={setdeleteShowModal}>
          <div className='flex items-center justify-center flex-col gap-7'>
            <h2 className='font-[500]'>Are you sure to delete?</h2>
            <div className='flex items-center justify-center space-x-5'>
              <button onClick={handleDelete} className='w-[100px] bg-green-600 rounded-md font-[500] text-white'>Yes</button>
              <button onClick={() => setdeleteShowModal(false)} className='w-[100px] bg-red-400 rounded-md font-[500] text-white'>No</button>
            </div>
          </div>
      </Modal>
    </ul>
    </>
  )
}

export default TodoList
