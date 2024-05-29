import React from "react";
import MenucategoryDetails from "./MenucategoryDetails";
import Cover from "../Bgcover/Cover";
import { Link, useParams } from "react-router-dom";

const MenuCategory = ({ items, img, title, caption, btnText }) => {
  const { category } = useParams();
  return (
    <div>
      {title && <Cover img={img} title={title} caption={caption}></Cover>}

      <div className="grid grid-cols-2 gap-12 pt-10">
        {items?.map((item) => (
          <MenucategoryDetails item={item} key={item._id}></MenucategoryDetails>
        ))}
      </div>
      <div className="text-center my-20">
        {btnText && (
          <Link
            to={`/shop/${title}`}
            className="btn text-lg font-semibold btn-outline border-0 border-b-4"
          >
            {btnText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default MenuCategory;
