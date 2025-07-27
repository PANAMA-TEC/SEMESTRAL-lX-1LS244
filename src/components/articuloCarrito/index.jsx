import './index.css';
import React from 'react';
import recetas_prototype from '../../assets/recetas_prototype.png';

export const ArticuloCarrito = ( { data }) => {


  data = {
    disponibilidad: 0,
    nombre: "Nombre por defecto",
    descripcion_corta: "Receta: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }

  return (
    <div className='ArticuloCarrito elevation-1' >
      <div className='left'></div>
     
      <div className='right'>
       
        <h4>
          { data.nombre }
        </h4>
       
        <p>
         { data.descripcion_corta }
        </p>

        <div className='options'> <label> - </label> { data.disponibilidad } <label> + </label> </div>

      </div>  
    </div>
  );
};