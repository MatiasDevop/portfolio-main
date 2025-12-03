"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Experienced Full Stack Developer with 8+ years building robust web applications using .NET for backend and Angular/React for frontend. Skilled in designing scalable solutions and delivering high-quality code.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Focused on creating intuitive and engaging user interfaces. I collaborate closely with teams to ensure seamless user experiences, leveraging modern frameworks and best practices.",
    href: "",
  },
  {
    num: "03",
    title: "Cloud & DevOps",
    description:
      "Deploying and managing applications on AWS and Azure. Experienced with CI/CD pipelines, cloud services, and infrastructure as code to ensure reliability and scalability.",
    href: "",
  },
  {
    num: "04",
    title: "Team Collaboration",
    description:
      "Strong background in Agile environments, using Jira for project management and effective teamwork. I thrive in collaborative settings, contributing to successful project delivery.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover 
                  transition-all duration-500"
                  >
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500
                     flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2
                  className="text-[42px] font-bold leading-none text-neutral-900 dark:text-white group-hover:text-accent transition-all
                duration-500"
                >
                  {service.title}
                </h2>
                {/* desciption */}
                <p className="text-neutral-600 dark:text-white/80">
                  {service.description}
                </p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
