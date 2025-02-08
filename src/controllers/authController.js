const { registerUserService } = require("../service/authService.js");

const registerUser = async (req, res) => {
  res.status(200).json({ message: "user created succefuly" });
  //   const { userName, email, password } = req.body;

  //   try {
  //     const newUser = registerUserService({ userName, email, password });

  //     res.status(201).json({ message: "User created succefuly", user: newUser });
  //   } catch (error) {
  //     res.status(400).json({ message: error.message });
  //   }
};

module.exports = { registerUser };
