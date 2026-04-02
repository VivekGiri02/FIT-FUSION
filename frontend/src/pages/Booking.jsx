import BASE_URL from "../api";

const Booking = () => {

  const handleBooking = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch(`${BASE_URL}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        coachName: "vivek",
        date: "2026-03-22",
        time: "10:00 AM",
      }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <h2>Book Coach</h2>
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
};

export default Booking;