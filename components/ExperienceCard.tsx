import React from 'react'
import { motion } from 'framer-motion'
import { Job } from '@/props/props_Experience'
type Props = {
    job: Job;
}

const ExperienceCard = (props: Props) => {
    const {job} = props;

  return (
    <article>
        <div className="px-0 md:px-7">
            <h4>FrontEnd Developer</h4>
            <p>Louper.io</p>
            <div>
                tech used
            </div>

            <p>Started work.... - Ended.....</p>

            <ul className="list-disc space-y-4 ml-5 text-base">
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard