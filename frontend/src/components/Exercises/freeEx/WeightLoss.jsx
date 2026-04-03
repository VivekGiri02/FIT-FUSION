import { useState } from "react";

const WeightLoss = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");

  const workoutPlan = {
    Monday: [
      { name: "Bench Press", sets: "3 × 12", muscle: "Chest" },
      { name: "Incline Dumbbell Press", sets: "3 × 12", muscle: "Chest" },
      { name: "Chest Fly", sets: "3 × 12", muscle: "Chest" },
      { name: "Tricep Pushdown", sets: "3 × 12", muscle: "Triceps" },
      { name: "Overhead Tricep Extension", sets: "3 × 12", muscle: "Triceps" }
    ],
    Tuesday: [
      { name: "Lat Pulldown", sets: "3 × 12", muscle: "Back" },
      { name: "Seated Row", sets: "3 × 12", muscle: "Back" },
      { name: "Deadlift", sets: "3 × 10", muscle: "Back/Legs" },
      { name: "Barbell Curl", sets: "3 × 12", muscle: "Biceps" },
      { name: "Hammer Curl", sets: "3 × 12", muscle: "Biceps" }
    ],
    Wednesday: [
      { name: "Squats", sets: "3 × 12", muscle: "Legs" },
      { name: "Leg Press", sets: "3 × 12", muscle: "Legs" },
      { name: "Leg Curl", sets: "3 × 12", muscle: "Legs" },
      { name: "Shoulder Press", sets: "3 × 12", muscle: "Shoulders" },
      { name: "Lateral Raises", sets: "3 × 12", muscle: "Shoulders" }
    ],
    Thursday : [
      { name: "Bench Press", sets: "3 × 12", muscle: "Chest" },
      { name: "Incline Dumbbell Press", sets: "3 × 12", muscle: "Chest" },
      { name: "Chest Fly", sets: "3 × 12", muscle: "Chest" },
      { name: "Tricep Pushdown", sets: "3 × 12", muscle: "Triceps" },
      { name: "Overhead Tricep Extension", sets: "3 × 12", muscle: "Triceps" }
    ],
    Friday: [
      { name: "Lat Pulldown", sets: "3 × 12", muscle: "Back" },
      { name: "Seated Row", sets: "3 × 12", muscle: "Back" },
      { name: "Deadlift", sets: "3 × 10", muscle: "Back/Legs" },
      { name: "Barbell Curl", sets: "3 × 12", muscle: "Biceps" },
      { name: "Hammer Curl", sets: "3 × 12", muscle: "Biceps" }
    ],
    Saturday: [
      { name: "Squats", sets: "3 × 12", muscle: "Legs" },
      { name: "Leg Press", sets: "3 × 12", muscle: "Legs" },
      { name: "Leg Curl", sets: "3 × 12", muscle: "Legs" },
      { name: "Shoulder Press", sets: "3 × 12", muscle: "Shoulders" },
      { name: "Lateral Raises", sets: "3 × 12", muscle: "Shoulders" }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-black font-sans antialiased px-6 py-16">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-16 text-center">
          <span className="uppercase tracking-[0.3em] text-xs text-gray-500 font-semibold mb-3 block">
            Personal Training
          </span>
          <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
            Weight <span className="italic font-serif">Loss</span> Plan
          </h1>
          <div className="inline-flex items-center gap-4 border-y border-gray-200 py-3 px-8">
            <span className="text-gray-400 text-sm uppercase tracking-widest">Cardio</span>
            <span className="h-1 w-1 bg-gray-300 rounded-full"></span>
            <span className="text-sm font-medium">45 MIN TREADMILL</span>
          </div>
        </header>

        {/* Navigation */}
        <nav className="flex justify-start gap-6 mb-12 border-b border-gray-200 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {Object.keys(workoutPlan).map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`pb-4 text-sm uppercase tracking-widest transition-all relative ${
                selectedDay === day 
                  ? "text-black font-bold" 
                  : "text-gray-400 hover:text-black"
              }`}
            >
              {day}
              {selectedDay === day && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />
              )}
            </button>
          ))}
        </nav>

        {/* Workout List */}
        <div className="space-y-0 divide-y divide-gray-200">
          {workoutPlan[selectedDay].map((exercise, index) => (
            <div
              key={index}
              className="group py-6 flex justify-between items-center gap-4 hover:px-4 transition-all duration-300"
            >
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                  Exercise {index + 1} — {exercise.muscle}
                </span>
                <h3 className="text-2xl font-light group-hover:italic transition-all">
                  {exercise.name}
                </h3>
              </div>
              
              <div className="text-right">
                <span className="text-sm font-serif italic text-gray-500 block mb-1">Repetitions</span>
                <span className="text-xl font-light tracking-tighter">
                  {exercise.sets}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Subtle Detail */}
        <footer className="mt-20 pt-8 border-t border-gray-200 text-center">
          <p className="text-[10px] tracking-[0.2em] text-gray-400 uppercase">
            Consistency is the ultimate sophistication
          </p>
        </footer>
      </div>
    </div>
  );
};

export default WeightLoss;