import { TodoContext } from '../TodoContext';
import { CreateTodo } from '../CreateTodo';
import './index.css';
import React from 'react';



const TodoForm = (  ) => {
    const { setOpenModal, addTodo } = React.useContext(TodoContext);
    const [ value, setValue ] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
    }

    const onCancel = (event) => {
        setOpenModal(false)
    }

    const onSubmitTodo = () =>{
        addTodo(value);
    }

    return (
        <form className='formularioTodo' onSubmit={ onSubmit }>
            
            <label className='titulos_formularioTodo'> Escribe un nuevo Todo </label>
            <textarea onChange={ (event) => ( setValue(event.target.value) ) } 
            placeholder='Cortar cebolla para el almuerzo' className='textArea_formularioTodo'/> 
            
            <div className='contenedorInf_formulario'> 
                <button className='btn_formularioTodo' onClick={ onCancel }>Cancelar</button>
                <button className='btn_formularioTodo' onClick={ onSubmitTodo }>Crear Todo</button>
            </div>

            <CreateTodo />
        </form>
        
    );
}

export { TodoForm };


