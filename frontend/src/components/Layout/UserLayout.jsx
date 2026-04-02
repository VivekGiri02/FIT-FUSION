import Header from "../Common/Header";
import Footer from "../Common/Footer";
import FeaturesSection from "../Products/FeaturesSection";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Outlet />
      
      <FeaturesSection />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default UserLayout;
