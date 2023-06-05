import Image from "next/image";
import React from "react";
import web5 from "public/web5.png";

const Sec3 = () => {
  return (
    <div className=" bg-blue-500 container w-8/12 mx-auto tracking-wider text-base font-light">
      <div className="">Our Service</div>
      <div className="">Check out our service</div>
      <div className="flex">
        <div className=" w-48 h-48 m-5 border">
          <Image
            src={web5}
            className="rounded-lg object-cover"
            width={undefined}
            height={undefined}
            layout="responsive"
            alt=""
          />
        </div>
        <div className=" w-48 m-5">
          <p className="mb-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
            doloremque alias. Magnam assumenda rerum eum, totam ad officia
            corrupti nulla.
          </p>
          <a
            href=""
            className=" opacity-80 right-0 hover:opacity-100 py-2 px-5 rounded-lg  bg-blue-700 text-slate-50 font-light text-sm"
          >
            Reserve
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sec3;
