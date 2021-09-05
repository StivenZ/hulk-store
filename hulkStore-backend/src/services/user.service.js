import User from "./../models/User.js";

export async function createUser(user) {
  try {
    const newUser = await User.create(user);
    return newUser;
  } catch (e) {
    throw new Error("Could not create user", e);
  }
}
