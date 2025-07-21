import { Children } from 'react';
import './index.css';
import React from 'react';

export const CardContent = ({titulo, children, overflow }) => {
  return (
    <div className={`CardContent`}>
      <div className='titulo'>
        {titulo}
      </div>

      <div className={ `list ${overflow == "true" ? ' overflow' : ''}`}>
        { children }
      </div>
    </div>
  );
};
