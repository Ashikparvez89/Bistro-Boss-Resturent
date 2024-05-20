import React from "react";
import Banner from "../Banner/Banner";
import CatagorySlide from "../Catagory/CatagorySlide";
import BistroCaption from "../BistroCaption/BistroCaption";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <CatagorySlide></CatagorySlide>
      <BistroCaption></BistroCaption>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Home;
