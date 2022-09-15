import React from "react";
import LoginBtn from "./LoginBtn";
const Header = () => {
  return (
    <div className="sticky w-full h-16 top-0 flex items-center px-[7.5rem] text-5xl font-bold text-white bg-black">
      <h1 className="mr-auto text-emerald-400 font-bebas">DISS</h1>
      <LoginBtn />
    </div>
  );
};

export default Header;
