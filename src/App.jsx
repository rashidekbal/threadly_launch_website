import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import OpenSource from "./components/OpenSource";
import Donation from "./components/Donation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <OpenSource />
        <Donation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
