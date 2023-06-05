import React from "react";

const Copyright = () => {
  return (
    <div className=" pb-8 pt-3 container w-8/12 mx-auto flex text-xs text-gray-950 tracking-wider">
      <p className=" text-gray-600 font-light ">
        Copyright © 2023{" "}
        <a href="" className=" hover:underline hover:text-gray-950 ">
          Voy
        </a>{" "}
        Inc. All rights reserved.
      </p>
      <ul className="space-x-4 justify-between flex mx-auto">
        <li>
          <a
            href=""
            className="hover:underline font-light border-r pr-3 border-blue-950 border-opacity-30"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href=""
            className="hover:underline font-light border-r pr-3 border-blue-950 border-opacity-30"
          >
            Terms of Use
          </a>
        </li>
        <li>
          <a
            href=""
            className="hover:underline font-light border-r pr-3 border-blue-950 border-opacity-30"
          >
            Sales and Refunds
          </a>
        </li>
        <li>
          <a href="" className="hover:underline font-light">
            Legal Site Map
          </a>
        </li>
      </ul>
      <a href="" className="hover:underline font-light">
        Indonesia
      </a>
    </div>
  );
};

export default Copyright;
