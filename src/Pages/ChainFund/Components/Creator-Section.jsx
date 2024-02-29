import React from "react";
import image from './Hand.png'
import { Link } from "react-router-dom";

const CreatorSection = () => {
  return (
    <div className="creators-section max-w-[1920px] bg-black pt-[100px] pb-[92px] px-[10%]">
      <div className="developers-columns w-row flex flex-row items-center">
        <div className="hero-column-left-copy w-col w-col-6 flex flex-col justify-between pl-0 pr-[48px] w-[50%] float-left relative min-h-[1px]">
          <h2 className=" self-auto mt-2 mb-6 text-[48px] font-medium leading-[56px] text-left text-white">
            Empower Creators with Blockchain Technology
          </h2>
          <div className=" mb-[56px] text-[20px] font-extralight leading-[24px] text-gray-500">
            Our platform provides creators with the tools they need to bring their projects to life on the blockchain, enabling secure and transparent crowdfunding.
          </div>
          <Link
            href="https://docs.metaplex.com/"
            className="hero__cta w-[152px] text-black text-center tracking-[-.01rem] bg-[#fff] rounded-lg py-4 px-2 text-[14px] font-semibold leading-6 inline-block"
          >
            Get Started
          </Link>
        </div>
        <div className="  text-left flex-col items-start pl-[48px] pr-0 flex w-[50%] float-left min-h-[1px] relative">
          <img
            src={image}
            loading="lazy"
            width="666"
            sizes="(max-width: 479px) 73vw, (max-width: 767px) 72vw, (max-width: 991px) 334.859375px, (max-width: 1919px) 37vw, 30vw"
            alt="Blockchain Technology"
            className="object-scale-down w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CreatorSection;
