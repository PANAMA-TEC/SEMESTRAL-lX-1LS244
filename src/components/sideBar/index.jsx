import './index.css';
import React from 'react';
import recetas_prototype from '../../assets/recetas_prototype.png';
import { ArticuloCarrito } from '../articuloCarrito';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const SideBar = () => {

  const {API_Services, user, Navigate } = useContext( AppContext);
  const API_Orden = "http://localhost:3000/api/order";
  let response = "";
  
  const handle_Ordenar = async ( DATA ) => {
   
    DATA = {
      "items": [
          {
              "ingredient": "688678f9b915b81d47fee309",
              "name": "tomate",
              "unit": "kg",
              "quantity":30,
              "price": 0
          },
          {
              "ingredient": "688678f9b915b81d47fee312",
              "name": "leche",
              "unit": "l",
              "quantity": 2,
              "price": 0
          },
          {
              "ingredient": "688678f9b915b81d47fee319",
              "name": "pasta",
              "unit": "kg",
              "quantity": 2,
              "price": 0

          }
      ],
      "subtotal": 0.00,
      "total": 0.00
    }

    response = await API_Services( `${API_Orden}/${user.usuario.id}`,"POST", DATA );
    response.status == "success" ? Navigate("/user_panel") : ""


  }

  return (
    
    <div className="SideBar">

      <div className='top'>
        <h2> Carrito </h2>
        Revisa tu carrito

      </div>


      <div className='mid'>
        <ArticuloCarrito/>
        <ArticuloCarrito/>
        <ArticuloCarrito/>
        <ArticuloCarrito/>
        <ArticuloCarrito/>
        <ArticuloCarrito/>
        <ArticuloCarrito/>
        <ArticuloCarrito/>
        <ArticuloCarrito/>
        <ArticuloCarrito/>
        <ArticuloCarrito/>
        <ArticuloCarrito/>
      </div>


      <div className='bottom'>
        <div className='top'>
        
          <div className='top-left'>
            <h3> Subtotal</h3>
            Precio sin impuesto y envio.
          
          </div>
          <div className='top-right'>
            <h3>Precio Subtotal</h3>
          </div>
        
        </div>

        <button className='button elevation-1' onClick={() => user ? handle_Ordenar() : "" }>
          Terminar Compra
        </button>

        
      </div>


     
    </div>

  );

};