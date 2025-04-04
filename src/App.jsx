import React from "react";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <main className=" relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutUs />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
