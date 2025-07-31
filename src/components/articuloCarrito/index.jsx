import './index.css';
import React from 'react';

export const ArticuloCarrito = ({ data }) => {
  const totalProducto = (data?.price || 0) * (data?.quantity || 1);

  return (
    <div className='ArticuloCarrito elevation-1'>
      <div className='left'></div>
      <div className='right'>
        <h4>{data?.name || "Producto sin nombre"}</h4>

        <p>
          Unidad: {data?.unit || "-"} <br />
          Cantidad: {data?.quantity || 1} <br />
          Precio unitario: ${data?.price?.toFixed(2) || "0.00"} <br />
          <strong>Total: ${totalProducto.toFixed(2)}</strong>
        </p>

        <div className='options'>
          <label>Cantidad:</label> {data?.quantity || 1}
        </div>
      </div>
    </div>
  );
};
