import Web3 from "web3";
const web3 = new Web3(window.ethereum);
import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { Link } from "react-router-dom";
import crowdContract from "../../utils/constant2";
import axios from "axios";

const ShowCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    loadBlockchainData();
  }, []);

  const loadBlockchainData = async () => {
    console.log(crowdContract);
    if (web3.eth) {
      try {
        const campaignsFromContract = await crowdContract.methods
          .getCampaigns()
          .call();
        const campaignsList = [];

        for (let i = 0; i < campaignsFromContract.length; i++) {
          const campaign = campaignsFromContract[i];
          const image = await getImageFromPinata(campaign.image); // Fetch image from Pinata
          campaignsList.push({ ...campaign, image });
        }

        setCampaigns(campaignsList);
      } catch (error) {
        console.error("Error loading blockchain data:", error);
      }
    }
  };

  const getImageFromPinata = async (imageHash) => {
    try {
      const response = await axios.get(
        `https://gateway.pinata.cloud/ipfs/${imageHash}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching image from Pinata:", error);
      return ""; // Return empty string if image fetching fails
    }
  };

  return (
    <>
      <Navbar />
      <div class="mt-[130px]">
        <div class="section-content centered w-container ml-4">
          <h1 class="h3-centered">Campaigns</h1>
          <div class="gradient-hr"></div>
        </div>
      </div>
      <div class="post-list">
        <div class="featured-content">
          <div class="collection-list w-dyn-list">
            <div role="list" class="posts-collection-list w-dyn-items">
              {campaigns.map((campaign, index) => (
                <div
                  role="listitem"
                  class="_3-collection-item w-dyn-item"
                  key={index}
                >
                  <Link
                    to={`/campaign/${index}`}
                    class="link-block-2 w-inline-block"
                  >
                    <img
                      src={campaign.image}
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 30vw, 23vw"
                      class="post-thumbnail"
                    />
                    <div class="author-block">
                      {/* Add author information if available */}
                    </div>
                    <div class="post-content">
                      <div class="post-category">Campaign</div>
                      <h4 class="h4">{campaign.title}</h4>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowCampaigns;
