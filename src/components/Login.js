import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo Login Validation
    if (
      credentials.email === "dev@zyverra.com" &&
      credentials.password === "password"
    ) {
      onLogin({
        name: "Dev Kumar",
        email: "dev@zyverra.com",
        role: "Full Stack Developer"
      });
    } else {
      setError("Invalid credentials. Try demo login below.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>🚀 Zyverra Admin</h1>
          <p>Sign in to your dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>

        <div className="demo-credentials">
          <p><strong>Demo Credentials</strong></p>
          <p>Email: dev@zyverra.com</p>
          <p>Password: password</p>
        </div>
      </div>
    </div>
  );
};

export default Login;