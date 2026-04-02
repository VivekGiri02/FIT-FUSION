import { useState, useEffect } from "react";
import API from "../api";

const BookingRequests = () => {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await API.get("/bookings");
      setBookings(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-50 border-b">
          <tr className="text-[11px] uppercase tracking-widest text-gray-400">
            <th className="px-6 py-4">User</th>
            <th className="px-6 py-4">Coach</th>
            <th className="px-6 py-4">Date & Time</th>
            <th className="px-6 py-4">Status</th>
          </tr>
        </thead>

        <tbody className="text-sm">
          {bookings.length ? (
            bookings.map((b) => (
              <tr key={b._id} className="border-b last:border-none hover:bg-gray-50/50">
                <td className="px-6 py-4 font-medium">
                  {b.user?.name}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {b.coachName}
                </td>

                <td className="px-6 py-4 text-gray-500">
                  {b.date} | {b.time}
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-600">
                    {b.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="py-12 text-center text-gray-400 italic">
                No bookings found
              </td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
};

export default BookingRequests;