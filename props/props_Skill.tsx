import { StaticImageData } from "next/image";

export interface SkillSet {
  id: number;
  title: string;
  progress: number;
  image: StaticImageData; // Assuming images are URLs as strings
}
