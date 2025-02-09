const express = require("express");
const createTaskController = require("../controllers/tasks/createTaskController.js");
const authMiddlerware = require("../middlewares/authMiddleware");
const getAllTasksController = require("../controllers/tasks/getAllTasksController.js");

const router = express.Router();

router.post("/", authMiddlerware, createTaskController);
router.get("/", authMiddlerware, getAllTasksController);

module.exports = router;
