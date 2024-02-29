import React from "react";

import Home from "./Pages/Home";
import ChainFund from "./Pages/ChainFund/ChainFund";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ShowCampaigns from "./Pages/ChainFund/ShowCampaigns";
import CreateCampaign from "./Pages/ChainFund/CreateCampaign";
import About from "./Pages/ChainFund/About";
import Campaign from "./Pages/ChainFund/Campaign";
import Payment from "./Pages/Payment";

const App = () => (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chainfund" element={<ChainFund />} />
        <Route path="/show-campaigns" element={<ShowCampaigns />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
        <Route path="/news" element={<About />} />
        <Route path="/campaign/:id" element={<Campaign/>}/>
        <Route path='/payment' element={<Payment/>} />
      </Routes>
    </Router>
  </div>
);

export default App;
