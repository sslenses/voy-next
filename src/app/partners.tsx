import React from "react";
import Image from "next/image";
import web5 from "public/web5.png";
import park23 from "public/park23-mall.png";
import discovery from "public/discovery.jpg";
import yello from "public/yello.png";
import ossotel from "public/ossotel.png";
import harris from "public/harris.png";
import sheraton from "public/sheraton.png";
import grun from "public/grun.webp";
import aventus from "public/aventus.png";

function Partners() {
  return (
    <div className=" bg-blue-50">
      <div className="flex max-h-32 mx-auto">
        <div className=" bg-blue-50 align-center w-32 flex items-center mx-10">
          <Image
            src={park23}
            className=" object-cover"
            width={50}
            height={50}
            layout="responsive"
            alt=""
          />
        </div>
        <div className=" bg-blue-50 w-40 flex items-center mx-10">
          <Image
            src={grun}
            className=" object-cover"
            width={50}
            height={50}
            layout="responsive"
            alt=""
          />
        </div>
        <div className=" bg-blue-50 max-h-56 w-32 flex items-center overflow-hidden mx-5 my-3">
          <Image
            src={yello}
            className=" object-cover"
            width={50}
            height={50}
            layout="responsive"
            alt=""
          />
        </div>
        <div className=" bg-blue-50 max-h-56 w-44 h-32 overflow-hidden flex items-center mx-10">
          <Image
            src={ossotel}
            className=" object-cover"
            width={50}
            height={50}
            layout="responsive"
            alt=""
          />
        </div>
        <div className=" bg-blue-50 max-h-56 w-40 flex items-center mx-10 py-5 overflow-hidden my-9">
          <Image
            src={harris}
            className=" object-cover"
            width={50}
            height={50}
            layout="responsive"
            alt=""
          />
        </div>
        <div className=" bg-blue-50 w-64 flex items-center mx-7 py-5 overflow-hidden">
          <Image
            src={sheraton}
            className=" object-cover"
            width={50}
            height={50}
            layout="responsive"
            alt=""
          />
        </div>
        <div className=" bg-blue-50 max-h-56 w-40 flex items-center mx-10 py-5 overflow-hidden my-8">
          <Image
            src={aventus}
            className=" object-cover"
            width={50}
            height={50}
            layout="responsive"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Partners;
