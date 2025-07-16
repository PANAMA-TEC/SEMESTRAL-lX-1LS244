import './index.css';
import React from 'react';

export const CardCategories = ({ titulo = "Titulo de Card", propiedad1 }) => {
  return (
    <div className="card-recipe">
      

      <div className="body">
        <div className="text">
          <div className="titulo-de-card">{titulo}</div>

          <p className="text-wrapper">
            Una receta deliciosa y sencilla para una tarta de manzana.
          </p>

          <div className="text-wrapper">Categoria: Postre</div>

          <div className="div">Tiempo: 60 minutos</div>
        </div>

        <div className="btn-enable">
          <button className="button">More</button>
        </div>
      </div>
    </div>
  );
};