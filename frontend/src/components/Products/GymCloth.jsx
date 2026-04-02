import { FiChevronLeft, FiChevronRight, FiPlus } from "react-icons/fi";
import { useRef, useState, useEffect } from "react";
import { useCart } from "../Layout/CartContext";

// Images
import Accessories from "./GymCloth/Accessories.png";
import Bag from "./GymCloth/Bag.png";
import Joggers from "./GymCloth/Joggers.png";
import Shirts from "./GymCloth/Shirts.png";
import Shorts from "./GymCloth/Shorts.png";
import Stringers from "./GymCloth/Stringers.png";
import TShirts from "./GymCloth/TShirts.png";
import wear from "./GymCloth/wear.png";

const ClothingArrivals = () => {
  const { addToCart } = useCart();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const products = [
    { id: 201, name: "Performance Accessories", price: "₹600", img: Accessories, tag: "Essential" },
    { id: 202, name: "Tactical Gym Bag", price: "₹690", img: Bag, tag: "Durable" },
    { id: 203, name: "Flex-Fit Joggers", price: "₹999", img: Joggers, tag: "Comfort" },
    { id: 204, name: "Compression Shirt", price: "₹499", img: Shirts, tag: "Pro-Fit" },
    { id: 205, name: "Training Shorts", price: "₹599", img: Shorts, tag: "Cool-Tech" },
    { id: 206, name: "Elite Stringer", price: "₹399", img: Stringers, tag: "Hardcore" },
    { id: 207, name: "Logo T-Shirt", price: "₹499", img: TShirts, tag: "Urban" },
    { id: 208, name: "Outer Wear Jacket", price: "₹649", img: wear, tag: "Limited" },
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
      setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth - 10);
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
    <section className="py-20 bg-[#F9F9F9] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Apparel Division</span>
            <h2 className="text-5xl font-black italic uppercase tracking-tighter mt-2">Gym Wear</h2>
          </div>
          <div className="flex gap-3">
            <button onClick={() => scroll("left")} disabled={!canScrollLeft} className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white disabled:opacity-20 transition-all"><FiChevronLeft size={24} /></button>
            <button onClick={() => scroll("right")} disabled={!canScrollRight} className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white disabled:opacity-20 transition-all"><FiChevronRight size={24} /></button>
          </div>
        </div>

        <div
          ref={scrollRef}
          onMouseDown={(e) => { setIsDragging(true); setStartX(e.pageX - scrollRef.current.offsetLeft); setScrollLeft(scrollRef.current.scrollLeft); }}
          onMouseLeave={() => setIsDragging(false)}
          onMouseUp={() => setIsDragging(false)}
          onMouseMove={(e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - scrollRef.current.offsetLeft;
            const walk = (x - startX) * 2;
            scrollRef.current.scrollLeft = scrollLeft - walk;
          }}
          className={`flex gap-8 overflow-x-auto pb-10 scrollbar-hide select-none transition-all ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-[320px] group">
              <div className="relative h-[420px] overflow-hidden rounded-[2rem] bg-white border border-gray-100 shadow-sm">
                <img src={product.img} alt={product.name} className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-110" />
                <span className="absolute top-6 left-6 bg-black text-white text-[9px] font-black px-3 py-1 uppercase rounded-full">{product.tag}</span>
                <button 
                  onClick={() => addToCart(product)}
                  className="absolute bottom-6 right-6 w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center translate-y-20 group-hover:translate-y-0 transition-all duration-300 shadow-xl hover:bg-blue-600"
                >
                  <FiPlus size={20} />
                </button>
              </div>
              <div className="mt-6 flex justify-between items-start px-2">
                <div>
                  <h3 className="text-lg font-black uppercase italic tracking-tight">{product.name}</h3>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1">High Performance Fabric</p>
                </div>
                <p className="text-xl font-black text-blue-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClothingArrivals;