import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const login = async (ev) => {
    ev.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        alert("Login success");
        setRedirect(true);
      } else {
        alert("Wrong credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login");
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <form className="login" onSubmit={login}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
