import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CookHubImage } from "../../Icons/CookHubImage";
import "./index.css";

const Login = () => {
  const [ Option, setOption ] = React.useState(1);
  
  
  
  const handleLogin_register = (e) => {
    setOption(2);
  }

  return (
    <div className="login-container elevation-1">
      
      <div className="login-left">
       
        <div className="top">
          <h2>Login</h2>
          <div>How to i get started lorem ipsum dolor at?</div>
        </div>

        <form className="content">
          
          <div className="option-container">

            { 
              Option == 2 ? 
              <div className="input-container">
                Nombre
                <input type="text" placeholder="Ingresa tu nombre " />
              </div>
              : ""
            }

            <div className="input-container">
              Nombre de usuario
              <input type="username" placeholder="Ingresa tu nombre de usuario" />
            </div>

            <div className="input-container">
              Contraseña
              <input type="current-password" placeholder="Agrega tu contraseña" />
            </div>

            { 
              Option == 2 ? 
              <div className="input-container">
                Repetir contraseña
                <input type="text" placeholder="Repite tu contraseña" />
              </div>
              : ""
            }
          </div>
          
          <button className="button elevation-1">{ Option == 1 ? "Iniciar Sessión" : "Registrar" }</button>

          <div className="register-option">
            { Option == 1 ? (
              <label>
                 ¿No tienes cuenta? <a onClick={handleLogin_register}>Regístrate aquí</a>
              </label>
            ) : (
              <label>
                ¿Ya tienes cuenta? <a onClick={() => setOption(1)}>Volver al login</a>
              </label>
            )}
          </div>

        </form>
        
      </div>
      
      <div className="login-right elevation-1">
        
        <CookHubImage  width={"70%"} height={"60%"}/>
      
      </div>
    
    </div>
  );
};
export{ Login };