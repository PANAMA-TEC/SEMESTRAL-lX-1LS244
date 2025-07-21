import './index.css';
import React from 'react';

export const CardCategories = ({ titulo = "Titulo de Card", image }) => {
  return (
    <div className="card-category elevation-1">
      
      <img src={image} alt={titulo} className="image elevation-1" />
    
      <h3 className="title">{titulo}</h3>
      
    </div>
  );
};