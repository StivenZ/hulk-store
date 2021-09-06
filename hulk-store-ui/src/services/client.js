import config from "../config.js";
import { getToken, setToken } from "./storage";

export const createItem = (item) =>
  fetch(`${config.api.url}/items`, {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken("access-token")}`,
    },
  })
    .then((res) => res.json())
    .then((body) => body);

export const getItems = () => {
  return fetch(`${config.api.url}/items`)
    .then((response) => response.json())
    .then((body) => body);
};

export const loginService = (user) => {
  return fetch(`${config.api.url}/auth/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then(({ token }) => {
      console.log(token);
      setToken("access-token", token);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
