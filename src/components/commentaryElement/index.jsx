import './index.css';
import React from 'react';
import recetas_prototype from '../../assets/recetas_prototype.png';

export const CommentaryElement = ( { usuario = "", comentario= "" , index = 0 } ) => {
  
  
  return (
   <div className="commentaryElement">
      
    <div className="iconocomentario"></div>
     
     
        <div key= {index} className="comentario elevation-1">
          <h4> { usuario } </h4>
          { comentario }
        </div>
        
    
    </div>

  );
};