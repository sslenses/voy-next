import React from "react";

const FooterLinks = () => {
  return (
    <div className=" container w-8/12 mx-auto border-b border-blue-950 border-opacity-30 text-xs leading-6 mt-5 border-t pt-5 tracking-wider text-gray-600 font-light ">
      <div className="grid grid-cols-5">
        <div className="">
          <p className=" text-blue-950 font-semibold ">Individuals Rent</p>
          <p>
            <a href="" className=" font-light hover:underline">
              Rent by Minutes
            </a>
          </p>
          <p>
            <a href="" className=" font-light hover:underline">
              Rent by Days
            </a>
          </p>
          <p>
            <a href="" className=" font-light hover:underline">
              Rent by Months
            </a>
          </p>
          <br />
          {/*  */}
          <p className=" font-semibold text-blue-950">Group Rent</p>
          <p>
            <a href="" className=" font-light hover:underline">
              Couple
            </a>
          </p>
          <p>
            <a href="" className=" font-light hover:underline">
              Family
            </a>
          </p>
          <p>
            <a href="" className=" font-light hover:underline">
              Big Family
            </a>
          </p>
          <br />
        </div>
        {/*  */}
        <div>
          <p className=" font-semibold text-blue-950 ">Companies</p>
          <p>
            <a href="" className=" font-light hover:underline">
              Renting
            </a>
          </p>
          <p>
            <a href="" className=" font-light hover:underline">
              Private Sharing
            </a>
          </p>
          <p>
            <a href="" className=" font-light hover:underline">
              Sharing for Employess
            </a>
          </p>
          <p>
            <a href="" className=" font-light hover:underline">
              Credit Sale
            </a>
          </p>
        </div>
        {/*  */}
        <div>
          <p className="font-semibold text-blue-950 ">For Education</p>
          <p>
            <a href="" className=" font-light hover:underline">
              Voy and Education
            </a>
          </p>
          <p>
            <a href="" className=" font-light hover:underline">
              Rent for K-12
            </a>
          </p>
          <p>
            <a href="" className=" font-light hover:underline">
              Rent for College
            </a>
          </p>
          <br />

          {/*  */}

          <p className=" font-semibold text-blue-950 ">For Business</p>
          <p>
            <a href="" className=" font-light hover:underline">
              Voy and Business
            </a>
          </p>
          <p>
            <a href="" className=" font-light hover:underline">
              Voy for Business
            </a>
          </p>
          <br />

          {/*  */}
        </div>
        {/*  */}
        <div>
          <p className=" font-semibold text-blue-950 ">Voy Values</p>
          <p>
            <a href="" className="hover:underline">
              Accessibility
            </a>
          </p>
          <p>
            <a href="" className="hover:underline">
              Education
            </a>
          </p>
          <p>
            <a href="" className="hover:underline">
              Environment
            </a>
          </p>
          <p>
            <a href="" className="hover:underline"></a>Inclusion and Diversity
          </p>
          <p>
            <a href="" className="hover:underline">
              Privacy
            </a>
          </p>
        </div>
        {/*  */}
        <div>
          <p className=" font-semibold text-blue-950 ">About Voy</p>
          <p>
            <a href="" className="hover:underline">
              Newsroom
            </a>
          </p>
          <p>
            <a href="" className="hover:underline">
              Voy Leaderships
            </a>
          </p>
          <p>
            <a href="" className="hover:underline">
              Carrer Opportunities
            </a>
          </p>
          <p>
            <a href="" className="hover:underline">
              Investors
            </a>
          </p>
          <p>
            <a href="" className="hover:underline">
              Ethics & Compliance
            </a>
          </p>
          <p>
            <a href="" className="hover:underline">
              Events
            </a>
          </p>
          <p>
            <a href="" className="hover:underline">
              Contact Voy
            </a>
          </p>
        </div>
      </div>
      <p className="mt-5 mb-3 text-gray-600 font-light d">
        More ways to use:{" "}
        <a href="" className=" opacity-100 text-blue-600 underline">
          Find an Voy Hub Stations
        </a>{" "}
        near you. Or call
        <a href="" className=" tracking-widest">
          {" "}
          +62-81-0920-0029
        </a>
        .
      </p>
    </div>
  );
};

export default FooterLinks;
