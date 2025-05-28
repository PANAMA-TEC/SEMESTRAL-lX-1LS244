import { TodoContext } from '../TodoContext';
import './index.css'
import React from 'react';

const TodoSearch = ( ) => {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);  


  return(
    <input 
      className='inputSearch' 
      placeholder='Cortar Cebolla' 
      onChange={ (Event) => { setSearchValue( Event.target.value ) } } 
      value ={ searchValue }
    />
  );

}

export { TodoSearch };
