import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./components/Layout/CartContext";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import Subscribe from "./pages/Subscribe";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Checkout from "./components/Cart/Checkout";
import Coaches from "./pages/coaches";
import BookSession from "./pages/BookSession";
import CreateOrder from "./pages/CreateOrder";

// Admin Pages Imports (Aapke original names)
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import ManageCoaches from "./admin/ManageCoaches";
import OrderHistory from "./admin/OrderHistory";
import BookingRequests from "./admin/BookingRequests";
import UserManagement from "./admin/UserManagement";

// Exercises
import FreeTrial from "./components/Exercises/free";
import WeightLoss from "./components/Exercises/freeEx/WeightLoss";
import WeightGain from "./components/Exercises/freeEx/WeightGain";
import Powerlifting from "./components/Exercises/freeEx/Powerlifting";
import NormalExercise from "./components/Exercises/freeEx/NormalExercise";
import Men from "./components/Exercises/Men";
import WGM from "./components/Exercises/manEx/WGM";
import WLM from "./components/Exercises/manEx/WLM";
import NM from "./components/Exercises/manEx/NM";
import PLM from "./components/Exercises/manEx/PLM";
import Women from "./components/Exercises/women";
import NW from "./components/Exercises/womenEx/NW";
import WGW from "./components/Exercises/womenEx/WGW";
import WLW from "./components/Exercises/womenEx/WLW";
import Cardio from "./components/Exercises/womenEx/cardio";

const LoginProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  return children;
};

const MembershipProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const hasMembership = localStorage.getItem("hasMembership") === "true";
  
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  if (!hasMembership) return <Navigate to="/subscribe" replace />;
  return children;
};

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          {/* USER SECTION */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="subscribe" element={<Subscribe />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            
            <Route path="coaches">
              <Route index element={<Coaches />} />
              <Route path="book-session" element={<BookSession />} />
            </Route>
            <Route path="/create-order" element={<CreateOrder />} />

            {/* ADMIN SECTION - CONNECTED AS REQUESTED */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="manage-coaches" element={<ManageCoaches />} />
              <Route path="order-history" element={<OrderHistory />} />
              <Route path="booking-requests" element={<BookingRequests />} />
              <Route path="user-management" element={<UserManagement />} />
            </Route>

            {/* FREE TRIAL SECTION */}
            <Route path="freeTrail" element={<LoginProtectedRoute><FreeTrial /></LoginProtectedRoute>} />
            <Route path="weight-loss-free" element={<LoginProtectedRoute><WeightLoss /></LoginProtectedRoute>} />
            <Route path="weight-gain-free" element={<LoginProtectedRoute><WeightGain /></LoginProtectedRoute>} />
            <Route path="powerlifting-free" element={<LoginProtectedRoute><Powerlifting /></LoginProtectedRoute>} />
            <Route path="normal-exercise-free" element={<LoginProtectedRoute><NormalExercise /></LoginProtectedRoute>} />
            
            <Route path="checkout" element={<LoginProtectedRoute><Checkout /></LoginProtectedRoute>} />
            
            {/* MEMBERSHIP SECTION */}
            <Route path="men" element={<MembershipProtectedRoute><Men /></MembershipProtectedRoute>} />
            <Route path="weight-gain" element={<MembershipProtectedRoute><WGM /></MembershipProtectedRoute>} />
            <Route path="weight-loss" element={<MembershipProtectedRoute><WLM /></MembershipProtectedRoute>} />
            <Route path="normal-exercise" element={<MembershipProtectedRoute><NM /></MembershipProtectedRoute>} />
            <Route path="power-lifting" element={<MembershipProtectedRoute><PLM /></MembershipProtectedRoute>} />
            
            <Route path="women" element={<MembershipProtectedRoute><Women /></MembershipProtectedRoute>} />
            <Route path="normal-exercise-women" element={<MembershipProtectedRoute><NW /></MembershipProtectedRoute>} />
            <Route path="weight-gain-women" element={<MembershipProtectedRoute><WGW /></MembershipProtectedRoute>} />
            <Route path="weight-loss-women" element={<MembershipProtectedRoute><WLW /></MembershipProtectedRoute>} /> 
            <Route path="cardio-women" element={<MembershipProtectedRoute><Cardio /></MembershipProtectedRoute>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;