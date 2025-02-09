const express = require("express");
const createTaskController = require("../controllers/tasks/createTaskController.js"); // Исправлено
const authMiddlerware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddlerware, createTaskController); // Используем правильный контроллер

module.exports = router;
