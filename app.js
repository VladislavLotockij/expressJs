require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require("./src/routes/authRoutes.js");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://mongodb:27017/mydatabase";

// Подключение к MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ Подключено к MongoDB"))
  .catch((err) => console.error("Ошибка подключения:", err));

// Middleware
app.use(express.json());
app.use(cors());

// Простой роут
app.get("/", (req, res) => {
  res.send("Сервер работает в Docker! 🚀");
});
app.use("/api/auth", authRouter);

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});
