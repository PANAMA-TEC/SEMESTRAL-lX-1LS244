import './index.css';
import React from 'react';

export const ArticuloCarrito = ({ data }) => {
  return (
    <div className='ArticuloCarrito elevation-1'>
      <div className='left'></div>
      <div className='right'>
        <h4>{data?.name || "Sin nombre"}</h4>
        <p>Unidad: {data?.unit || "?"} | Cantidad: {data?.quantity || 0}</p>
        <div className='options'>
          <label>-</label> {data?.quantity || 0} <label>+</label>
        </div>
      </div>  
    </div>
  );
};
