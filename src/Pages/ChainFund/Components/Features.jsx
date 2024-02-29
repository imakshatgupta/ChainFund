import React from 'react'

const Features = () => {
  return (
    <div className="stats-section w-full max-w-screen-2xl bg-[#101010]  justify-center mx-auto py-9">
    <div className="columns-3-copy w-full grid grid-cols-4 gap-x-2  text-center ml-[7.5rem]  justify-center pt-0 pb-0 font-inter">
        <div className="column-7-copy w-full md:w-1/3 flex flex-col items-center">
            <div className="text-block-19 pb-8 font-semibold text-3xl">180,312</div>
            <div className="stat-subtext">Collections</div>
        </div>
        <div className="column-8-copy w-full md:w-1/3 flex flex-col items-center">
            <div className="text-block-19 pb-8 font-semibold text-3xl">116.1M</div>
            <div className="stat-subtext">NFTs minted</div>
        </div>
        <div className="column-9-copy w-full md:w-1/3 flex flex-col items-center">
            <div className="text-block-19 pb-8 font-semibold text-3xl">14.6M</div>
            <div className="stat-subtext">Total collectors</div>
        </div>
        <div className="column-10-copy w-full md:w-1/3 flex flex-col items-center">
            <div className="text-block-19 pb-8 font-semibold text-3xl">$1.1B</div>
            <div className="stat-subtext">Creator revenue</div>
        </div>
    </div>
</div>

  )
}

export default Features
