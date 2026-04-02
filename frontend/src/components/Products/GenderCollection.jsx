import { Link } from "react-router-dom";
import gymb from "../../assets/gymb.jpg";
import gymg from "../../assets/gymg.jpg";

const GenderCollection = () => {
  // Check membership to show "Premium" badge (Optional UI hint)
  const hasMembership = localStorage.getItem("hasMembership") === "true";

  const collections = [
    {
      id: "men",
      title: "Men's Zone",
      img: gymb,
      path: "/men",
      accent: "border-black"
    },
    {
      id: "women",
      title: "Women's Zone",
      img: gymg,
      path: "/women",
      accent: "border-orange-500"
    }
  ];

  return (
    <section className="py-16 px-4 lg:px-0 bg-[#F8F5F0]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {collections.map((item) => (
            <div key={item.id} className="relative flex-1 group overflow-hidden rounded-[2rem]">
              {/* Image with Hover Zoom */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[700px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* Content Box */}
              <div className="absolute bottom-10 left-10 right-10 flex flex-col items-start transition-all duration-500 transform group-hover:-translate-y-2">
                {!hasMembership && (
                  <span className="bg-orange-500 text-white text-[10px] font-black px-3 py-1 mb-4 rounded-full uppercase tracking-widest">
                    Premium-Zone
                  </span>
                )}
                
                <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter mb-4">
                  {item.title}
                </h2>

                <Link
                  to={item.path}
                  className={`bg-white text-black px-8 py-4 text-xs font-black uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-colors duration-300 rounded-sm border-l-4 ${item.accent}`}
                >
                  Explore Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenderCollection;