import { useState } from "react";
import { useNavigate } from "react-router-dom";
import gym1 from "../assets/gym1.jpg";

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const BASE_URL = "https://fit-fusion-ex.onrender.com";
    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";

    try {
      const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(isLogin 
          ? { email: formData.email, password: formData.password } 
          : formData
        ),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Error from Server");
        return;
      }

      if (!data.token || !data.user) {
        alert("Backend connected, but login data is missing!");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("userRole", data.user.role);
      localStorage.setItem("userName", data.user.name);
      localStorage.setItem("userEmail", data.user.email);
      localStorage.setItem("isLoggedIn", "true");

      alert(isLogin ? "Welcome Back, Athlete!" : "Account Created Successfully!");

      // Redirect Logic
      if (data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }

    } catch (err) {
      console.error("Connection Error Details:", err);
      alert("Connection Error: Check if CORS is enabled in backend.");
    }
  };

  return (
    <div className="min-h-screen flex bg-[#F8F5F0] text-black antialiased">
      {/* Visual Side */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-black items-center justify-center p-12">
        <img 
          src={gym1} 
          className="absolute inset-0 w-full h-full object-cover opacity-60" 
          alt="Gym" 
        />
        <div className="relative z-10 text-center">
          <h2 className="text-6xl font-black text-white italic uppercase tracking-tighter mb-4">
            No <span className="text-gray-400 underline underline-offset-8">Excuses</span>
          </h2>
          <p className="text-white/70 tracking-[0.3em] uppercase text-xs font-bold">
            Elite Performance System v2.6
          </p>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-24">
        <div className="max-w-md w-full">
          <header className="mb-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold block mb-2">Access Portal</span>
            <h1 className="text-4xl font-black uppercase italic tracking-tighter">
              {isLogin ? "Welcome Back" : "Join The Ranks"}
            </h1>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="border-b-2 border-gray-100 focus-within:border-black transition-all py-2">
                <label className="text-[10px] uppercase font-black text-gray-400 block tracking-widest">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full bg-transparent font-bold py-1 focus:outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
            )}

            <div className="border-b-2 border-gray-100 focus-within:border-black transition-all py-2">
              <label className="text-[10px] uppercase font-black text-gray-400 block tracking-widest">Email Address</label>
              <input
                type="email"
                placeholder="athlete@domain.com"
                className="w-full bg-transparent font-bold py-1 focus:outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="border-b-2 border-gray-100 focus-within:border-black transition-all py-2">
              <label className="text-[10px] uppercase font-black text-gray-400 block tracking-widest">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-transparent font-bold py-1 focus:outline-none"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-5 rounded-xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-orange-600 transition-all active:scale-95"
            >
              {isLogin ? "Initialize Session" : "Create Profile"}
            </button>
          </form>

          <p className="mt-8 text-[11px] text-gray-500 font-bold uppercase tracking-widest">
            {isLogin ? "New to the system?" : "Already an athlete?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-black underline font-black hover:text-orange-600 transition-colors"
            >
              {isLogin ? "Sign Up" : "Log In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
