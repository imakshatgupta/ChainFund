import React from "react";
import { Link } from "react-router-dom";

const DeveloperSection = () => {
  return (
    <div className="max-w-[1920px] bg-[#121212] pt-[100px] px-[10%] pb-[92px]">
      <div className=" w-row flex flex-row-reverse items-center">
        <div className=" w-col w-col-6 flex flex-col justify-between pl-[88px] pr-0 w-[50%] float-left min-h-[1px] relative">
          <h2 className=" tracking-wide mt-8 mb-4 text-[48px] font-medium leading-[56px] text-left text-white">
            Empower Developers with Blockchain Technology
          </h2>
          <div className=" tracking-wide mb-[56px] text-[20px] font-normal leading-[24px] text-gray-500">
            Our platform offers cutting-edge tools to simplify blockchain development, enabling developers to create innovative decentralized applications (dApps) and smart contracts.
          </div>
          <Link
            href="https://docs.metaplex.com/"
            className=" w-[152px] text-black text-center tracking-[-.01rem] bg-[#fff] rounded-lg py-4 px-2 text-[14px] font-semibold leading-6 inline-block"
          >
            Developer Tools
          </Link>
        </div>
        <div className=" flex flex-col justify-between pl-[88px] pr-0 w-[50%] float-left min-h-[1px] relative">
          <div className=" flex max-w-[464px] min-w-[300px] text-left bg-[rgba(255,255,255,.1)] border border-solid border-[rgba(255,255,255,.05)] rounded-[20px] flex-col self-start items-start mt-0 mb-6 mr-[88px] p-6">
            <div className=" flex justify-start self-start mb-2">
              <img
                src="https://assets-global.website-files.com/62eab5597fa44882d84a8037/639b9682d9aa2603978dfcdb_icon-upload.png"
                loading="lazy"
                width="32"
                height="32"
                alt=""
                className="block max-w-full align-middle border-0 w-6 h-6 clear-none text-left self-start static top-0 bottom-0 left-0 right-auto ml-auto mr-auto mb-auto mt-auto"
              />
            </div>
            <h3 className=" mt-0 mb-2 text-[21px] font-semibold leading-[28px] text-white">
              Upload
            </h3>
            <div className=" text-[rgba(255,255,255,.8)] text-[14px] font-light leading-[20px]">
              Easily upload your code and smart contract files
            </div>
          </div>
          <div className="flex max-w-[464px] min-w-[300px] text-left bg-[rgba(255,255,255,.1)] border border-solid border-[rgba(255,255,255,.05)] rounded-[20px] flex-col self-start items-start mt-0 mb-6 ml-[64px] p-6">
            <div className=" inline-block mt-2 items-stretch justify-start auto-cols-[1fr] grid-cols-[1fr,1fr] grid-rows-[auto auto] flex-row">
              <img
                src="https://assets-global.website-files.com/62eab5597fa44882d84a8037/639b96827d16eb2d43234705_icon-drop.png"
                loading="lazy"
                width="24"
                height="24"
                alt=""
                className="text-left w-6 h-6 mx-auto block align-middle border-0 max-w-full"
              />
            </div>
            <h3 className="mt-0 mb-2 text-[21px] font-semibold leading-[28px] text-white">
              Drop
            </h3>
            <div className=" text-[rgba(255,255,255,.8)] text-[14px] font-light leading-[20px]">
              Launch your decentralized application (dApp)
            </div>
          </div>
          <div className=" flex max-w-[464px] min-w-[300px] text-left bg-[rgba(255,255,255,.1)] border border-solid border-[rgba(255,255,255,.05)] rounded-[20px] flex-col items-start mt-0 mb-0 mr-[88px] p-6">
            <div className=" inline-block mt-2 items-stretch justify-start auto-cols-[1fr] grid-cols-[1fr,1fr] grid-rows-[auto auto] flex-row">
              <img
                src="https://assets-global.website-files.com/62eab5597fa44882d84a8037/639b968271d46f49c4a6830e_icon-mint.png"
                loading="lazy"
                width="24"
                height="24"
                alt=""
                className=""
              />
            </div>
            <h3 className=" mt-0 mb-2 text-[21px] font-semibold leading-[28px] text-white">
              Mint
            </h3>
            <div className=" text-[rgba(255,255,255,.8)] text-[14px] font-light leading-[20px]">
              Mint your own tokens and manage your decentralized finance (DeFi) projects
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperSection;
