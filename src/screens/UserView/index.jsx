import { NavBar } from "../../components/navBar";
import { CookHubImage } from "../../Icons/CookHubImage";
import "./index.css";
import { CardContent } from "../../components/cardContent";
import { CardRecipes } from "../../components/cardRecipes";
import { CardCategories } from "../../components/cardCategories";
import recipe_category from "../../assets/recetas.png";
import logo_nav from "../../assets/image.png";
import React from "react";
import { API_Services } from "../../Services/API_Services";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";


const API_Recetas = 'http://localhost:3000/api/recipe/';


const UserView = ( ) => {

  const [recetas, setRecetas ] = useState([]);
  const navigate = useNavigate();

  React.useEffect(  () => {
    const fetchData = async () => {
      let recetas = await API_Services(API_Recetas);
      setRecetas(recetas.data);
    }

    fetchData();
    
  }, []);

  

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
          <CardCategories image={recipe_category} titulo="Platos Principales" />
        </CardContent>

        <CardContent titulo="Recetas" propiedad1="Propiedad 1" > 

          { 
            recetas.map((element, index) => (
              <CardRecipes id={ element._id } tittle={ element.title } description={ element.description } category={ element.category } time={ element.time } />
            ))  

          }
          
           
        </CardContent>
      
    </div>
  );
};
export{ UserView };