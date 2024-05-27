import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/signup" replace={true} />;
  }

  return children;
};

export default PrivateRoutes;
