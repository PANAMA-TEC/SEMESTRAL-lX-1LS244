import './index.css';
import {Link}  from 'react-router-dom'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext, AppProvider } from '../AppContext';

const NavBar = ({ logo, links }) => {
  
  const { openModal , setOpenModal } = React.useContext(AppContext);  

  const navigate = useNavigate();
  
  links = links || [
    { name: 'Inicio', href: '/' },
    { name: 'Crear', href: '/login' },
    { name: 'Iniciar sesion', href: '/login' },
    { name: 'Admin', href: '/admin' }
    
    
  ]

  const handleButtonClick = (Link) => {
    navigate(Link);
  }
    
  return (


    
    
      <div className="NavBar">
        <nav className='nav-bar-main elevation-1'>
        
          <img src={logo} alt="Logo" className="nav-bar-logo"  width={'100px'} onClick={()=>( handleButtonClick("/"))} />
          
          <div className="nav-bar-links">
          
            {
              
                links.map((element, index) => (
                  <button className="nav-bar-button" to={element.href} onClick={()=> handleButtonClick(element.href)} key={index}>
                    {element.name}
                  </button>
                ))
                
            }
            
            
            <button className="nav-bar-button-round" onClick={ ()=> setOpenModal(true) }>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
              </svg>
            </button>
        
        
          </div>
          
        </nav>
      </div>
    
    
    
  );

};

export { NavBar };