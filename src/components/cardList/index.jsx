import './index.css';
import React from 'react';
import recetas_prototype from '../../assets/recetas_prototype.png';

export const CardList = ({ titulo = "Titulo de Card", propiedad1 }) => {
  return (
    <div className='CardList'>
      <ul>
          <li>Ingrediente 1</li>
          <li>Ingrediente 2</li>
          <li>Ingrediente 3</li>
          <li>Ingrediente 4</li>
          <li>Ingrediente 3</li>
          <li>Ingrediente 4</li>
          <li>Ingrediente 3</li>
          <li>Ingrediente 4</li>
          <li>Ingrediente 3</li>
          <li>Ingrediente 4</li>
      </ul>
    </div>
    
  );
};