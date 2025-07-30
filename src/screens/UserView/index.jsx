import React, { useState, useEffect } from "react";
import { NavBar } from "../../components/navBar";
import { CookHubImage } from "../../Icons/CookHubImage";
import "./index.css";
import { CardContent } from "../../components/cardContent";
import { CardRecipes } from "../../components/cardRecipes";
import { CardCategories } from "../../components/cardCategories";
import recipe_category from "../../assets/recetas.png";
import logo_nav from "../../assets/image.png";
import { API_Services } from "../../Services/API_Services";
import { useNavigate } from 'react-router-dom';

let API_Recetas = 'http://localhost:3000/api/recipe/';

const UserView = () => {
  const [recetas, setRecetas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let recetas = await API_Services(API_Recetas);
      setRecetas(recetas.data);
    };

    fetchData();
  }, []);

  const categoriasUnicas = [...new Set(recetas.map(receta => receta.category))];

  const recetasFiltradas = recetas.filter((receta) =>
    receta.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    receta.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    receta.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="UserView">
      <div className="content">
        <img src={logo_nav} alt="CookHub Logo" className="UserView-central-image" />
        <input
          type="text"
          placeholder="Buscar recetas, ingredientes o pasos"
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {searchTerm === "" && (
        <CardContent titulo="Categorías" propiedad1="Propiedad 1" overflow="true">
          {categoriasUnicas.map((categoria, index) => (
            <CardCategories key={index} image={recipe_category} titulo={categoria} />
          ))}
        </CardContent>
      )}

      <CardContent titulo="Recetas" propiedad1="Propiedad 1">
        {recetasFiltradas.map((element, index) => (
          <CardRecipes
            key={element._id || index}
            id={element._id}
            tittle={element.title}
            description={element.description}
            category={element.category}
            time={element.time}
          />
        ))}
      </CardContent>
    </div>
  );
};

export { UserView };
