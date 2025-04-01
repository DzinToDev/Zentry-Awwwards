import React from "react";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <main className=" relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <AboutUs />
      <section className="w-screen h-dvh"></section>
    </main>
  );
}

export default App;
