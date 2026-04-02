import { useState } from "react";

const NW = () => {
  const [activeDay, setActiveDay] = useState("Mon");
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const schedule = {
  Mon: [
    { name: "Goblet Squats", sets: "3", reps: "15", rest: "60s" },
    { name: "Push-ups", sets: "3", reps: "20", rest: "60s" },
    { name: "Plank", sets: "3", reps: "45s", rest: "30s" },
    { name: "Jumping Jacks", sets: "3", reps: "25", rest: "30s" },
    { name: "Mountain Climbers", sets: "3", reps: "20", rest: "30s" },
    { name: "Sit-ups", sets: "3", reps: "15", rest: "45s" }
  ],
  Tue: [
    { name: "Lunges", sets: "3", reps: "12/side", rest: "45s" },
    { name: "Incline Push-ups", sets: "3", reps: "15", rest: "60s" },
    { name: "Leg Raises", sets: "3", reps: "15", rest: "45s" },
    { name: "Skipping", sets: "3", reps: "2 min", rest: "30s" },
    { name: "Wall Sit", sets: "3", reps: "45s", rest: "30s" },
    { name: "Burpees", sets: "3", reps: "10", rest: "30s" }
  ],
  Wed: [
    { name: "Walking Lunges", sets: "3", reps: "12/side", rest: "45s" },
    { name: "Plank to Pushup", sets: "3", reps: "10", rest: "60s" },
    { name: "Crunches", sets: "3", reps: "20", rest: "30s" },
    { name: "Jump Squats", sets: "3", reps: "12", rest: "45s" },
    { name: "High Knees", sets: "3", reps: "30s", rest: "30s" },
    { name: "Side Plank", sets: "3", reps: "30s", rest: "30s" }
  ],
  Thu: [
    { name: "Push-ups", sets: "4", reps: "20", rest: "60s" },
    { name: "Plank", sets: "3", reps: "1 min", rest: "30s" },
    { name: "Lunges", sets: "3", reps: "12", rest: "45s" },
    { name: "Jump Rope", sets: "3", reps: "2 min", rest: "30s" },
    { name: "Burpees", sets: "3", reps: "12", rest: "30s" },
    { name: "Sit-ups", sets: "3", reps: "20", rest: "45s" }
  ],
  Fri: [
    { name: "Yoga Flow", sets: "1", reps: "30 min", rest: "N/A" },
    { name: "Stretching", sets: "1", reps: "15 min", rest: "N/A" },
    { name: "Breathing Exercise", sets: "1", reps: "10 min", rest: "N/A" },
    { name: "Light Cardio", sets: "1", reps: "15 min", rest: "N/A" },
    { name: "Mobility Work", sets: "1", reps: "15 min", rest: "N/A" },
    { name: "Core Hold", sets: "3", reps: "30s", rest: "30s" }
  ],
  Sat: [
    { name: "Light Jog", sets: "1", reps: "3 KM", rest: "N/A" },
    { name: "Skipping", sets: "3", reps: "2 min", rest: "30s" },
    { name: "Push-ups", sets: "3", reps: "15", rest: "60s" },
    { name: "Squats", sets: "3", reps: "20", rest: "45s" },
    { name: "Plank", sets: "3", reps: "45s", rest: "30s" },
    { name: "Stretching", sets: "1", reps: "10 min", rest: "N/A" }
  ]
};

  return (
    <div className="min-h-screen bg-[#F8F5F0] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-green-600 italic">Protocol: General Health</span>
          <h1 className="text-6xl font-black italic uppercase tracking-tighter mt-2">Normal Training</h1>
          <div className="flex flex-wrap gap-2 mt-8">
            {days.map(day => (
              <button key={day} onClick={() => setActiveDay(day)} className={`px-5 py-2 rounded-full text-[10px] font-black border-2 transition-all ${activeDay === day ? 'bg-green-600 border-green-600 text-white' : 'bg-white border-gray-100 text-gray-400'}`}>{day}</button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {schedule[activeDay].map((ex, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border-b-4 border-gray-100 hover:border-green-500 transition-all shadow-sm group">
              <h3 className="text-xl font-black uppercase italic mt-2 mb-4 group-hover:text-green-600">{ex.name}</h3>
              <div className="flex justify-between border-t border-gray-50 pt-4"><div className="text-center"><p className="text-[9px] font-black text-gray-400 uppercase">Sets</p><p className="font-bold">{ex.sets}</p></div><div className="text-center"><p className="text-[9px] font-black text-gray-400 uppercase">Reps</p><p className="font-bold">{ex.reps}</p></div><div className="text-center"><p className="text-[9px] font-black text-gray-400 uppercase">Rest</p><p className="font-bold">{ex.rest}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NW;