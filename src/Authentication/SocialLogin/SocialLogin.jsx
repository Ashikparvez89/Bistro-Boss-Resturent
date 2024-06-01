import React, { useContext } from "react";
import { Authcontext } from "../../Provider/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { axiosPublic } from "../../Hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleLogin, createuser, githublogin } = useContext(Authcontext);
  const navigate = useNavigate();
  const location = useLocation();
  //   console.log(location?.state?.from?.pathname);
  const handleGithub = () => {
    githublogin()
      .then((res) => {
        const userInfo = {
          name: res.user?.displayName,
          photoURL: res.user?.photoURL,
          email: res.user?.email,
        };
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
          title: "Oops...",
          text: error.message,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };
  const handleGoogle = () => {
    googleLogin()
      .then((res) => {
        const userInfo = {
          name: res.user?.displayName,
          photoURL: res.user?.photoURL,
          email: res.user?.email,
        };
        axiosPublic
          .post("/users", userInfo)
          .then((res) => {
            console.log(res.data);
            Swal.fire({
              icon: "success",
              title: "Great",
              text: "Loged In Successfully",
              footer: '<a href="#">Why do I have this issue?</a>',
            });
            navigate(location?.state ? navigate.state : "/");
          })
          .catch((error) => {
            console.log(error.message);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.message,
              footer: '<a href="#">Why do I have this issue?</a>',
            });
          });
      })
      .catch((error) => {});
  };

  return (
    <div>
      <div className="">
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
      </div>
    </div>
  );
};

export default SocialLogin;
