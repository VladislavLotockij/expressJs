const bcrypt = require("bcryptjs");
const User = require("../models/userModel.js");

const registerUser = async ({ userName, email, password }) => {
  try {
    const existingUserService = await User.findOne({ email });

    if (existingUser) {
      throw new Error("User already exists");
    }

    const newUser = new User({
      userName,
      email,
      password,
    });

    await newUser.save();
    return newUser;
  } catch (e) {
    throw new Error(e.message || "Server dont working");
  }
};
