import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";
import resume from "../assets/Somosree.pdf";
type Props = {};

function Header({}: Props) {
  // const saveFile = () => {
  //   saveAs(
  //     "https://drive.google.com/file/d/1bz4H3JOV4xDVg5VjFI1l08PSnkdvi1dI/view?usp=sharing",
  //     "SomosreeDas_Resume.pdf"
  //   );
  // };
  // console.log(resume);
  const resumeUrl =
    "https://drive.google.com/file/d/1bz4H3JOV4xDVg5VjFI1l08PSnkdvi1dI/view?usp=sharing";
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-6xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
        }}
        className=" flex flex-row items-center "
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/somosree-das-09/"
          fgColor="rgb(168 162 158"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/som-art"
          fgColor="rgb(168 162 158"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
        }}
        className="flex flex-row items-center cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="rgb(168 162 158)"
          bgColor="transparent"
          onClick={() =>
            (window.location.href = "mailto:dassomosree59@gmail.com")
          }
        />
        {/* <p className="hidden xl:inline-flex text-sm text-stone-400">
          <button onClick={saveFile}>download</button>
        </p> */}
        <a href={resume} download="Somosree.pdf">
          <button>Download CV</button>
        </a>
      </motion.div>
    </header>
  );
}

export default Header;
