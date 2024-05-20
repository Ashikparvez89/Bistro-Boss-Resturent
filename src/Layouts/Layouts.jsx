import React from "react";
import Header from "../Pages/Home/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Footer/Footer";

const Layouts = () => {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layouts;
