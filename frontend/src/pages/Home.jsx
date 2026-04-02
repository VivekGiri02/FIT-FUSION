import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollection";
import NewArrivals from "../components/Products/NewArrival";
import GymCloth from "../components/Products/GymCloth";
import FeaturedCollection from "../components/Products/FeaturedCollection";
const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      <GymCloth />
      <FeaturedCollection />
    </div>
  );
};

export default Home;