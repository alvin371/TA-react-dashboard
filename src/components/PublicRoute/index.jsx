import React from "react";
import {Navigate} from "react-router-dom";

const PublicRoute = ({children}) => {
  const token = localStorage.getItem("token");

  if (token !== null) {
    return <Navigate to="/app" replace />;
  }

  return children;
};

export default PublicRoute;
