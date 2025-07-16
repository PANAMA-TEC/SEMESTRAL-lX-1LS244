import './index.css';
import { Login } from '../Login';
import { NavBar } from '../../components/navBar';
import { UserView } from '../UserView';
import logo_nav from '../../assets/image.png';
import { CookHubImage } from '../../Icons/CookHubImage';
import { CardContent } from '../../components/cardContent';
import { CardRecipes } from '../../components/cardRecipes';
import { CardCategories } from '../../components/cardCategories';


import React from 'react';

const App = () =>{

  return(
      <div className='App'>

        <UserView> 

          <NavBar logo={logo_nav}/>
          
          <div className="content">
            <img src={logo_nav} alt="CookHub Logo" className="UserView-central-image" />
            <input type="text" placeholder="Buscar recetas, ingredientes o pasos" className="search-bar" />
          </div>

          <CardContent titulo="Categorías" propiedad1="Propiedad 1" >
            <CardCategories titulo="Postres" />
            <CardCategories titulo="Entradas" />
            <CardCategories titulo="Platos Principales" />
            <CardCategories titulo="Platos Principales" />
          </CardContent>

          <CardContent titulo="Recetas" propiedad1="Propiedad 1" >
            <CardRecipes titulo="Receta 1" />
            <CardRecipes titulo="Receta 2" />
            <CardRecipes titulo="Receta 3" />
            <CardRecipes titulo="Receta 4" />   

            <CardRecipes titulo="Receta 1" />
            <CardRecipes titulo="Receta 2" />
            <CardRecipes titulo="Receta 3" />
            <CardRecipes titulo="Receta 4" />  
          </CardContent>

          

        </UserView>
        
        {/* <NavBar/> */}
        {/* <Login/> */}
      
      </div>
         
    )
}

export default App;
