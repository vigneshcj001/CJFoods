import React from "react";

const Shimmer = () => {
  return (
    <div className="w-full px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {Array(6)
          .fill("")
          .map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-4 animate-pulse">
              <div className="w-full h-40 bg-gray-200 rounded-md"></div>
              <div className="mt-4 space-y-2">
                <div className="h-6 bg-gray-200 rounded-md"></div>
                <div className="h-4 bg-gray-200 rounded-md"></div>
                <div className="h-4 bg-gray-200 rounded-md"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
