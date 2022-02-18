import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function AuthRoute({ children }) {
  const { user } = useSelector((state) => state.user);
  return user ? <Navigate to="/" /> : children;
}
