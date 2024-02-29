import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation h-28 bg-black border border-black flex  justify-between items-center top-0 left-0 right-0 fixed z-[1000]">
      <div className="navigation-container mx-auto max-w-screen-lg justify-between items-center flex">
        <Link
          to="/chainfund"
          aria-current="page"
          className="max-w-screen inline-block text-[#fff] decoration-none"
        >
          <div className="text-white text-5xl tracking-wider font-bold  hover:text-green-300">
            ChainFund
          </div>
        </Link>
        <nav
          role="navigation"
          className="align-center flex float-right relative"
        >
          <Link
            to="/"
            className="h-18 text-gray-400 hover:text-white flex flex-wrap justify-center items-center px-5 text-lg font-semibold leading-6 no-underline max-w-screen-lg"
          >
            <div className="uppercase text-lg font-semibold leading-6 no-underline">
              Banking
            </div>
          </Link>
          <Link className="h-18 text-gray-400 hover:text-white flex flex-wrap justify-center items-center px-5 text-lg font-semibold leading-6 no-underline">
            <div className="uppercase text-lg font-semibold leading-6 no-underline">
              <Link to="/create-campaign">Start a Campaign</Link>
            </div>
          </Link>
          <Link
            to="/news"
            className="h-18 text-gray-400 hover:text-white flex flex-wrap justify-center items-center px-5 text-lg font-semibold leading-6 no-underline"
          >
            <div className="uppercase text-lg font-semibold leading-6 no-underline">
              News
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
