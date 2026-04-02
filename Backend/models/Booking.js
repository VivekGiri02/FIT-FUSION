const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  coachName: String,
  date: String,
  time: String,
  status: { type: String, default: "pending" },
});

module.exports = mongoose.model("Booking", bookingSchema);