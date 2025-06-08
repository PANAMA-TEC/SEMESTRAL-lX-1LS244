import './index.css';
import { TodoProvider } from '../TodoContext';
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
import { NavegadorSuperior } from '../NavegadorSuperior';
import { AppLogo } from '../AppLogo';
import {AccountingModule} from '../Contabilidad';

 

/**
 *
 * 
 * 
const defaultTodos = [
  { text: ' cebolla', Completed: true },
  { text: 'tomar el curso de React', Completed: false },
  { text: 'Llorar con la llorona', Completed: false },
  { text: 'Cortar cebolla', Completed: false },
  { text: 'LALALALA ', Completed: false },
  { text: 'Usar estados derivados ', Completed: true }
]

localStorage.setItem(itemName, JSON.stringify(defaultTodos));

*/

const App = () =>{

  const { loading, searchedTodo, error, toggleToDo, deleteTodo, openModal } = React.useContext(TodoContext);  
  
  return(
      <div className='App'>
        
        {/* <NavegadorSuperior />
        <AccountingModule/> */}
         
        
        
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
    )




   
  
}

export default App;
