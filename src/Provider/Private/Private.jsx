import { useContext } from "react";
import { Authcontext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  console.log(user, loading);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex items-center justify-center h-[20vh]">
        {" "}
        <span className="loading loading-spinner text-secondary"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} replace to="/login"></Navigate>;
};

export default Private;
