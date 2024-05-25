import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  const { user } = useAuth();
  console.log(user); // This should be removed or replaced with a proper logging mechanism in production.

  if (user) {
    return <Navigate to="/" replace={true} />;
  }

  return children;
};

export default PublicRoutes;
