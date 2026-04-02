import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import PayPalButton from "./Payment";
import { useCart } from "../Layout/CartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const [checkoutReady, setCheckoutReady] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userName = localStorage.getItem("userName") || "Guest";
  const token = localStorage.getItem("token");

  const [shippingAddress, setShippingAddress] = useState({
    firstName: "", lastName: "", address: "", city: "", postalCode: "", country: "", phone: "",
  });

  const handleFinalPayment = async () => {
    setIsProcessing(true);
    const planNames = cart.map(item => item.name).join(", ");

    const orderData = {
      planName: planNames,
      amount: totalPrice,
      status: "completed",
      address: `${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.country}`,
    };

    try {
      const res = await fetch("http://localhost:9000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(orderData)
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Order Saved in DB:", data);
        if(clearCart) clearCart(); 
        alert("Payment Successful! Order recorded in System.");
        navigate("/"); 
      } else {
        alert(data.message || "Order failed to save on server.");
      }
    } catch (err) {
      console.error("Server Connection Error:", err);
      alert("Payment done but failed to connect to server history.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isLoggedIn) return <Navigate to="/login" replace />;

  if (!cart || cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F5F0]">
        <h2 className="text-2xl font-bold text-black uppercase italic">Your cart is empty</h2>
        <button 
          onClick={() => navigate("/")} 
          className="mt-4 bg-black text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg"
        >
          Go Shopping
        </button>
      </div>
    );
  }

  const totalPrice = cart.reduce((acc, item) => {
    const price = typeof item.price === "string"
      ? parseFloat(item.price.replace("$", "").replace("₹", ""))
      : item.price;

    return acc + (price * (item.quantity || 1));
  }, 0);

  const handleInputChange = (e) => {
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
  };

  const handleSubmitDetails = (e) => {
    e.preventDefault();
    setCheckoutReady(true);
  };

  const inputStyle =
    "w-full px-4 py-3 border-b-2 border-gray-100 bg-transparent focus:outline-none focus:border-black transition-all text-sm font-bold";

  return (
    <div className="min-h-screen bg-[#F8F5F0] py-14 px-4 md:px-10 antialiased">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT SECTION (Shipping Form) */}
        <div className="lg:col-span-2 space-y-6">
          <header className="mb-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold block mb-2">Final Step</span>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter">Checkout</h2>
          </header>

          <form
            onSubmit={handleSubmitDetails}
            className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-8"
          >
            <h3 className="text-xs uppercase font-black tracking-widest text-gray-400">Shipping Destination</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <input name="firstName" placeholder="First Name" onChange={handleInputChange} className={inputStyle} required />
              <input name="lastName" placeholder="Last Name" onChange={handleInputChange} className={inputStyle} required />
            </div>

            <input name="address" placeholder="Full Street Address" onChange={handleInputChange} className={inputStyle} required />

            <div className="grid md:grid-cols-3 gap-6">
              <input name="city" placeholder="City" onChange={handleInputChange} className={inputStyle} required />
              <input name="postalCode" placeholder="Postal Code" onChange={handleInputChange} className={inputStyle} required />
              <input name="country" placeholder="Country" onChange={handleInputChange} className={inputStyle} required />
            </div>

            <input name="phone" placeholder="Contact Number" onChange={handleInputChange} className={inputStyle} required />

            {!checkoutReady ? (
              <button className="w-full bg-black text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-orange-600 transition-all active:scale-95">
                Continue to Payment
              </button>
            ) : (
              <div className="pt-4 animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xs font-black uppercase tracking-widest text-orange-500">Secure Payment</h3>
                  <button
                    type="button"
                    onClick={() => setCheckoutReady(false)}
                    className="text-[10px] font-bold text-gray-400 underline uppercase tracking-tighter"
                  >
                    Edit Shipping Info
                  </button>
                </div>

                {isProcessing ? (
                  <div className="text-center py-4 font-black italic text-gray-400 animate-pulse">PROCESSING ORDER...</div>
                ) : (
                  <PayPalButton
                    amount={totalPrice}
                    onSuccess={handleFinalPayment} 
                    onError={() => alert("Payment Failed")}
                  />
                )}
              </div>
            )}
          </form>
        </div>

        {/* RIGHT SECTION (Order Summary) */}
        <div className="bg-black text-white p-8 rounded-[2rem] h-fit sticky top-20 shadow-2xl">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-gray-500">Order Summary</h3>

          <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {cart.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-center">
                <div className="relative">
                  <img src={item.img || item.image} className="w-16 h-16 object-cover rounded-xl opacity-80" />
                  <span className="absolute -top-2 -right-2 bg-orange-600 text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full">
                    {item.quantity || 1}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-black uppercase italic tracking-tight">{item.name}</p>
                  {/* Changed item price display to include ₹ */}
                  <p className="text-[10px] text-orange-500 font-bold tracking-widest mt-1">
                    {item.price.toString().startsWith('₹') ? item.price : `₹${item.price.toString().replace('$', '')}`}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 space-y-4">
            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-500">
              <span>Standard Shipping</span>
              <span className="text-green-500 underline underline-offset-4">Complimentary</span>
            </div>

            <div className="flex justify-between items-end pt-2">
              <span className="text-xs font-black uppercase tracking-[0.2em]">Grand Total</span>
              {/* Changed final total to display ₹ */}
              <span className="text-3xl font-black italic text-white tracking-tighter">
                ₹{totalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;