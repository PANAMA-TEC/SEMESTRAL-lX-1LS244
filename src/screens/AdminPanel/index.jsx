import './index.css';
import { useContext } from 'react';
import { AppContext } from '../../components/AppContext';
import { useEffect } from 'react';
import { useState } from 'react';

const API_Pagar = "http://localhost:3000/api/payment/checkout";


export const AdminPanel = () => {

  const [ ordenes , setOrdenes ] = useState([])
  const { API_Services, setUser, user, Navigate, localStorageManager } = useContext(AppContext);
  const API_Orden = "http://localhost:3000/api/order";

  const handlePagar = async (id) => {
    
    const response = await API_Services(`${API_Pagar}/${id}`, "POST", {});
    window.location.href = response.url;
      
  };

  useEffect(() => {
      
      if ( !user ) {

        // Navigate("/login");
        
        try {
          
          const userData = localStorageManager.getItem("user");
          
          if ( userData ) {
            setUser(userData);
            
          }

        } catch (error) {
          console.error("Error al obtener el usuario de localStorage:", error);
          // Navigate("/login");
          // Si no hay usuario en localStorage, redirigir al login
          alert("No se encontró usuario, redirigiendo al login.");
          return;
        }

      } 
      
      // console.log(user);
            
  }, [user]);

  useEffect(() => {

      const fetchOrdenes = async () => {
        try {
          // console.log(user)
          const response = await API_Services(`${API_Orden}/${ user.id }`, "GET", {});
          setOrdenes(response.data);
        } catch (error) {
          // Navigate("/login");
          // console.log("usuario", error.message);
          // console.log("Error al cargar las ordenes", error.message);
        }
      };

    
      fetchOrdenes();

  }, [user]);



  return (
    <div className="AdminPanel">

      
      <div className='contenedor-tabla'>

        <div className='title'> Area de ordenes <b> { user ? user.email : "" } </b> </div>

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
                <td>{orden.subtotal.toFixed(2)}</td>
                <td>{orden.total.toFixed(2)}</td>
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


