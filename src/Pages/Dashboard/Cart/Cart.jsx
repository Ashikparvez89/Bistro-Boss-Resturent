import React from "react";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaDeleteLeft } from "react-icons/fa6";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`carts/${id}`).then((res) => {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        });
      }
    });
  };
  return (
    <div className="min-h-screen bg-slate-200">
      <SectionTitle
        heading={"Wanna Add More"}
        subHeading={"My cart"}
      ></SectionTitle>

      <div className="overflow-x-auto py-8 w-[90%] mx-auto bg-white shadow-2xl rounded-xl">
        <div className="flex justify-evenly py-10 ">
          <h1 className="text-2xl font-bold">Total Items: {cart.length}</h1>
          <h1 className="text-2xl font-bold">Total Price : {totalPrice}</h1>
          <button className="btn btn-outline btn-primary">Pay</button>
        </div>
        <table className="table rounded-3xl">
          {/* head */}
          <thead className="bg-slate-500 text-white rounded-xl text-2xl font-semibold p-4">
            <tr>
              <th>
                <span className="ml-8">#</span>
              </th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <th>
                  <span className="ml-8">{index + 1} .</span>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-20 h-20">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    {/* <div>
                      <div className="font-bold">{item.name}</div>
                    </div> */}
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost text-2xl font-bold"
                  >
                    <FaDeleteLeft></FaDeleteLeft>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
