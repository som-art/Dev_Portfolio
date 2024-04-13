import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.0, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 1.7,
      }}
    className="relative flex justify-center items-center">
       <div
        className="absolute border border-stone-400 opacity-30 rounded-full h-[200px] w-[200px] mt-64
            animate-ping"
      />
      <div />
      <div
        className="absolute border border-stone-400 opacity-30 rounded-full h-[300px] w-[300px] mt-64
            animate-ping"
      />
      <div />
      <div
        className="absolute border border-stone-400  opacity-30 rounded-full h-[400px] w-[400px] mt-64
            animate-ping"
      />
      <div />
      <div
        className="absolute border border-purple-500 opacity-60 h-[600px] w-[600px] md:h-[570px] md:w-[570px] 
            animate-pulse mt-64 rounded-full "
      />
      <div />
      <div
        className="absolute border border-stone-400 opacity-30 rounded-full h-[600px] w-[600px] mt-64
            animate-ping"
      />
      <div />
    </motion.div>
  )
}

export default BackgroundCircles