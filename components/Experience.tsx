import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Job } from '@/props/props_Experience'; // Assuming this is the correct path for the Job type
import htmlicon from '../images/htmlicon.png';
import reacticon from '../images/reacticon.png';
import cssicon from '../images/cssicon.png';
import tailwindicon from '../images/tailwindicon.png';

const Experience = () => {
  const jobs: Job[] = [
    {
      id: 1,
      jobTitle: 'Frontend Developer',
      company: 'Louper.io',
      dateStarted: new Date('01-08-2022'),
      dateEnded: new Date('01-09-2022'),
      technologies: ['HTML', 'CSS', 'JavaScript'],
      images: [htmlicon, reacticon, cssicon, tailwindicon],
      points: ['Worked with UX/UI design teams to make them more user friendly.', 
      'Designed multiple dynamic and browser compatible pages using HTML5, CSS3, Javascript (React, Redux).', 
      'Produced multiple visual elements of web applications by translating UI/UX design wireframes into code.'],
    },
    {
      id: 2,
      jobTitle: 'Graphic Designer',
      company: 'Astrologer Yogendra',
      dateStarted: new Date('01-12-2021'),
      dateEnded: new Date('01-10-2022'),
      technologies: ['Node.js', 'Express', 'MongoDB'],
      images: [cssicon, tailwindicon], // Updated to use actual image variables
      points: ['Designed Social Media Content, Instagram reels, Posters and banners for occasions.',
      'Designed some components of their website, Web stories.',
      'Designed e-book cover, contents of book.'],
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
      <h3 className="absolute top-14 md:top-14 uppercase tracking-[12px] text-gray-500 text-lg md:text-xl">
        Education & Experience
      </h3>

      <div className="w-full md:h-auto text-left pb-5 md:pb-10 flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory items-center">
        {jobs.map(job => (
          <ExperienceCard key={job.id} job={job} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
