import './index.css';
import React from 'react';
import recetas_prototype from '../../assets/recetas_prototype.png';

export const CardList = ({ ingredients = [] }) => {

  console.log(ingredients);
  return (
    <div className='CardList'>
      <ul>
          {
            ingredients.map((element, index) => (
              
              <li key={index}>{element.ingredient}</li>

            ))
          }
      </ul>
    </div>
    
  );
};