import React, { use, useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  const handelVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  // 0 % 4 = 0 +1 => 1
  // 1 % 4 = 1 + 1 => 2
  // 2 % 4 = 1 + 2 => 3
  // 3 % 4 = 1 + 3 => 4
  // 4 % 4 = 0 + 1 = 1
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handelMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex(upcomingVideoIndex);
  };

  const getVideoSrc = (index) => `./videos/hero-${index}.mp4`;

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setIsLoading(false);
    }
  }, [loadedVideos]);

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    if (!isLoading) {
      gsap.set("#video-frame", {
        clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
        borderRadius: "0 0 40% 10%",
      });

      gsap.from("#video-frame", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        borderRadius: "0 0 0 0",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#video-frame",
          start: "center center",
          end: "bottom center",
          scrub: true,
          // markers: true,
        },
      });
    }
  }, [isLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1700);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div id="parent" className=" relative h-dvh w-screen overflow-x-hidden">
      {isLoading ? (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      ) : (
        <div>
          <div
            id="video-frame"
            className=" relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
          >
            <div>
              <div className="absolute-centerr mask-clip-path absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                <div
                  onClick={handelMiniVdClick}
                  className=" origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
                >
                  <video
                    // center on hover mini video
                    ref={nextVideoRef}
                    src={getVideoSrc(upcomingVideoIndex)}
                    loop
                    muted
                    id="current-video"
                    className="size-64 origin-center scale-150 object-center object-cover bg-pink-300"
                    onLoadedData={handelVideoLoad}
                  />
                </div>
              </div>

              <video
                ref={nextVideoRef}
                src={getVideoSrc(currentIndex)}
                loop
                muted
                id="next-video"
                className=" absolute-centerr invisible absolute z-20 size-64 object-cover object-center"
                onLoadedData={handelVideoLoad}
              />

              <video
                // this is background video
                src={getVideoSrc(
                  currentIndex === totalVideos - 1 ? 1 : currentIndex
                )}
                autoPlay
                loop
                muted
                className=" absolute left-0 top-0 size-full object-center object-cover"
                onLoadedData={handelVideoLoad}
              />
            </div>
            <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
              Gaming
            </h1>

            <div className=" absolute left-0 top-0 z-40 size-full">
              <div className="mt-24 px-5  sm:px-10">
                <h1 className="hero-heading text-blue-100">Redefine</h1>
                <p className="max-w-64 font-circular-web text-blue-100">
                  Enter the Metagame <br /> Unleash the Play Economy
                </p>
                <Button
                  id="watch-trailer"
                  title="Watch Trailer"
                  leftIcon={<TiLocationArrow />}
                  containerClass="!bg-yellow-300 flex-center gap-1 mt-5"
                />
              </div>
            </div>
          </div>

          <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
            Gaming
          </h1>
        </div>
      )}
    </div>
  );
};

export default Hero;
