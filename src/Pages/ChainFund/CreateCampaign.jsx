import React from 'react';
import { Link } from 'react-router-dom';


const CreateCampaign = () => {
  return (
      <div className="font-['Forum'] bg-black bg-cover pt-[11px] pr-[10%] pl-[10%] pb-[85px] bg-center" style={{
        backgroundImage:
          "url(https://assets-global.website-files.com/62eab5597fa44882d84a8037/645906873acb674bf421f029_bg-image-hero.jpg)",
      }}>
        <h1 className="text-5xl font-bold text-white text-center mb-10"><Link to='/'>ChainFund</Link></h1>
        <form className="bg-transparent bg-opacity-[0.3] bg-white p-5 rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-7">Create a Campaign</h1>
          <div className="flex flex-col space-y-3">
            <label htmlFor="campaignName" className="text-lg font-bold">Campaign Name</label>
            <input type="text" id="campaignName" className="p-3 rounded-md" />
          </div>
          <div className="flex flex-col space-y-3">
            <label htmlFor="campaignDescription" className="text-lg font-bold">Campaign Description</label>
            <textarea id="campaignDescription" className="p-3 rounded-md" />
          </div>
          <div className="flex flex-col space-y-3">
            <label htmlFor="campaignGoal" className="text-lg font-bold">Campaign Goal</label>
            <input type="number" id="campaignGoal" className="p-3 rounded-md" />
          </div>
          <div className="flex flex-col space-y-3">
            <label htmlFor="campaignEndDate" className="text-lg font-bold">Campaign End Date</label>
            <input type="date" id="campaignEndDate" className="p-3 rounded-md" />
          </div>
          <div className="flex flex-row space-y-6 justify-between items-center space-x-2 pt-4">
            <label htmlFor="campaignImage" className="text-lg font-bold">Campaign Image</label>
            <input type="file" id="campaignImage" className="p-3 rounded-md" />
            <label htmlFor="campaignVideo" className="text-lg font-bold">Campaign Video</label>
            <input type="file" id="campaignVideo" className="p-3 rounded-md" />
            <label htmlFor="campaignCategory" className="text-lg font-bold">Campaign Category</label>
            <select id="campaignCategory" className="p-3 rounded-md">
              <option value="Health">Health</option>
              <option value="Education">Education</option>
              <option value="Technology">Technology</option>
              <option value="Environment">Environment</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <button type="submit" className="
            bg-green-300
            text-black 
            font-bold 
            p-4 
            rounded-md 
            hover:bg-[#FFD814] 
            hover:text-black 
            transition 
            duration-300 
            ease-in-out 
            mt-5
            ml-[500px]
          ">Create Campaign</button>
        </form>
      </div>
  );
}

export default CreateCampaign;
