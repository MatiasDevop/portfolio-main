"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Luke Coleman",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+34) 342 343 432",
    },
    {
      fieldName: "Experience",
      fieldValue: "10+ years",
    },
    {
      fieldName: "Skype",
      fieldValue: "Nestor.matias23",
    },
    {
      fieldName: "Email",
      fieldValue: "test@email.com",
    },
    {
      fieldName: "Frelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Spanish",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates",
  items: [
    {
      company: "Tech Solutions Inc",
      position: "full stack developer",
      duration: "2022 - Presnet ",
    },
    {
      company: "Web Design Studiio",
      position: "Front-End developer Intern",
      duration: "Summer 2021",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2018 - 2019",
    },
    {
      company: "Software Developement Firm",
      position: "Junior Developer",
      duration: "2017 - 2018",
    },
    {
      company: "Freelance Web developer",
      position: "Junior Developer",
      duration: "2016 - 20117",
    },
  ],
};
// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate xxxxx",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full stack web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codeacademy",
      degree: "Front-end Track",
      duration: "2022",
    },
    {
      institution: "Online Course",
      degree: "Programing Course",
      duration: "2020-2021",
    },
    {
      institution: "Tech Institute",
      degree: "Certified web development",
      duration: "2019",
    },
    {
      institution: "Design School",
      degree: "Diploma in Graphic Design",
      duration: "2016 -2018",
    },
  ],
};

// skill data

const skills = {
  title: "My Skills",
  description: "dsaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "React js",
    },
    {
      icon: <SiNextdotjs />,
      name: "nextjs",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience"> Experience </TabsTrigger>
            <TabsTrigger value="education"> Education </TabsTrigger>
            <TabsTrigger value="skills"> Skills </TabsTrigger>
            <TabsTrigger value="about"> About me </TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[36px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[68px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
