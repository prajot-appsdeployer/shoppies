import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { GlobalContext } from "./context/Context";

function PrivateRoutes() {
  const { userState } = useContext(GlobalContext);

  return userState ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
