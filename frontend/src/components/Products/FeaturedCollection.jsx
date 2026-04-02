import { Link } from "react-router-dom";
import featured from "../../assets/gym2.jpg";

const FeaturedCollection = () => {
  return (
    // Changed px-44 to px-4 for mobile, and lg:px-20 or lg:px-44 for desktop
    <section className="py-12 lg:py-16 px-4 md:px-12 lg:px-20">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-[#F8F5F0] rounded-3xl overflow-hidden">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-16 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div>
            <h2 className="text-sm md:text-lg font-semibold text-gray-700 mb-2 uppercase tracking-wide">
              Strength and Discipline
            </h2>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Built for Your Gym Lifestyle
            </h2>

            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              Discover powerful workouts, bodybuilding routines, and fitness tips designed
              to help you build muscle, increase strength, and stay consistent in the gym.
              Train harder, push your limits, and become the strongest version of yourself
              every day.
            </p>
          </div>

          {/* Button - Added w-fit to keep it from stretching on mobile */}
          <Link
            to="/freeTrail"
            className="w-fit bg-black text-white px-10 py-4 md:px-12 md:py-5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300 shadow-xl"
          >
            View Trial
          </Link>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 h-64 md:h-96 lg:h-full">
          <img
            src={featured}
            alt="Featured Collection"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default FeaturedCollection;