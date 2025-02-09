const jwt = require("jsonwebtoken");
const { registerUser, loginUserService } = require("../service/authService.js"); // Исправлено на { registerUser }

const registerUserController = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
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

const loginUserController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({ message: "All fields are required" });
  }

  try {
    // Предположим, что loginUserService проверяет правильность пароля
    const { user } = await loginUserService(email, password);

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Генерация JWT токена
    const token = jwt.sign(
      { userId: user._id, username: user.username }, // Данные, которые хочешь включить в токен
      process.env.JWT_SECRET, // Секретный ключ для подписи токена
      { expiresIn: "1h" } // Время действия токена
    );

    // Отправляем токен в ответе
    res.status(200).json({
      message: "Login successful",
      token: token,
      user: user,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { registerUserController, loginUserController };
