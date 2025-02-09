const getAllTasksService = require("../../service/tasks/getAllTasksService");

const getAllTasksController = async (req, res) => {
  try {
    const tasks = await getAllTasksService();
    if (!tasks) {
      return res.status(401).json({ message: "The task list is empty" });
    }
    return res.status(200).json({ tasks });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = getAllTasksController;
