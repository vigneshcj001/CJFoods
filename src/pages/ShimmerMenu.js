export const ShimmerHeader = () => (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-6 shadow-md rounded-md mb-6">
      <div className="sm:w-1/2 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
      <div className="sm:w-1/2 flex flex-col items-end animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      </div>
    </div>
  );
export const ShimmerMenuItem = () => (
    <div className="flex items-center justify-between py-4 animate-pulse">
      <div className="w-24 h-24 bg-gray-200 rounded-md"></div>
      <div className="flex-1 mx-6">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
      <div className="w-16 h-8 bg-gray-200 rounded-md"></div>
    </div>
  );