import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="  font-['Forum'] max-w-[1920px] bg-black bg-cover pt-[150px] pr-[10%] pl-[10%] pb-[40px] bg-center"
      style={{
        backgroundImage:
          "url(https://assets-global.website-files.com/62eab5597fa44882d84a8037/645906873acb674bf421f029_bg-image-hero.jpg)",
      }}
    >
      <h2 className=" mb-16 text-[70px] font-bold leading-10 tracking-widest  text-left flex justify-between items-center ">
        Finance and
        <br />
        <br />
        Crowdfunding on
        <br />
        <br /> Blockchain
        <img
          src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=029"
          alt=""
          className="w-[400px] h-[400px] z-20 hover:"
        />
      </h2>
      <div className="columns-1">
        <div className="w-full max-w-[600px] pl-0 float-left min-h-[1px] pr-[10px] relative">
          <div className="flex max-w-full gap-x-4 gap-y-4 mb-0 pl-1 pr-3">
            {/* <Link
              to="/"
              className="w-[152px] bg-green-300 text-black text-center tracking-tighter rounded-lg pt-4 pr-4 pb-4 pl-3 font-semibold text-[20px] inline-block"
            >
              Explore
            </Link> */}
            <Link
              to="/show-campaigns"
              className="w-[220px] bg-white  text-black text-center tracking-tight rounded-lg pt-4 pr-4 pb-4 pl-3 font-semibold text-[20px] inline-block "
            >
              Show Ongoing Campaigns
            </Link>
          </div>
        </div>
        <div className="text-left flex flex-col items-start pl-[48px] pr-0"></div>
      </div>
    </div>
  );
};

export default Hero;
