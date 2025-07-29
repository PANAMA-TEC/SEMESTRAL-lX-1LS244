import './index.css';
import React from 'react';
import recetas_prototype from '../../assets/recetas_prototype.png';
import { CommentaryElement } from '../commentaryElement';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const CommentaryBox = () => {

  const { user } = useContext(AppContext)

  return (
    <div className="CommentaryBox elevation-1">
   
      <h2>Comentarios</h2>
     
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
            <h5>{ user.usuario.email }</h5>
            <textarea placeholder="Escribe tu comentario..." className="ComentarioNuevo elevation-1"></textarea>
          </div>
        
        </div>


      </div>
        <button className='opciones elevation-1'>Enviar</button>



    </div>

  );
};