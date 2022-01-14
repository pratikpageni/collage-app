import React from "react";
import Header from "./Component/Header";
import { Routes, Router, Route, Link } from "react-router-dom";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Carousel from "react-carousel-minimal/dist/components/Carousel";
import Register from "./Component/Register";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
