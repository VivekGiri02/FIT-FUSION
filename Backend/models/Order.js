const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [String],
  amount: Number,
  status: { type: String, default: "processing" },
  paymentId: String,
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);