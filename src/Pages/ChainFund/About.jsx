import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div
        class="blog--hero w-full text-[#fff] flex bg-[#1e1e1e] bg-auto justify-center mx-auto pt-[80px]"
        style={{
          backgroundImage:
            "url(https://assets-global.website-files.com/62eab5597fa44882d84a8037/645906873acb674bf421f029_bg-image-hero.jpg)",
        }}
      >
        <div class="featured-post-2 flex flex-col max-w-[1280px] flex-[0,auto] content-center justify-center items-center my-[80px] mx-auto pb-0 px-[48px]">
          <h1 class="h1-2 block centered leading-[64px] transform-none mt-0 mb-[24px] text-[48px] text-center font-bold m-[.67rem,0]">
            News and Announcements 🎉
          </h1>
          <p class="default-text-2 block centered border-b-[1px] border-solid border-[rgba(255,255,255,.2)] rounded-[1px] mb-12 pb-12 text-[#9e9e9e] pt-0 text-[20px] leading-[30px] text-center mt-0">
            Stay up-to-date with the latest company insights all in one place
          </p>
        </div>
        <div className="navigation h-28 bg-black border border-black flex justify-between items-center top-0 left-0 right-0 fixed z-[1000]">
          <div className="navigation-container mx-auto max-w-screen-lg justify-between items-center flex">
            <Link
              to="/"
              className="max-w-screen inline-block text-[#fff] decoration-none"
            >
              <h1 className="text-white text-5xl tracking-wider font-bold hover:text-green-300">
                ChainFund
              </h1>
            </Link>
            <nav
              role="navigation"
              className="align-center flex float-right relative"
            >
              <Link
                to="/discover"
                className="h-18 text-gray-400 hover:text-white flex flex-wrap justify-center items-center px-5 text-lg font-semibold leading-6 no-underline max-w-screen-lg"
              >
                <div className="uppercase text-lg font-semibold leading-6 no-underline">
                  Discover
                </div>
              </Link>
              <Link
                to="/start-project"
                className="h-18 text-gray-400 hover:text-white flex flex-wrap justify-center items-center px-5 text-lg font-semibold leading-6 no-underline"
              >
                <div className="uppercase text-lg font-semibold leading-6 no-underline">
                  Start a Project
                </div>
              </Link>
              <Link
                to="/about"
                className="h-18 text-gray-400 hover:text-white flex flex-wrap justify-center items-center px-5 text-lg font-semibold leading-6 no-underline"
              >
                <div className="uppercase text-lg font-semibold leading-6 no-underline">
                  About Us
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div class="post-list w-full flex justify-center items-centermb-[120px] mx-auto">
        <div class="featured-content flex flex-row justify-center items-start mt-[30px]">
          <div class="recent-posts w-[69%] ">
            <h1 class="h3-2 text-white text-left mt-0 mb-4 font-bold text-[28px] leading-10">
              Recent posts
            </h1>
            <div class="collection-list-3 mobile-width w-dyn-list block flex-wrap justify-start items-start">
              <div
                role="list"
                class="blog-list-2 mobile-width w-dyn-items flex flex-wrap grid-rows-[auto] grid-cols-[1fr,.25] grid-col-[auto] mr-6 justify-start items-start"
              >
                <div
                  role="listitem"
                  class="blog-list-item-2 w-dyn-item flex overflow-hidden w-full bg-transparent border-[2px,solid,#202020] rounded-[24px] grid-flow-col flex-none justify-start self-start mb-6"
                >
                  <a
                    href="/posts/creator-studio-knittables-a-tight-knit-community"
                    class="link-block-2 horizontal-fix vert-mobile w-inline-block items-stretch flex text-transparent max-w-full"
                  >
                    <img
                      src="https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/63a0aebd63652770a8a1f7fa_image%20(2).png"
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 479px) 252px, (max-width: 767px) 207.09375px, (max-width: 991px) 33vw, (max-width: 1919px) 21vw, 262.3203125px"
                      srcset="https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/63a0aebd63652770a8a1f7fa_image%20(2)-p-500.png 500w, https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/63a0aebd63652770a8a1f7fa_image%20(2)-p-800.png 800w, https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/63a0aebd63652770a8a1f7fa_image%20(2)-p-1080.png 1080w, https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/63a0aebd63652770a8a1f7fa_image%20(2).png 1495w"
                      class="post-image small-left w-[420px] h-[200px] min-h-0 rounded-[12px] my-5 ml-20"
                    />
                    <div class="blog-post-content pad-top-none w-full p-[24px,32px]">
                      <h4 class="h4">
                        Creator Studio — Knittables, a Tight-Knit Community
                      </h4>
                      <div class="horizontal-fix">
                        <div class="published-on">Categories:</div>
                        <div class="tag-bkg-default margin-bottom-24">
                          <div class="tag">Announcements</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  class="blog-list-item-2 w-dyn-item flex overflow-hidden w-full bg-transparent border-[2px,solid,#202020] rounded-[24px] grid-flow-col flex-none justify-start self-start mb-6"
                >
                  <a
                    href="/posts/creator-studio-launch-claynosaurz"
                    class="link-block-2 horizontal-fix vert-mobile w-inline-block items-stretch flex text-transparent max-w-full"
                  >
                    <img
                      src="https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/6377b8a1955fe206dcc4346b_2_NEW_BANNER_VERSIONUsingPNG.jpg"
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 479px) 252px, (max-width: 767px) 207.09375px, (max-width: 991px) 33vw, (max-width: 1919px) 21vw, 262.3203125px"
                      srcset="https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/6377b8a1955fe206dcc4346b_2_NEW_BANNER_VERSIONUsingPNG-p-500.jpg 500w, https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/6377b8a1955fe206dcc4346b_2_NEW_BANNER_VERSIONUsingPNG-p-800.jpg 800w, https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/6377b8a1955fe206dcc4346b_2_NEW_BANNER_VERSIONUsingPNG-p-1080.jpg 1080w, https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/6377b8a1955fe206dcc4346b_2_NEW_BANNER_VERSIONUsingPNG.jpg 1500w"
                      class="post-image small-left w-[420px] h-[200px] min-h-0 rounded-[12px] my-5 ml-20"
                    />
                    <div class="blog-post-content pad-top-none w-full p-[24px,32px]">
                      <h4 class="h4">
                        Creator Studio Launch — Getting Prehistoric with
                        Claynosaurz
                      </h4>
                      <div class="horizontal-fix">
                        <div class="published-on">Categories:</div>
                        <div class="tag-bkg-default margin-bottom-24">
                          <div class="tag">Announcements</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  class="blog-list-item-2 w-dyn-item flex overflow-hidden w-full bg-transparent border-[2px,solid,#202020] rounded-[24px] grid-flow-col flex-none justify-start self-start mb-6"
                >
                  <a
                    href="/posts/expanding-digital-assets-with-compression-for-nfts"
                    class="link-block-2 horizontal-fix vert-mobile w-inline-block items-stretch flex text-transparent max-w-full"
                  >
                    <img
                      src="https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/642b385e469337e0e5e8fcc3_image%20(5).png"
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 479px) 252px, (max-width: 767px) 207.09375px, (max-width: 991px) 33vw, (max-width: 1919px) 21vw, 262.3203125px"
                      srcset="https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/642b385e469337e0e5e8fcc3_image%20(5)-p-500.png 500w, https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/642b385e469337e0e5e8fcc3_image%20(5)-p-800.png 800w, https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/642b385e469337e0e5e8fcc3_image%20(5)-p-1080.png 1080w, https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/642b385e469337e0e5e8fcc3_image%20(5)-p-1600.png 1600w, https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/642b385e469337e0e5e8fcc3_image%20(5).png 1992w"
                      class="post-image small-left w-[420px] h-[200px] min-h-0 rounded-[12px] my-5 ml-20"
                    />
                    <div class="blog-post-content pad-top-none w-full p-[24px,32px]">
                      <h4 class="h4">
                        Expanding Digital Assets with Compression for NFTs
                      </h4>
                      <div class="horizontal-fix">
                        <div class="published-on">Categories:</div>
                        <div class="tag-bkg-default margin-bottom-24">
                          <div class="tag">Announcements</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  class="blog-list-item-2 w-dyn-item flex overflow-hidden w-full bg-transparent border-[2px,solid,#202020] rounded-[24px] grid-flow-col flex-none justify-start self-start mb-6"
                >
                  <a
                    href="/posts/creator-studio-launch-adapting-and-evolving-in-web3-with-articulated-skullys"
                    class="link-block-2 horizontal-fix vert-mobile w-inline-block items-stretch flex text-transparent max-w-full"
                  >
                    <img
                      src="https://assets-global.website-files.com/62eab5597fa448c4cf4a805d/6363f1f5af130eac4c560837_DSkully_Logo_Inverted.jpeg"
                      loading="lazy"
                      alt=""
                      class="post-image small-left w-[420px] h-[200px] min-h-0 rounded-[12px] my-5 ml-20"
                    />
                    <div class="blog-post-content pad-top-none w-full p-[24px,32px]">
                      <h4 class="h4">
                        Creator Studio Launch - Adapting and Evolving in Web3
                        with Articulated Skullys
                      </h4>
                      <div class="horizontal-fix">
                        <div class="published-on">Categories:</div>
                        <div class="tag-bkg-default margin-bottom-24">
                          <div class="tag">All Ecosystem Projects</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                role="navigation"
                aria-label="List"
                class="w-pagination-wrapper pagination"
              >
                <a
                  href="?808d538f_page=2"
                  aria-label="Next Page"
                  class="w-pagination-next next-2"
                >
                  <div class="w-inline-block">Next Page</div>
                  <svg
                    class="w-pagination-next-icon"
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
          <div class="sidebar">
            <div class="_50 margin-right-24">
              <h1 class="h3-2">Topics to explore</h1>
              <form
                action="/search"
                class="search-sidebar w-form"
                data-hs-cf-bound="true"
              >
                <input
                  class="email-text-input-2 search-sidebar w-input"
                  maxlength="256"
                  name="query"
                  placeholder="Search…"
                  type="search"
                  id="search"
                  required=""
                />
                <input
                  type="submit"
                  class="next-2 search-sidebar w-button"
                  value="Search"
                />
              </form>
            </div>
            <div class="_50">
              <h4 class="heading-3">Categories</h4>
              <div class="w-dyn-list">
                <div role="list" class="collection-list-4 w-dyn-items">
                  <div role="listitem" class="w-dyn-item">
                    <a
                      href="/categories/all-ecosystem-projects"
                      class="tag-bkg-default w-button"
                    >
                      All Ecosystem Projects
                    </a>
                  </div>
                  <div role="listitem" class="w-dyn-item">
                    <a
                      href="/categories/all-community-projects"
                      class="tag-bkg-default w-button"
                    >
                      All Community Projects
                    </a>
                  </div>
                  <div role="listitem" class="w-dyn-item">
                    <a
                      href="/categories/community"
                      class="tag-bkg-default w-button"
                    >
                      Community
                    </a>
                  </div>
                  <div role="listitem" class="w-dyn-item">
                    <a
                      href="/categories/brand"
                      class="tag-bkg-default w-button"
                    >
                      Brand
                    </a>
                  </div>
                  <div role="listitem" class="w-dyn-item">
                    <a
                      href="/categories/developers"
                      class="tag-bkg-default w-button"
                    >
                      Developers
                    </a>
                  </div>
                  <div role="listitem" class="w-dyn-item">
                    <a
                      href="/categories/creators"
                      class="tag-bkg-default w-button"
                    >
                      Creators
                    </a>
                  </div>
                  <div role="listitem" class="w-dyn-item">
                    <a
                      href="/categories/investors"
                      class="tag-bkg-default w-button"
                    >
                      Investors
                    </a>
                  </div>
                  <div role="listitem" class="w-dyn-item">
                    <a
                      href="/categories/metaverse"
                      class="tag-bkg-default w-button"
                    >
                      Metaverse
                    </a>
                  </div>
                  <div role="listitem" class="w-dyn-item">
                    <a
                      href="/categories/gaming"
                      class="tag-bkg-default w-button"
                    >
                      Gaming
                    </a>
                  </div>
                  <div role="listitem" class="w-dyn-item">
                    <a
                      href="/categories/art-collectibles"
                      class="tag-bkg-default w-button"
                    >
                      Art &amp; Collectibles
                    </a>
                  </div>
                  <div role="listitem" class="w-dyn-item">
                    <a
                      href="/categories/user-guides"
                      class="tag-bkg-default w-button"
                    >
                      User Guides
                    </a>
                  </div>
                  <div role="listitem" class="w-dyn-item">
                    <a
                      href="/categories/announcements"
                      class="tag-bkg-default w-button"
                    >
                      Announcements
                    </a>
                  </div>
                  <div role="listitem" class="w-dyn-item">
                    <a
                      href="/categories/design"
                      class="tag-bkg-default w-button"
                    >
                      Design
                    </a>
                  </div>
                  <div role="listitem" class="w-dyn-item">
                    <a
                      href="/categories/development"
                      class="tag-bkg-default w-button"
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
