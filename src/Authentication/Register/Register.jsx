import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Authcontext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const { createuser, logOut } = useContext(Authcontext);
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const styleys = {
    backgroundImage: `url(https://i.postimg.cc/qvMnGpyj/wood-grain-pattern-gray1x.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };
  const onSubmit = (data) => {
    const { name, email, password } = data;
    console.log(name, email, password);
    createuser(email, password)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Great",
          text: "Register Successfully",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
        logOut();
        navigate(location?.state ? navigate.state : "/login");
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
    <div className="w-full">
      {" "}
      <section
        className=" min-h-screen flex  box-border justify-center items-center"
        style={styleys}
      >
        <div className="  rounded-2xl flex max-w-4xl p-5 items-center shadow-2xl">
          <div className="md:w-1/2 px-8">
            <h2 className="font-bold text-3xl text-[#002D74]">Login</h2>
            <p className="text-sm mt-4 text-[#002D74]">
              Are You New Here? Please Sign Up From Here
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <input
                className="p-3 mt-8 rounded-xl border"
                type="text"
                name="name"
                placeholder="Name"
                {...register("name", { required: true })}
              />
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
                Register
              </button>
            </form>
            <div className="mt-6  items-center text-gray-100">
              <hr className="border-gray-300" />
              <p className="text-center text-sm text-black">OR</p>
              <hr className="border-gray-300" />
            </div>
            {/* <div className="">
              <button
                onClick={handleGoogle}
                className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium"
              >
                <span className="mr-2 text-2xl">
                  <FcGoogle />
                </span>
                Login with Google
              </button>
              <button
                onClick={handleGithub}
                className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium"
              >
                <span className="mr-2 text-2xl">
                  <FaGithub />
                </span>
                Login with Github
              </button>
            </div> */}
            <SocialLogin></SocialLogin>
            <div className="mt-10 text-sm border-b border-gray-500 py-5 playfair tooltip">
              Forget password?
            </div>

            <div className="mt-4 text-sm flex justify-between items-center container-mr">
              <p className="mr-3 md:mr-0 ">If have an account..</p>
              <Link
                to="/login"
                className="hover:border register text-white bg-[#002D74] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300"
              >
                Log In
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

export default Register;
