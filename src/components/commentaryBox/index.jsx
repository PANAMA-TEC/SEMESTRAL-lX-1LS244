import './index.css';
import React from 'react';
import recetas_prototype from '../../assets/recetas_prototype.png';

export const CommentaryBox = () => {
  return (
    <div className="CommentaryBox">
      <div>
        <h3>Comentarios</h3>
      </div>

      <div className="comentario-contenedor">
        <div className="iconocomentario"></div>
        <div className="comentario">
          ¡Esta receta está deliciosa!
        </div>
      </div>

      <div className="nuevo-comentario-contenedor">
        <div className="iconocomentarionuevo"></div>
        <div className="nuevo-comentario-datos">
          <h5>Nombre de usuario</h5>
          <textarea placeholder="Escribe tu comentario..." className="ComentarioNuevo"></textarea>
          <button className='boton2'>Enviar</button>
        </div>
      </div>
    </div>

  );
};