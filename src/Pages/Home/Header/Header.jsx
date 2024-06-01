import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../Hooks/useCart";

const Header = () => {
  const [cart] = useCart();
  const { logOut, user } = useContext(Authcontext);

  const handleLogout = () => {
    logOut()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "User added successfully",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };
  return (
    <div>
      <div className="navbar container mx-auto fixed z-10 bg-opacity-40 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/menu">Our Menu</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Our Shop</NavLink>
              </li>

              {/* Conditional render if user have */}
              {/* <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li> */}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-3">
            <li className="mx-2">
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/menu">Our Menu</NavLink>
            </li>
            <li>
              <NavLink to="/shop/salad">Our Shop</NavLink>
            </li>
            {/* <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li> */}
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
          <button className="btn">Logout</button>
        </div> */}

        <div className="navbar-end flex gap-2">
          {user ? (
            <>
              {" "}
              {/* user profile */}
              <div className="">
                <Link to="/dashboard/cart" className="btn btn-sm">
                  <FaCartShopping></FaCartShopping>
                  <div className="badge badge-secondary">+{cart.length}</div>
                </Link>
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between text-black">
                      {user?.displayName}
                    </a>
                  </li>
                  <li>
                    <a className="text-black" onClick={handleLogout}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
              {/* user profile */}
            </>
          ) : (
            <>
              {" "}
              {/* logn btn */}
              <Link
                to="/login"
                className="btn font-semibold text-md outline-none border-none text-red hover:before:bg-redborder-red-500 relative h-[30px] w-20 lg:w-24 overflow-hidden border border-red-500 bg-[#112a46] px-2 text-[#C6DAF1] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"
              >
                <span className="relative"> Log in</span>
              </Link>
              <Link
                to="/register"
                className="btn font-semibold text-md outline-none border-none text-red hover:before:bg-redborder-red-500 relative h-[30px] w-20 lg:w-24 overflow-hidden border border-red-500 bg-[#112a46] px-2 text-[#C6DAF1] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"
              >
                <span className="relative"> Register</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
