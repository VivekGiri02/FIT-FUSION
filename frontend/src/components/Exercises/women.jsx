import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Women = () => {
  const navigate = useNavigate();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
    goal: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAnalyzing(true);

    setTimeout(() => {
      // Logic: Agar "Weight Loss" hai to route "weight-loss-women" banega
      const path = `${formData.goal.toLowerCase().replace(" ", "-")}-women`;
      navigate(`/${path}`);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-black font-sans antialiased flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100">
        
        {/* Left Side: Brand Identity */}
        <div className="lg:col-span-5 bg-black p-12 flex flex-col justify-between text-[#F8F5F0] relative overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-gray-900 rounded-full blur-3xl opacity-50"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-16">
              <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center rotate-12">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <span className="font-black tracking-[0.2em] text-xl uppercase">Woman Zone</span>
            </div>
            
            <h2 className="text-6xl font-black leading-[0.9] uppercase mb-8 italic tracking-tighter">
              Sculpt <br /> 
              <span className="text-gray-600">Your</span> <br />
              Legacy<span className="text-orange-500">.</span>
            </h2>
            
            {/* Steps Guide */}
            <div className="space-y-8 mt-12">
              {[
                { step: "01", label: "Metric Sync", desc: "Body composition analysis" },
                { step: "02", label: "Goal Definition", desc: "Aesthetic & Strength targets" },
                { step: "03", label: "OS Deployment", desc: "Custom training activation" }
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-5">
                  <span className="text-[10px] font-black border border-gray-700 w-8 h-8 flex items-center justify-center rounded-full text-gray-400">{item.step}</span>
                  <div>
                    <p className="text-xs font-black tracking-widest uppercase">{item.label}</p>
                    <p className="text-[10px] text-gray-500 uppercase mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-7 p-10 md:p-20 bg-white flex flex-col justify-center">
          <header className="mb-12">
            <h1 className="text-4xl font-black tracking-tighter uppercase italic mb-2 text-zinc-900">Athlete Profile</h1>
            <div className="h-1 w-20 bg-orange-500"></div>
          </header>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="group relative border-b-2 border-gray-100 pb-2 focus-within:border-orange-500 transition-all">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black block mb-2">Name</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-transparent text-xl font-bold uppercase focus:outline-none" />
              </div>
              <div className="group relative border-b-2 border-gray-100 pb-2 focus-within:border-orange-500 transition-all">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black block mb-2">Age</label>
                <input type="number" name="age" required value={formData.age} onChange={handleChange} className="w-full bg-transparent text-xl font-bold focus:outline-none" />
              </div>
            </div>

            <div className="group relative border-b-2 border-gray-100 pb-2 focus-within:border-orange-500 transition-all">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black block mb-2">Weight (KG)</label>
              <input type="number" name="weight" required value={formData.weight} onChange={handleChange} className="w-full bg-transparent text-xl font-bold focus:outline-none" />
            </div>

            <div className="space-y-6">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black block">Choose Protocol</label>
              <div className="grid grid-cols-2 gap-4">
                {["Weight Loss", "Weight Gain", "Cardio", "Power Lifting"].map((goal) => (
                  <button
                    key={goal}
                    type="button"
                    onClick={() => setFormData({ ...formData, goal })}
                    className={`p-5 text-[10px] uppercase font-black tracking-[0.2em] border-2 transition-all rounded-2xl ${
                      formData.goal === goal ? "bg-black text-white border-black" : "bg-white border-gray-100 text-gray-400 hover:border-orange-500 hover:text-orange-500"
                    }`}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={!formData.goal || isAnalyzing}
              className={`w-full py-6 rounded-2xl text-xs uppercase tracking-[0.5em] font-black transition-all ${
                formData.goal && !isAnalyzing ? "bg-black text-white hover:bg-zinc-800" : "bg-gray-100 text-gray-300 cursor-not-allowed"
              }`}
            >
              {isAnalyzing ? "Analyzing Protocol..." : "Deploy Custom OS"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Women;