import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";
import Loading from "../components/Loading";
import Login from "../pages/Login";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
    if (loading) return <Loading></Loading>;

  if (user) return children;

  //   return <Login></Login>;
  return <Navigate to={"/auth/login"}></Navigate>;
};

export default PrivateRoute;
