const express = require("express");
const router = express.Router();

const Order = require("../models/Order");
const { protect } = require("../middleware/authMiddleware");


// ✅ Create Order
router.post("/", protect, async (req, res) => {
  try {
    const order = await Order.create({
      ...req.body,
      user: req.user.id,
    });

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// ✅ Admin - Get All Orders
router.get("/", protect, async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// ✅ User - Get My Orders
router.get("/my", protect, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
      .populate("user", "name email");

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;