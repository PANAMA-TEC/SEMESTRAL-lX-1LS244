import './index.css';
import React from 'react';
import recetas_prototype from '../../assets/recetas_prototype.png';
import { useNavigate } from 'react-router-dom';
let RECIPE_DETAIL_URL = "/detail_recipe"

export const CardRecipes = ({ 
    tittle = "Titulo de Card", 
    description = "Esto es una descripcion por defecto", 
    category = "other",
    time = "60",
    id
}) => { 
  
  const navigate = useNavigate();
  
  const handleButtonClick = (Link) => {
    navigate(Link);
  }  

  return (
    <div className="card-recipe elevation-1">
     
      <img className="image elevation-1" alt="Img" src={recetas_prototype}/>
      
      <div className="body">
        <div className="titulo-de-card">{tittle}</div>
        
        <div className="text">

          <p className="text-wrapper">
            {description}
          </p>
          <div className='mode_details'>
            <div className="text-wrapper">Categoria: {category}</div>
            <div className="div">Tiempo: {time} minutos</div>

          </div>
        </div>

        <div className="btn-enable">
          <button onClick={()=>{ handleButtonClick(`${RECIPE_DETAIL_URL}?id=${id}`) }} className="button">Más</button>
        </div>
        
      </div>
    </div>
  );
};