const express = require("express");
const Booking = require("../models/Booking");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, async (req, res) => {
  try {
    const booking = await Booking.create({
      user: req.user.id,
      coachName: req.body.coachName,
      date: req.body.date,
      time: req.body.time,
    });

    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/", protect, async (req, res) => {
  try {
    const bookings = await Booking.find().populate("user", "name email");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/my", protect, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id });

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;