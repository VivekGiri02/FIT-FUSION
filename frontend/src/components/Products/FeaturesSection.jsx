import { HiOutlineCreditCard, HiOutlineFire, HiArrowPathRoundedSquare } from "react-icons/hi2";

const FeaturesSection = () => {
  return (
    <section className="p-16 px-4 bg-[#F8F5F0]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="p-6 bg-[#111111] text-white rounded-full mb-4 shadow-lg">
            <HiOutlineFire className="text-2xl" />
          </div>
          <h4 className="tracking-tighter mb-2 text-[#111111] font-semibold">
            PERSONALIZED TRAINING
          </h4>
          <p className="text-[#6B6B6B] text-sm tracking-tighter">
            Tailored workout plans for all fitness levels
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="p-6 bg-[#111111] text-white rounded-full mb-4 shadow-lg">
            <HiArrowPathRoundedSquare className="text-2xl" />
          </div>
          <h4 className="tracking-tighter mb-2 text-[#111111] font-semibold">
            45-DAY PROGRESS TRACKING
          </h4>
          <p className="text-[#6B6B6B] text-sm tracking-tighter">
            Track your body transformation and milestones
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <div className="p-6 bg-[#111111] text-white rounded-full mb-4 shadow-lg">
            <HiOutlineCreditCard className="text-2xl" />
          </div>
          <h4 className="tracking-tighter mb-2 text-[#111111] font-semibold">
            SECURE MEMBERSHIP
          </h4>
          <p className="text-[#6B6B6B] text-sm tracking-tighter">
            100% safe and hassle-free registration process
          </p>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;