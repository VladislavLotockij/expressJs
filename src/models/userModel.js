// src/models/userModel.js
const mongoose = require("mongoose");

// Определение схемы
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Регистрация модели
const User = mongoose.model("User", userSchema);

module.exports = User;
