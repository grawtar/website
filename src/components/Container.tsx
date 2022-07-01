import React from "react";
import Navbar from "./Navbar";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="container mx-auto pb-6 md:pb-12 antialiased">
      <div className="w-auto mx-4 lg:w-4/5 lg:mx-auto">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Container;
