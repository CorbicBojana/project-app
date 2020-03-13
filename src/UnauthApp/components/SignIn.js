import React from "react";

import { Link } from "react-router-dom";

import NavBar from "./NavBar";

import Mail from "../../img/Mail.svg";
import Password from "../../img/Password.svg";

import { Login } from "../../services/http";

import { useAuthContext } from "../../auth-context";

import "./Sign.css";

function SignIn() {
  const [signInInput, setSignInInput] = React.useState({
    email: "",
    password: ""
  });

  const { authenticate } = useAuthContext();

  const handleChange = e => {
    setSignInInput({
      ...signInInput,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const signInResponse = await Login.submit({
      email: signInInput.email,
      password: signInInput.password
    });

    localStorage.setItem("token", signInResponse.data.token);

    authenticate();
  };

  return (
    <>
      <NavBar />
      <div className="log-in-form">
        <h1 className="intro-text">Sign In</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-email">
            <img src={Mail} alt="user-icon" />
            <input
              className="form-input"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={signInInput.email}
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
              value={signInInput.password}
            />
          </div>
          <div className="form-check-box">
            <input type="checkbox" onChange={handleChange} />
            <label>Remember me</label>
          </div>
          <button type="submit" className="button">
            Sign In
          </button>
        </form>
        <Link to="/" className="router-link">
          <span className="link-log-in">Forgot Your Password?</span>
        </Link>
      </div>
    </>
  );
}

export default SignIn;
