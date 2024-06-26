import React from "react";
import { motion } from "framer-motion";
import { SkillSet } from "@/props/props_Skill";
import Skill from "./Skill";
import htmlicon from "../images/htmlicon.jpg";
import reacticon from "../images/reacticon.png";
import cssicon from "../images/cssicon.jpg";
import tailwindicon from "../images/tailwindicon.png";
import jsicon from "../images/jsicon.png";
import javaicon from "../images/javaicon.png";
import pythonicon from "../images/pythonicon.png";
import sqlicon from "../images/sqlicon.png";
import mongoicon from "../images/mongoicon.png";
import nodeicon from "../images/nodeicon.png";
import { useEffect, useState } from "react";
type Props = {};

function Skills({}: Props) {
  const skills: SkillSet[] = [
    {
      id: 1,
      title: "Cascading Style Sheet",
      progress: 85,
      image: cssicon, // Assuming you have a CSS icon variable
    },
    {
      id: 2,
      title: "HTML5",
      progress: 90,
      image: htmlicon, // Assuming you have an HTML5 icon variable
    },
    {
      id: 3,
      title: "JavaScript",
      progress: 80,
      image: jsicon, // Assuming you have a JavaScript icon variable
    },
    {
      id: 4,
      title: "Java",
      progress: 75,
      image: javaicon, // Assuming you have a Java icon variable
    },
    {
      id: 5,
      title: "Python",
      progress: 70,
      image: pythonicon, // Assuming you have a Python icon variable
    },
    {
      id: 6,
      title: "SQL",
      progress: 70,
      image: sqlicon, // Assuming you have an SQL icon variable
    },
    {
      id: 7,
      title: "MongoDB",
      progress: 70,
      image: mongoicon, // Assuming you have an SQL icon variable
    },
    {
      id: 8,
      title: "React",
      progress: 70,
      image: reacticon, // Assuming you have an SQL icon variable
    },
    {
      id: 9,
      title: "Tailwind",
      progress: 70,
      image: tailwindicon, // Assuming you have an SQL icon variable
    },
    {
      id: 10,
      title: "NodeJS",
      progress: 70,
      image: nodeicon, // Assuming you have an SQL icon variable
    },
  ];

  const [isScreenSmall, setIsScreenSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerHeight < 650);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="min-h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-full xl:px-10 
      justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3
        className={`absolute uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl ${
          isScreenSmall ? "top-10 md:top-18 " : "top-20 md:top-24"
        }`}
      >
        Skills
      </h3>
      <h3
        className={`absolute uppercase tracking-[3px] md:tracking-[6px] text-gray-500 text-sm ${
          isScreenSmall ? "top-16 md:top-20" : "top-28 md:top-36"
        }`}
      >
        Hover over a skill to see current proficiency
      </h3>
      <div
        className={`grid gap-4 lg:gap-7 pt-0 xl:pt-24 ${
          isScreenSmall ? "grid-cols-5 md:grid-cols-4" : "grid-cols-4"
        }`}
      >
        {skills?.slice(0, 4).map((skill) => (
          <Skill key={skill.id} skill={skill} />
        ))}

        {skills?.slice(4, skills.length).map((skill) => (
          <Skill key={skill.id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
