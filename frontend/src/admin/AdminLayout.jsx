import { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import {
  FiGrid,
  FiUsers,
  FiShoppingBag,
  FiCalendar,
  FiUserCheck,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";

const AdminLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const adminName = localStorage.getItem("userName") || "Admin";

  const handleLogout = () => {
    localStorage.clear();
    alert("Logged out successfully");
    navigate("/auth");
  };

  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <FiGrid /> },
    { name: "Manage Coaches", path: "/admin/manage-coaches", icon: <FiUserCheck /> },
    { name: "Order History", path: "/admin/order-history", icon: <FiShoppingBag /> },
    { name: "Booking Requests", path: "/admin/booking-requests", icon: <FiCalendar /> },
    { name: "User Management", path: "/admin/user-management", icon: <FiUsers /> },
  ];

  const SidebarContent = () => (
    <>
      <div className="mb-12 px-2 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-800">
            FIT<span className="text-gray-500">-ADMIN</span>
          </h2>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">
            Control Center
          </p>
        </div>
        <button className="lg:hidden text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>
          <FiX size={24} />
        </button>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
              ${active ? "bg-orange-500 text-white shadow-lg shadow-orange-200" : "text-gray-600 hover:bg-gray-100"}`}
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}
      </nav>

      <button 
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 text-red-500 text-sm mt-auto hover:bg-red-50 rounded-xl transition-colors font-bold"
      >
        <FiLogOut /> Logout
      </button>
    </>
  );

  return (
    <div className="h-screen flex overflow-hidden bg-gradient-to-br from-[#EEaF2FF] to-[#F8FAFC]">
      
      {/* DESKTOP SIDEBAR */}
      <div className="hidden lg:flex w-72 bg-white/80 backdrop-blur-xl border-r border-gray-200 p-6 flex-col overflow-y-auto">
        <SidebarContent />
      </div>

      {/* MOBILE SIDEBAR OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="fixed inset-y-0 left-0 w-72 bg-white p-6 flex flex-col shadow-2xl">
            <SidebarContent />
          </div>
        </div>
      )}

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* HEADER */}
        <header className="p-4 lg:p-6 flex justify-between items-center border-b bg-white/60 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 text-gray-600" onClick={() => setIsMobileMenuOpen(true)}>
              <FiMenu size={24} />
            </button>
            <h1 className="text-lg lg:text-xl font-semibold text-gray-800 capitalize truncate">
              {menuItems.find((m) => m.path === location.pathname)?.name || "Admin Panel"}
            </h1>
          </div>

          <div className="flex items-center gap-3 lg:gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">Verified Admin</p>
              <span className="text-sm font-black text-gray-800">{adminName}</span>
            </div>
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-tr from-orange-500 to-orange-400 text-white flex items-center justify-center font-black shadow-md text-sm">
              {adminName.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        {/* SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="bg-white/70 backdrop-blur-lg border border-white/40 rounded-2xl lg:rounded-3xl p-4 lg:p-6 min-h-full shadow-sm">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;