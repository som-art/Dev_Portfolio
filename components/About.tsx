import React from "react";
import Image from "next/image";
import profilePic from "../images/profile.jpeg";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row 
      max-w-6xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.1,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative -mb-20 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover
        md:rounded-lg md:w-50 md:h-64 "
      >
        <Image
          priority
          src={profilePic}
          alt="Picture of Somosree Das"
          layout="fill"
          style={{
            objectFit: "cover",
          }}
          className="rounded-full md:rounded-lg"
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-xl lg:text-4xl font-light tracking-wide">
          <span className="inline relative">
            Introducing Myself
            <motion.span
              initial={{
                opacity: 0,
                width: 0,
                borderBottomColor: "rgb(168 85 247)",
              }}
              whileInView={{
                opacity: 1,
                width: "100%",
                borderBottomColor: "rgb(107 33 168)",
              }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="absolute left-0 bottom-[-3px] border-b-2"
            ></motion.span>
          </span>
        </h4>
        <p className="text-sm md:text-lg lg:text-lg text-justify">
          I am a computer science graduate pursuing a Masters degree with a
          focus on UX/UI design and full-stack web development. My experience
          includes collaborating with design teams to improve user interfaces,
          designing dynamic and browser-compatible web pages using HTML5, CSS3,
          and JavaScript (React, Redux), and translating UI/UX wireframes into
          code. I am passionate about creating user-friendly experiences
        </p>
      </div>
    </motion.div>
  );
};

export default About;
