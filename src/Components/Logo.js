import React from "react";
import { Link } from "react-router-dom";
import CJLOGO from "../../images/logo.png";

const Logo = () => (
  <div className="flex-shrink-0 mb-4 sm:mb-0">
    <Link to="/">
      <img className="w-28 cursor-pointer" src={CJLOGO} alt="CJ logo" />
    </Link>
  </div>
);

export default Logo;
