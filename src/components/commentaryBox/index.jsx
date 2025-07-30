import './index.css';
import React from 'react';
import recetas_prototype from '../../assets/recetas_prototype.png';
import { useState } from 'react';

import { CommentaryElement } from '../commentaryElement';
import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { API_Services } from '../../Services/API_Services';


const API_Commentary_PUSH = "http://localhost:3000/api/comment";
const params = new URLSearchParams(window.location.search);
let recipeId = params.get('id');


let commentaries = [];


export const CommentaryBox = ( commentaries ) => {


  const { user } = useContext(AppContext)
  const [ nuevoComentario, setNuevoComentario ] = useState(null)
  const [ comments, setComments ] = useState([])

  const handle_commentary_push = async () => {
    

    API_Services(`${API_Commentary_PUSH}\\${recipeId}`, "POST", 

      {
        "userID": user.usuario.id,
        "content": nuevoComentario
      }

    ).then(

      setComments(await API_Services(`${API_Commentary_PUSH}\\${recipeId}`, "GET", {}))

    )

    setNuevoComentario("");
  
   
  }

  React.useEffect(() => {
    const fetchComments = async () => {
      setComments(await API_Services(`${API_Commentary_PUSH}\\${recipeId}`, "GET", {}));
      console.log(comments)
    };

    fetchComments();
  }, []);


  return (
    <div className="CommentaryBox elevation-1">
   
      <h2>Comentarios</h2>
     
      <div className="comentario-contenedor">

        
        { 
          comments.comments ? 
         
          comments.comments.map((element, index) => (
            <CommentaryElement usuario={element.userID.fullname} comentario={element.content} index={index}/>
            
          ))  
          : ""
        }
        
        
      </div>
      
      { user ? 



        <div className="nuevo-comentario-contenedor elevation-1 ">
          <div className='top'>
          
            <div className="iconocomentarionuevo"></div>
            
            <div className="nuevo-comentario-datos">
              <h5>{ user ? user.usuario.email : ""}</h5>
              <textarea placeholder="Escribe tu comentario..." className="ComentarioNuevo elevation-1" onChange={ e => setNuevoComentario( e.target.value ) } value={nuevoComentario}></textarea>

            </div>
          
          </div>


          <button className='opciones elevation-1' onClick={ ()=> handle_commentary_push() }>Enviar</button>
        </div>
        

          : ""

      }



    </div>

  );
};