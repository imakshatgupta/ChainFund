import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { useParams } from 'react-router-dom';
import crowdContract from '../../utils/constant2';

const Campaign = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);
  const [contributionAmount, setContributionAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [donators, setDonators] = useState([]);

  const handleContribute = async () => {
    try {
      setIsLoading(true);
      if (!window.ethereum) throw new Error('MetaMask not installed or not connected');
  
      // Convert MATIC value to Wei
      const valueInWei = parseInt(contributionAmount) * 1000000000000000000;
  
      // Get the 'from' address from MetaMask
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const fromAddress = accounts[0]; // Get the first account address from MetaMask
  
      // Send transaction to donate to the campaign
      await crowdContract.methods.donateToCampaign(id).send({ from: fromAddress, value: valueInWei });
  
      // Refresh the campaign data after the contribution
      const campaignData = await crowdContract.methods.getCampaigns().call();
      const selectedCampaign = campaignData[id];
      setCampaign(selectedCampaign);
    } catch (error) {
      console.error('Error contributing to campaign:', error);
    } finally {
      setIsLoading(false);
    }
  };
  

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        if (!window.ethereum) throw new Error('Metamask not installed');
        const campaignData = await crowdContract.methods.getCampaigns().call();
        const donatorsData = await crowdContract.methods.getDonators(id).call();
        console.log(donatorsData);
        const selectedCampaign = campaignData[id];
        setCampaign(selectedCampaign);
        setDonators(donatorsData);
      } catch (error) {
        console.error('Error fetching campaign data:', error);
      }
    };

    fetchCampaign();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="creators-section max-w-[1920px] bg-black pt-[100px] pb-[92px] px-[10%]">
        <div className="developers-columns w-row flex flex-row items-center">
          <div className="hero-column-left-copy w-col w-col-6 flex flex-col justify-between pl-0 pr-[48px] w-[50%] float-left relative min-h-[1px]">
            <h2 className=" self-auto mt-2 mb-6 text-[68px] font-medium leading-[56px] text-left text-white">
              Campaign
            </h2>
            <div className=" mb-[56px] text-[70px] leading-[24px] text-gray-500">
              {campaign && (
                <>
                  <p className='text-[25px] text-white'>Project Name: <span className=' text-gray-400 text-right'>{campaign.title}</span></p>
                  <p className='text-[25px] text-white'>Project Description: <span className=' text-center text-gray-400'>{campaign.description}</span></p>
                  <p className='text-[25px] text-white'>Project Goal: <span className=' text-center text-gray-400'>20 Matic</span></p>
                  <p className='text-[25px] text-white'>Project Duration: <span className=' text-center text-gray-400'>25 April 2026</span></p>
                  {/* <p className='text-[25px] text-white'>Project Creator: {campaign.projectCreator}</p> */}
                </>
              )}
            </div>
            <label htmlFor="campaignName" className="text-[25px] mb-4 ">Contribution Amount (MATIC)</label>
            <input 
              type="number" 
              className="p-2 mb-3 w-[200px] rounded-md text-black" 
              placeholder='MATIC' 
              value={contributionAmount}
              onChange={(e) => setContributionAmount(e.target.value)}
            />
            <button
              onClick={handleContribute}
              disabled={!contributionAmount || isLoading}
              className="hero__cta w-[152px] text-black text-center tracking-[-.01rem] bg-[#fff] rounded-lg py-4 px-2 text-[14px] font-semibold leading-6 inline-block"
            >
              {isLoading ? 'Contributing...' : 'Contribute'}
            </button>

            <div>
              <h3>Donators:</h3>
              <ul>     Address:
                {donators && donators[0] && donators[1] && donators[0].map((donator, index) => (
                  <li key={index}>
                {donator}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="  text-left flex-col items-start pl-[48px] pr-0 flex h-[30%] w-[50%] float-left min-h-[1px] relative">
            {campaign && (
              <img
                src={campaign.image}
                loading="lazy"
                alt="Blockchain Technology"
                className="object-scale-down"
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Campaign;
