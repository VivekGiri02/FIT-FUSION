import { useState } from "react";

const Cardio = () => {
  const [activeDay, setActiveDay] = useState("Mon");
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const schedule = {
    Mon: [
      { name: "Sprints (HIIT)", sets: "10", reps: "30s On / 30s Off", rest: "None" },
      { name: "High Knees", sets: "4", reps: "45 sec", rest: "30s" }
    ],
    Tue: [
      { name: "Steady State Row", sets: "1", reps: "20 Mins", rest: "N/A" },
      { name: "Jump Squats", sets: "4", reps: "20 reps", rest: "45s" }
    ],
    Wed: [
      { name: "Battle Ropes", sets: "5", reps: "45 sec", rest: "30s" },
      { name: "Burpees Over Bar", sets: "4", reps: "15 reps", rest: "45s" }
    ],
    Thu: [
      { name: "Stairmaster Elite", sets: "1", reps: "15 Mins", rest: "N/A" },
      { name: "Box Step-ups", sets: "4", reps: "20 reps", rest: "30s" }
    ],
    Fri: [
      { name: "Echo Bike Sprints", sets: "8", reps: "20s Max / 40s Rest", rest: "None" },
      { name: "Mountain Climbers", sets: "4", reps: "1 Min", rest: "30s" }
    ],
    Sat: [
      { name: "Long Distance Run", sets: "1", reps: "8 KM", rest: "N/A" },
      { name: "Shadow Boxing", sets: "3", reps: "3 Mins", rest: "60s" }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center md:text-left">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600 italic">
            Protocol: VO2 Max Engine
          </span>
          <h1 className="text-6xl font-black italic uppercase tracking-tighter mt-2">
            Cardio <span className="text-gray-300">OS</span>
          </h1>
          
          {/* Day Selector */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-8">
            {days.map(day => (
              <button 
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeDay === day 
                    ? 'bg-black text-white shadow-xl scale-110' 
                    : 'bg-white text-gray-400 hover:text-black border border-gray-100'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </header>

        {/* Exercises List */}
        <div className="space-y-4">
          {schedule[activeDay].map((ex, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-[2.5rem] border-l-8 border-transparent hover:border-red-600 shadow-sm flex flex-col md:flex-row justify-between items-center group transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-red-50 transition-colors">
                    <span className="text-xl font-black text-black group-hover:text-red-600">{i+1}</span>
                </div>
                <div>
                    <h3 className="text-xl font-black uppercase italic tracking-tight">{ex.name}</h3>
                    <p className="text-[9px] uppercase font-bold text-gray-400 tracking-widest">Endurance Phase</p>
                </div>
              </div>

              <div className="flex gap-10 mt-6 md:mt-0">
                <div className="text-center">
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-tighter">Volume</p>
                  <p className="text-xl font-bold italic">{ex.sets}</p>
                </div>
                <div className="text-center">
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-tighter">Intensity</p>
                  <p className="text-xl font-bold italic">{ex.reps}</p>
                </div>
                <div className="text-center">
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-tighter">Recovery</p>
                  <p className="text-xl font-bold italic text-red-600">{ex.rest}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <footer className="mt-10 p-6 border-t border-gray-200 text-center">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                Maintain Heart Rate Zone 3-4 for Optimal Performance
            </p>
        </footer>
      </div>
    </div>
  );
};

export default Cardio;