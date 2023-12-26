import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async (ev) => {
    ev.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/register",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      if (
        response.data &&
        response.data.message === "User registered successfully"
      ) {
        alert("User registered successfully!");
        console.log("Username:", username);
        console.log("Password:", password);
      }
    } catch (error) {
      alert("Error during registration:");
    }
  };

  return (
    <div>
      <form className="register">
        <h1>Register</h1>
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
        <button type="button" onClick={register}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
