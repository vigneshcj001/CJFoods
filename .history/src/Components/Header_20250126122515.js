import React, { useState, useCallback } from "react";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import NavBar from "./NavBar";
import Logo from "./Logo";
import { useContext } from "react";
import Context from "../Utils/Context";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(Context);

  // Toggle login/logout state
  const handleLoginLogout = useCallback(() => {
    setIsLoggedIn((prevState) => !prevState);
  }, []);

  const statusIcon = onlineStatus ? "🟢" : "🔴";

  return (
    <header className="flex justify-between items-center px-6 py-2 bg-white sticky top-0 z-30">
      <Logo />
      <div className="flex items-center gap-4">
        <NavBar />
        <span className="text-lg flex items-center">
          {statusIcon}
          <span className="sr-only">{onlineStatus ? "Online" : "Offline"}</span>
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handleLoginLogout}
          aria-label={isLoggedIn ? "Logout" : "Login"}
          className="w-24 px-4 py-2 bg-blue-500 text-white rounded-md text-lg font-medium transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
      <div>
        <p className="text-lg font-bold">User: {loggedInUser}</p>
      </div>
    </header>
  );
};

export default Header;
