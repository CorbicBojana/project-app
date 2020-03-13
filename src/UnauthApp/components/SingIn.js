import React from "react";

import { Link } from "react-router-dom";

import NavBar from "./NavBar";

import Mail from "../../img/Mail.svg";
import Password from "../../img/Password.svg";

import { Login } from "../../services/http";

import { useAuthContext } from "../../auth-context";

function SingIn() {
  const [singInInput, setSingInInput] = React.useState({
    email: "",
    password: ""
  });

  const { authenticate } = useAuthContext();

  const handleChange = e => {
    setSingInInput({
      ...singInInput,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const singInResponse = await Login.submit({
      email: singInInput.email,
      password: singInInput.password
    });

    localStorage.setItem("token", singInResponse.data.token);

    authenticate();
  };

  return (
    <>
      <NavBar />
      <div className="log-in-form">
        <h1 className="intro-text">Sing In</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-email">
            <img src={Mail} alt="user-icon" />
            <input
              className="form-input"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={singInInput.email}
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
              value={singInInput.password}
            />
          </div>
          <div className="form-check-box">
            <input type="checkbox" onChange={handleChange} />
            <label>Remember me</label>
          </div>
          <button type="submit" className="button">
            Sing In
          </button>
        </form>
        <Link to="/" className="router-link">
          <span className="link-log-in">Forgot Your Password?</span>
        </Link>
      </div>
    </>
  );
}

export default SingIn;
