import './index.css'; 
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../components/AppContext';
import exampleImage from '../../assets/recetas.png';
import recipe_category from "../../assets/recetas.png";
import React from 'react';
import { CardList } from '../../components/cardList';
import { CommentaryBox } from '../../components/commentaryBox';
import { API_Services } from '../../Services/API_Services';
import { CardCategories } from '../../components/cardCategories';

const API_Recetas = 'http://localhost:3000/api/recipe/';

export const DetailRecipe = () => {
  const [recetas, setRecetas] = useState([]);
  const [pasos, setPasos] = useState([]);

  const { user } = useContext(AppContext);
  const userID = user?.id; 

  useEffect(() => {
    const fetchData = async () => {
      const params = new URLSearchParams(window.location.search);
      const id = params.get('id');
      if (!id) return;

      window.scrollTo({ top: 0, behavior: 'smooth' });

      const response = await API_Services(`${API_Recetas}${id}`);
      if (response && response.data) {
        setRecetas(response.data);
        setPasos(response.data.step || []);
      } else {
        console.error("No se pudo cargar la receta");
      }
    };

    fetchData();
  }, []);

  const handleComprarIngredientes = async () => {
    
    console.log("Usuario desde contexto:", user);
    console.log("userID:", userID);
    console.log("recetaID:", recetas._id);

    if (!userID || !recetas._id) {
      alert("No hay usuario o receta válida");
      return;
    }

    const response = await API_Services(
      "http://localhost:3000/api/cartItem/add",
      "POST",
      {
        userID: userID,
        recipe: recetas._id
      }
    );

    console.log("Respuesta de la API:", response);

    if (response?.cart) {
      alert("¡Ingredientes agregados al carrito!");
    } else if (response?.message === "Receta ya está en el carrito") {
      alert("Esta receta ya está en tu carrito.");
    } else {
      alert("Ocurrió un error al agregar al carrito");
    }
  };

  return (
    <div className='DetailRecipe'>
      <div className='top-container elevation-1'>
        <div className='receta elevation-1'>
          <img className='imagen-receta elevation-1' src={exampleImage} alt="Imagen Receta" />
          <div className='detalles-receta'>
            <div className='top'>
              <h2>{recetas.title}</h2>
              <div className='mid'>
                <h4>Descripción</h4>
                {recetas.description}
              </div>
            </div>
            <div className='tiempoycena'> 
              <div> 
                <h4>Tiempo</h4>
                {recetas.time}
              </div>
              <div> 
                <h4>Categoría</h4>
                {recetas.category}
              </div>
            </div>
          </div>
        </div>

        <div className='contenedor-ingredientes'>
          <div className='contenedor-pasos'>
            <h3>Pasos</h3>
            <div className="paso" style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'justify' }}>
              {pasos.map((element, index) => (
                <span key={index}>{element.orden}. {element.descripcion}</span>
              ))}
            </div>
          </div>

          <div className='lista-ingredientes'>
            <h3>Ingredientes</h3>
            <CardList ingredients={recetas.ingredients} />
            <button 
              className="submit_formulario" 
              type="button" 
              onClick={handleComprarIngredientes}
            >
              Comprar Ingredientes
            </button>
          </div>
        </div>
      </div>

      <div className='mid-container'>
        <h3>Listado de productos relacionados:</h3>
        <div className='productos-relacionados'>
          <CardCategories image={recipe_category} titulo='papas' />
          <CardCategories image={recipe_category} titulo='papas' />
          <CardCategories image={recipe_category} titulo='papas' />
          <CardCategories image={recipe_category} titulo='papas' />
        </div>
      </div>

      <CommentaryBox />
    </div>
  );
};
