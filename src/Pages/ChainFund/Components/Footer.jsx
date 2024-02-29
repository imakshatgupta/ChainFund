import React from "react";

const FooterView = () => {
  return (
    <div className="footer-new max-w-[1920px] bg-black border-t border-solid border-white border-opacity-10 flex flex-col items-start mx-auto pt-[32px] pb-[32px] pl-[10%] pr-[10%] py-8">
      <div className="columns-4 w-row flex justify-between w-full min-w-[100px] gap-x-0 gap-y-0">
        <div className="column-11 flex w-[50%] float-left min-h-[1px] pr-[10px] relative w-col w-col-6 text-left flex-col justify-start items-start pl-0">
          <h1 className="footer-title text-[#fff] text-5xl font-bold leading-[40px]">
            ChainFund
          </h1>
          <div className="text-block-22 text-[#999] pt-2 pb-2 text-left">
            Copyright © <span className="copyright-year">2024</span> ChainFund
          </div>
        </div>
        <div className="column-12 w-col w-col-6 flex w-[50%] flex-row justify-end self-center pr-0 float-left min-h-[1px] pl-[10px] relative">
          <a
            href="https://discord.gg/6FaDSP2zms"
            className="link-block-8 w-inline-block mr-6 pr-0 max-w-[100%] inline-block bg-transparent"
          >
            <img
              src="https://assets-global.website-files.com/62eab5597fa44882d84a8037/63cefbe17b988f27ab5cecbc_icons8-discord-120.svg"
              loading="lazy"
              alt=""
              height="24"
              className="ml-auto mr-auto block max-w-[100%] align-middle h-6 border-0"
            />
          </a>
          <a
            href="https://twitter.com/metaplex"
            className="link-block-9 w-inline-block"
          >
            <img
              src="https://assets-global.website-files.com/62eab5597fa44882d84a8037/63cefbb08770f71f8f380b9c_icons8-twitter.svg"
              loading="lazy"
              alt=""
              className="ml-auto mr-auto block max-w-[100%] align-middle h-6 border-0"
            />
          </a>
          <a
            href="https://www.instagram.com/metaplex/"
            className="link-block-10 w-inline-block"
          >
            <img
              src="https://assets-global.website-files.com/62eab5597fa44882d84a8037/63cefbb00af34f05897d11e4_icons8-instagram.svg"
              loading="lazy"
              alt=""
              className="ml-auto mr-auto block max-w-[100%] align-middle h-6 border-0"
            />
          </a>
          <a
            href="https://github.com/metaplex-foundation/metaplex"
            className="link-block-11 w-inline-block"
          >
            <img
              src="https://assets-global.website-files.com/62eab5597fa44882d84a8037/63cefc2c6e68b23edff6baee_icons8-github-128.svg"
              loading="lazy"
              alt=""
              className="ml-auto mr-auto block max-w-[100%] align-middle h-6 border-0"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterView;
