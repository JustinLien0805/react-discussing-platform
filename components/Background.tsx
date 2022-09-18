import React from "react";
import Header from "./Header";
const Background = ({ children }) => {
  return (
    <div className="h-screen w-full bg-black-rgba text-white overflow-auto">
      <Header />
      {children}
    </div>
  );
};

export default Background;
