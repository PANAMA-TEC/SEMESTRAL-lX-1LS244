import './index.css';
import { NavBar } from '../../components/navBar';
import logo_nav from '../../assets/image.png';
import { CookHubImage } from '../../Icons/CookHubImage';
import { CardContent } from '../../components/cardContent';
import { CardRecipes } from '../../components/cardRecipes';
import { CardCategories } from '../../components/cardCategories';
import React from 'react';

export const AdminPanel = () => {
  
  const recetas = [
    {
      id: 1,
      nombre: "Spaghetti Bolognese",
      autor: "Juan Pérez",
      fecha: "2025-07-23",
      ingredientes: "5"
    },
    {
      id: 2,
      nombre: "Tortilla Española",
      autor: "Ana Gómez",
      fecha: "2025-07-22",
      ingredientes: "8"
    }
  ];

  return (
    
    <div className="AdminPanel">
      
      <NavBar logo={logo_nav} />
      <div className='contenedorBton'><button className="btnCrear">Crear Receta</button></div>
   

      <table className="tabla-recetas">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre de la Receta</th>
            <th>Autor</th>
            <th>Fecha de Creación</th>
            <th>Ingredientes</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {recetas.map((receta, index) => (
            <tr key={receta.id}>
              <td>{index + 1}</td>
              <td>{receta.nombre}</td>
              <td>{receta.autor}</td>
              <td>{receta.fecha}</td>
              <td>{receta.ingredientes}</td>
              <td>
                <button className="btnEditar">Editar</button>
                <button className="btnEliminar">Eliminar</button>
                <button className="btnVer">Ver</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

  
    </div>
  );
};


