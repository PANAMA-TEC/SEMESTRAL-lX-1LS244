import './index.css';
//import { Login } from '../Login';
import { NavBar } from '../../components/navBar';
//import { UserView } from '../UserView';
import logo_nav from '../../assets/image.png';
import { CookHubImage } from '../../Icons/CookHubImage';
import { CardContent } from '../../components/cardContent';
import { CardRecipes } from '../../components/cardRecipes';
import { CardCategories } from '../../components/cardCategories';
//import recipe_category from '../../assets/recetas.png';


import React from 'react';

const App = () =>{

  return(
    <div className='App'>


        <NavBar logo={logo_nav}/>
        <div className='cuadrantes'>

        <div className='receta'>
            <div className='cuadrante1'>

                <div className='imagen-receta'> </div>


            
                <div className='contenido1'>
                    <div>
                         <h2>título</h2>
                    </div>
                    <div>
                         <h3>Descripción</h3>
                         mensaje descripción
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



            <div className='ingredientesypasos'>

                <div>
                    <h4>Ingredientes</h4>
                    Ingredientes
                </div>
                <div>
                    <h4>Pasos</h4>
                    Pasos

                </div>
            </div>

            <div>
                <button type="submit">Comprar ingredientes</button>
            </div>


        </div>



        <div className="comentarios">
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

    </div>
           

    </div>
         
    )
}

export default App;
