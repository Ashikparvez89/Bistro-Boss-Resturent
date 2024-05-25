import React from "react";

const Menu = ({ item }) => {
  const { name, recipe, image, price, category } = item || {};
  return (
    <div className="py-5">
      <div className="flex justify-around gap-8">
        <div className="">
          <img
            className="max-w-[130px]"
            style={{ borderRadius: "0 200px 200px 200px" }}
            src={image}
            alt=""
          />
        </div>
        <div className="space-y-5">
          <p className="text-xl font-semibold text-[#767676]">
            {name} ---------------
          </p>
          <p className="font-semibold">{recipe}</p>
        </div>
        <div className="text-yellow-500 font-semibold text-xl">{price}</div>
      </div>
    </div>
  );
};

export default Menu;
