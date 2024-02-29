import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Link } from 'react-router-dom'

const Campaign = () => {
  return (
<>
 <Navbar/>
 <div className="creators-section max-w-[1920px] bg-black pt-[100px] pb-[92px] px-[10%]">
      <div className="developers-columns w-row flex flex-row items-center">
        <div className="hero-column-left-copy w-col w-col-6 flex flex-col justify-between pl-0 pr-[48px] w-[50%] float-left relative min-h-[1px]">
          <h2 className=" self-auto mt-2 mb-6 text-[68px] font-medium leading-[56px] text-left text-white">
            Campaign
          </h2>
          <div className=" mb-[56px] text-[70px] leading-[24px] text-gray-500">
            {/* Show the campaign information */}
            <p className='text-[30px]'>Project Name: </p>
            <p className='text-[30px]'>Project Description: </p>
            <p className='text-[30px]'>Project Goal: </p>
            <p className='text-[30px]'>Project Duration: </p>
            <p className='text-[30px]'>Project Creator: </p>
          </div>
          <label htmlFor="campaignName" className="text-[25px] mb-4 ">Contribution Amount</label>
            <input type="number" className="p-2 mb-3 w-[200px] rounded-md" placeholder='ETH' />
          <Link
            href="https://docs.metaplex.com/"
            className="hero__cta w-[152px] text-black text-center tracking-[-.01rem] bg-[#fff] rounded-lg py-4 px-2 text-[14px] font-semibold leading-6 inline-block"
          >
            Contribute
          </Link>
        </div>
        <div className="  text-left flex-col items-start pl-[48px] pr-0 flex h-[30%] w-[50%] float-left min-h-[1px] relative">
          <img
            src="https://images.pexels.com/photos/19845798/pexels-photo-19845798/free-photo-of-cube-of-ice-beside-ocean.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            loading="lazy"
            alt="Blockchain Technology"
            className="object-scale-down"
          />
        </div>
      </div>
    </div>
 <Footer/>   
</>
  )
}

export default Campaign
