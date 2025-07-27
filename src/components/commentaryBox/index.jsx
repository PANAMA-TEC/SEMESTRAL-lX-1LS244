import './index.css';
import React from 'react';
import recetas_prototype from '../../assets/recetas_prototype.png';
import { CommentaryElement } from '../commentaryElement';

export const CommentaryBox = () => {
  return (
    <div className="CommentaryBox elevation-1">
   
      <h3>Comentarios</h3>
     
      <div className="comentario-contenedor">
        
        <CommentaryElement/>
        <CommentaryElement/>

        <CommentaryElement/>

        <CommentaryElement/>
        <CommentaryElement/>

      </div>

      <div className="nuevo-comentario-contenedor elevation-1 ">
        <div className='top'>
        
          <div className="iconocomentarionuevo"></div>
          
          <div className="nuevo-comentario-datos">
            <h5>Nombre de usuario</h5>
            <textarea placeholder="Escribe tu comentario..." className="ComentarioNuevo"></textarea>
          </div>
        
        </div>

        <button className='opciones elevation-1'>Enviar</button>

      </div>



    </div>

  );
};