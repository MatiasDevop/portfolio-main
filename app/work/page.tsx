"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Ecommerce website built with Next.js, Tailwind CSS, and TypeScript. It features a responsive design, product listings, and a shopping cart functionality.",
    stack: [
      { name: "Next JS" },
      { name: "Tailwind CSS" },
      { name: "Prisma" },
      { name: "TypeScript" },
      { name: "Stripe" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/MatiasDevop/ecommerce-prisma",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Candidates Management System",
    description:
      "Candidates Management System is a web application that allows users to manage candidates, interviews, and job postings, built with .Net Core, Following DDD principles, Clean Code and testing.",
    stack: [
      { name: ".Net Core" },
      { name: "EF" },
      { name: "DDD" },
      { name: "Testing" },
      { name: "Docker" },
      { name: "SQL" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/MatiasDevop/candidates-app",
  },
  {
    num: "03",
    category: "frontend",
    title: "Ai Agent app",
    description:
      "AI Agent app is a web application that leverages artificial intelligence to provide personalized recommendations and insights. Built with Next.js and Tailwind CSS, it features a modern design and seamless user experience.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "TypeScript" },
      { name: "OpenAI API" },
      { name: "LangChain" },
      { name: "Vercel" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/MatiasDevop/ai-agent-app",
  },
  {
    num: "04",
    category: "frontend",
    title: "Nike web app",
    description:
      "Nike web app is a web application that provides a seamless shopping experience for users. Built with Next.js and Tailwind CSS, it features a modern design and responsive layout.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "TypeScript" },

      { name: "Vercel" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/MatiasDevop/nike-app",
  },
];

import type { Swiper as SwiperType } from "swiper";

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="page-container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project */}
              <h2 className="text-[42px] font-bold leading-none text-neutral-900 dark:text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-neutral-600 dark:text-white/60">
                {project.description}
              </p>
              {/* stack */}
              <ul className="flex gap-5 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <ul>
                {/* border */}
                <div className="border border-white/20"></div>
                {/* button */}
                <div className="flex items-center gap-4">
                  {/* live project button */}
                  {project.live && (
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center">
                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live Project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}
                  {/* github project button */}
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 "></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-start"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
