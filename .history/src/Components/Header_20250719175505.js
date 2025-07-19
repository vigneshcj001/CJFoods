import React, { useState, useCallback, useContext } from "react";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import NavBar from "./NavBar";
import Logo from "./Logo";
import Context from "../Utils/Context";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(Context);

  const handleLoginLogout = useCallback(() => {
    setIsLoggedIn((prevState) => !prevState);
  }, []);

  const statusColor = onlineStatus ? "bg-green-500" : "bg-red-500";
  const statusTitle = onlineStatus ? "Online" : "Offline";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        <Logo />
        <div className="flex items-center gap-6">
          <NavBar />
          <div className="flex items-center gap-2" title={statusTitle}>
            <span className={`w-3 h-3 rounded-full ${statusColor} animate-pulse`}></span>
            <span className="sr-only">{statusTitle}</span>
          </div>
          <p className="text-sm font-medium text-gray-700 hidden sm:block">
            Welcome, <span className="font-bold text-blue-600">{loggedInUser}</span>
          </p>
          <Link to={isLoggedIn ? "/" : "/login"}>
             <button
              onClick={handleLoginLogout}
              aria-label={isLoggedIn ? "Logout" : "Login"}
              className="w-28 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md transform hover:scale-105 hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;