import React from "react";
import ohfood from "../images/ohfood.png";
import { motion } from "framer-motion";
import htmlicon from "../images/htmlicon.jpg";
import reacticon from "../images/reacticon.png";
import cssicon from "../images/cssicon.jpg";
import tailwindicon from "../images/tailwindicon.png";
import jsicon from "../images/jsicon.png";
import mongoicon from "../images/mongoicon.png";
import nodeicon from "../images/nodeicon.png";
import { LinkIcon } from "@heroicons/react/24/solid";

type Props = {};

const Projects = (props: Props) => {
  const projects = [
    {
      id: 1,
      title: "Oh!Food",
      image: ohfood,
      summary:
        "Oh!Food is a MERN Stack-based grocery delivery app leveraging MongoDB for flexible data storage, Express.js for robust backend development, React for interactive user interfaces, and Node.js for scalable server-side operations. Key features include user-friendly registration, product filtering, real-time order tracking, and admin functionalities for managing products and users. The project's feature set encompasses user authentication, product filtering based on price and rating, real-time order tracking, and administrative functionalities for managing products, orders, and user roles. The focus on technical excellence in software architecture, database management, API integration, and user interface design ensures a robust and user-centric grocery delivery platform tailored to meet modern-day demands and expectations.",
      technologies: [
        {
          id: 1,
          title: "Cascading Style Sheet",
          progress: 85,
          image: cssicon, // Assuming you have a CSS icon variable
        },
        {
          id: 2,
          title: "HTML",
          progress: 85,
          image: htmlicon, // Assuming you have a CSS icon variable
        },
        {
          id: 3,
          title: "Tailwind",
          progress: 85,
          image: tailwindicon, // Assuming you have a CSS icon variable
        },
        {
          id: 4,
          title: "React",
          progress: 85,
          image: reacticon, // Assuming you have a CSS icon variable
        },
        {
          id: 5,
          title: "NodeJs",
          progress: 85,
          image: nodeicon, // Assuming you have a CSS icon variable
        },
      ],
      linkToBuild: "https://project1build.com",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className=" h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-14 md:top-14 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mt-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-purple-500/80">
        {projects.map((project) => (
          <div className="w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-36 h-screen">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className=" h-28 xl:h-52 md:h-44 object-contain"
              src={project.image.src}
              alt=""
            />

            <div className="space-y-3 md:space-y-4 px-0 md:px-2 max-w-7xl">
              <h4 className=" text-base md:text-md lg:text-xl font-semibold text-center">
                <span className="inline relative">
                  {" "}
                  Project {project.id}:
                  <motion.span
                    initial={{
                      opacity: 0,
                      width: 0,
                      borderBottomColor: "white",
                    }}
                    whileInView={{
                      opacity: 1,
                      width: "100%",
                      borderBottomColor: "white",
                    }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className="absolute left-0 bottom-[-3px] border-b-2"
                  ></motion.span>
                </span>{" "}
                {project.title}
              </h4>

              <div className="flex items-center space-x-2 justify-left ">
                {project?.technologies.map((technology) => (
                  <img
                    key={technology.id}
                    className="h-7 w-7 rounded-full object-cover"
                    src={technology.image.src}
                    alt=""
                  />
                ))}
              </div>

              <p className=" text-sm text-justify ">{project.summary}</p>

              <div className="flex items-center space-x-3 justify-left ">
                <LinkIcon className="text-white h-5 w-5 animate-pulse" />
                <a
                  href={project.linkToBuild}
                  className="inline-flex text-sm text-white"
                >
                  Github Link
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[20%] md:top-[30%] bg-purple-400/30 left-0 h-[300px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
