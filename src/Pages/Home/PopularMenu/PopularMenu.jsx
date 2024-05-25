import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Menu from "../../../Components/Shared/Menu/Menu";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu?.filter((item) => item?.category === "dessert");
  console.log(popularItems);
  return (
    <div className="pt-10 ">
      <section>
        <SectionTitle
          subHeading={"-------- check It out --------"}
          heading={"From Our Menu"}
        ></SectionTitle>
        <div className="grid grid-cols-2 gap-12 pt-10">
          {popularItems?.map((item) => (
            <Menu item={item} key={item._id}></Menu>
          ))}
        </div>
        <div className="text-center my-20">
          <button className="btn text-lg font-semibold btn-outline border-0 border-b-4">
            View Full Menu
          </button>
        </div>
      </section>
    </div>
  );
};

export default PopularMenu;
