import React, { useState, useEffect } from "react";
import BodyImg from "../../images/bodyImg.png";
import { Link } from "react-router-dom";

const typingPhrases = [
  "CJFoods are DELICIOUS",
  "CJFoods are FAST",
  "CJFoods are AFFORDABLE",
];

const Body = () => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typeText = () => {
      if (charIndex < typingPhrases[index].length) {
        setCurrentText((prev) => prev + typingPhrases[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCurrentText("");
          setCharIndex(0);
          setIndex((prev) => (prev + 1) % typingPhrases.length);
        }, 1500);
      }
    };

    const timeout = setTimeout(typeText, 100);
    return () => clearTimeout(timeout);
  }, [charIndex, index]);

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-10 py-20">
      {/* Text Section */}
      <div className="flex-1 p-7">
        <h1 className="text-4xl font-medium text-blue-500 mb-4">
          {currentText}
          <span className="inline-block bg-textPrimary w-1 h-6 animate-pulse ml-1"></span>
        </h1>
        <p className="text-lg font-sans mt-4 mb-6">
          Your one-stop destination for a culinary adventure! Order now and
          indulge in a world of flavors, delivered right to your doorstep.
        </p>
        <div className="flex flex-col lg:flex-row gap-4">
          <Link
            to="/restaurants"
            className="px-6 py-3 bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-indigo-500 transition-all"
          >
            Order Now
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 mt-8 lg:mt-0 flex justify-center items-center">
        <img
          src={BodyImg}
          alt="CJFoods"
          className="w-full max-w-lg lg:max-w-xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Body;
