import * as services from "./../services/user.service.js";
import bcrypt from "bcrypt";

export const createUser = async ({ body }, res) => {
  const saltRounds = 10;

  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(body.password, salt);

  const newUser = await services.createUser({
    ...body,
    password: hash,
  });
  res.send(newUser);
};
