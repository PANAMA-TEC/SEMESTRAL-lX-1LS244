import './index.css';
import { NavBar } from '../../components/navBar';
import logo_nav from '../../assets/image.png';
import { useContext } from 'react';
import { AppContext } from '../../components/AppContext';
import { useEffect } from 'react';
import { useState } from 'react';

const API_Pagar = "http://localhost:3000/api/payment/checkout";


export const AdminPanel = () => {

  const [ ordenes , setOrdenes ] = useState([])
  const { API_Services, user, Navigate } = useContext(AppContext);
  const API_Orden = "http://localhost:3000/api/order";

  const handlePagar = async (id) => {
    
    const response = await API_Services(`${API_Pagar}/${id}`, "POST", {});
    window.location.href = response.url;
      
      
    
  };

  useEffect(() => {
    if (!user ) {
      Navigate('/login');
      return;
    }

    const fetchOrdenes = async () => {
      try {
        const response = await API_Services(`${API_Orden}/${user.usuario.id}`, "GET", {});
        setOrdenes(response.data);
      } catch (error) {
        // Manejar error si es necesario
      }
    };

    fetchOrdenes();
  }, []);
   
  return (
    <div className="AdminPanel">

      
      <div className='contenedor-tabla'>

        <div className='title'> Area de ordenes <b> { user ? user.usuario.email : "" } </b> </div>

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
                <td className='myEspecial-td'>
                  {
                    orden.status === 1 ?
                    <button className='option elevation-1' onClick={() => handlePagar(orden._id)}>Pagar</button>   : 
                    "Sin opciones disponibles"

                  }
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>

  );

};


