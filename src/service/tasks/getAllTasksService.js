const task = require("../../models/taskModel.js");

const getAllTasksService = async () => {
  try {
    const tasks = await task.find();
    if (!tasks) {
      throw Error({ message: "The task list is empty" });
    }
    return tasks;
  } catch (error) {
    throw new Error({ message: error.message });
  }
};
module.exports = getAllTasksService;
