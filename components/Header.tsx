import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

function Header({}: Props) {
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
        className=" flex flex-row items-center ">
            {/* Social Icons */}
            <SocialIcon url="https://www.linkedin.com/in/somosree-das-09/" 
            fgColor="rgb(168 162 158" 
            bgColor="transparent"/>
            <SocialIcon url="https://github.com/som-art" 
            fgColor="rgb(168 162 158" 
            bgColor="transparent"/>
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
        className="flex flex-row items-center cursor-pointer">
        <SocialIcon 
            className="cursor-pointer"
            network="email" 
            fgColor="rgb(168 162 158)" 
            bgColor="transparent"
        />
        <p className="hidden xl:inline-flex text-sm text-stone-400">Get in Touch</p>
        </motion.div>
    </header>
  )
}

export default Header