import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { HiOutlineUser, HiBars3BottomRight, HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { useCart } from "../Layout/CartContext";
import CartDrawer from "../Layout/CartDrawer";

const Navbar = () => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const navigate = useNavigate();
  
  const { cart } = useCart(); 
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const hasMembership = localStorage.getItem("hasMembership") === "true";
  const userName = localStorage.getItem("userName") || "Athlete";

  const toggleNavDrawer = () => setNavDrawerOpen(!navDrawerOpen);
  const toggleCartDrawer = () => setCartDrawerOpen(!cartDrawerOpen);

  const handleFreeTrialClick = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      navigate("/login"); 
    } else {
      navigate("/freeTrail"); 
    }
    setNavDrawerOpen(false);
  };

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100 w-full">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        
        <Link to="/" className="text-xl font-black tracking-tighter uppercase shrink-0">
          FIT-<span className="text-gray-400">FUSION</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
          <Link to="/men" className="hover:text-black transition-colors">Men</Link>
          <Link to="/women" className="hover:text-black transition-colors">Women</Link>
          
          <button 
            onClick={handleFreeTrialClick} 
            className="hover:text-black transition-colors uppercase font-bold tracking-[0.2em]"
          >
            Free Trial
          </button>
        </div>

        <div className="flex items-center space-x-5 shrink-0">

          {/* ADMIN PANEL BUTTON */}
          {isLoggedIn && (
            <button
              onClick={() => navigate("/admin/dashboard")}
              className="hidden lg:block text-[10px] font-black uppercase tracking-widest border-b border-gray-500 text-black-500 pb-0.5 hover:text-black hover:border-black transition-all"
            >
              Admin
            </button>
          )}
          
          {/* Membership Link */}
          {!hasMembership && (
            <Link
              to="/subscribe"
              className="hidden sm:block text-[10px] font-black uppercase tracking-widest border-b border-black pb-0.5 hover:text-gray-400 hover:border-gray-200 transition-all"
            >
              Membership
            </Link>
          )}

          <button 
            onClick={() => isLoggedIn ? toggleCartDrawer() : navigate("/login")} 
            className="relative p-1 hover:text-orange-500 transition-colors"
          >
            <HiOutlineShoppingBag className="h-6 w-6" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-[8px] font-black w-4 h-4 flex items-center justify-center rounded-full animate-pulse">
                {cart.length}
              </span>
            )}
          </button>

          {/* USER PROFILE */}
          <Link to={isLoggedIn ? "/profile" : "/login"} className="flex items-center text-gray-800 hover:text-orange-500 transition-colors">
            <HiOutlineUser className="h-5 w-5" />
            {isLoggedIn && (
              <span className="hidden lg:block ml-2 text-[10px] font-black uppercase tracking-wider">
                {userName}
              </span>
            )}
          </Link>

          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-black" />
          </button>
        </div>
      </nav>

      <CartDrawer 
        drawerOpen={cartDrawerOpen} 
        toggleCartDrawer={toggleCartDrawer} 
      />

      {navDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] md:hidden transition-opacity"
          onClick={toggleNavDrawer}
        >
          <div 
            className="absolute right-0 top-0 h-full w-64 bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-black text-xs uppercase tracking-widest">Menu</span>
              <button onClick={toggleNavDrawer}><IoMdClose size={24} /></button>
            </div>

            <div className="flex flex-col space-y-6 text-xl font-black uppercase tracking-tighter italic">
              <Link to="/men" onClick={toggleNavDrawer}>Men</Link>
              <Link to="/women" onClick={toggleNavDrawer}>Women</Link>
              
              <button 
                onClick={handleFreeTrialClick} 
                className="text-left uppercase font-black tracking-tighter italic"
              >
                Free Trial
              </button>

              {/* ADMIN PANEL MOBILE */}
              {isLoggedIn && (
                <Link 
                  to="/admin/dashboard" 
                  onClick={toggleNavDrawer} 
                  className="text-gray-400 text-lg"
                >
                  Admin
                </Link>
              )}

              {!hasMembership && (
                <Link to="/subscribe" onClick={toggleNavDrawer} className="text-gray-400 text-lg pt-4 border-t border-gray-100">
                  Membership
                </Link>
              )}

              <Link to={isLoggedIn ? "/profile" : "/login"} onClick={toggleNavDrawer} className="text-gray-400 text-lg">
                {isLoggedIn ? "My Profile" : "Login"}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;