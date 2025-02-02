import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
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
    const data = { name: "Vignesh" }; // Example data
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

// Define routes for the application
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorWrapper />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurants",
        element: <RestaurantSection />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/restaurants/:restaurantId",
        element: <RestaurantMenu />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

// Render the React application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
