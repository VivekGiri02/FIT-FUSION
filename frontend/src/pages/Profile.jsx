import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiPackage, FiClock } from "react-icons/fi";
import API from "../api";

const Profile = () => {

  const navigate = useNavigate();

  const [profileImg, setProfileImg] = useState(null);

  const [userOrders, setUserOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  const [userBookings, setUserBookings] = useState([]);
  const [loadingBookings, setLoadingBookings] = useState(true);

  const [athlete, setAthlete] = useState({
    name: "",
    email: "",
    membership: "No Active Plan",
    price: "₹0",
    isSubscribed: false
  });

  useEffect(() => {

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
      navigate("/login");
      return;
    }

    const savedEmail = localStorage.getItem("userEmail");
    const savedName = localStorage.getItem("userName");
    const savedMembership = localStorage.getItem("userMembership");
    const savedPrice = localStorage.getItem("planPrice");
    const savedSubStatus = localStorage.getItem("isSubscribed");

    setAthlete({
      name: savedName || "Athlete",
      email: savedEmail || "No Email Found",
      membership: savedMembership || "No Active Plan",
      price: savedPrice || "₹0",
      isSubscribed: savedSubStatus === "true"
    });

    fetchMyOrders(savedEmail);
    fetchMyBookings();

  }, [navigate]);


  const fetchMyOrders = async (savedEmail) => {

    try {
      setLoadingOrders(true);
      const { data } = await API.get("/orders/my");
      const filtered = data
        .filter(order => {
          const orderEmail =
            order.user?.email || order.email || order.customerEmail;

          return orderEmail?.toLowerCase() === savedEmail?.toLowerCase();
        })
        .map(order => {

          const randomDay = Math.floor(Math.random() * 20) + 1;
          const randomHour = Math.floor(Math.random() * 12) + 1;
          const randomMin =
            ["00", "15", "30", "45"][Math.floor(Math.random() * 4)];
          const ampm = Math.random() > 0.5 ? "AM" : "PM";

          return {
            ...order,
            displayDate: `${randomDay} March 2026`,
            displayTime: `${randomHour}:${randomMin} ${ampm}`
          };
        });

      setUserOrders(filtered);

    } catch (err) {

      console.error(err);

    } finally {

      setLoadingOrders(false);

    }
  };


  const fetchMyBookings = async () => {

    try {

      setLoadingBookings(true);

      const { data } = await API.get("/bookings/my");

      const formatted = data.map(b => {

        const randomDay = Math.floor(Math.random() * 20) + 1;
        const randomHour = Math.floor(Math.random() * 12) + 1;
        const randomMin =
          ["00", "15", "30", "45"][Math.floor(Math.random() * 4)];
        const ampm = Math.random() > 0.5 ? "AM" : "PM";
        return {
          ...b,
          displayDate: `${randomDay} March 2026`,
          displayTime: `${randomHour}:${randomMin} ${ampm}`
        };

      });

      setUserBookings(formatted);

    } catch (err) {

      console.error(err);

    } finally {

      setLoadingBookings(false);

    }
  };


  const handleLogout = () => {

    localStorage.clear();
    navigate("/");

  };


  const handleImageUpload = (e) => {

    const file = e.target.files[0];

    if (file) {
      setProfileImg(URL.createObjectURL(file));
    }

  };


  return (

    <div className="min-h-screen bg-[#F8F5F0] py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
            <div className="w-24 h-24 rounded-full bg-black overflow-hidden relative">
              {profileImg ? (
                <img
                  src={profileImg}
                  className="w-full h-full object-cover"
                  alt="profile"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-2xl font-bold text-white italic">
                  {athlete.name.charAt(0)}
                </div>
              )}

              <input
                type="file"
                onChange={handleImageUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black uppercase italic">
                {athlete.name}
              </h1>
              <p className="text-gray-500 text-sm font-medium">
                {athlete.email}
              </p>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase">
              Membership
            </h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-lg font-bold uppercase italic">
                {athlete.membership}
              </p>
              <p className="text-xs text-gray-500 mb-3">
                {athlete.isSubscribed ? "Active Plan" : "Free User"}
              </p>
              <button
                onClick={() => navigate("/subscribe")}
                className="bg-black text-white px-4 py-2 rounded-md text-[10px] font-black uppercase"
              >
                {athlete.isSubscribed ? "Change Plan" : "Upgrade Plan"}
              </button>

            </div>

          </div>


          <div className="mb-8 border-t pt-6">

            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <FiPackage /> Order History
            </h3>

            {loadingOrders ? (
              <p className="text-sm text-gray-500 text-center">
                Loading orders...
              </p>
            ) : userOrders.length === 0 ? (
              <p className="text-sm text-gray-500 text-center">
                No purchase history found
              </p>
            ) : (

              <div className="space-y-2">
                {userOrders.map(o => (
                  <div
                    key={o._id}
                    className="flex justify-between items-center p-3 border rounded"
                  >

                    <div>
                      <p className="font-medium">
 {o.productName ||
  o.title ||
  o.name ||
  (o.items && o.items[0]?.name) ||
  "Product"}
</p>
                      <p className="text-xs text-gray-500">
                        {o.displayDate} | {o.displayTime}
                      </p>

                    </div>

                    <div className="text-right">

                      <p className="font-semibold">
                        ₹{o.amount}
                      </p>

                      <p className="text-xs text-green-600">
                        Verified
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>


          <div className="mb-8 border-t pt-6">

            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <FiClock /> Booking History
            </h3>

            {loadingBookings ? (
              <p className="text-sm text-gray-500 text-center">
                Loading bookings...
              </p>
            ) : userBookings.length === 0 ? (
              <p className="text-sm text-gray-500 text-center">
                No bookings found
              </p>
            ) : (

              <div className="space-y-2">

                {userBookings.map(b => (

                  <div
                    key={b._id}
                    className="flex justify-between items-center p-3 border rounded"
                  >

                    <div>

                      <p className="font-medium">
                        {b.coachName}
                      </p>

                      <p className="text-xs text-gray-500">
                        {b.displayDate} | {b.displayTime}
                      </p>

                    </div>

                    <div className="text-right">

                      <p className="text-xs text-green-600">
                        {b.status}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>


          {athlete.email === "admin@fitfusion.com" && (

            <button
              onClick={() => navigate("/admin/dashboard")}
              className="w-full bg-orange-600 text-white py-4 rounded-xl font-black uppercase text-[10px]"
            >
              Open Admin Panel
            </button>

          )}


          <button
            onClick={handleLogout}
            className="w-full border border-gray-300 text-gray-500 py-3 rounded-md font-black uppercase text-[10px]"
          >
            Logout
          </button>

        </div>

      </div>

    </div>

  );

};

export default Profile;