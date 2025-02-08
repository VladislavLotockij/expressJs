# Используем официальный образ Node.js
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта
COPY . .

# Указываем порт, который будет слушать контейнер
EXPOSE 3000

# Команда запуска (используем nodemon для автообновления)
CMD ["npm", "run", "dev"]
