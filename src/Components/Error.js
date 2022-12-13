import React from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="ErrorPage">
      <nav>
        <div className="error">
          <NavLink to="/">
            <img src={require("../assets/Desktop/Logo.png")} alt="" />
          </NavLink>
          <NavLink to="">Features</NavLink>
          <NavLink to="">Pro</NavLink>
        </div>

        <div className="errorTwo">
          <NavLink to="/SignIn">Login</NavLink>
          <span>
            <NavLink to="/SignUp">Sign up</NavLink>
          </span>
        </div>
      </nav>

      <header>
        <h2>
          Opps - Looks like you're lost<span>.</span>
        </h2>
        <p>
          Maybe this page used to exist or you just spelled something wrong.
          Chances are you spelled something wrong, so can you double check the
          url?
        </p>
        <div className="buttons">
          <NavLink to="/">
            <Button className="purple" variant="contained">
              Return Home
            </Button>
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default Error;
