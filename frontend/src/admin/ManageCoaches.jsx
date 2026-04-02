import React, { useState } from "react";
import { FiPlus, FiEdit2, FiTrash2, FiUserPlus } from "react-icons/fi";

const ManageCoaches = () => {

  const [coaches, setCoaches] = useState([
    { id: 1, name: "Siddhant Jaiswal", role: "Strength Coach", exp: "8 Years" },
    { id: 2, name: "Priya Verma", role: "Weight Loss Expert", exp: "6 Years" },
  ]);

  const handleDelete = (id) => {

    const updatedCoaches = coaches.filter((coach) => coach.id !== id);

    setCoaches(updatedCoaches);

  };

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <div>
          <h2 className="text-2xl font-black uppercase italic tracking-tighter">
            Coaches Directory
          </h2>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
            Manage your professional team
          </p>
        </div>

        <button className="bg-black text-white px-6 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-orange-600 transition-all">
          <FiUserPlus size={16} /> Add New Coach
        </button>
      </div>

      <div className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm">

        <table className="w-full text-left">

          <thead className="bg-gray-50 border-b border-gray-100">
            <tr className="text-[10px] uppercase font-black tracking-[0.2em] text-gray-400">
              <th className="px-8 py-5">Coach Name</th>
              <th className="px-8 py-5">Speciality</th>
              <th className="px-8 py-5">Experience</th>
              <th className="px-8 py-5 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50">

            {coaches.map((coach) => (

              <tr key={coach.id} className="hover:bg-gray-50/50 transition-colors">

                <td className="px-8 py-5 font-bold text-black">
                  {coach.name}
                </td>

                <td className="px-8 py-5 text-sm text-gray-500 font-medium">
                  {coach.role}
                </td>

                <td className="px-8 py-5 text-sm text-gray-500">
                  {coach.exp}
                </td>

                <td className="px-8 py-5 text-right space-x-3">

                  <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-all">
                    <FiEdit2 />
                  </button>

                  <button
                    onClick={() => handleDelete(coach.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all"
                  >
                    <FiTrash2 />
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