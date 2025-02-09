const { default: mongoose } = require("mongoose");
const deleteTaskService = require("../../service/tasks/deleteTaskService");

const deleteTaskController = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Invalid task id" });
  }

  const deletedTask = await deleteTaskService(id);

  if (!deletedTask) {
    return res.status(404).json({ message: "Task not a found" });
  }

  return res.status(204).json({ message: "Task deleted succefuly" });
};

module.exports = deleteTaskController;
