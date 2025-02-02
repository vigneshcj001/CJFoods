import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile"; 
import AboutImg from "../../images/aboutpg_img.png";

const AboutUs = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-5 space-y-5 lg:space-y-0">
      <div className="flex-1 p-5 text-lg font-bold">
        <h2>
          Welcome to{" "}
          <span className="font-bold text-lg">
            <Link to="/" className="text-[#009aff] hover:text-[#007acc]">
              CJ
            </Link>
            oods
          </span>
          ,<br />
          where every bite brings joy and freshness,<br />
          <span>making you feel better with each delicious meal.</span>
        </h2>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img className="w-full max-w-[500px] h-auto" src={AboutImg} alt="About Us Page" />
      </div>
      <div className="flex justify-center items-center">
        <button
          className="px-5 py-2 text-white bg-[#1b58a0] rounded-md hover:bg-[#007acc] mt-5"
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? "Hide My Profile" : "Show My Profile"}
        </button>
        {show && <Profile />} 
      </div>
    </div>
  );
};

export default AboutUs;
