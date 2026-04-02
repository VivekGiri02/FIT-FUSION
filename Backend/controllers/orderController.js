const Order = require("../models/Order");

// 1. Create New Order (When user clicks 'Pay' in Checkout)
exports.createOrder = async (req, res) => {
  try {
    const { planName, amount } = req.body;
    const newOrder = await Order.create({
      user: req.user.id, // Comes from Auth Middleware
      planName,
      amount,
    });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 2. Get All Orders (For Admin History)
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};