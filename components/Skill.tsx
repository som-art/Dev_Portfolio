import React from "react";
import { motion } from "framer-motion";
import htmlicon from "../images/htmlicon.png";
import { SkillSet } from "@/props/props_Skill";
type Props = {
  directionLeft?: boolean;
  skill: SkillSet;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -80 : 80, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="rounded-full border-2 border-purple-700 object-cover w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        src={skill.image.src}
        alt=""
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-purple-600 w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl md:text-3xl font-bold text-white opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
