import { useGSAP } from "@gsap/react";
import { ScrollTrigger, gsap } from "gsap/all";
import React from "react";
import AnimatedTitle from "./AnimatedTitle";
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  useGSAP(() => {
    const clipAinmation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "top 0%",
        end: "top -50%",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        // markers: true,
      },
    });
    clipAinmation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div id="about" className="min-h-screen ">
      {" "}
      <div className=" relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general">Welcome to Zentry</h2>
        <AnimatedTitle
          title="Discover the world's <br/> largest shared adventure"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>The Game of Games begins-your life, now an epic MMORPG </p>
          <p>Zentry unites every player from countless games and platforms</p>
        </div>
      </div>
      <div id="clip" className="h-dvh w-screen ">
        <div className="mask-clip-path about-image ">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
