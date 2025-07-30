import './index.css';
import React from 'react';

export const CardCategories = ({ titulo = "Titulo de Card", image, onClick, activa = false }) => {
  return (
    <div
      className={`card-category elevation-1 ${activa ? 'activa' : ''}`} 
      onClick={() => onClick(titulo)} 
    >
      <img src={image} alt={titulo} className="image elevation-1" />
      <h4 className="title">{titulo}</h4>
    </div>
  );
};
