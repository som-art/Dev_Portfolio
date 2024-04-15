import { motion } from 'framer-motion';
import React from 'react';
import { Job } from '@/props/props_Experience'
import htmlicon from '../images/htmlicon.png';
import reacticon from '../images/reacticon.png';

type Props = { job: Job };

const ExperienceCard = ({ job }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-left h-full space-y-8 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-gray-800 p-10 hover:opacity-100 
    opacity-40 cursor-pointer transition-opacity duration-150 overflow-hidden">
      <div className="px-0 md:px-10 ">
        
            <h4 className="text-lg md:text-2xl font-light tracking-wider">{job.jobTitle}</h4>
            <p className="font-bold text-md md:text-xl mt-1 tracking-wider">{job.company}</p>
            <div className="flex space-x-2 my-2">
              {job.images.map((image, index) => (
                <img
                  key={index}
                  className="h-10 w-10 rounded-full object-cover"
                  src={image.src}
                  alt=""
                />
              ))}
            </div>
          
        <p className="uppercase py-2 md:py-5 text-gray-500 text-sm md:text-lg">
          {new Date(job.dateStarted).toDateString()} -{' '}
          {new Date(job.dateEnded).toDateString()}
        </p>
      </div>
      <ul className="px-0 md:px-10 list-disc space-y-2 pr-5 text-justify ml-0 text-sm md:text-base pl-5 overflow-y-hidden">
        {job.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </article>
  );
};

export default ExperienceCard;
