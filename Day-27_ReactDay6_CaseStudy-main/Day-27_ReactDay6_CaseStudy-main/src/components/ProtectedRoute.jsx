import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? children : <Navigate to="/login" replace />;
};

export const RoleRoute = ({ children, allow = [] }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return <Navigate to="/login" replace />;
  if (allow.length && !allow.includes(user.role)) return <Navigate to="/" replace />;
  return children;
};
