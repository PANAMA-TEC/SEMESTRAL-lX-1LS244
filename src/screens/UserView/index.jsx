import { NavBar } from "../../components/navBar";
import { CookHubImage } from "../../Icons/CookHubImage";
import "./index.css";
import { CardContent } from "../../components/cardContent";
import { CardRecipes } from "../../components/cardRecipes";
import { CardCategories } from "../../components/cardCategories";
import recipe_category from "../../assets/recetas.png";
import logo_nav from "../../assets/image.png";
import React from "react";

const UserView = ( ) => {
  

  return (
    <div className="UserView">
      
       <NavBar logo={logo_nav}/>
                
        <div className="content">
          <img src={logo_nav} alt="CookHub Logo" className="UserView-central-image" />
          <input type="text" placeholder="Buscar recetas, ingredientes o pasos" className="search-bar" />
        </div>

        <CardContent titulo="Categorías" propiedad1="Propiedad 1" overflow="true">
          <CardCategories image={recipe_category} titulo="Postres" />
          <CardCategories image={recipe_category} titulo="Entradas" />
          <CardCategories image={recipe_category} titulo="Platos Principales" />
          <CardCategories image={recipe_category} titulo="Platos Principales" />
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
      
    </div>
  );
};
export{ UserView };