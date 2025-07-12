import { TodoContext } from '../TodoContext';
import './index.css'
import React from 'react';

const TodoSearch = ( ) => {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);  


  return(
    <input 
      className='inputSearch elevation-1' 
      placeholder='Cortar Cebolla' 
      onChange={ (Event) => { setSearchValue( Event.target.value ) } } 
      value ={ searchValue }
    />
  );

}

export { TodoSearch };
