import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../index.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import RestaurantSection from "./Components/RestaurantSection";
import RestaurantMenu from "./pages/RestaurantMenu";
import AboutUs from "./pages/AboutUs";
import ErrorWrapper from "./pages/ErrorWrapper";
import ContactUs from "./pages/ContactUs";
import Cart from "./Components/Cart";
import LoginForm from "./pages/LoginForm";
import UserContext from "./Utils/Context";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";

const App = () => {
  // State to manage the logged-in user's name
  const [userName, setUserName] = useState("");

  // Simulate fetching user data on component mount
  useEffect(() => {
    setUserName("Vignesh"); // Example user data
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/restaurants" element={<RestaurantSection />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route
              path="/restaurants/:restaurantId"
              element={<RestaurantMenu />}
            />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="*" element={<ErrorWrapper />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </Provider>
  );
};

// Render the React application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
