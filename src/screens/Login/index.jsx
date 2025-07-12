import React from "react";
import { TextContentHeading } from "../../components/TextContentHeading";
import "./index.css";

const Login = () => {
  return (
    <div className="login" data-model-id="203:1350">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="frame">
            <div className="ellipse" />

            <img
              className="logo-icon"
              alt="Logo icon"
              src="https://c.animaapp.com/B1uE7PR8/img/logo-icon@2x.png"
            />
          </div>

          <div className="div">
            <TextContentHeading
              className="text-content-heading-instance"
              divClassName="design-component-instance-node"
              heading="Login"
              size="heading-seccion"
              subHeading="How to i get started lorem ipsum dolor at?"
              subheadingClassName="design-component-instance-node"
            />
            <div className="input-field">
              <input className="label" placeholder="Username" type="text" />

              <input className="input" placeholder="Username" type="text" />
            </div>

            <div className="input-field">
              <div className="text-wrapper">Password</div>

              <div className="value-wrapper">
                <div className="value">Password</div>
              </div>
            </div>

            <div className="btn-enable">
              <button className="button">Login Now</button>
            </div>

            <div className="group">
              <p className="login-with-others">
                <span className="span">Login</span>

                <span className="text-wrapper-2"> with Others</span>
              </p>
            </div>

            <div className="group-2">
              <div className="frame-wrapper">
                <div className="frame-2">
                  <img
                    className="img"
                    alt="Facebook"
                    src="https://c.animaapp.com/B1uE7PR8/img/facebook-1@2x.png"
                  />

                  <p className="login-with-facebook">
                    <span className="text-wrapper-3">Login with </span>

                    <span className="text-wrapper-4">Facebook</span>
                  </p>
                </div>
              </div>

              <div className="div-wrapper">
                <div className="frame-3">
                  <img
                    className="img"
                    alt="Google"
                    src="https://c.animaapp.com/B1uE7PR8/img/google-1@2x.png"
                  />

                  <p className="login-with-google">
                    <span className="text-wrapper-5">Login with </span>

                    <span className="text-wrapper-4">google</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export{Login}