import React from "react";

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="mt-16 sm:mt-8 lg:mt-12 mb-8 lg">
      <h3 className="text-3xl lg:text-4xl font-semibold">{children}</h3>
      <div className="w-100 h-1.5 bg-gray-100 mt-2"></div>
    </div>
  );
};

export default Title;
