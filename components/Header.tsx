import React from "react";
import LoginBtn from "./LoginBtn";
import Link from "next/link";
const Header = () => {
  return (
    <div className="sticky w-full h-16 top-0 z-10 flex items-center md:px-[7.5rem] px-4 text-5xl font-bold text-white bg-black">
      <Link href="/">
        <h1 className="mr-auto text-emerald-400 font-bebas cursor-pointer">
          DISS
        </h1>
      </Link>
      <LoginBtn />
    </div>
  );
};

export default Header;
