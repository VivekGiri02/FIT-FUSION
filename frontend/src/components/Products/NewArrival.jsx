import { FiChevronLeft, FiChevronRight, FiPlus } from "react-icons/fi";
import { useRef, useState, useEffect } from "react";
import { useCart } from "../Layout/CartContext";

// Images
import protien from "./NewArrivalimage/protien.png";
import creatin from "./NewArrivalimage/creatin.png";
import fishoil from "./NewArrivalimage/fishoil.png";
import preworkout from "./NewArrivalimage/preworkout.png";
import protienbar from "./NewArrivalimage/protienbar.png";
import PeanutButter from "./NewArrivalimage/PeanutButter.png";
import Vitamin from "./NewArrivalimage/VITAMIN.png";
import Multivitamins from "./NewArrivalimage/Multivitamins.png";

const SupplementArrivals = () => {
  const { addToCart } = useCart();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const products = [
    { id: 101, name: "Whey Protein", price: "₹2200", img: protien, tag: "Best Seller" },
    { id: 102, name: "Micronized Creatine", price: "₹630", img: creatin, tag: "Strength" },
    { id: 103, name: "Omega-3 Fish Oil", price: "₹350", img: fishoil, tag: "Health" },
    { id: 104, name: "Pre-Workout Engine", price: "₹400", img: preworkout, tag: "High Energy" },
    { id: 105, name: "Protein Crisp Bar", price: "₹80", img: protienbar, tag: "Snack" },
    { id: 106, name: "Peanut Butter", price: "₹449", img: PeanutButter, tag: "Nutrition" },
    { id: 107, name: "Vitamin D3", price: "₹399", img: Vitamin, tag: "Daily" },
    { id: 108, name: "Multivitamins", price: "₹550", img: Multivitamins, tag: "Essential" },
  ];

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === "left" ? -400 : 400;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft + container.clientWidth <
          container.scrollWidth - 10
      );
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      updateScrollButtons();
      container.addEventListener("scroll", updateScrollButtons);
    }
    return () => container?.removeEventListener("scroll", updateScrollButtons);
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden border-b">
      <div className="container mx-auto px-6">

        {/* FIXED RESPONSIVE HEADER */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-6">
          
          <div>
            <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">
              Performance Gear
            </span>
            <h2 className="text-5xl font-black italic uppercase tracking-tighter mt-2">
              New Supplements
            </h2>
          </div>

          <div className="flex gap-3 self-end md:self-auto">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white disabled:opacity-20 transition-all"
            >
              <FiChevronLeft size={24} />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white disabled:opacity-20 transition-all"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          onMouseDown={(e) => {
            setIsDragging(true);
            setStartX(e.pageX - scrollRef.current.offsetLeft);
            setScrollLeft(scrollRef.current.scrollLeft);
          }}
          onMouseLeave={() => setIsDragging(false)}
          onMouseUp={() => setIsDragging(false)}
          onMouseMove={(e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - scrollRef.current.offsetLeft;
            const walk = (x - startX) * 2;
            scrollRef.current.scrollLeft = scrollLeft - walk;
          }}
          className={`flex gap-8 overflow-x-auto pb-10 scrollbar-hide select-none transition-all ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-[320px] group">
              <div className="relative h-[420px] overflow-hidden rounded-[2rem] bg-[#F3F3F3]">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                />

                <span className="absolute top-6 left-6 bg-white text-black text-[9px] font-black px-3 py-1 uppercase rounded-full shadow-sm">
                  {product.tag}
                </span>

                <button
                  onClick={() => addToCart(product)}
                  className="absolute bottom-6 right-6 w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center translate-y-0 md:translate-y-20 md:group-hover:translate-y-0 transition-all duration-300 shadow-xl hover:bg-blue-600"
                >
                  <FiPlus size={20} />
                </button>
              </div>

              <div className="mt-6 flex justify-between items-start px-2">
                <div>
                  <h3 className="text-lg font-black uppercase italic tracking-tight">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1">
                    Laboratory Tested
                  </p>
                </div>

                <p className="text-xl font-black text-orange-600">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SupplementArrivals;