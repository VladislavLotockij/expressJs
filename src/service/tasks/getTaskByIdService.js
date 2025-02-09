const Task = require("../../models/taskModel");

const getTaskByIdService = async (id) => {
  try {
    const task = await Task.findById(id);

    if (!task) {
      throw new Error("Task is not found");
    }

    return task;
  } catch (error) {
    throw new Error(error.message || "Internal server error");
  }
};

module.exports = getTaskByIdService;
