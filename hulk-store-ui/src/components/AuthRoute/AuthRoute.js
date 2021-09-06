import React from "react";
import { Redirect, Route } from "react-router";
import { getToken } from "./../../services/storage";

export const AuthRoute = (props) => {
  const token = getToken("access-token");

  if (!token) {
    return <Redirect to="/" />;
  }
  return <Route {...props} />;
};
