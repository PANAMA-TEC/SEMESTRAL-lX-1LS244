import React from "react";
import { TextContentHeading } from "../../components/TextContentHeading";
// import cookHubIcon from "../../Icons/CookHubImage/image.png";
import "./index.css";

const Login = () => {
  return (
    <div className="login-container elevation-1">
      
      <div className="login-left">
       
        <div className="content">
          <div className="top">
            <h2>Login</h2>
            <div>How to i get started lorem ipsum dolor at?</div>
          </div>
          
          <div className="input-container">
            Username
            <input type="text" placeholder="Enter your username" />
          </div>

          <div className="input-container">
            Password
            <input type="password" placeholder="Enter your password" />
          </div>
          
          <button className="button elevation-1">Login</button>


        </div>
      </div>
      
      <div className="login-right elevation-1">
        <div className="webLogo">
          <img className="image " src="src/Icons/CookHubImage/image.png" alt="" />
        </div>
      </div>
    
    
    </div>
  );
};
export{ Login };