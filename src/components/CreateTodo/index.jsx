import './index.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

const CreateTodo = () => {
  const { setOpenModal, openModal } = React.useContext(TodoContext);  

  return(
   
    <button className='buttonAgregar' onClick={() => { setOpenModal(!openModal)}}>
      +
   </button>

  );
}



export { CreateTodo };
