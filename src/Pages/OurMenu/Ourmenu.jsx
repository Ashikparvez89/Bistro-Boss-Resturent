import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Shared/Bgcover/Cover";
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import MenuCategory from "../../Components/Shared/Menu/MenuCategory";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Ourmenu = () => {
  const [menu] = useMenu();

  const soup = menu?.filter((item) => item?.category === "soup");
  const dessert = menu?.filter((item) => item?.category === "dessert");
  const pizza = menu?.filter((item) => item?.category === "pizza");
  const salad = menu?.filter((item) => item?.category === "salad");
  const offered = menu?.filter((item) => item?.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro || Our Menu</title>
      </Helmet>
      <div className="">
        <Cover
          img={"https://i.postimg.cc/4xc2217v/banner3.jpg"}
          title="Our Menu"
          caption=" Would You Like to try a dish?"
        ></Cover>
      </div>

      {/* Category offered */}
      <div className="">
        <SectionTitle
          heading={"Today's Offer"}
          subHeading={"Don't Miss"}
        ></SectionTitle>
        <MenuCategory
          items={offered}
          btnText={"Order your favorite food"}
        ></MenuCategory>
      </div>
      {/* Category dessert */}

      <div className="">
        <MenuCategory
          items={soup}
          title={"dessert"}
          img={"https://i.postimg.cc/QxZHsS4Y/dessert-bg.jpg"}
          caption={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          btnText={"Order your favorite desserts"}
        ></MenuCategory>
      </div>
      {/* Category Pizza */}
      <div className="">
        <MenuCategory
          items={pizza}
          img={"https://i.postimg.cc/xdBnj4dk/pizza-bg.jpg"}
          title={"pizza"}
          caption={"Hey try it Once and fell the taste"}
          btnText={"Order your favorite Pizza"}
        ></MenuCategory>
      </div>
      {/* Category Salads */}
      <div className="">
        <MenuCategory
          items={salad}
          img={"https://i.postimg.cc/P5wyNd1z/salad-bg.jpg"}
          title={"salad"}
          caption={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          btnText={"Order your Salad now"}
        ></MenuCategory>
      </div>
      {/* Xategory Soups */}
      <div className="">
        <MenuCategory
          items={soup}
          title={"soup"}
          img={"https://i.postimg.cc/vTWvZzJ7/soup-bg.jpg"}
          btnText={"Order Your Soup Now"}
          caption={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          }
        ></MenuCategory>
      </div>
    </div>
  );
};

export default Ourmenu;
