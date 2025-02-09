const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");

const registerUser = async ({ username, email, password }) => {
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return newUser;
  } catch (e) {
    throw new Error(e.message || "Server is not working");
  }
};

const loginUserService = async (email, password) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("Invalid email");
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return { token, user };
  } catch (error) {
    throw new Error(error.message || "Server is not working");
  }
};

module.exports = { registerUser, loginUserService };
