import './index.css';
import React from 'react';

export const CardRecipes = ({ titulo = "Titulo de Card", propiedad1 }) => {
  return (
    <div className="card-recipe elevation-1">
     
      <img className="image elevation-1" alt="Img" src="https://c.animaapp.com/SmjW2TTS/img/img-67441aca031f06-44669347-1-1@2x.png"/>
      
      <div className="body">
        <div className="titulo-de-card">{titulo}</div>
        
        <div className="text">

          <p className="text-wrapper">
            Una receta deliciosa y sencilla para una tarta de manzana.
          </p>
          <div className='mode_details'>
            <div className="text-wrapper">Categoria: Postre</div>
            <div className="div">Tiempo: 60 minutos</div>

          </div>
        </div>

        <div className="btn-enable">
          <button className="button">More</button>
        </div>
        
      </div>
    </div>
  );
};