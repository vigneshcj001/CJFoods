import React, { useState, useEffect, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

// --- Global Styles & Components ---
import "../index.css";
import Header from "./Components/Header";
import FullScreenLoader from "./Components/FullScreenLoader"; // A loader for suspense
import appStore from "./Utils/appStore";
import UserContext from "./Utils/Context";

// --- Lazy-loaded Page Components ---
const Body = lazy(() => import("./Components/Body"));
const RestaurantSection = lazy(() => import("./Components/RestaurantSection"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const RestaurantMenu = lazy(() => import("./pages/RestaurantMenu"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Cart = lazy(() => import("./Components/Cart"));
const LoginForm = lazy(() => import("./pages/LoginForm"));
const ErrorWrapper = lazy(() => import("./pages/ErrorWrapper"));

const App = () => {
  const [userName, setUserName] = useState("Guest");

  useEffect(() => {
    // In a real app, you'd fetch this from an API
    setUserName("Vignesh");
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Router>
          <Header />
          <main className="pt-20 bg-gray-50 min-h-screen">
            <Suspense fallback={<FullScreenLoader />}>
              <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/restaurants" element={<RestaurantSection />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/restaurants/:restaurantId" element={<RestaurantMenu />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="*" element={<ErrorWrapper />} />
              </Routes>
            </Suspense>
          </main>
        </Router>
      </UserContext.Provider>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);