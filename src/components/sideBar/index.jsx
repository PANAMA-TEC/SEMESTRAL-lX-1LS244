import './index.css';
import React, { useEffect, useState, useContext } from 'react';
import { ArticuloCarrito } from '../articuloCarrito';
import { AppContext } from '../AppContext';

export const SideBar = () => {
  const { API_Services, user, Navigate } = useContext(AppContext);
  const API_Carrito = "http://localhost:3000/api/cartItem";
  const API_Orden = "http://localhost:3000/api/order";

  const [carrito, setCarrito] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  // Cargar carrito al montar componente
  useEffect(() => {
    const cargarCarrito = async () => {
      if (!user?.usuario?.id) return;

      const response = await API_Services(`${API_Carrito}/${user.id}`);
      if (response?.cartItems?.items) {
        setCarrito(response.cartItems.items);

        // Calcular subtotal si tiene precios
        const total = response.cartItems.items.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 1), 0);
        setSubtotal(total);
      }
    };

    cargarCarrito();
  }, [user]);

  const handle_Ordenar = async () => {
    const DATA = {
      items: carrito,
      subtotal: subtotal,
      total: subtotal // puedes agregar impuestos si quieres
    };

    const response = await API_Services(`${API_Orden}/${user.id}`, "POST", DATA);
    if (response.status === "success") Navigate("/user_panel");
  };

  return (
    <div className="SideBar">
      <div className='top'>
        <h2>Carrito</h2>
        Revisa tu carrito
      </div>

      <div className='mid'>
        {carrito.length > 0 ? (
          carrito.map((item, index) => (
            <ArticuloCarrito key={index} data={item} />
          ))
        ) : (
          <p style={{ padding: '10px' }}>No hay ingredientes en el carrito.</p>
        )}
      </div>

      <div className='bottom'>
        <div className='top'>
          <div className='top-left'>
            <h3>Subtotal</h3>
            Precio sin impuesto y envío.
          </div>
          <div className='top-right'>
            <h3>${subtotal.toFixed(2)}</h3>
          </div>
        </div>

        <button className='button elevation-1' onClick={() => user ? handle_Ordenar() : ""}>
          Terminar Compra
        </button>
      </div>
    </div>
  );
};
