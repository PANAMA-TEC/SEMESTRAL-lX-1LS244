import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodo } from '../CreateTodo';
import { LoadingsTodo } from '../LoadingsTodos';
import { ErrorsTodo } from '../ErrorsTodos';
import { EmptyTodos } from '../EmptysTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../../Modal';
import React from 'react';
import { TodoForm } from '../TodoForm';

const AppUI = ( )=>{
    //Esto es utilizado para pasar los props de una manera más limpia a la aplicación.
    const { loading, searchedTodo, error, toggleToDo, deleteTodo, openModal } = React.useContext(TodoContext);  

    return ( 
        <div className='App'>
          
          <div className='contenedorPrincipal'>
        
            <TodoCounter />
            <TodoSearch />
          
            <TodoList>
              { loading ? <LoadingsTodo/>  : "" }
              { error ? <ErrorsTodo/>  : "" }
              { !loading && searchedTodo.length === 0 ? <EmptyTodos/> : "" }
              { searchedTodo.map( todo => (  
                  <TodoItem  mensaje = { todo.text } key = { todo.text } completed ={todo.Completed}
                    onCompleted = { ()=>{ toggleToDo(todo.text) }}
                    onDelete = { () => { deleteTodo(todo.text); }} 
                  /> 
              ))}
            </TodoList>
                    
            <CreateTodo/>

          </div>

          { openModal ? <Modal> <TodoForm></TodoForm> </Modal>: "" }

        </div>
    );
}

export { AppUI }
