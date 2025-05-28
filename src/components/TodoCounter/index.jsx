import React from 'react';
import { TodoContext } from '../TodoContext';
import './index.css';

const TodoCounter = ( ) => {

  const { totalToDo, completedTodo } = React.useContext(TodoContext);  

  return(
    <h1 className='tittleTodoCounter'>
      Has completado {completedTodo} de {totalToDo} TODOS
    </h1>
  );
}

export { TodoCounter };
