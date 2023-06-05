import React from "react";
import Image from "next/image";
import Logo from "public/logo.png";

const NavBar = () => {
  return (
    <div className=" sticky top-0 z-50">
      <div className=" absolute h-12 bg-blue-950 bg-blu w-full opacity-80"></div>
      <div className=" h-12 container w-8/12 mx-auto flex items-center tracking-wider">
        <Image
          src={Logo}
          width={70}
          height={100}
          alt=""
          className="relative opacity-90 hover:opacity-100"
        />
        <ul className="space-x-4 justify-between flex items-center mx-auto">
          <li>
            <a
              href=""
              className="duration-500 opacity-80 hover:opacity-95 text-white font-light text-xs"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href=""
              className="duration-500 opacity-80 hover:opacity-95 text-white font-light text-xs"
            >
              Offers
            </a>
          </li>
          <li>
            <a
              href=""
              className="duration-500 opacity-80 hover:opacity-95 text-white font-light text-xs"
            >
              How it works
            </a>
          </li>
          <li>
            <a
              href=""
              className="duration-500 opacity-80 hover:opacity-95 text-white font-light text-xs"
            >
              App
            </a>
          </li>
          <li>
            <a
              href=""
              className=" duration-500 opacity-80 hover:opacity-95 text-white font-light text-xs"
            >
              Benefits
            </a>
          </li>
        </ul>
        <a
          href=""
          className=" duration-700 opacity-80 right-0 hover:opacity-95 hover:bg-blue-950 py-2 px-5 rounded-lg border-slate-100 border text-slate-50 font-light text-xs"
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default NavBar;
