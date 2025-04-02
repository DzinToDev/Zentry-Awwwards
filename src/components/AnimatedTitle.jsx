import { ScrollTrigger, gsap } from "gsap/all";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return; // Ensure element exists

    const ctx = gsap.context(() => {
      // Set Initial State
      gsap.set(".animated-word", {
        transform:
          "translate3d(-50px, 100px, 0) rotateY(30deg) rotateX(-30deg)",
        opacity: 0,
      });

      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "center bottom",
          toggleActions: "play none none reverse",
          //   markers: true, // Debugging
        },
      });

      titleAnimation.to(
        ".animated-word",
        {
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          opacity: 1,
          ease: "power2.inOut",
          stagger: 0.1,
        },
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
