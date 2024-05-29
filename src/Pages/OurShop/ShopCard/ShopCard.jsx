import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useUser from "../../../Hooks/useUser";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const ShopCard = ({ item }) => {
  const [, refetch] = useCart();
  const { user } = useUser();
  const { name, recipe, image, price, _id } = item || {};
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleCart = (food) => {
    if (user && user.email) {
      console.log(food, user.email);
      const cartItems = {
        menuId: _id,
        name,
        image,
        price,
        userEmail: user.email,
      };
      axiosSecure.post("/carts", cartItems).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1000,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "You must  login First To add this item",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };
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
          <button
            onClick={() => handleCart(item)}
            className="btn w-2/3 mx-auto text-lg font-semibold btn-outline border-0 border-b-4"
          >
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
