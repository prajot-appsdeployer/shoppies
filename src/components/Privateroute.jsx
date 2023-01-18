import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { GlobalContext } from "../context/Context";

export const PrivateRoute = () => {
  const { userState } = useContext(GlobalContext);

  return userState ? <Outlet /> : <Navigate to="/login" />;
};
