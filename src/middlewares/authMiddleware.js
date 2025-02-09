const jwt = require("jsonwebtoken");

const authMiddlerware = (req, res, next) => {
  const token = req.header("Authorization"?.replace("Bearer ", ""));

  if (!token) {
    return res.status(401).json({ message: "Acces denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // В decoded будет содержаться userId
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
module.exports = authMiddlerware;
