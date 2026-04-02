import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FreeTrial = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
    goal: ""
  });

  const handleSubmit = (e) => {
  e.preventDefault();
  
  // Make sure these strings match your Route paths in App.jsx exactly
  if (formData.goal === "Weight Loss") {
    navigate("/weight-loss-free");
  } else if (formData.goal === "Weight Gain") {
    navigate("/weight-gain-free");
  } else if (formData.goal === "Power Lifting") {
    navigate("/powerlifting-free");
  } else if (formData.goal === "Normal Exercise") {
    navigate("/normal-exercise-free");
  }
};

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-black font-sans antialiased flex items-center justify-center px-4 py-10">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        
        {/* Left Side: Fitness Identity */}
        <div className="lg:col-span-5 bg-black p-10 flex flex-col justify-between text-[#F8F5F0]">
          <div>
            <div className="flex items-center gap-2 mb-12">
              <div className="w-10 h-10 bg-[#F8F5F0] rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-black rounded-sm rotate-45"></div>
              </div>
              <span className="font-black tracking-tighter text-2xl uppercase">Forge / OS</span>
            </div>
            
            <h2 className="text-5xl font-black leading-tight uppercase mb-6 italic tracking-tighter">
              Build Your <br /> 
              <span className="text-gray-500 underline decoration-gray-700 underline-offset-4">Best Form</span>
            </h2>
            
            <div className="space-y-6 mt-10">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold border border-gray-700 px-2 py-1 rounded">01</span>
                <p className="text-sm tracking-wide text-gray-400 uppercase">Input Biological Data</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold border border-gray-700 px-2 py-1 rounded">02</span>
                <p className="text-sm tracking-wide text-gray-400 uppercase">Define Training Target</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold border border-gray-700 px-2 py-1 rounded">03</span>
                <p className="text-sm tracking-wide text-gray-400 uppercase">Deploy Custom Protocol</p>
              </div>
            </div>
          </div>
          
          {/* <div className="mt-12">
            <div className="flex -space-x-3 mb-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-600"></div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-black bg-[#F8F5F0] text-black flex items-center justify-center text-[10px] font-bold">+2k</div>
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Joined the elite roster today</p>
          </div> */}
        </div>

        {/* Right Side: Data Entry */}
        <div className="lg:col-span-7 p-8 md:p-14 bg-white">
          <header className="mb-10 flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-black tracking-tighter uppercase italic">Athlete Onboarding</h1>
              <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">Status: Initializing Analysis</p>
            </div>
            <div className="text-right hidden sm:block">
              <span className="block text-[10px] font-bold text-gray-300 uppercase italic leading-none">Step</span>
              <span className="text-4xl font-black leading-none">01</span>
            </div>
          </header>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name */}
              <div className="relative border-l-2 border-gray-100 pl-4 focus-within:border-black transition-colors">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black block mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="A. Reed"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent text-lg font-bold placeholder:text-gray-200 focus:outline-none"
                />
              </div>

              {/* Age */}
              <div className="relative border-l-2 border-gray-100 pl-4 focus-within:border-black transition-colors">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black block mb-1">Age</label>
                <input
                  type="number"
                  name="age"
                  placeholder="20"
                  required
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full bg-transparent text-lg font-bold placeholder:text-gray-200 focus:outline-none"
                />
              </div>
            </div>

            {/* Weight */}
            <div className="relative border-l-2 border-gray-100 pl-4 focus-within:border-black transition-colors">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black block mb-1">Body Mass (KG)</label>
              <input
                type="number"
                name="weight"
                placeholder="80.0"
                required
                value={formData.weight}
                onChange={handleChange}
                className="w-full bg-transparent text-lg font-bold placeholder:text-gray-200 focus:outline-none"
              />
            </div>

            {/* Goal Selector */}
            <div className="space-y-4 pt-4">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black block text-center">Select Deployment Goal</label>
              <div className="grid grid-cols-2 gap-3">
                {["Weight Loss", "Weight Gain", "Normal Exercise", "Power Lifting"].map((goal) => (
                  <button
                    key={goal}
                    type="button"
                    onClick={() => setFormData({ ...formData, goal })}
                    className={`p-4 text-[10px] uppercase font-bold tracking-widest border-2 transition-all rounded-xl ${
                      formData.goal === goal 
                        ? "bg-black text-white border-black" 
                        : "bg-transparent border-gray-100 text-gray-400 hover:border-gray-300"
                    }`}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!formData.goal}
              className={`w-full py-6 rounded-2xl text-xs uppercase tracking-[0.4em] font-black transition-all flex items-center justify-center gap-4 ${
                formData.goal 
                  ? "bg-black text-white shadow-2xl hover:bg-gray-800" 
                  : "bg-gray-100 text-gray-300 cursor-not-allowed"
              }`}
            >
              Generate Protocol
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;