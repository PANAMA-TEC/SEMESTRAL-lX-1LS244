import { Children } from 'react';
import './index.css';
import React from 'react';

export const CardContent = ({titulo, children }) => {
  return (
    <div className='Categorias'>
      
      <div className='titulo'>
        {titulo}
      </div>

      <div className='list'>
        { children }
      </div>

    </div>

  );
};
