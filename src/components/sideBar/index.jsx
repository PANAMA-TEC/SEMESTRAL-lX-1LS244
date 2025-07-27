import './index.css';
import React from 'react';
import recetas_prototype from '../../assets/recetas_prototype.png';
import { ArticuloCarrito } from '../articuloCarrito';

export const SideBar = () => {
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

        <button className='button elevation-1'>
          Terminar Compra
        </button>

        
      </div>


     
    </div>

  );
};