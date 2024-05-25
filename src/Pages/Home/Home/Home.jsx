import React from "react";
import Banner from "../Banner/Banner";
import CatagorySlide from "../Catagory/CatagorySlide";
import BistroCaption from "../BistroCaption/BistroCaption";
import PopularMenu from "../PopularMenu/PopularMenu";
import Newsletter from "../Newsletter/Newsletter";
import Recomended from "../Recommended/Recomended";
import Paralax from "../Paralax/Paralax";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Bistro || Home</title>
      </Helmet>
      <Banner></Banner>
      <CatagorySlide></CatagorySlide>
      <BistroCaption></BistroCaption>
      <PopularMenu></PopularMenu>
      <Newsletter></Newsletter>
      <Recomended></Recomended>
      <Paralax></Paralax>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
