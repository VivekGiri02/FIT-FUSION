import { IoMdClose, IoMdTrash } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Layout/CartContext";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();
  const { cart, removeFromCart, cartTotal } = useCart();

  // Ensure total is a number to prevent "1230" being displayed if calculation fails
  const displayTotal = typeof cartTotal === "number" ? cartTotal : 0;

  const handleCheckout = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userEmail = localStorage.getItem("userEmail");
    const userName = localStorage.getItem("userName");

    if (!isLoggedIn) {
      toggleCartDrawer(); // Close drawer before navigating
      navigate("/login");
    } else {
      console.group("NEW ORDER INITIALIZED");
      console.log("Customer:", userName, `(${userEmail})`);
      console.log("Cart Items:", cart);
      // Log with Rupee symbol
      console.log("Total Amount:", `₹${displayTotal.toFixed(2)}`);
      console.groupEnd();

      toggleCartDrawer();
      navigate("/checkout");
    }
  };

  return (
    <>
      {/* OVERLAY */}
      {drawerOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm transition-opacity" 
          onClick={toggleCartDrawer}
        />
      )}

      {/* DRAWER */}
      <div
        className={`fixed top-0 right-0 w-full sm:w-[400px] h-full bg-white shadow-2xl
        transform transition-transform duration-500 ease-in-out flex flex-col z-50
        ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-black uppercase italic tracking-tighter">
            Your Bag ({cart.reduce((acc, item) => acc + (item.quantity || 1), 0)})
          </h2>
          <button onClick={toggleCartDrawer} className="hover:rotate-90 transition-transform">
            <IoMdClose className="h-6 w-6 text-black" />
          </button>
        </div>

        {/* ITEMS LIST */}
        <div className="flex-grow p-6 overflow-y-auto space-y-6 custom-scrollbar">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center mt-20 space-y-4">
              <p className="text-gray-400 uppercase text-[10px] font-black tracking-[0.2em]">Your cart is empty</p>
              <button onClick={toggleCartDrawer} className="text-xs font-bold underline">Start Training</button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 items-center group animate-in fade-in slide-in-from-right-4">
                <div className="relative overflow-hidden rounded-xl bg-gray-50 p-2 border border-gray-100">
                  <img src={item.img || item.image} alt={item.name} className="w-16 h-16 object-contain" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-[11px] font-black uppercase tracking-tight leading-none mb-1">{item.name}</h3>
                  {/* Fixed price display to show ₹ */}
                  <p className="text-orange-600 font-bold text-sm">
                    {item.price.toString().includes('₹') ? item.price : `₹${item.price.toString().replace('$', '')}`}
                  </p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Qty: {item.quantity || 1}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                >
                  <IoMdTrash size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* BOTTOM SECTION */}
        {cart.length > 0 && (
          <div className="p-6 border-t bg-gray-50"> 
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500 uppercase text-[10px] font-bold tracking-[0.2em]">Subtotal</span>
              <span className="text-2xl font-black italic tracking-tighter">
                {(() => {
                  const total = cart.reduce((acc, item) => {
                    const price = typeof item.price === "string" 
                      ? parseFloat(item.price.replace(/[^\d.]/g, "")) 
                      : item.price;
                    return acc + (price * (item.quantity || 1));
                  }, 0);
                  return isNaN(total) ? "₹0.00" : `₹${total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
                })()}
              </span>
            </div>
            <button 
              onClick={handleCheckout} 
              className="w-full bg-black text-white py-4 px-8 text-sm font-black uppercase tracking-[0.2em] hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg active:scale-95" 
            >
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;