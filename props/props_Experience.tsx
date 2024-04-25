import { StaticImageData } from "next/image";
export interface Job {
    id: number;
    jobTitle: string;
    company: string;
    dateStarted: Date;
    dateEnded: Date;
    images: (StaticImageData)[]; // Assuming images are URLs as strings
    points: string[];
}
  