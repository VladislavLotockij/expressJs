const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

// Определение схемы
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password); // Сравниваем переданный пароль с тем, что хранится в базе
};

// Хешируем пароль перед сохранением пользователя в базу данных
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Если пароль не изменён, пропускаем хеширование

  // Хешируем пароль
  this.password = await bcrypt.hash(this.password, 10); // 10 - это количество "соли", можно изменить
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
