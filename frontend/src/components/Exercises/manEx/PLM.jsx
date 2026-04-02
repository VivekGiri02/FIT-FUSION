import { useState } from "react";

const PLM = () => {
  const [activeDay, setActiveDay] = useState("Mon");
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const schedule = {
  Mon: [
    { name: "Squat", sets: "5", reps: "3", rest: "5 min" },
    { name: "Leg Press", sets: "4", reps: "10", rest: "3 min" },
    { name: "Leg Curl", sets: "4", reps: "12", rest: "2 min" },
    { name: "Calf Raises", sets: "4", reps: "15", rest: "2 min" },
    { name: "Core Plank", sets: "3", reps: "1 min", rest: "1 min" },
    { name: "Back Extension", sets: "3", reps: "12", rest: "2 min" }
  ],
  Tue: [
    { name: "Bench Press", sets: "5", reps: "5", rest: "4 min" },
    { name: "Incline Bench", sets: "4", reps: "8", rest: "3 min" },
    { name: "Dumbbell Press", sets: "3", reps: "10", rest: "2 min" },
    { name: "Triceps Pushdown", sets: "4", reps: "12", rest: "2 min" },
    { name: "Dips", sets: "3", reps: "10", rest: "2 min" },
    { name: "Chest Fly", sets: "3", reps: "12", rest: "2 min" }
  ],
  Wed: [
    { name: "Deadlift", sets: "5", reps: "3", rest: "5 min" },
    { name: "Barbell Rows", sets: "4", reps: "8", rest: "3 min" },
    { name: "Lat Pulldown", sets: "4", reps: "10", rest: "2 min" },
    { name: "Face Pull", sets: "3", reps: "15", rest: "2 min" },
    { name: "Shrugs", sets: "4", reps: "12", rest: "2 min" },
    { name: "Hammer Curl", sets: "3", reps: "12", rest: "2 min" }
  ],
  Thu: [
    { name: "Squat", sets: "5", reps: "3", rest: "5 min" },
    { name: "Leg Press", sets: "4", reps: "10", rest: "3 min" },
    { name: "Leg Curl", sets: "4", reps: "12", rest: "2 min" },
    { name: "Calf Raises", sets: "4", reps: "15", rest: "2 min" },
    { name: "Core Plank", sets: "3", reps: "1 min", rest: "1 min" },
    { name: "Back Extension", sets: "3", reps: "12", rest: "2 min" }
  ],
  Fri: [
    { name: "Bench Press", sets: "5", reps: "5", rest: "4 min" },
    { name: "Incline Bench", sets: "4", reps: "8", rest: "3 min" },
    { name: "Dumbbell Press", sets: "3", reps: "10", rest: "2 min" },
    { name: "Triceps Pushdown", sets: "4", reps: "12", rest: "2 min" },
    { name: "Dips", sets: "3", reps: "10", rest: "2 min" },
    { name: "Chest Fly", sets: "3", reps: "12", rest: "2 min" }
  ],
  Sat: [
    { name: "Deadlift", sets: "5", reps: "3", rest: "5 min" },
    { name: "Barbell Rows", sets: "4", reps: "8", rest: "3 min" },
    { name: "Lat Pulldown", sets: "4", reps: "10", rest: "2 min" },
    { name: "Face Pull", sets: "3", reps: "15", rest: "2 min" },
    { name: "Shrugs", sets: "4", reps: "12", rest: "2 min" },
    { name: "Hammer Curl", sets: "3", reps: "12", rest: "2 min" }
  ],
};

  return (
    <div className="min-h-screen bg-[#F8F5F0] py-12 px-6">
      <div className="max-w-4xl mx-auto text-black">
        <header className="mb-10 border-l-8 border-black pl-6">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-700">Protocol: Neural Force</span>
          <h1 className="text-6xl font-black italic uppercase tracking-tighter mt-2">Powerlifting</h1>
          <div className="flex gap-2 mt-8">
            {days.map(day => (
              <button key={day} onClick={() => setActiveDay(day)} className={`px-6 py-2 font-black uppercase text-[10px] border-2 ${activeDay === day ? 'bg-black text-white border-black' : 'bg-transparent text-gray-300 border-gray-100'}`}>{day}</button>
            ))}
          </div>
        </header>

        <div className="space-y-6">
          {schedule[activeDay].map((ex, i) => (
            <div key={i} className="bg-black text-white p-10 rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col md:flex-row justify-between items-center group transition-all">
              <h3 className="text-2xl font-black uppercase italic tracking-tighter">{ex.name}</h3>
              <div className="flex gap-12 mt-6 md:mt-0"><div className="text-center"><p className="text-[9px] font-black text-gray-500 uppercase">Sets</p><p className="text-2xl font-bold">{ex.sets}</p></div><div className="text-center"><p className="text-[9px] font-black text-gray-500 uppercase">Reps</p><p className="text-2xl font-bold">{ex.reps}</p></div><div className="text-center"><p className="text-[9px] font-black text-gray-500 uppercase">Rest</p><p className="text-2xl font-bold">{ex.rest}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PLM;