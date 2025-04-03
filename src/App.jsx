import React from "react";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Features from "./components/Features";

function App() {
  return (
    <main className=" relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutUs />
      <Features />
    </main>
  );
}

export default App;
