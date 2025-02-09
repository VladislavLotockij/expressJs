const Task = require("../../models/taskModel");

const deleteTaskService = async (id) => {
  try {
    if (!id) {
      throw new Error("Id is empty");
    }

    return await Task.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = deleteTaskService;
