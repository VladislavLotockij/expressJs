const Task = require("../../models/taskModel");

const updateTaskService = async (id, data) => {
  try {
    if (!data) {
      throw new Error("Data is emty");
    }
    const task = await Task.findByIdAndUpdate(id, data, { new: true });
    return task;
  } catch (error) {
    throw new error(error.message);
  }
};
module.exports = updateTaskService;
