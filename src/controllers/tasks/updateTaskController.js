const mongoose = require("mongoose");
const updateTaskService = require("../../service/tasks/updateTaskService");

const updateTaskControlller = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid task ID" });
    }

    const updatedTask = await updateTaskService(id, data);

    if (!updatedTask) {
      return res.status(401).json({ message: "Task not a found" });
    }

    res
      .status(201)
      .json({ message: "Task is updated succefully", updatedTask });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = updateTaskControlller;
