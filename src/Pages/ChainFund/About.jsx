import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "/Users/harsh/Desktop/practicum/ChainFund/src/index.css";

const About = () => {
  return (
    <div>
      <div
        className="blog--hero w-full text-[#fff] flex bg-[#1e1e1e] bg-auto justify-center mx-auto "
        style={{
          backgroundImage:
            "url(https://assets-global.website-files.com/62eab5597fa44882d84a8037/645906873acb674bf421f029_bg-image-hero.jpg)",
        }}
      >
        <div className="featured-post-2 flex flex-col max-w-[1280px] flex-[0,auto] content-center justify-center items-center my-[80px] mx-auto pb-0 px-[48px]">
          <h1 className="h1-2 block centered leading-[64px] transform-none mt-0 mb-[24px] text-[48px] text-center font-bold m-[.67rem,0]">
            News and Announcements 🎉
          </h1>
          <p className="default-text-2 block centered border-b-[1px] border-solid border-[rgba(255,255,255,.2)] rounded-[1px] mb-12 pb-12 text-[#9e9e9e] pt-0 text-[20px] leading-[30px] text-center mt-0">
            Stay up-to-date with the latest company insights all in one place
          </p>
        </div>
        <Navbar/>
      </div>
      <div className="post-list w-full flex justify-center items-centermb-[120px] mx-auto">
        <div className="featured-content flex flex-row justify-center items-start mt-[30px]">
          <div className="recent-posts w-[69%] ">
            <h1 className="h3-2 text-white text-left mt-0 mb-4 font-bold text-[28px] leading-10">
              Recent posts
            </h1>
            <div className="collection-list-3 mobile-width w-dyn-list block flex-wrap justify-start items-start">
              <div
                role="list"
                className="blog-list-2 mobile-width w-dyn-items flex flex-wrap grid-rows-[auto] grid-cols-[1fr,.25] grid-col-[auto] mr-6 justify-start items-start"
              >
                <div
                  role="listitem"
                  className="blog-list-item-2 w-dyn-item flex overflow-hidden w-full bg-transparent border-[2px,solid,#202020] rounded-[24px] grid-flow-col flex-none justify-start self-start mb-6"
                >
                  <a
                    href="/posts/creator-studio-knittables-a-tight-knit-community"
                    className="link-block-2 horizontal-fix vert-mobile w-inline-block items-stretch flex text-transparent max-w-full"
                  >
                    <img
                      src="https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/63a0aebd63652770a8a1f7fa_image%20(2).png"
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 479px) 252px, (max-width: 767px) 207.09375px, (max-width: 991px) 33vw, (max-width: 1919px) 21vw, 262.3203125px"
                      srcset="https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/63a0aebd63652770a8a1f7fa_image%20(2)-p-500.png 500w, https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/63a0aebd63652770a8a1f7fa_image%20(2)-p-800.png 800w, https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/63a0aebd63652770a8a1f7fa_image%20(2)-p-1080.png 1080w, https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/63a0aebd63652770a8a1f7fa_image%20(2).png 1495w"
                      className="post-image small-left w-[420px] h-[200px] min-h-0 rounded-[12px] my-5 ml-20"
                    />
                    <div className="blog-post-content pad-top-none w-full p-[24px,32px]">
                      <h4 className="h4">
                        Creator Studio — Knittables, a Tight-Knit Community
                      </h4>
                      <div className="horizontal-fix">
                        <div className="published-on">Categories:</div>
                        <div className="tag-bkg-default margin-bottom-24">
                          <div className="tag">Announcements</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  className="blog-list-item-2 w-dyn-item flex overflow-hidden w-full bg-transparent border-[2px,solid,#202020] rounded-[24px] grid-flow-col flex-none justify-start self-start mb-6"
                >
                  <a
                    href="/posts/creator-studio-launch-claynosaurz"
                    className="link-block-2 horizontal-fix vert-mobile w-inline-block items-stretch flex text-transparent max-w-full"
                  >
                    <img
                      src="https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/6377b8a1955fe206dcc4346b_2_NEW_BANNER_VERSIONUsingPNG.jpg"
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 479px) 252px, (max-width: 767px) 207.09375px, (max-width: 991px) 33vw, (max-width: 1919px) 21vw, 262.3203125px"
                      srcset="https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/6377b8a1955fe206dcc4346b_2_NEW_BANNER_VERSIONUsingPNG-p-500.jpg 500w, https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/6377b8a1955fe206dcc4346b_2_NEW_BANNER_VERSIONUsingPNG-p-800.jpg 800w, https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/6377b8a1955fe206dcc4346b_2_NEW_BANNER_VERSIONUsingPNG-p-1080.jpg 1080w, https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/6377b8a1955fe206dcc4346b_2_NEW_BANNER_VERSIONUsingPNG.jpg 1500w"
                      className="post-image small-left w-[420px] h-[200px] min-h-0 rounded-[12px] my-5 ml-20"
                    />
                    <div className="blog-post-content pad-top-none w-full p-[24px,32px]">
                      <h4 className="h4">
                        Creator Studio Launch — Getting Prehistoric with
                        Claynosaurz
                      </h4>
                      <div className="horizontal-fix">
                        <div className="published-on">Categories:</div>
                        <div className="tag-bkg-default margin-bottom-24">
                          <div className="tag">Announcements</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  className="blog-list-item-2 w-dyn-item flex overflow-hidden w-full bg-transparent border-[2px,solid,#202020] rounded-[24px] grid-flow-col flex-none justify-start self-start mb-6"
                >
                  <a
                    href="/posts/expanding-digital-assets-with-compression-for-nfts"
                    className="link-block-2 horizontal-fix vert-mobile w-inline-block items-stretch flex text-transparent max-w-full"
                  >
                    <img
                      src="https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/642b385e469337e0e5e8fcc3_image%20(5).png"
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 479px) 252px, (max-width: 767px) 207.09375px, (max-width: 991px) 33vw, (max-width: 1919px) 21vw, 262.3203125px"
                      srcset="https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/642b385e469337e0e5e8fcc3_image%20(5)-p-500.png 500w, https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/642b385e469337e0e5e8fcc3_image%20(5)-p-800.png 800w, https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/642b385e469337e0e5e8fcc3_image%20(5)-p-1080.png 1080w, https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/642b385e469337e0e5e8fcc3_image%20(5)-p-1600.png 1600w, https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/642b385e469337e0e5e8fcc3_image%20(5).png 1992w"
                      className="post-image small-left w-[420px] h-[200px] min-h-0 rounded-[12px] my-5 ml-20"
                    />
                    <div className="blog-post-content pad-top-none w-full p-[24px,32px]">
                      <h4 className="h4">
                        Expanding Digital Assets with Compression for NFTs
                      </h4>
                      <div className="horizontal-fix">
                        <div className="published-on">Categories:</div>
                        <div className="tag-bkg-default margin-bottom-24">
                          <div className="tag">Announcements</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  className="blog-list-item-2 w-dyn-item flex overflow-hidden w-full bg-transparent border-[2px,solid,#202020] rounded-[24px] grid-flow-col flex-none justify-start self-start mb-6"
                >
                  <a
                    href="/posts/creator-studio-launch-adapting-and-evolving-in-web3-with-articulated-skullys"
                    className="link-block-2 horizontal-fix vert-mobile w-inline-block items-stretch flex text-transparent max-w-full"
                  >
                    <img
                      src="https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/6363f1f5af130eac4c560837_DSkully_Logo_Inverted.jpeg"
                      loading="lazy"
                      alt=""
                      className="post-image small-left w-[420px] h-[200px] min-h-0 rounded-[12px] my-5 ml-20"
                    />
                    <div className="blog-post-content pad-top-none w-full p-[24px,32px]">
                      <h4 className="h4">
                        Creator Studio Launch - Adapting and Evolving in Web3
                        with Articulated Skullys
                      </h4>
                      <div className="horizontal-fix">
                        <div className="published-on">Categories:</div>
                        <div className="tag-bkg-default margin-bottom-24">
                          <div className="tag">All Ecosystem Projects</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                role="navigation"
                aria-label="List"
                className="w-pagination-wrapper pagination"
              >
                <a
                  href="?808d538f_page=2"
                  aria-label="Next Page"
                  className="w-pagination-next next-2"
                >
                  <div className="w-inline-block">Next Page</div>
                  <svg
                    className="w-pagination-next-icon"
                    height="12px"
                    width="12px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 12"
                    transform="translate(0, 1)"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      fill-rule="evenodd"
                      d="M4 2l4 4-4 4"
                    ></path>
                  </svg>
                </a>
                <link rel="prerender" href="?808d538f_page=2" />
              </div>
            </div>
          </div>
          <div className="sidebar">
            <div className="_50 margin-right-24">
              <h1 className="h3-2">Topics to explore</h1>
              <form
                action="/search"
                className="search-sidebar w-form"
                data-hs-cf-bound="true"
              >
                <input
                  className="email-text-input-2 search-sidebar w-input"
                  maxlength="256"
                  name="query"
                  placeholder="Search…"
                  type="search"
                  id="search"
                  required=""
                />
                <input
                  type="submit"
                  className="next-2 search-sidebar w-button"
                  value="Search"
                />
              </form>
            </div>
            <div className="_50">
              <h4 className="heading-3">Categories</h4>
              <div className="w-dyn-list">
                <div role="list" className="collection-list-4 w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <a
                      href="/categories/all-ecosystem-projects"
                      className="tag-bkg-default w-button"
                    >
                      All Ecosystem Projects
                    </a>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <a
                      href="/categories/all-community-projects"
                      className="tag-bkg-default w-button"
                    >
                      All Community Projects
                    </a>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <a
                      href="/categories/community"
                      className="tag-bkg-default w-button"
                    >
                      Community
                    </a>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <a
                      href="/categories/brand"
                      className="tag-bkg-default w-button"
                    >
                      Brand
                    </a>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <a
                      href="/categories/developers"
                      className="tag-bkg-default w-button"
                    >
                      Developers
                    </a>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <a
                      href="/categories/creators"
                      className="tag-bkg-default w-button"
                    >
                      Creators
                    </a>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <a
                      href="/categories/investors"
                      className="tag-bkg-default w-button"
                    >
                      Investors
                    </a>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <a
                      href="/categories/metaverse"
                      className="tag-bkg-default w-button"
                    >
                      Metaverse
                    </a>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <a
                      href="/categories/gaming"
                      className="tag-bkg-default w-button"
                    >
                      Gaming
                    </a>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <a
                      href="/categories/art-collectibles"
                      className="tag-bkg-default w-button"
                    >
                      Art &amp; Collectibles
                    </a>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <a
                      href="/categories/user-guides"
                      className="tag-bkg-default w-button"
                    >
                      User Guides
                    </a>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <a
                      href="/categories/announcements"
                      className="tag-bkg-default w-button"
                    >
                      Announcements
                    </a>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <a
                      href="/categories/design"
                      className="tag-bkg-default w-button"
                    >
                      Design
                    </a>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <a
                      href="/categories/development"
                      className="tag-bkg-default w-button"
                    >
                      Development
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
