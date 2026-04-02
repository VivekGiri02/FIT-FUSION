import { useNavigate } from "react-router-dom";
import { useState } from "react";
import gym1 from "../assets/Plain.jpg";

const Subscribe = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  

  const handleSubmit = (e) => {
  e.preventDefault();
  
  const planName = selectedPlan === 199 ? "Basic Membership" : "Premium Excellence";
  const planPrice = `$${selectedPlan}`;

  localStorage.setItem("userMembership", planName);
  localStorage.setItem("planPrice", planPrice);
  localStorage.setItem("isSubscribed", "true");
  localStorage.setItem("hasMembership", "true");

  console.log("Plan Upgraded Successfully:", {
    name: formData.name,
    email: formData.email,
    plan: planName,
    price: planPrice
  });

  alert(`Subscription Confirmed: ${planName}`);
  
  setFormData({ name: "", phone: "", email: "" });
  setSelectedPlan(null);
  navigate("/profile");
};

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-black font-sans antialiased flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[2rem] overflow-hidden shadow-2xl">
        
        {/* Left Side: Visual & Branding */}
        <div className="relative hidden lg:block bg-black">
          <img
            src={gym1}
            alt="Fitness Lifestyle"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-12">
            <h2 className="text-white text-4xl font-light tracking-tight leading-tight mb-4">
              Join the <br />
              <span className="italic font-serif">Elite Collective.</span>
            </h2>
            <p className="text-gray-300 font-light text-sm tracking-widest uppercase">
              Beyond Fitness. This is Architecture.
            </p>
          </div>
        </div>

        {/* Right Side: Logic & Form */}
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <header className="mb-10 text-center lg:text-left">
            <span className="uppercase tracking-[0.3em] text-[10px] text-gray-400 font-bold mb-2 block">Membership</span>
            <h1 className="text-4xl font-light tracking-tighter mb-4">
              Select <span className="italic font-serif text-gray-700">Access</span>
            </h1>
          </header>

          {!selectedPlan ? (
            /* PLAN SELECTION */
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <p className="text-gray-500 font-serif italic mb-8">Choose your tier of training excellence.</p>
              
              <button
                onClick={() => setSelectedPlan(199)}
                className="w-full group flex justify-between items-center border border-gray-200 p-6 rounded-2xl hover:border-black transition-all duration-300"
              >
                <div className="text-left">
                  <span className="block text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">Tier I</span>
                  <span className="text-xl font-light">Basic Membership</span>
                </div>
                <span className="text-2xl font-light tracking-tighter">$199</span>
              </button>

              <button
                onClick={() => setSelectedPlan(299)}
                className="w-full group flex justify-between items-center border border-gray-200 p-6 rounded-2xl hover:border-black transition-all duration-300"
              >
                <div className="text-left">
                  <span className="block text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">Tier II</span>
                  <span className="text-xl font-light">Premium Excellence</span>
                </div>
                <span className="text-2xl font-light tracking-tighter">$299</span>
              </button>
            </div>
          ) : (
            /* SUBSCRIPTION FORM */
            <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
              <div className="flex items-center gap-4 pb-6 border-b border-gray-100">
                <button 
                  onClick={() => setSelectedPlan(null)}
                  className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
                >
                  ← Change Plan
                </button>
                <span className="text-xs font-bold uppercase tracking-widest">
                  Selected: ${selectedPlan}
                </span>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-black focus:outline-none transition-colors placeholder:text-gray-200 placeholder:italic font-light"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-black focus:outline-none transition-colors placeholder:text-gray-200 font-light"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-black focus:outline-none transition-colors placeholder:text-gray-200 font-light"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-[#F8F5F0] py-5 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:bg-gray-800 hover:shadow-xl active:scale-[0.98]"
              >
                Confirm Subscription
              </button>
            </form>
          )}

          <footer className="mt-12 text-center lg:text-left">
            <p className="text-[10px] text-gray-300 uppercase tracking-widest">
              Secure checkout encrypted via Studio-Standard.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;