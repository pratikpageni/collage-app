import React from "react";
import Header from "./Component/Header";
import { Routes, Router, Route, Link } from "react-router-dom";
import Home from "./Component/Home";
import { ForgetPassword, Login } from "./Component/Login";
import Carousel from "react-carousel-minimal/dist/components/Carousel";
import Register from "./Component/Register";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <div className="bg-gray-300">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
