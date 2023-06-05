import React from "react";

const Sec2 = () => {
  return (
    <div className=" h-48 bg-blue-500 container w-8/12 mx-auto">
      <div className="flex pt-5">
        <div className=" bg-blue-400 p-5 rounded-tl-lg">
          <a href="" className="">
            Monthly
          </a>
        </div>
        <div className=" bg-blue-600 p-5 rounded-tr-lg">
          <a href="" className="">
            Daily
          </a>
        </div>
      </div>
      <div className="flex">
        <div className="bg-blue-400 p-5 rounded-bl-lg">
          <a href="" className="border-r-2 pr-10">
            Pick Up Address
          </a>
        </div>
        <div className="bg-blue-400 p-5">
          <a href="" className="border-r-2 pr-10">
            Drop Off Address
          </a>
        </div>
        <div className="bg-blue-400 p-5">
          <a href="" className="border-r-2 pr-10">
            Pick Up Date
          </a>
        </div>
        <div className="bg-blue-400 p-5 rounded-r-lg">
          <a href="" className="">
            Pick Up Time
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sec2;
