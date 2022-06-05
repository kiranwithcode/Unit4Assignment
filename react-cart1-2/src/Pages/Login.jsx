import React from "react";
import "../Styles/LoginStyle.css";

const Login = () => {
  return (
    <div className="container">
      <h1>Login</h1>
      <form className="loginForm">
        <div>
          <label htmlFor="">Email</label>
          <input type="email" name="email" placeholder="Enter your email" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter a strong password"
          />
        </div>
        <div style={{border: "none"}}>
          <input type="submit" style={{margin: "auto"}} />
        </div>
      </form>
    </div>
  );
};

export default Login;
