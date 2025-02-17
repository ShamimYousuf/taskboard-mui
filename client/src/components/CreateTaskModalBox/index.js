import React, {useRef} from 'react';
import {CreateForm} from '../CreateForm';

export const CreateTask = () => {
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  return <>
    <button type="button" className='createtaskbutton' id="openModal" onClick={openModal}>Create</button>
    <dialog id="modal" ref={modalRef} className='modalBox'>
      <div className="createFormHeader">
        <button id="closeModal" onClick={closeModal} className='closeButton'>X</button>
        <h2>Create Task</h2>
      </div>
      <CreateForm closeModal={closeModal}/>
    </dialog>
  </>;
};