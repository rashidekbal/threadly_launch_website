import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import OpenSource from "../components/OpenSource";
import TechStack from "../components/TechStack";
import FAQ from "../components/FAQ";
import Developer from "../components/Developer";
import Donation from "../components/Donation";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <TechStack />
      <OpenSource />
      <FAQ />
      <Developer />
      <Donation />
    </>
  );
};

export default Home;
