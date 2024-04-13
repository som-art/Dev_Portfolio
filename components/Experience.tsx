import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Job } from '@/props/props_Experience'
type Props = {}

const Experience = (props: Props) => {

    const jobs: Job[] = [
        { id: 1, name: 'Developer', image: 'image source', placeCount: 10, places: 'place 1' },
        { id: 2, name: 'FrontendDeveloper', image: 'asdasd', placeCount: 20, places: 'place 3' }
        // Add more job objects as needed
    ];
  
    return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full
      px-10 justify-evenly mx-auto items-center"
    >
        <h3 className="absolute top-20 md:top-24 uppercase tracking-[12px] text-gray-500 text-lg md:text-xl">
            Education and Experience
        </h3>

        <div>
        {jobs.map(job => (
                    <ExperienceCard
                        key={job.id} // Assuming each job has an id field
                        job={job}
                    />
                ))}

        </div>
    </motion.div>
  )
}

export default Experience