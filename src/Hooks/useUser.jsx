import React, { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider/AuthProvider";

const useUser = () => {
  const auth = useContext(Authcontext);
  return auth;
};

export default useUser;
