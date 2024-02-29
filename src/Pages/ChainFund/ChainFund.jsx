import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import CreatorSection from "./Components/Creator-Section";
import DeveloperSection from "./Components/Developer-Section";
import Footer from "./Components/Footer";

const Home = () => {
  return (
    <div className=" font-['Forum'] flex-start overflow-x-clip text-white bg-black flex flex-col mx-0 font-soehne-buch sans-serif text-base font-normal leading-5">
      <Navbar />
      <Hero />
      <Features />
      <CreatorSection />
      <DeveloperSection />
      <Footer />
    </div>
  );
};

export default Home;
