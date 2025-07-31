import './index.css';
import { NavBar } from '../../components/navBar';
import logo_nav from '../../assets/image.png';
import { useContext } from 'react';
import { AppContext } from '../../components/AppContext';
import { useEffect } from 'react';
import { useState } from 'react';


export const AdminPanel = () => {

  const [ ordenes , setOrdenes ] = useState([])
  const { API_Services, user, Navigate } = useContext(AppContext);
  const API_Orden = "http://localhost:3000/api/order";

  useEffect(() => {
    const init = async ()  => {
      
      
      if ( !user ){
        Navigate("./");
        return
      }
      
      let response = await API_Services(`${ API_Orden }\\${ user.usuario.id }`, "GET", {});
      response = response.data;
      setOrdenes(response);
      console.log(response);
      

    
    } 

    init();
    
  }, []);
  
  return (
    <div className="AdminPanel">
      <div className='contenedor-tabla'>
        <table className="tabla-recetas">
          <thead>
            <tr>
              <th>OrderID</th>
              <th>Subtotal</th>
              <th>Total</th>
              <th>Status</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {ordenes && ordenes.map((orden) => (
              <tr key={orden._id}>
                <td>{orden._id}</td>
                <td>{orden.subtotal}</td>
                <td>{orden.total}</td>
                <td>{orden.status}</td>
                <td>
                  {/* Aquí puedes agregar botones u opciones, por ejemplo: */}
                  <button>Ver</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

};


