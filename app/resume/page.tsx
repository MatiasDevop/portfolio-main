"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaAngular,
  FaAws,
  FaJira,
  FaPython,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiDotnet,
  SiDocker,
  SiSonarcloud,
  SiSolidity,
  SiAmazonroute53,
} from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "I'm a passionate full stack developer who loves building cool things with code. Outside of work, you'll find me traveling, working out, exploring new cultures, and enjoying good food. Always curious and ready for the next adventure—both in tech and in life!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Nestor Matias A.",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+34) 63108806",
    },
    {
      fieldName: "Experience",
      fieldValue: "8+ years",
    },
    {
      fieldName: "Skype",
      fieldValue: "Nestor.matias23",
    },
    {
      fieldName: "Email",
      fieldValue: "nestorblr_11@hotmail.com",
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
    "Full Stack Developer with over 8 years of experience delivering scalable, high-quality solutions for international companies and global clients. Skilled in .NET, Python, Angular, React, Next.js, AWS, Azure, Docker, and Agile methodologies. Proven track record in building robust applications, collaborating in cross-functional teams, and driving projects from concept to deployment.",
  items: [
    {
      company: "International Airlines Group (IAG)",
      position: "Full Stack Net&Python/React Developer",
      duration: "Feb 2024 - Present",
    },
    {
      company: "Upwork",
      position: "Full Stack Net/Angular/React Developer",
      duration: "Mar 2020 - Present",
    },
    {
      company: "Redarbor",
      position: "Full Stack Net/Angular Developer",
      duration: "Jan 2023 - Jan 2024",
    },
    {
      company: "Lanistar",
      position: "Backend .NET Core Developer",
      duration: "Jul 2020 - Jan 2021",
    },
    {
      company: "DigitalApp",
      position: "Full Stack Developer",
      duration: "Sep 2019 - Mar 2020",
    },
    {
      company: "Qhanati StartUp",
      position: "Full Stack JR. Net/Angular Developer",
      duration: "2016 - 2018",
    },
  ],
};
// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Bachelor's degree in Software Engineering from Universidad Adventista de Bolivia, complemented by specialized training in networking through Cisco Networking Academy. Strong foundation in software development, computer science, and IT infrastructure.",
  items: [
    {
      institution: "Universidad Adventista de Bolivia",
      degree: "Bachelor's degree, Software Engineering",
      duration: "2010 - 2016",
    },
    {
      institution: "Cisco Networking Academy",
      degree: "Networking",
      duration: "2015 - 2016",
    },
    {
      institution: "Online Course",
      degree: "Programing Course with .NET and Angular",
      duration: "2018-2020",
    },
    {
      institution: "Tech Institute",
      degree: "English Course",
      duration: "2019-2020",
    },
    {
      institution: "Online Course",
      degree: "Microservices with .NET Core",
      duration: "2021 - 2022",
    },
  ],
};

// skill data

const skills = {
  title: "My Skills",
  description:
    "Full Stack Developer skilled in .NET, Python, Angular, React, Next.js, AWS, Azure, and Docker. Experienced in both backend and frontend development, cloud services, and Agile teamwork. Passionate about building scalable, high-quality web applications.",
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
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiDotnet />,
      name: ".Net Mircrosoft",
    },
    {
      icon: <SiDocker />,
      name: "Docker",
    },
    {
      icon: <FaAngular />,
      name: "Angular",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <SiAmazonroute53 />,
      name: "Amazon Route 53",
    },
    {
      icon: <FaJira />,
      name: "Jira",
    },
    {
      icon: <SiSonarcloud />,
      name: "SonarCloud",
    },
    {
      icon: <TestTube />,
      name: "Testing",
    },
    {
      icon: <SiSolidity />,
      name: "Solidity",
    },
    {
      icon: <FaPython />,
      name: "Python",
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
import { TestTube } from "lucide-react";

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
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="md:text-lg text-sm  min-h-[68px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3 flex-1">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 md:text-base text-sm font-bold">
                              {item.company}
                            </p>
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
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[36px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-lg  min-h-[68px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3 flex-1">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div>
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 hover:text-accent">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex flex-row items-center justify-center xl:justify-start gap-6"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-sm md:text-lg">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
