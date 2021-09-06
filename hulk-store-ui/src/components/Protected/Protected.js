import React from "react";
import { getToken } from "./../../services/storage";

export const Protected = ({ children }) => {
  const token = getToken("access-token");

  if (!token) {
    return <div></div>;
  }
  return <div>{children}</div>;
};
