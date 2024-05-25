import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user } = useAuth();
  console.log(user); // This should be removed or replaced with a proper logging mechanism in production.

  if (!user) {
    return <Navigate to="/signup" replace={true} />;
  }

  return children;
};

export default PrivateRoutes;
