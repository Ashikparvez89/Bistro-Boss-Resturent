import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCrad from "../../../Components/Shared/MenuCard/MenuCrad";

const Recomended = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data.filter((item) => item.category === "popular");
        setMenu(popularMenu);
      });
  }, []);
  console.log(menu);
  return (
    <div className="py-5">
      <SectionTitle
        heading={"Chef recommends"}
        subHeading={"Should Try"}
      ></SectionTitle>

      <div className="grid grid-cols-4 gap-4 place-items-center py-16">
        {menu.map((card) => (
          <MenuCrad card={card} key={card._id}></MenuCrad>
        ))}
      </div>
    </div>
  );
};

export default Recomended;
