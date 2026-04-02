import { useState } from "react";

const WLW = () => {
  const [activeDay, setActiveDay] = useState("Mon");
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const schedule = {
    Mon: [
      { name: "Barbell Thrusters", sets: "4", reps: "15", rest: "45s" },
      { name: "Burpees", sets: "5", reps: "12", rest: "30s" }
    ],
    Tue: [
      { name: "Kettlebell Swings", sets: "4", reps: "20", rest: "45s" },
      { name: "Box Jumps", sets: "4", reps: "15", rest: "45s" }
    ],
    Wed: [
      { name: "Mountain Climbers", sets: "5", reps: "1 min", rest: "30s" },
      { name: "Jump Rope", sets: "5", reps: "2 min", rest: "30s" }
    ],
    Thu: [
      { name: "Dumbbell Snatch", sets: "4", reps: "12/side", rest: "45s" },
      { name: "Medicine Ball Slams", sets: "4", reps: "20", rest: "30s" }
    ],
    Fri: [
      { name: "Assault Bike", sets: "6", reps: "30s Sprint", rest: "60s" },
      { name: "Rowing Machine", sets: "4", reps: "500m", rest: "90s" }
    ],
    Sat: [
      { name: "Outdoor Run", sets: "1", reps: "5KM", rest: "N/A" },
      { name: "Core Circuit", sets: "3", reps: "Failure", rest: "30s" }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center md:text-left">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 italic">Protocol: Fat Oxidation</span>
          <h1 className="text-6xl font-black italic uppercase tracking-tighter mt-2">Weight Loss</h1>
          
          {/* Day Selector */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-8">
            {days.map(day => (
              <button 
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeDay === day ? 'bg-orange-500 text-white shadow-lg' : 'bg-white text-gray-400 hover:text-black'}`}
              >
                {day}
              </button>
            ))}
          </div>
        </header>

        <div className="space-y-4">
          {schedule[activeDay].map((ex, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 flex flex-col md:flex-row justify-between items-center group hover:border-orange-500 transition-all">
              <div className="flex items-center gap-6">
                <span className="text-4xl font-black text-gray-100 group-hover:text-orange-500 italic transition-colors">0{i+1}</span>
                <h3 className="text-xl font-black uppercase italic">{ex.name}</h3>
              </div>
              <div className="flex gap-8 mt-4 md:mt-0">
                <div className="text-center"><p className="text-[9px] font-black text-gray-400 uppercase">Sets</p><p className="text-xl font-bold">{ex.sets}</p></div>
                <div className="text-center"><p className="text-[9px] font-black text-gray-400 uppercase">Reps</p><p className="text-xl font-bold">{ex.reps}</p></div>
                <div className="text-center"><p className="text-[9px] font-black text-gray-400 uppercase">Rest</p><p className="text-xl font-bold">{ex.rest}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WLW;