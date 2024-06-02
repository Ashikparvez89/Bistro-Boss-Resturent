import axios from "axios";
import React, { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
export const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(Authcontext);
  // interceptors for
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log("request stopped by interceptors", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // interseptors for status code

  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      console.log("error status code ", error);
      const status = error.response.status;
      console.log(status);

      // logout user for status code 401 and 403
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
