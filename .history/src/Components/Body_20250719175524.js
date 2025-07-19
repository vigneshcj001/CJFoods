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
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    let currentTyping = "";
    let isDeleting = false;
    let charIndex = 0;

    const type = () => {
      const fullPhrase = typingPhrases[phraseIndex];

      if (isDeleting) {
        currentTyping = fullPhrase.substring(0, charIndex - 1);
        charIndex--;
      } else {
        currentTyping = fullPhrase.substring(0, charIndex + 1);
        charIndex++;
      }

      setCurrentText(currentTyping);

      if (!isDeleting && currentTyping === fullPhrase) {
        isDeleting = true;
        setTimeout(type, 2000); // Pause at end
      } else if (isDeleting && currentTyping === "") {
        isDeleting = false;
        setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
      } else {
        const typingSpeed = isDeleting ? 50 : 120;
        setTimeout(type, typingSpeed);
      }
    };

    const timeoutId = setTimeout(type, 120);
    return () => clearTimeout(timeoutId);
  }, [phraseIndex]);

  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-16">
      {/* Text Section */}
      <div className="flex-1 text-center lg:text-left p-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400 mb-4 h-20">
          {currentText}
          <span className="inline-block bg-blue-500 w-1 h-12 align-middle animate-pulse ml-1"></span>
        </h1>
        <p className="text-lg text-gray-600 font-sans mt-4 mb-8 max-w-xl mx-auto lg:mx-0">
          Your one-stop destination for a culinary adventure! Order now and
          indulge in a world of flavors, delivered right to your doorstep.
        </p>
        <Link
          to="/restaurants"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          Order Now
        </Link>
      </div>

      {/* Image Section */}
      <div className="flex-1 mt-12 lg:mt-0 flex justify-center items-center">
        <img
          src={BodyImg}
          alt="A delicious spread of food from CJFoods"
          className="w-full max-w-md lg:max-w-xl transform hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
};

export default Body;
