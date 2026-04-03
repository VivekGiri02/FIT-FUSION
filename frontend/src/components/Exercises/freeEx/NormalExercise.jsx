import { useState } from "react";

const NormalExercise = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");

  const workoutPlan = {
    Monday: [{ name: "Push Ups", sets: "3 × 15" }, { name: "Bodyweight Squats", sets: "3 × 15" }, { name: "Plank", sets: "3 × 30 sec" }],
    Tuesday: [{ name: "Jogging", sets: "20 Minutes" }, { name: "Jump Rope", sets: "3 × 2 min" }, { name: "Sit Ups", sets: "3 × 15" }],
    Wednesday: [{ name: "Push Ups", sets: "3 × 15" }, { name: "Lunges", sets: "3 × 12" }, { name: "Plank", sets: "3 × 30 sec" }],
    Thursday: [{ name: "Jogging", sets: "20 Minutes" }, { name: "Mountain Climbers", sets: "3 × 20" }, { name: "Sit Ups", sets: "3 × 15" }],
    Friday: [{ name: "Push Ups", sets: "3 × 15" }, { name: "Bodyweight Squats", sets: "3 × 15" }, { name: "Plank", sets: "3 × 30 sec" }],
    Saturday: [{ name: "Jogging", sets: "20 Minutes" }, { name: "Jump Rope", sets: "3 × 2 min" }, { name: "Stretching", sets: "10 Minutes" }]
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-black font-sans antialiased px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <header className="mb-16 text-center">
          <span className="uppercase tracking-[0.3em] text-xs text-gray-500 font-semibold mb-3 block">Wellness & Vitality</span>
          <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
            Normal <span className="italic font-serif">Fitness</span>
          </h1>
          <div className="inline-flex items-center gap-4 border-y border-gray-200 py-3 px-8 text-sm font-medium">
            DAILY MOVEMENT
          </div>
        </header>

        <nav className="flex gap-6 mb-12 border-b border-gray-200 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {Object.keys(workoutPlan).map((day) => (
            <button key={day} onClick={() => setSelectedDay(day)} className={`pb-4 text-sm uppercase tracking-widest transition-all relative ${selectedDay === day ? "text-black font-bold" : "text-gray-400 hover:text-black"}`}>
              {day}
              {selectedDay === day && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />}
            </button>
          ))}
        </nav>

        <div className="space-y-0 divide-y divide-gray-200">
          {workoutPlan[selectedDay].map((exercise, index) => (
            <div key={index} className="group py-6 flex justify-between items-center gap-4 hover:translate-x-2 transition-all duration-300">
              <h3 className="text-2xl font-light group-hover:italic">{exercise.name}</h3>
              <div className="text-right">
                <span className="text-sm font-serif italic text-gray-500 block mb-1">Duration</span>
                <span className="text-xl font-light tracking-tighter">{exercise.sets}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NormalExercise;