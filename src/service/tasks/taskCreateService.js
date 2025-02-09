const Task = require("../../models/taskModel.js");

const createTaskService = async ({ title, description, userID }) => {
  try {
    if (!title) {
      throw new Error({ message: "Title is required" });
    }
    const newTask = new Task({ title, description, user: userID });
    return await newTask.save();
  } catch (eror) {
    throw new Error({ message: error.message });
  }
};
module.exports = createTaskService;
