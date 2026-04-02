import { useState } from "react";

const Powerlifting = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");

  const workoutPlan = {
    Monday: [{ name: "Bench Press", sets: "5 × 5" }, { name: "Incline Bench", sets: "4 × 6" }, { name: "Tricep Dips", sets: "4 × 8" }],
    Tuesday: [{ name: "Deadlift", sets: "5 × 5" }, { name: "Barbell Row", sets: "4 × 6" }, { name: "Barbell Curl", sets: "3 × 10" }],
    Wednesday: [{ name: "Squat", sets: "5 × 5" }, { name: "Leg Press", sets: "4 × 8" }, { name: "Shoulder Press", sets: "4 × 6" }],
    Thursday: [{ name: "Bench Press", sets: "5 × 5" }, { name: "Incline Bench", sets: "4 × 6" }, { name: "Tricep Dips", sets: "4 × 8" }],
    Friday: [{ name: "Deadlift", sets: "5 × 5" }, { name: "Barbell Row", sets: "4 × 6" }, { name: "Barbell Curl", sets: "3 × 10" }],
    Saturday: [{ name: "Squat", sets: "5 × 5" }, { name: "Leg Press", sets: "4 × 8" }, { name: "Shoulder Press", sets: "4 × 6" }],
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-black font-sans antialiased px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <header className="mb-16 text-center">
          <span className="uppercase tracking-[0.3em] text-xs text-gray-500 font-semibold mb-3 block">Strength Phase</span>
          <h1 className="text-5xl font-light tracking-tight mb-6">
            Power <span className="italic font-serif">Lifting</span>
          </h1>
          <div className="inline-flex items-center gap-4 border-y border-gray-200 py-3 px-8 text-sm font-medium">
            MAX PERFORMANCE PROGRAM
          </div>
        </header>

        <nav className="flex justify-center gap-8 mb-12 border-b border-gray-200">
          {Object.keys(workoutPlan).map((day) => (
            <button key={day} onClick={() => setSelectedDay(day)} className={`pb-4 text-sm uppercase tracking-widest transition-all relative ${selectedDay === day ? "text-black font-bold" : "text-gray-400 hover:text-black"}`}>
              {day}
              {selectedDay === day && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />}
            </button>
          ))}
        </nav>

        <div className="space-y-0 divide-y divide-gray-200">
          {workoutPlan[selectedDay].map((exercise, index) => (
            <div key={index} className="group py-8 flex justify-between items-end hover:translate-x-2 transition-all duration-300">
              <h3 className="text-2xl font-light group-hover:italic">{exercise.name}</h3>
              <div className="text-right">
                <span className="text-sm font-serif italic text-gray-500 block mb-1">Reps</span>
                <span className="text-xl font-light tracking-tighter">{exercise.sets}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Powerlifting;