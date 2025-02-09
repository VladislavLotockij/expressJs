const express = require("express");
const { registerUserController } = require("../controllers/authController.js");

const router = express.Router();

router.post("/register", registerUserController);

module.exports = router;
