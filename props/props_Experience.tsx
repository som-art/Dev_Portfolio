export interface ExperienceProps {
    items: Job[];
   }
   
   export interface Job {
    id: number;
    name: string;
    image: string;
    placeCount: number;
    places: string;
   }