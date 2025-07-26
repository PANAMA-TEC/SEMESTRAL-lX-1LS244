import './index.css';
import {Link}  from 'react-router-dom'
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBarAdmin = ({ logo, links }) => {

  links = links || [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Recipes', href: '/recipes' }  
  ]

  return (
    <nav className="nav-bar-main elevation-1">
      <img src={logo} alt="Logo" className="nav-bar-logo"  width={'100px'}/>
      
      <div className="nav-bar-links">
        <button className="nav-bar-button">Recetas</button>
        <button className="nav-bar-button">Pedidos</button>
        <button className="nav-bar-button">Usuarios</button>
      

        
      </div>
    </nav>
  );

};

export { NavBarAdmin };