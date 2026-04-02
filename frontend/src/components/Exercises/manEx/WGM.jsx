import { useState } from "react";

const WGM = () => {
  const [activeDay, setActiveDay] = useState("Mon");
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const schedule = {
    Mon: [
  { name: "Incline Bench", sets: "4", reps: "10", rest: "90s" },
  { name: "Flat Bench", sets: "4", reps: "10", rest: "90s" },
  { name: "Dips", sets: "3", reps: "12", rest: "60s" },
  { name: "Chest Fly", sets: "3", reps: "15", rest: "60s" },
  { name: "Push-ups", sets: "3", reps: "Failure", rest: "60s" },
  { name: "Cable Crossover", sets: "3", reps: "12", rest: "60s" }
],
    Tue: [{ name: "Barbell Rows", sets: "4", reps: "8", rest: "90s" }, { name: "Pull-ups", sets: "4", reps: "Failure", rest: "90s" }], // PULL
    Wed: [{ name: "Back Squat", sets: "4", reps: "10", rest: "120s" }, { name: "Leg Press", sets: "3", reps: "15", rest: "90s" }], // LEGS
    Thu: [{ name: "Overhead Press", sets: "4", reps: "8", rest: "90s" }, { name: "Lateral Raises", sets: "4", reps: "15", rest: "60s" }], // SHOULDERS
    Fri: [{ name: "Deadlift", sets: "3", reps: "8", rest: "120s" }, { name: "Curls", sets: "4", reps: "12", rest: "60s" }], // POSTERIOR
    Sat: [{ name: "Close Grip Bench", sets: "3", reps: "10", rest: "90s" }, { name: "Skullcrushers", sets: "3", reps: "12", rest: "60s" }] // ARMS
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Protocol: Hypertrophy</span>
          <h1 className="text-6xl font-black italic uppercase tracking-tighter mt-2">Weight Gain</h1>
          <div className="flex gap-2 mt-8 overflow-x-auto pb-2">
            {days.map(day => (
              <button key={day} onClick={() => setActiveDay(day)} className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase ${activeDay === day ? 'bg-blue-600 text-white' : 'bg-white text-gray-400'}`}>{day}</button>
            ))}
          </div>
        </header>

        <div className="grid gap-4">
          {schedule[activeDay].map((ex, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 flex flex-col md:flex-row justify-between items-center group hover:border-blue-600 transition-all">
               <h3 className="text-xl font-black uppercase italic tracking-tighter">{ex.name}</h3>
               <div className="flex gap-8"><div className="text-center"><p className="text-[9px] font-black text-gray-400 uppercase">Sets</p><p className="text-xl font-bold">{ex.sets}</p></div><div className="text-center"><p className="text-[9px] font-black text-gray-400 uppercase">Reps</p><p className="text-xl font-bold">{ex.reps}</p></div><div className="text-center"><p className="text-[9px] font-black text-gray-400 uppercase">Rest</p><p className="text-xl font-bold">{ex.rest}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WGM;