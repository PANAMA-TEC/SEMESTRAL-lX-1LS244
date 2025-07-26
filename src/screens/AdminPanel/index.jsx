import './index.css';
import { NavBar } from '../../components/navBar';
import logo_nav from '../../assets/image.png';


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
      <div className='contenedor-tabla'>

        <NavBar logo={logo_nav} />
        
        <div className='contenedor-opciones'>

          <button className="opciones">Crear Receta</button>
          <button className="opciones">Crear Receta</button>
          <button className="opciones">Crear Receta</button>
          <button className="opciones">Crear Receta</button>
          

        </div>
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
            
            { 

              recetas.map((receta, index) => (
                <tr key={receta.id}>
                  <td>{index + 1}</td>
                  <td>{receta.nombre}</td>
                  <td>{receta.autor}</td>
                  <td>{receta.fecha}</td>
                  <td>{receta.ingredientes}</td>
                  
                  <td className='myEspecial-td'>
                    <button className="opciones">Editar</button>
                    <button className="opciones">Eliminar</button>
                    <button className="opciones">Ver</button>
                  </td>
                </tr>
              ))
            
            }
          </tbody>
          
        </table>

      </div>

    </div>
  );
};


