import React, { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();
  const handelMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };
  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handelMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="text-blue-50 bg-gray-700 relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="bg-zinc-600 absolute left-0 top-0 size-full object-center object-cover"
      />
      <div className=" relative z-10 size-full flex-col justify-between p-5  ">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>

        <BentoTilt className="relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]  transition-all duration-50 ease-in">
          <BentoCard
            src="videos/feature-1.mp4"
            title={<>radiant</>}
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            isComingSoon
          />
        </BentoTilt>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="row-span-1 md:col-span-1 md:row-span-2  transition-all duration-50 ease-in">
            <BentoCard
              src="videos/feature-2.mp4"
              title={<>zigma</>}
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="row-span-1 ms-32 md:col-span-1 md:ms-0  transition-all duration-50 ease-in">
            <BentoCard
              src="videos/feature-3.mp4"
              title={<>nexus</>}
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="me-14 md:col-span-1 md:me-0  transition-all duration-50 ease-in">
            <BentoCard
              src="videos/feature-4.mp4"
              title={<>azul</>}
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="flex size-full flex-col justify-between bg-violet-300 p-5  transition-all duration-50 ease-in">
            <h1 className="bento-title special-font max-w-64 text-black">
              More coming soon.
            </h1>
            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </BentoTilt>

          <BentoTilt>
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center  transition-all duration-50 ease-in"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
