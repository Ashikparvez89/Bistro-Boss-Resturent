import React from "react";
import Header from "../Pages/Home/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Footer/Footer";

const Layouts = () => {
  return (
    <div className="container mx-auto">
      {/* Can use conditional rendering with uselocation for showing header and footer or make another layouts */}
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layouts;
