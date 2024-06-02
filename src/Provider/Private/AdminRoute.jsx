import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import { useContext } from "react";
import { Authcontext } from "../AuthProvider/AuthProvider";

const AdminRoute = ({ children }) => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const { user, loading } = useContext(Authcontext);
  const location = useLocation();
  if (loading || isAdminLoading) {
    return (
      <div className="flex items-center justify-center h-[20vh]">
        {" "}
        <span className="loading loading-spinner text-secondary"></span>
      </div>
    );
  }
  if (user || isAdmin) {
    return children;
  }
  return <Navigate state={{ from: location }} replace to="/login"></Navigate>;
};

export default AdminRoute;
