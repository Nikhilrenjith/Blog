import React from "react";

const Signup = () => {
  return (
    <div>
      <form className="register">
        <h1>Register</h1>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Signup;
