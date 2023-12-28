import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout";
import Homepage from "./Pages/Homepage";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Createpost from "./Post/Createpost";
import Editpost from "./Post/Editpost";
import Uploadpost from "./Post/Uploadpost";
import { UserContextProvider } from "./UserContext";
const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route index element={<Homepage />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/create" element={<Createpost />} />
          <Route path="/post/:id" element={<Uploadpost />} />
          <Route path="/edit/:id" element={<Editpost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
};

export default App;
