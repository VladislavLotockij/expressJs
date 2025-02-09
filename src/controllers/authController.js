const { registerUser } = require("../service/authService.js"); // Исправлено на { registerUser }

const registerUserController = async (req, res) => {
  const { username, email, password } = req.body; // Убедились, что используется username

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Вызываем registerUser напрямую
    const newUser = await registerUser({
      username,
      email,
      password,
    });

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { registerUserController };
