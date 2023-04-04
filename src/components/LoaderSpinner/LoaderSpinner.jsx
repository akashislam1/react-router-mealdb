import React from "react";

const LoaderSpinner = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-68px)] ">
      <p className="text-7xl font-thin">L</p>
      <p className="w-10 h-10 border-4 border-dashed rounded-full animate-spin mt-5 border-blue-400"></p>
      <p className="text-7xl font-thin">ading</p>
    </div>
  );
};

export default LoaderSpinner;
