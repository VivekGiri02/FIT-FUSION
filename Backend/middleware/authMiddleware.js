const jwt = require("jsonwebtoken");

// 1. Login Check karne ke liye function
const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Isme user ki id aur role dono honge
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// 2. Sirf Admin Check karne ke liye function
const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Access denied: Admins only" });
  }
};

// SABSE ZARURI: Dono ko object mein daal kar export karein
module.exports = { protect, adminOnly };