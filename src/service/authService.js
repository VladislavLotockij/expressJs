const bcrypt = require("bcryptjs");
const User = require("../models/userModel.js");

const registerUser = async ({ username, email, password }) => {
  // userName -> username
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username, // Здесь также username
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return newUser;
  } catch (e) {
    throw new Error(e.message || "Server is not working");
  }
};

module.exports = { registerUser };
