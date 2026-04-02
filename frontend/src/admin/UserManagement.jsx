import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

const UserManagement = () => {
  const [users] = useState([
    { id: 1, name: "Arjun", email: "arjun@gmail.com", role: "User", status: "Active" },
    { id: 2, name: "Admin", email: "admin@mail.com", role: "Admin", status: "Active" },
  ]);

  return (
    <div className="space-y-6">
      <div className="bg-white/70 backdrop-blur-lg border p-5 rounded-2xl flex justify-between">
        <h2 className="text-xl font-semibold">Users</h2>
        <p className="text-gray-400 text-sm">{users.length} members</p>
      </div>

      <div className="bg-white/70 backdrop-blur-lg border rounded-3xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-xs uppercase text-gray-400">
            <tr>
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b last:border-none hover:bg-gray-50/50">
                <td className="px-6 py-4">
                  <p className="font-medium">{u.name}</p>
                  <p className="text-xs text-gray-400">{u.email}</p>
                </td>
                <td className="px-6 py-4 text-gray-500">{u.role}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    u.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}>
                    {u.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-500">
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

export default UserManagement;