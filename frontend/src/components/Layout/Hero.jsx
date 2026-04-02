import { Link } from "react-router-dom";
import gym1 from "../../assets/gym1.jpg";

const Hero = () => {
  return (
    <section className="relative h-[400px] md:h-[600px] lg:h-[750px]">
      <img
        src={gym1}
        alt="Gym background"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-[#F8F5F0] text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
            Muscle Up<br /> Move Forward
          </h1>

        <p className="text-[#F8F5F0] text-sm tracking-tighter md:text-lg mb-6">
            Achieve peak performance with our curated collections.
        </p>
          <Link  to="/coaches"
            className="bg-[#F8F5F0] text-black px-12 py-5 rounded-full text-[12px] font-black uppercase tracking-[0.4em] hover:bg-orange-600 hover:text-white transition-all duration-500 shadow-2xl"
            >Explor Now</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;