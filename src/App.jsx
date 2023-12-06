import React from "react";
import Card from "./Component/Card";
import { Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Card />} />
        <Route path={"/login"} element={<div>Login da mundam</div>} />
      </Route>
    </Routes>
  );
};

export default App;
