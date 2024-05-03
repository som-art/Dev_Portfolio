import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../images/codeicon.jpg";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hello,",
      "I am Somosree Das,",
      "A Software Developer",
      "and A Designer.",
    ],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative rounded-full h-32 w-32 mx-auto object-cover">
        <Image
          priority
          src={profilePic}
          alt="Picture of Somosree Das"
          layout="fill"
          style={{
            objectFit: "cover",
            borderRadius: "100px",
          }}
        />
      </div>
      {/* <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src={profilePic.src}
                alt="Picture of Somosree Das"
            /> */}
      <div className="z-20">
        <h2 className=" text-sm uppercase text-gray-500 pb-1 tracking-[12px]">
          Developer
        </h2>
        <h1 className="text-3xl lg:text-4xl font-medium scroll px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="rgb(147 51 234)" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
