const mongoose = require("mongoose");
const getTaskByIdService = require("../../service/tasks/getTaskByIdService");

const getTaskByIdController = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid task ID" });
  }

  try {
    const task = await getTaskByIdService(id);
    res.status(200).json({ task });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = getTaskByIdController;
