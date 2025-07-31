import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CookHubImage } from "../../Icons/CookHubImage";
import "./index.css";
import { NavBar } from "../../components/navBar";
import logo_nav from '../../assets/image.png';
import { API_Services } from "../../Services/API_Services";
import { AppContext } from "../../components/AppContext";

const API_Login_URL = "http://localhost:3000/api/user/login";
const API_Register_URL = "http://localhost:3000/api/user/register";

const Login = () => {
  const [option, setOption] = React.useState(1);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const { setUser, user, localStorageManager, Navigate } = React.useContext(AppContext);  

  const handle_Login = async (data) => {
    
    
    data = {
      email: email,
      password: password,
    }

    let response = await API_Services(API_Login_URL,'POST', data );

    if ( response.status == 'success' ) {
      
      setUser( await response.usuario );
      localStorageManager.setItem("user", JSON.stringify(response.usuario) );
      Navigate('/');
      
    } else {

      setUser(null);
    
    } 
    
  }

   const handle_Register = async (data) => {
    data = {
      email: email,
      password: password,
      fullname: fullname
    }

    let response = await API_Services(API_Register_URL,'POST', data );
    response.status == 'success' ? setUser(await response ) : setUser(null);
    setOption(1)
    
  }

  const handleLogin_register = (e) => {
    setOption(2);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (option === 1) {
      await handle_Login({ email: email, password });
    } else {
      if (password !== repeatPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }
      await handle_Register({ email: email, password, fullname });
    }
  };

  return (
    <div className="login">
      <div className="login-container elevation-1">
        <div className="login-left">
          <div className="top">
            <h2>Inicio de Sesión</h2>
          </div>
          <form className="content" onSubmit={handleSubmit}>
            <div className="option-container">
              {option == 2 ? (
                <div className="input-container">
                  Nombre
                  <input
                    type="text"
                    placeholder="Ingresa tu nombre "
                    value={fullname}
                    onChange={e => setFullname(e.target.value)}
                  />
                </div>
              ) : ""}
              <div className="input-container">
                Nombre de usuario
                <input
                  type="username"
                  placeholder="Ingresa tu nombre de usuario"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="input-container">
                Contraseña
                <input
                  type="password"
                  placeholder="Agrega tu contraseña"
                  value={password}
                  autoComplete="current-password"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              {option == 2 ? (
                <div className="input-container">
                  Repetir contraseña
                  <input
                    type="password"
                    autoComplete="new-password"
                    placeholder="Repite tu contraseña"
                    value={repeatPassword}
                    onChange={e => setRepeatPassword(e.target.value)}
                  />
                </div>
              ) : ""}
            </div>
            <button className="button elevation-1" type="submit">
              {option == 1 ? "Iniciar Sessión" : "Registrar"}
            </button>
            <div className="register-option">
              {option == 1 ? (
                <label>
                  ¿No tienes cuenta? <a onClick={() => setOption(2)}>Regístrate aquí</a>
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
          <CookHubImage width={"70%"} height={"60%"} />
        </div>
      </div>
    </div>
  );

};
export { Login };