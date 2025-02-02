import React from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/aboutus", label: "About Us" },
    { to: "/contactus", label: "Contact Us" },
    {
      to: "/cart",
      label: (
        <span className="flex items-center space-x-1 text-gray-700 hover:text-blue-500">
          <FaShoppingCart className="text-2xl" />
          <span className="text-lg font-medium">{cartItems.length}</span>
        </span>
      ),
    },
  ];

  return (
    <nav aria-label="Main Navigation" className="flex-grow p-5">
      <ul className="flex flex-col sm:flex-row items-center justify-end gap-6">
        {navItems.map((item) => (
          <li key={item.to} className="flex-shrink-0">
            <Link
              to={item.to}
              className="text-gray-700 font-medium text-lg transition-colors duration-300 hover:text-blue-500"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
