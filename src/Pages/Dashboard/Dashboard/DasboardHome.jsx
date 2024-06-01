import React, { useState } from "react";
import { FaHome, FaShoppingBag } from "react-icons/fa";
import {
  FaBook,
  FaCartFlatbed,
  FaCartShopping,
  FaComment,
  FaList,
  FaMessage,
  FaMoneyBill,
  FaMoneyBillTransfer,
  FaResearchgate,
  FaUsers,
  FaUtensils,
} from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink, Outlet } from "react-router-dom";
import useUser from "../../../Hooks/useUser";

const DasboardHome = () => {
  const { user } = useUser();
  console.log(user);

  const [isAdmin, setIsAdmin] = useState(true);
  return (
    <div className=" container mx-auto flex ">
      <div className="w-72 bg-[#d1a054] min-h-screen">
        <div className="py-8 px-2 uppercase text-center">
          <h1 className="text-3xl text-black font-bold">Bistro Boss</h1>
          <span className="tracking-[10px] font-bold text-black mt-3 text-2xl block">
            Resturent
          </span>
        </div>
        <div className="">
          <ul className="ml-10 block mt-10 space-y-5 uppercase">
            {isAdmin ? (
              <>
                <li>
                  <NavLink
                    to="/dashboard/userhome"
                    className={({ isActive }) =>
                      `text-black flex items-center gap-4 text-lg font-semibold ${
                        isActive ? "text-slate-200" : ""
                      }`
                    }
                  >
                    {" "}
                    <FaHome></FaHome> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/userhome"
                    className={({ isActive }) =>
                      `text-black flex items-center gap-4 text-lg font-semibold ${
                        isActive ? "text-slate-200" : ""
                      }`
                    }
                  >
                    {" "}
                    <FaUtensils></FaUtensils> Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/userhome"
                    className={({ isActive }) =>
                      `text-black flex items-center gap-4 text-lg font-semibold ${
                        isActive ? "text-slate-200" : ""
                      }`
                    }
                  >
                    {" "}
                    <FaBook></FaBook> Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/userhome"
                    className={({ isActive }) =>
                      `text-black flex items-center gap-4 text-lg font-semibold ${
                        isActive ? "text-slate-200" : ""
                      }`
                    }
                  >
                    {" "}
                    <FaList></FaList> Manage Booking
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/allusers"
                    className={({ isActive }) =>
                      `text-black flex items-center gap-4 text-lg font-semibold ${
                        isActive ? "text-slate-200" : ""
                      }`
                    }
                  >
                    {" "}
                    <FaUsers></FaUsers> All User
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/dashboard/userhome"
                    className={({ isActive }) =>
                      `text-black flex items-center gap-4 text-lg font-semibold ${
                        isActive ? "text-slate-200" : ""
                      }`
                    }
                  >
                    {" "}
                    <FaHome></FaHome> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/reservation"
                    className={({ isActive }) =>
                      `text-black flex items-center gap-4 text-lg font-semibold ${
                        isActive ? "text-slate-200" : ""
                      }`
                    }
                  >
                    {" "}
                    <FaResearchgate></FaResearchgate> Resrervation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/payment"
                    className={({ isActive }) =>
                      `text-black flex items-center gap-4 text-lg font-semibold ${
                        isActive ? "text-slate-200" : ""
                      }`
                    }
                  >
                    {" "}
                    <FaMoneyBillTransfer></FaMoneyBillTransfer> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/cart"
                    className={({ isActive }) =>
                      `text-black flex items-center gap-4 text-lg font-semibold ${
                        isActive ? "text-slate-200" : ""
                      }`
                    }
                  >
                    {" "}
                    <FaShoppingBag></FaShoppingBag> My CArt
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/review"
                    className={({ isActive }) =>
                      `text-black flex items-center gap-4 text-lg font-semibold ${
                        isActive ? "text-slate-200" : ""
                      }`
                    }
                  >
                    {" "}
                    <FaComment></FaComment> Add Review
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/booking"
                    className={({ isActive }) =>
                      `text-black flex items-center gap-4 text-lg font-semibold ${
                        isActive ? "text-slate-200" : ""
                      }`
                    }
                  >
                    {" "}
                    <FaCartFlatbed />
                    My Booking
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          <div className="text-center mx-auto w-[90%] my-8">
            <hr />
          </div>
        </div>
        <ul className="ml-10 block mt-10 space-y-5 uppercase">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-black flex items-center gap-4 text-lg font-semibold ${
                  isActive ? "text-slate-200" : ""
                }`
              }
            >
              {" "}
              <FaCartFlatbed />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/cart"
              className={({ isActive }) =>
                `text-black flex items-center gap-4 text-lg font-semibold ${
                  isActive ? "text-slate-200" : ""
                }`
              }
            >
              {" "}
              <FiMenu />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dashboard/cart"
              className={({ isActive }) =>
                `text-black flex items-center gap-4 text-lg font-semibold ${
                  isActive ? "text-slate-200" : ""
                }`
              }
            >
              {" "}
              <FaCartShopping></FaCartShopping>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dashboard/cart"
              className={({ isActive }) =>
                `text-black flex items-center gap-4 text-lg font-semibold ${
                  isActive ? "text-slate-200" : ""
                }`
              }
            >
              {" "}
              <FaMessage></FaMessage>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DasboardHome;
