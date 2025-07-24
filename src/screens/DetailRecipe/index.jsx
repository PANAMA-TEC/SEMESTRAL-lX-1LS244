import './index.css';
import { NavBar } from '../../components/navBar';
import logo_nav from '../../assets/image.png';
import exampleImage from '../../assets/recetas.png';
import { useState } from 'react';

import React from 'react';
import { CardList } from '../../components/cardList';
import { CommentaryBox } from '../../components/commentaryBox';
import { API_Services } from '../../Services/API_Services';
// import { useParams } from 'react-router-dom';

let API_Recetas = 'http://localhost:3000/api/recipe/';

export const DetailRecipe = () =>{

    const [recetas, setRecetas ] = useState([]);
      
    
      React.useEffect(  () => {
        const fetchData = async () => {
          // url_ejemplo = http://localhost:5173/detail_recipe?id=6880485640aee6195aa2cef5
          //Remplazar...
          
          const params = new URLSearchParams(window.location.search);
          const id = params.get('id');
          if (!id) return;


          let recetas = await API_Services(`${API_Recetas}${id}`);
          console.log(recetas.data);
          setRecetas(recetas.data);
        }
    
        fetchData();
        
      }, []);

    return(
        <div className='DetailRecipe'>

            <NavBar logo={logo_nav}/>
            
            <div className='cuadrantes'>

                <div className='top-container'>
                    <div className='receta'>
                            
                        <div className='cuadrante1'>

                            <img className='imagen-receta' src={ exampleImage } /> 

                            <div className='contenido1'>
                                <div>
                                    <h2>Espaguetis con carne</h2>
                                </div>

                                <div>
                                    <h3>Descripción</h3> <br></br>
                                    Un plato clásico y reconfortante que combina espaguetis al dente con una sabrosa salsa de carne molida, tomate y especias. Perfecto para compartir en familia y disfrutar de una comida completa y deliciosa.
                                </div>

                                <div className='tiempoycena'> 
                                    <div> 
                                        <h4>Tiempo</h4>
                                        5 min
                                    </div>

                                    <div> 
                                        <h4>Cenas</h4>
                                        cantidad
                                    </div>
                                        
                                </div>
                                    
                            </div>

                        </div>

                        <div className='pasos' style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                                
                            <h4>Pasos</h4>
                            
                            <div className="paso" style={{display: 'flex', flexDirection: 'column', gap: '10px', textAlign:'justify'}}>
                                <span>1. Mezcla todos los ingredientes en un bol grande. Asegúrate de que estén bien integrados antes de continuar, esto solo es mas texto.</span>
                                <span>2. Calienta una sartén a fuego medio y vierte la mezcla poco a poco. Cocina hasta que esté dorado por ambos lados y retira del fuego.</span>
                                <span>3. Mezcla todos los ingredientes en un bol grande. Puedes añadir especias al gusto para mejorar el sabor, esto solo es mas texto.</span>
                                <span>4. Mezcla todos los ingredientes en un bol grande. Sirve caliente y acompaña con tu guarnición favorita, esto solo es mas texto.</span>
                            </div>

                        </div>
                            
                    </div>

                    <div className='contenedor-ingredientes'>

                        <div className='lista-ingredientes '>
                                
                            <h3>Ingredientes</h3>
                            
                            <CardList ingredients = { recetas.ingredients }/>

                        </div>

                        <button className="submit_formulario" type="submit">Comprar Ingredientes</button>
                        
                    </div>
                </div>
                        
                <CommentaryBox/>

            </div>

        </div>        
    )
}


