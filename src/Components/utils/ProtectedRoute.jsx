import React from "react";
import { Navigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("userInfo");

  if (!user) {
    toast.error("Please login to access this resource!");
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default ProtectedRoute;
