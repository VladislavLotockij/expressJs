const express = require("express");
const authController = require("../controllers/authController.js");

const route = express.Router();

route.post("/register", authController.registerUser);

module.exports = route;
