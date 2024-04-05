import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Web3 from 'web3';
import crowdContract from '../../utils/constant2';
import axios from 'axios';
import FormData from 'form-data';

const CreateCampaign = () => {
  const [account, setAccount] = useState('');
  const [formData, setFormData] = useState({
    campaignName: '',
    campaignDescription: '',
    campaignGoal: '',
    campaignEndDate: '',
    campaignImage: null, // Added campaignImage field
  });

  const [fileName, setFileName] = useState('No image selected');

  useEffect(() => {
    loadBlockchainData();
  }, []);

  const loadBlockchainData = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (error) {
        console.error('Error loading user account:', error);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFormData({ ...formData, campaignImage: selectedFile }); // Update formData with selected file
    setFileName(selectedFile.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.campaignName || !formData.campaignDescription || !formData.campaignGoal || !formData.campaignEndDate || !formData.campaignImage) {
      alert('Please fill in all fields and select an image.');
      return;
    }

    const formDataToSubmit = { ...formData };
    formDataToSubmit.campaignEndDate = new Date(formDataToSubmit.campaignEndDate).getTime() / 1000;

    const formDataForPinata = new FormData();
    formDataForPinata.append('file', formData.campaignImage); // Use formData's campaignImage

    try {
      const resFile = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formDataForPinata, {
        maxBodyLength: 'Infinity',
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formDataForPinata._boundary}`,
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI5MWEzZGNkZi00MGE1LTRiN2UtYmVhYy1lNDY2NzMwMTIyOTQiLCJlbWFpbCI6ImhhcnNoYjE1MDAzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJjYWUxOTRhODU3NTRjYjY1MDc1NyIsInNjb3BlZEtleVNlY3JldCI6IjQ2MzZmOTlkYTVhNWNjOTRmNWE5YTk5OGM3MmFlMTY0MDY1M2JhOTgxYzEwMmM4MWQyNDQ5ZTM2M2ZmZDZkZGQiLCJpYXQiOjE3MTIzMzg2MDh9.fE8cZvXkcPa2jdgtS_91_7MMnTLDa4AbyBxZ9vNCXBc'
        },
      });
      console.log('resFile:', resFile)
      const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;

      

      await crowdContract.methods
        .createCampaign(
          account,
          formDataToSubmit.campaignName,
          formDataToSubmit.campaignDescription,
          parseInt(formDataToSubmit.campaignGoal),
          formDataToSubmit.campaignEndDate,
          ImgHash
        )
        .send({ from: account });

      alert('Campaign created successfully!');
      setFormData({
        campaignName: '',
        campaignDescription: '',
        campaignGoal: '',
        campaignEndDate: '',
        campaignImage: null, // Reset campaignImage after submission
      });
      setFileName('No image selected');
    } catch (error) {
      console.error('Error uploading image to Pinata or creating campaign:', error);
      alert('Failed to create campaign. Please try again.');
    }
  };

  return (
    <div className="font-['Forum'] bg-black bg-cover pt-[11px] pr-[10%] pl-[10%] pb-[85px] bg-center" style={{
      backgroundImage:
        "url(https://assets-global.website-files.com/62eab5597fa44882d84a8037/645906873acb674bf421f029_bg-image-hero.jpg)",
    }}>
      <h1 className="text-5xl font-bold text-white text-center mb-10"><Link to='/'>ChainFund</Link></h1>
      <form className="bg-transparent bg-opacity-[0.3] bg-white p-5 rounded-lg " onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-center mb-7">Create a Campaign</h1>
        <div className="flex flex-col space-y-3">
          <label htmlFor="campaignName" className="text-lg font-bold">Campaign Name</label>
          <input type="text" id="campaignName" name="campaignName" value={formData.campaignName} onChange={handleChange} className="p-3 rounded-md text-black" />
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="campaignDescription" className="text-lg font-bold">Campaign Description</label>
          <textarea id="campaignDescription" name="campaignDescription" value={formData.campaignDescription} onChange={handleChange} className="p-3 rounded-md text-black" />
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="campaignGoal" className="text-lg font-bold">Campaign Goal</label>
          <input type="number" id="campaignGoal" name="campaignGoal" value={formData.campaignGoal} onChange={handleChange} className="p-3 rounded-md text-black" />
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="campaignEndDate" className="text-lg font-bold">Campaign End Date</label>
          <input type="date" id="campaignEndDate" name="campaignEndDate" value={formData.campaignEndDate} onChange={handleChange} className="p-3 rounded-md text-black" />
        </div>
        <div className="flex flex-row space-y-6 justify-between items-center space-x-2 pt-4">
          <label htmlFor="campaignImage" className="text-lg font-bold">Campaign Image</label>
          <input type="file" id="campaignImage" name="campaignImage" onChange={handleFileChange} className="p-3 rounded-md text-black" />
          <span className="textArea">Image: {fileName}</span>
        </div>
        <button type="submit" className="bg-green-300 text-black font-bold p-4 rounded-md hover:bg-[#FFD814] hover:text-black transition duration-300 ease-in-out mt-5 ml-[500px]">Create Campaign</button>
      </form>
    </div>
  );
};

export default CreateCampaign;
