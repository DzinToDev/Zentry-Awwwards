import React from "react";
import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="bg-violet w-screen  py-4 text-black">
      <div className=" text-center transition-all h-[89vh] duration-500 ease-in flex items-center justify-center">
        <Tilt>
          <h1 className="special-font font-zentry-regular text-[34vw] transition-all duration-500 ease-in leading-96 ">
            Zentry
          </h1>
        </Tilt>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          &copy; Zentry 2024. All rights reserved{" "}
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          {socialLinks.map((link) => (
            <a
              href={link.href}
              key={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
