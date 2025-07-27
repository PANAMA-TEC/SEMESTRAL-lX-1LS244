import './index.css';
import React from 'react';
import recetas_prototype from '../../assets/recetas_prototype.png';

export const CommentaryElement = ( { data }) => {

  data = {
    comentario:"Este es un comentario entrando por defecto",
    nombre: "nombre defecto",
    imagen: ""
  }
  return (
   <div className="commentaryElement">
      
    <div className="iconocomentario"></div>
     

    
    <div className="comentario elevation-1">
        <h4> { data.nombre } </h4>
        { data.comentario }
    </div>
    


    
  </div>

  );
};