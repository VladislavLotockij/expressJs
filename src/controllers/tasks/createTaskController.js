const createTaskService = require("../../service/tasks/taskCreateService.js");

const createTaskController = async (req, res) => {
  const { title, description } = req.body;

  try {
    const createdTask = await createTaskService({
      title,
      description,
      userID: req.user._id,
    });

    if (!createdTask) {
      return res.status(400).json({ message: "Title is required" });
    }
    res.status(200).json({ message: "Task created succefuly" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = createTaskController;
