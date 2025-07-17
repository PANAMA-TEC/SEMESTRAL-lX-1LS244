import './index.css';
import { Login } from '../Login';
import { NavBar } from '../../components/navBar';
import { UserView } from '../UserView';
import logo_nav from '../../assets/image.png';
import { CookHubImage } from '../../Icons/CookHubImage';
import { CardContent } from '../../components/cardContent';
import { CardRecipes } from '../../components/cardRecipes';
import { CardCategories } from '../../components/cardCategories';
import recipe_category from '../../assets/recetas.png';


import React from 'react';

const App = () =>{

  return(
      <div className='App'>

        <UserView/> 

          

          

   
        
        {/* <NavBar/> */}
        {/* <Login/> */}
      
      </div>
         
    )
}

export default App;
