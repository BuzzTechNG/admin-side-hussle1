import React, { useState } from "react";
import Particles from "react-particles-js";
//import "tachyons";

import "../css/styles.scss";

const particlesOptions = {
  polygon: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5,
      },
      number: {
        value: 1000,
        density: {
          enable: true,
          value_area: 80,
        },
      },
    },
  },
};
const Login = () => {
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setLoginInput((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div>
      {" "}
      <div className="main-background">
        <Particles className="particles" params={particlesOptions} />;
        <div className="login">
          {" "}
          <div>
            <img
              src={require("../assets/logo-with-name.png")}
              alt="SideHussle Logo"
              title="Sidehussle Logo"
              style={{ width: "100%", height: "100%" }}
            ></img>
            <h3>Admin login</h3>
          </div>
          <br></br>
          <div>
            <input
              name="email"
              className="inputElement"
              value={loginInput.email}
              type="mail"
              placeholder="Email"
              onChange={inputHandler}
            />{" "}
            <input
              name="password"
              className="inputElement"
              value={loginInput.password}
              placeholder="Password"
              onChange={inputHandler}
              type="password"
            />
            <div
              // onClick={this.login}
              className="buttonLogin link text-white"
              title="Log in to your
          dashboard"
            >
              {" "}
              Log in
            </div>
            <div style={{ height: "50px" }}></div>
            <div style={{ height: "10px" }} className="subtitle1 text-left">
              {/* {this.state.response} */}
            </div>
            <br></br>
            <div className="line-div my-2"></div>
            <div className="row justify-content-center my-4 text-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
