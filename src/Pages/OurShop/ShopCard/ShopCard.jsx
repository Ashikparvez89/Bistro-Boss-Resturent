import React from "react";
import { useParams } from "react-router-dom";

const ShopCard = ({ item }) => {
  const { name, recipe, image, price } = item || {};

  return (
    <div>
      <div className="max-w-sm h-[600px] relative rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between py-10 px-5 space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
            <p className="dark:text-gray-800">{recipe}</p>
          </div>
          <button className="btn w-2/3 mx-auto text-lg font-semibold btn-outline border-0 border-b-4">
            Add to cart
          </button>
        </div>
        <p className="absolute top-5 right-3 bg-red-600 text-white px-5 py-2 -rotate-6 font-bold rounded-md">
          $ {price}
        </p>
      </div>
    </div>
  );
};

export default ShopCard;
