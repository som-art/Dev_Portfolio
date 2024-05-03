import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Job } from "@/props/props_Experience"; // Assuming this is the correct path for the Job type
import htmlicon from "../images/htmlicon.jpg";
import reacticon from "../images/reacticon.png";
import cssicon from "../images/cssicon.jpg";
import tailwindicon from "../images/tailwindicon.png";
import photoshopicon from "../images/photoshopicon.png";
import premiereproicon from "../images/premiereproicon.png";
import aftereffectsicon from "../images/aftereffectsicon.png";
import illustratoricon from "../images/illustratoricon.png";
import wordpressicon from "../images/wordpressicon.png";

const Experience = () => {
  const jobs: Job[] = [
    {
      id: 1,
      jobTitle: "Frontend Developer",
      company: "Louper.io",
      dateStarted: new Date("08-01-2022"),
      dateEnded: new Date("09-01-2022"),
      images: [htmlicon, reacticon, cssicon, tailwindicon],
      points: [
        "Worked with UX/UI design teams to make them more user friendly.",
        "Designed multiple dynamic and browser compatible pages using HTML5, CSS3, Javascript (React, Redux).",
        "Produced multiple visual elements of web applications by translating UI/UX design wireframes into code.",
      ],
    },
    {
      id: 2,
      jobTitle: "Graphic Designer",
      company: "Astrologer Yogendra",
      dateStarted: new Date("12-01-2021"),
      dateEnded: new Date("10-01-2022"),
      images: [photoshopicon, illustratoricon, aftereffectsicon, wordpressicon], // Updated to use actual image variables
      points: [
        "Designed Social Media Content, Instagram reels, Posters and banners for occasions.",
        "Designed some components of their website, Web stories.",
        "Designed e-book cover, contents of book.",
      ],
    },
    {
      id: 3,
      jobTitle: "Graphic Design Intern",
      company: "Focus Designs",
      dateStarted: new Date("10-01-2021"),
      dateEnded: new Date("11-01-2022"),
      images: [
        photoshopicon,
        illustratoricon,
        aftereffectsicon,
        premiereproicon,
      ], // Updated to use actual image variables
      points: [
        "Designed Social Media Content, Poster for Occasions and Events, Banners, Advertisements.",
        "Designed Logo and Company Brochure for client companies.",
      ],
    },
    // Add more job objects as needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-screen flex relative overflow-hidden flex-col text-center md:flex-row max-w-full px-10 mb-2 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-14 md:top-14 uppercase tracking-[12px] text-gray-500 text-base md:text-xl">
        Experience
      </h3>

      <div className="w-full h-[500px] md:h-[490px] text-left pb-5 md:pb-10 flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory items-center  scrollbar-track-gray-700/65 scrollbar-thumb-purple-500/80 scrollbar-thin">
        {jobs.map((job) => (
          <ExperienceCard key={job.id} job={job} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
