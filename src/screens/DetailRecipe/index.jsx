import './index.css';
import { NavBar } from '../../components/navBar';
import logo_nav from '../../assets/image.png';
import exampleImage from '../../assets/recetas.png';
import { useState } from 'react';
import recipe_category from "../../assets/recetas.png";

import React from 'react';
import { CardList } from '../../components/cardList';
import { CommentaryBox } from '../../components/commentaryBox';
import { API_Services } from '../../Services/API_Services';

import { CardCategories } from '../../components/cardCategories';
// import { useParams } from 'react-router-dom';

let API_Recetas = 'http://localhost:3000/api/recipe/';
let  pasos = [];

export const DetailRecipe = () =>{

    const [recetas, setRecetas ] = useState([]);
      
    
    React.useEffect(  () => {
    
        const fetchData = async () => {
        // url_ejemplo = http://localhost:5173/detail_recipe?id=6880485640aee6195aa2cef5
        //Remplazar...



        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        if (!id) return;

        // Remplazar

        window.scrollTo({ top: 0, behavior: 'smooth' });
        let recetas = await API_Services(`${API_Recetas}${id}`);
        pasos = recetas.data.step;
        console.log(pasos);
        setRecetas(recetas.data);
    }

    fetchData();
    
    }, []);

    return(
        <div className='DetailRecipe'>

      
            
            <div className='top-container elevation-1'>
                
                <div className='receta elevation-1'>
                        
                    <img className='imagen-receta elevation-1' src={ exampleImage } /> 

                    <div className='detalles-receta'>
        
                        <div className='top'>
                            <h2> { recetas.title }</h2>

                            <div className='mid'>

                            <h4>Descripción</h4>
                            { recetas.description}

                        </div>

                            

                        </div>
            
                        <div className='tiempoycena'> 
                            <div> 
                                <h4>Tiempo</h4>
                                { recetas.time }
                            </div>

                            <div> 
                                <h4>Categoria</h4>
                                { recetas.category }
                            </div>

                        </div>

                    </div>
                    
                </div>

                <div className='contenedor-ingredientes'>
                   
                    <div className='contenedor-pasos'>


                        <h3>Pasos</h3>

                        <div className="paso" style={{display: 'flex', flexDirection: 'column', gap: '10px', textAlign:'justify'}}>
                                
                            {
                                pasos.map((element, index) => (
                                    <span>{element.orden}. { element.descripcion }</span>
                                
                                ))
                            }

                        </div> 

                    </div>

                    <div className='lista-ingredientes'>
                            
                        <h3>Ingredientes</h3>
                        
                        <CardList ingredients = { recetas.ingredients }/>

                        <button className="submit_formulario" type="submit">Comprar Ingredientes</button>

                    </div>

                    
                </div>

            </div>

            <div className='mid-container '>
                <h3> Listado de productos relacionados: </h3>
                
                <div className='productos-relacionados'>
                    <CardCategories  image={recipe_category} titulo='papas'/>
                    <CardCategories  image={recipe_category} titulo='papas'/>
                    <CardCategories  image={recipe_category} titulo='papas'/>
                    <CardCategories  image={recipe_category} titulo='papas'/>
                </div>
            </div>
                    
            <CommentaryBox/>

         

        </div>        
    )
}

// {
//     "_id": "6880485640aee6195aa2cef5",
//     "title": "Brownies de Chocolate",
//     "description": "Bizcocho denso de chocolate con trozos de nuez.",
//     "category": "postre",
//     "ingredients": [
//         {
//             "ingredient": "Chocolate oscuro"
//         },
//         {
//             "ingredient": "Harina"
//         },
//         {
//             "ingredient": "Azúcar"
//         },
//         {
//             "ingredient": "Huevos"
//         },
//         {
//             "ingredient": "Nueces"
//         }
//     ],
//     "step": [
//         {
//             "orden": 1,
//             "descripcion": "Derretir el chocolate con mantequilla."
//         },
//         {
//             "orden": 2,
//             "descripcion": "Batir huevos y azúcar, añadir harina y chocolate."
//         },
//         {
//             "orden": 3,
//             "descripcion": "Verter en molde y hornear 25 minutos."
//         }
//     ],
//     "time": 40,
//     "autor": "64c1f0ea0b5e3d6f2a9b0005",
//     "published": true
// }


