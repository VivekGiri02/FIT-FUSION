import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import API from "../api";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await API.get("/orders");
        setOrders(data);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  
  const filteredOrders = orders.filter((o) =>
    o.user?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading)
    return (
      <div className="p-10 text-center font-bold text-gray-400 uppercase italic">
        Loading Orders...
      </div>
    );

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="bg-white p-5 rounded-xl shadow">
        <div className="relative max-w-md">
          <FiSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            className="w-full pl-10 py-2 rounded-xl bg-gray-50"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-xs uppercase">
            <tr>
              <th className="px-6 py-3">User</th>
              <th className="px-6 py-3">Items</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center p-6">
                  No orders found
                </td>
              </tr>
            ) : (
              filteredOrders.map((o) => (
                <tr key={o._id} className="border-t">
                  <td className="px-6 py-4">
                    {o.user?.name || "User"}
                  </td>
                  <td className="px-6 py-4">
                    {o.items?.join(", ")}
                  </td>
                  <td className="px-6 py-4">
                    ₹{o.amount}
                  </td>
                  <td className="px-6 py-4">
                    {o.status}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;