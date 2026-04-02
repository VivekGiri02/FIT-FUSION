import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiInstagram, FiTwitter } from "react-icons/fi";

// Aapke images imports
import siddhant from "./coachesimg/siddhant.png";
import priya from "./coachesimg/Priya.png";
import mukesh from "./coachesimg/mukesh.png";
import neha from "./coachesimg/neha.png";
import yash from "./coachesimg/yash.png";
import rajat from "./coachesimg/rajat.png";
import Diet from "./Diet";

const Coaches = () => {
  const navigate = useNavigate();
  const [selectedCoach, setSelectedCoach] = useState(null);

  const coaches = [
    {
      id: 1,
      name: "Siddhant jaiswal",
      role: "Strength Coach",
      experience: "8 Years",
      speciality: "Powerlifting & Muscle Gain",
      image: siddhant,
      desc: "Certified trainer helping clients build strength and muscle with proper form.",
      fullBio: "Siddhant Jaiswal has trained over 500+ athletes in competitive powerlifting. His philosophy is 'Form over Weight'.",
    },
    {
      id: 2,
      name: "Priya Verma",
      role: "Weight Loss Expert",
      experience: "6 Years",
      speciality: "Fat Loss & Diet Planning",
      image: priya,
      desc: "Helps in sustainable fat loss with customized workout and diet plans.",
      fullBio: "Priya specializes in hormonal health and sustainable fat loss. She believes in lifestyle evolution.",
    },
    {
      id: 3,
      name: "Mukesh Singh Gahlot",
      role: "Fitness Trainer",
      experience: "20 Years",
      speciality: "General Fitness",
      image: mukesh,
      desc: "Focuses on overall body fitness and stamina building.",
      fullBio: "Aman is known for his high-energy functional training sessions. He believes fitness should be fun.",
    },
    {
      id: 4,
      name: "Neha Kapoor",
      role: "Women Fitness Coach",
      experience: "7 Years",
      speciality: "Women Transformation",
      image: neha,
      desc: "Specially trained for women fitness and body toning programs.",
      fullBio: "Neha has helped thousands of women regain confidence post-pregnancy through strength training.",
    },
    {
      id: 5,
      name: "Yash Anand",
      role: "Mobility & Gym Coach",
      experience: "8 Years",
      speciality: "Flexibility & Rehab",
      image: yash,
      desc: "Master of movement who blends traditional yoga with modern mobility science.",
      fullBio: "Vikram focuses on longevity. He helps heavy lifters regain their range of motion.",
    },
    {
      id: 6,
      name: "Rajat-Dalal",
      role: "Power-Lifter",
      experience: "10+",
      speciality: "Crossfit & Agility",
      image: rajat,
      desc: "Builds real-world strength and explosive power through functional movements.",
      fullBio: "Arjun's workouts are intense and data-driven. He specializes in metabolic conditioning.",
    }
  ];

  // --- COACH PROFILE VIEW ---
  if (selectedCoach) {
    return (
      <div className="min-h-screen bg-[#F8F5F0] px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => setSelectedCoach(null)}
            className="flex items-center gap-2 text-black font-bold uppercase text-xs mb-8 hover:text-orange-600 transition"
          >
            <FiArrowLeft /> Back to Coaches
          </button>

          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/2 h-[400px] md:h-auto bg-gray-200">
              <img src={selectedCoach.image} alt={selectedCoach.name} className="w-full h-full object-cover" />
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 p-10 space-y-6">
              <div>
                <span className="text-orange-600 font-black uppercase text-[10px] tracking-[0.3em]">{selectedCoach.role}</span>
                <h2 className="text-4xl font-black uppercase italic tracking-tighter mt-1">{selectedCoach.name}</h2>
              </div>

              <div className="grid grid-cols-2 gap-4 border-y border-gray-100 py-6">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold">Experience</p>
                  <p className="font-bold text-black">{selectedCoach.experience}</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold">Speciality</p>
                  <p className="font-bold text-black">{selectedCoach.speciality}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-black uppercase tracking-widest">Biography</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{selectedCoach.fullBio}</p>
              </div>

              <div className="pt-6 flex gap-4">
                {/* Book Session Button with Navigation State */}
                <button 
                  onClick={() => navigate("/coaches/book-session", { state: { coach: selectedCoach } })}
                  className="flex-1 bg-black text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-orange-600 transition shadow-lg"
                >Book a Session</button>
                
                <div className="flex gap-2">
                  <button className="w-12 h-12 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50"><FiInstagram /></button>
                  <button className="w-12 h-12 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50"><FiTwitter /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- COACHES LIST VIEW ---
  return (
    <div className="min-h-screen bg-[#F8F5F0] px-6 py-20">
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-6xl font-black text-black uppercase italic tracking-tighter">Our Coaches</h1>
        <p className="text-gray-500 mt-4 uppercase tracking-[0.2em] text-[10px] font-bold border-l-4 border-orange-600 pl-4">
          Meet the professional architects of your evolution.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {coaches.map((coach) => (
          <div
            key={coach.id}
            className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
          >
            <div className="h-64 bg-gray-100 overflow-hidden">
               <img src={coach.image} alt={coach.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>

            <div className="p-8">
              <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">{coach.role}</span>
              <h2 className="text-2xl font-black text-black uppercase italic tracking-tighter mt-1">{coach.name}</h2>

              <div className="mt-4 space-y-1 text-[11px] text-gray-500 uppercase font-bold tracking-widest">
                <p><span className="text-gray-300">Exp:</span> {coach.experience}</p>
                <p><span className="text-gray-300">Spec:</span> {coach.speciality}</p>
              </div>

              <p className="text-gray-500 text-xs mt-4 leading-relaxed line-clamp-2">{coach.desc}</p>

              <button 
                onClick={() => setSelectedCoach(coach)}
                className="mt-8 w-full bg-black text-white py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] group-hover:bg-orange-600 transition-colors"
              >
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
      <Diet/>
    </div>
  );
};

export default Coaches;