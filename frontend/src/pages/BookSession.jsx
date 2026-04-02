import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiCheckCircle, FiCalendar, FiClock, FiUser, FiPhone } from "react-icons/fi";
import API from "../api";

const BookSession = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const coach = location.state?.coach; // Coach data passing through state

  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isBooked, setIsBooked] = useState(false);
  const [sessionDetails, setSessionDetails] = useState(null);

  // Check Login
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      alert("Please login to book a session.");
      navigate("/login");
    }
    if (!coach) {
      navigate("/coaches");
    }
  }, [navigate, coach]);

  const handleBooking = async (e) => {
  e.preventDefault();

  const dates = ["22 March, 2026", "23 March, 2026", "25 March, 2026", "28 March, 2026"];
  const times = ["10:00 AM", "02:00 PM", "05:00 PM", "07:30 PM"];

  const randomDate = dates[Math.floor(Math.random() * dates.length)];
  const randomTime = times[Math.floor(Math.random() * times.length)];

  try {
    const res = await API.post("/bookings", {
      coachName: coach.name,
      date: randomDate,
      time: randomTime,
    });

    const booking = res.data;

    const bookingInfo = {
      coachName: booking.coachName,
      date: booking.date,
      time: booking.time,
      userName: formData.name,
    };

    setSessionDetails(bookingInfo);
    setIsBooked(true);

  } catch (error) {
    console.error(error);
  }
};

  if (isBooked) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <FiCheckCircle className="text-green-500 text-5xl" />
            </div>
          </div>
          
          <div>
            <h1 className="text-4xl font-black uppercase italic tracking-tighter">Session Booked!</h1>
            <p className="text-gray-500 text-sm mt-2 uppercase tracking-widest font-bold">Your appointment is confirmed with {sessionDetails.coachName}</p>
          </div>

          <div className="bg-[#F8F5F0] rounded-3xl p-8 space-y-4 border border-gray-100">
            <div className="flex items-center gap-4 text-left">
              <FiCalendar className="text-orange-600" />
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-black">Date</p>
                <p className="font-bold">{sessionDetails.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-left">
              <FiClock className="text-orange-600" />
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-black">Time Slot</p>
                <p className="font-bold">{sessionDetails.time}</p>
              </div>
            </div>
          </div>

          <button 
            onClick={() => navigate("/")}
            className="w-full bg-black text-white py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-orange-600 transition-all shadow-xl"
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F5F0] py-20 px-6">
      <div className="max-w-xl mx-auto bg-white rounded-[3rem] p-10 shadow-xl">
        <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-2">Book Your Session</h2>
        <p className="text-gray-400 text-xs uppercase font-bold tracking-widest mb-10">Coach: <span className="text-black">{coach?.name}</span></p>

        <form onSubmit={handleBooking} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
            <div className="relative">
              <FiUser className="absolute left-5 top-5 text-gray-400" />
              <input 
                required
                type="text" 
                placeholder="Enter your name" 
                className="w-full pl-14 pr-6 py-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-black transition"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Phone Number</label>
            <div className="relative">
              <FiPhone className="absolute left-5 top-5 text-gray-400" />
              <input 
                required
                type="tel" 
                placeholder="Enter mobile number" 
                className="w-full pl-14 pr-6 py-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-black transition"
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>

          <div className="pt-4">
            <button type="submit" className="w-full bg-black text-white py-6 rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-orange-600 transition-all shadow-lg active:scale-95">
              Confirm & Schedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookSession;