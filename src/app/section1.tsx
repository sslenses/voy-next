import React from "react";
import Image from "next/image";
import Logo from "public/logo.png";
import Scooter from "public/scooters-voy.png";
import { UilApple } from "@iconscout/react-unicons";
import { UilGooglePlay } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";

function Sec1() {
  return (
    <div className=" w-screen bg-slate-50 tracking-wider border h-screen">
      <div className=" relative h-96 container w-8/12 mx-auto pt-16 text-blue-950">
        <h1 className="  text-7xl border font-extrabold space-y-10">
          MOVE <br />
          <div className="flex">
            <Image
              src={Logo}
              width={220}
              height={100}
              alt=""
              className="relative mr-2"
            />
            WARD
          </div>
          <div className=" text-lg font-light space-y-3 tracking-wider">
            <p className=" flex gap-2 text-blue-950">
              <UilPlayCircle size="25" className=" border" /> Easy to use
            </p>
            <p className=" flex gap-2 text-blue-950">
              <UilPlayCircle size="25" className=" border" /> Battery always
              100%
            </p>
            <p className=" flex gap-2 text-blue-950">
              <UilPlayCircle size="25" className=" border" /> Up to 50km battery
              life
            </p>
          </div>
          <div className="flex gap-10">
            <div className=" h-24 w-24 bg-white shadow-lg rounded-lg flex items-center text-blue-950">
              <UilApple size="50" className=" border mx-auto" />
            </div>
            <div className=" h-24 w-24 bg-white shadow-lg rounded-lg flex items-center text-blue-950">
              <UilGooglePlay size="50" className=" border mx-auto" />
            </div>
          </div>
        </h1>
        <div className=" absolute top-7 -right-6 border">
          <Image src={Scooter} width={600} height={600} alt="" className="" />
        </div>
      </div>
    </div>
  );
}

export default Sec1;
