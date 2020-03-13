import React from "react";

import { Link } from "react-router-dom";

import NavBar from "./NavBar";

import User from "../../img/User.svg";
import Mail from "../../img/Mail.svg";
import Password from "../../img/Password.svg";

import { Login } from "../../services/http";

import { useAuthContext } from "../../auth-context";

function SingUp() {
  const [singUpInput, setSingUpInput] = React.useState({
    name: "",
    email: "",
    password: ""
  });

  const { authenticate } = useAuthContext();

  const handleChange = e => {
    setSingUpInput({
      ...singUpInput,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const singUpResponse = await Login.profile({
      name: singUpInput.name,
      email: singUpInput.email,
      password: singUpInput.password
    });

    localStorage.setItem("token", singUpResponse.data.token.token);

    authenticate();
  };

  return (
    <>
      <NavBar />
      <div className="log-in-form">
        <h1 className="intro-text">Create your account</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-name">
            <img src={User} alt="user-icon" />
            <input
              className="form-input"
              type="text"
              placeholder="Full Name"
              onChange={handleChange}
              name="name"
              value={singUpInput.name}
            />
          </div>
          <div className="form-email">
            <img src={Mail} alt="user-icon" />
            <input
              className="form-input"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={singUpInput.email}
            />
          </div>
          <div className="form-password">
            <img src={Password} alt="password-icon" />
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={singUpInput.password}
            />
          </div>
          <button type="submit" className="button">
            Sign Up
          </button>
          <Link to="/Sing-in" className="router-link">
            <span className="link-log-in">You have account? Sing In</span>
          </Link>
        </form>
      </div>
    </>
  );
}

export default SingUp;
