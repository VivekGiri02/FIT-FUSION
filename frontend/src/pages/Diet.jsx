import { useState } from "react";
import { FiZap, FiDroplet, FiTarget, FiActivity } from "react-icons/fi";

const Diet = () => {
  const [activeDiet, setActiveDiet] = useState(null);

  const dietPlans = [
  {
    id: 1,
    title: "Muscle Gain (Bulking)",
    icon: <FiZap />,
    color: "border-orange-600",
    meals: {
      Breakfast: "5 Egg Whites + 2 Whole Eggs + 100g Oats with Milk & Honey + 1 Banana",
      PreWorkout: "1 Cup Black Coffee + 2 Brown Bread with Peanut Butter + 5g Creatine",
      PostWorkout: "1 Scoop Whey Protein + 1 Large Banana or 50g Dextrose",
      Lunch: "200g Chicken Breast / Paneer + 150g Brown Rice + Dal + Green Salad",
      Snack: "Handful of Walnuts & Almonds + 1 Apple",
      Dinner: "150g Fish / Soya Chunks + 2 Chapatis + Sweet Potato + Curd",
      Hydration: "4-5 Liters of water daily"
    }
  },
  {
    id: 2,
    title: "Weight Loss (Shredding)",
    icon: <FiDroplet />,
    color: "border-blue-500",
    meals: {
      Breakfast: "Oatmeal with Skimmed Milk + 4 Egg Whites (No Yolk) + Green Tea",
      PreWorkout: "Black Coffee + 1 Apple + L-Carnitine",
      PostWorkout: "1 Scoop Whey Protein in Water + 5-6 Soaked Almonds",
      Lunch: "Grilled Chicken/Tofu + Massive Bowl of Steamed Broccoli & Zucchini",
      Snack: "1 Bowl of Papaya or Watermelon + Green Tea",
      Dinner: "Roasted Paneer / Lean Fish + Clear Vegetable Soup + Minimal Rice",
      Hydration: "3-4 Liters of water daily"
    }
  },
  {
    id: 3,
    title: "Extreme Fat Loss",
    icon: <FiActivity />,
    color: "border-red-500",
    meals: {
      Breakfast: "Moong Dal Chilla / Sprouts + 1 Glass Lemon Water (No Sugar)",
      PreWorkout: "Strong Black Coffee (Sugar-free) + Multi-vitamin",
      PostWorkout: "Boiled Egg Whites (5) + 1 Cucumber",
      Lunch: "1 Small Multigrain Roti + 1 Bowl Sabzi + Curd (Pro-biotic) + Huge Salad",
      Snack: "Boiled Chana / Roasted Makhana (Low salt)",
      Dinner: "Sautéed Spinach & Mushroom + Soya Salad + Apple before 8 PM",
      Hydration: "4 Liters (Add electrolytes if doing HIIT)"
    }
  },
  {
    id: 4,
    title: "Performance Maintain",
    icon: <FiTarget />,
    color: "border-green-500",
    meals: {
      Breakfast: "2 Whole Wheat Toasts + Peanut Butter + 1 Glass of Low-fat Milk",
      PreWorkout: "Handful of Roasted Gram (Chana) + 1 Fruit",
      PostWorkout: "1 Glass of Chocolate Milk / Fruit Smoothie",
      Lunch: "Balanced Home Food: 1 Bowl Dal + 1 Bowl Rice + 2 Roti + Mix Sabzi",
      Snack: "Seasonal Fruit Bowl + 1 Cup Curd",
      Dinner: "Light Veg Khichdi / Grilled Veg Sandwich + 1 Cup Turmeric Milk",
      Hydration: "3 Liters of water daily"
    }
  }
];

  return (
    <div className="min-h-screen bg-[#F8F5F0] px-6 py-10">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-black">Diet Plans</h1>
        <p className="text-gray-600 mt-2">
          Choose a diet plan based on your goal and follow it daily.
        </p>
      </div>

      {!activeDiet && (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {dietPlans.map((diet) => (
            <div
              key={diet.id}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
              onClick={() => setActiveDiet(diet)}
            >
              <div className="text-2xl mb-2">{diet.icon}</div>
              <h2 className="text-xl font-semibold">{diet.title}</h2>
              <p className="text-gray-500 text-sm mt-1">Click to view full plan</p>
            </div>
          ))}
        </div>
      )}

      {activeDiet && (
        <div className="max-w-4xl mx-auto">
          
          <button
            onClick={() => setActiveDiet(null)}
            className="mb-6 text-black font-semibold"
          >
            ← Back
          </button>

          <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
            <h2 className="text-2xl font-bold">{activeDiet.title}</h2>

            <div className="space-y-4">
              {Object.entries(activeDiet.meals).map(([time, food]) => (
                <div key={time} className="border p-4 rounded-lg">
                  <p className="font-semibold">{time}</p>
                  <p className="text-gray-600 text-sm">{food}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-2">Tips</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Drink 3-4 liters of water daily</li>
                <li>• Avoid junk food</li>
                <li>• Follow the diet consistently</li>
                <li>• Combine with proper workout</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold text-black mb-4">
          Why Diet is Important?
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Diet plays a major role in fitness. Without proper nutrition, your body cannot recover or grow.
          A good diet helps in muscle building, fat loss, and overall health improvement.
        </p>
      </div>

    </div>
  );
};

export default Diet;