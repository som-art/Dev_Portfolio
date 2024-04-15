import { StaticImageData } from "next/image";
export interface ExperienceProps {
    items: Job[];
   }
   
   export interface Job {
    id: number;
    jobTitle: string;
    company: string;
    dateStarted: Date;
    dateEnded: Date;
    technologies: string[]; // Assuming technologies are strings
    images: (StaticImageData)[]; // Assuming images are URLs as strings
    points: string[];
  }
  