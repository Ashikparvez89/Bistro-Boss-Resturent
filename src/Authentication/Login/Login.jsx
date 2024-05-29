import React, { useContext, useState } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Authcontext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { user, logInuser } = useContext(Authcontext);
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const styleys = {
    backgroundImage: `url(https://i.postimg.cc/qvMnGpyj/wood-grain-pattern-gray1x.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(email, password);
    logInuser(email, password)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Great",
          text: "Loged In Successfully",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
        navigate(location?.state ? navigate.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Great",
          text: error.message,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };
  return (
    <div className="w-full">
      {" "}
      <section
        className=" min-h-screen flex  box-border justify-center items-center"
        style={styleys}
      >
        <div className="flex-row-reverse  rounded-2xl flex max-w-4xl p-5 items-center shadow-2xl">
          <div className="md:w-1/2 px-8">
            <h2 className="font-bold text-3xl text-[#002D74]">Login</h2>
            <p className="text-sm mt-4 text-[#002D74]">
              If you already a member, easily log in now.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <input
                className="p-3 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              <div className="relative">
                <input
                  className="p-3 rounded-xl border w-full"
                  type={show ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, // Regex for minimum 6 characters, at least one letter and one number
                      message:
                        "Password must contain at least 6 characters, including at least one letter and one number",
                    },
                  })}
                />
                {errors.password && <span>{errors.password.message}</span>}
                <div className="absolute right-4 top-4 cursor-pointer">
                  <span onClick={() => setShow(!show)}>
                    {show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                  </span>
                </div>
              </div>
              <button
                className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                type="submit"
              >
                Login
              </button>
            </form>
            <div className="mt-6  items-center text-gray-100">
              <hr className="border-gray-300" />
              <p className="text-center text-sm text-black">OR</p>
              <hr className="border-gray-300" />
            </div>
            <div className="">
              <SocialLogin></SocialLogin>
            </div>
            <div className="mt-10 text-sm border-b border-gray-500 py-5 playfair tooltip">
              Forget password?
            </div>

            <div className="mt-4 text-sm flex justify-between items-center container-mr">
              <p className="mr-3 md:mr-0 ">If you don't have an account..</p>
              <Link
                to="/register"
                className="hover:border register text-white bg-[#002D74] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300"
              >
                Register
              </Link>
            </div>
          </div>
          <div className="md:block hidden w-1/2">
            <img
              className="rounded-2xl max-h-[1600px]"
              src="https://i.postimg.cc/WbfWrYJF/authentication2.png"
              alt="login form image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
