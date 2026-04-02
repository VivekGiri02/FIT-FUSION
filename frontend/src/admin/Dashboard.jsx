import React, { useState, useEffect } from "react";
import { FiEdit2, FiTrash2, FiPlus, FiActivity, FiUsers, FiTrendingUp } from "react-icons/fi";
import API from "../api";

const ManageCoaches = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const { data } = await API.get("/coaches");
      setItems(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/coaches/${id}`);
      setItems(items.filter(item => item._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (

    <div className="space-y-8">

      {/* STATS */}

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow border flex items-center gap-4">

          <div className="bg-orange-100 p-4 rounded-xl text-orange-600">
            <FiUsers size={22}/>
          </div>

          <div>
            <p className="text-xs text-gray-400 uppercase">Total Members</p>
            <h3 className="text-2xl font-bold">{items.length}</h3>
          </div>

        </div>


        <div className="bg-white p-6 rounded-2xl shadow border flex items-center gap-4">

          <div className="bg-blue-100 p-4 rounded-xl text-blue-600">
            <FiActivity size={22}/>
          </div>

          <div>
            <p className="text-xs text-gray-400 uppercase">Active Sessions</p>
            <h3 className="text-2xl font-bold">Daily</h3>
          </div>

        </div>


        <div className="bg-white p-6 rounded-2xl shadow border flex items-center gap-4">

          <div className="bg-green-100 p-4 rounded-xl text-green-600">
            <FiTrendingUp size={22}/>
          </div>

          <div>
            <p className="text-xs text-gray-400 uppercase">Platform Growth</p>
            <h3 className="text-2xl font-bold">+12%</h3>
          </div>

        </div>

      </div>



      {/* DATA TABLE */}

      <div className="bg-white rounded-3xl shadow-lg border overflow-hidden">

        <div className="flex justify-between items-center p-6 border-b">

          <h3 className="font-bold text-lg">
            Platform Data
          </h3>

          <button className="bg-black text-white px-5 py-2 rounded-xl flex items-center gap-2 hover:bg-orange-500 transition">
            <FiPlus/> Add
          </button>

        </div>


        <table className="w-full text-left">

          <thead className="bg-gray-50">

            <tr className="text-xs uppercase tracking-wider text-gray-400">

              <th className="px-8 py-4">Name</th>
              <th className="px-8 py-4">Category</th>
              <th className="px-8 py-4">Details</th>
              <th className="px-8 py-4 text-right">Actions</th>

            </tr>

          </thead>


          <tbody className="divide-y">

            {items.map((item) => (

              <tr key={item._id} className="hover:bg-gray-50">

                <td className="px-8 py-4 font-semibold">
                  {item.name}
                </td>

                <td className="px-8 py-4 text-gray-500">
                  {item.role}
                </td>

                <td className="px-8 py-4 text-gray-500">
                  {item.exp}
                </td>

                <td className="px-8 py-4 text-right space-x-3">

                  <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg">
                    <FiEdit2/>
                  </button>

                  <button
                    onClick={() => handleDelete(item._id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                  >
                    <FiTrash2/>
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default ManageCoaches;