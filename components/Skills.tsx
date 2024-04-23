import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div className="min-h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-7xl xl:px-10 
    justify-center xl:space-y-0 mx-auto items-center">
        <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
            Skills
        </h3>
        <h3 className="absolute top-36 uppercase tracking-[6px] text-gray-500 text-sm">
            Hover over a skill to see current proficiency
        </h3>
        <div className="grid grid-cols-4 gap-5">
            {/* <Skill/> */}
        </div>
    </motion.div>
  )
}

export default Skills