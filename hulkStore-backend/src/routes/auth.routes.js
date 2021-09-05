import express from "express";
import jwt from "jsonwebtoken";
import { createUser } from "../controllers/user.controller.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const authRouter = express.Router();

function checkPasswords(password, dbPassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, dbPassword, function (err, result) {
      if (err) return reject(err);
      return resolve(result);
    });
  });
}

authRouter.post("/login", async ({ body }, res) => {
  const { username, password } = body;
  const user = await User.findOne({ username });
  const validPassword = await checkPasswords(password, user.password);

  if (!user || !validPassword)
    res.status(401).send({ error: true, message: "Unauthorized" });

  jwt.sign({ user }, "secretkey", (err, token) => {
    res.json({
      token,
    });
  });
});

export default authRouter;
