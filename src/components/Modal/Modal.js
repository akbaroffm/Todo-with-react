import React from 'react'
import CancelIcon from '../../assets/Images/cancel.svg'

function Modal({children, setShowModal, showModal}) {
    const closeModal = (evt) =>{
        if(evt.target.id == "wrapper"){
            setShowModal(false)
        }
    }
  return (
    <div onClick={closeModal} id='wrapper' className={`fixed inset-0 backdrop-blur-md transition-[0.7s] ${showModal ? "" : "scale-0"}`}>
        <div className='w-[650px] bg-blue-200 relative p-5 rounded-lg mx-auto mt-[150px]'>
            <button onClick={() => setShowModal(false)} className='cursor-pointer absolute top-1 right-1'>
                <img src={CancelIcon} alt='cancel'/>
            </button>
            {children}
        </div>
    </div>
  )
}

export default Modal