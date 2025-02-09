const express = require("express");
const createTaskController = require("../controllers/tasks/createTaskController.js");
const authMiddlerware = require("../middlewares/authMiddleware");
const getAllTasksController = require("../controllers/tasks/getAllTasksController.js");
const getTaskByIdController = require("../controllers/tasks/getTaskByIdController.js");
const updateTaskControlller = require("../controllers/tasks/updateTaskController.js");

const router = express.Router();

router.post("/", authMiddlerware, createTaskController);
router.get("/", authMiddlerware, getAllTasksController);
router.get("/:id", authMiddlerware, getTaskByIdController);
router.patch("/:id", authMiddlerware, updateTaskControlller);

module.exports = router;
