import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Menu from "../../../Components/Shared/Menu";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "dessert");
        setMenu(popularItems);
      });
  }, []);
  return (
    <div className="py-10">
      <section>
        <SectionTitle
          subHeading={"-------- check It out --------"}
          heading={"From Our Menu"}
        ></SectionTitle>

        <div className="grid grid-cols-2 gap-12 py-10">
          {menu?.map((item) => (
            <Menu item={item} key={item._id}></Menu>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularMenu;
