/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3,
  FaJava,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiVite,
  SiPostman,
  SiCloudinary,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";

const categories = {
  languages: [
    { name: "JavaScript", icon: <RiJavascriptFill /> },
    { name: "Java", icon: <FaJava /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> },
  ],
  frontend: [
    { name: "React.js", icon: <FaReact /> },
    { name: "Redux Toolkit", icon: <SiRedux /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Vite", icon: <SiVite /> },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "REST APIs", icon: <TbApi /> },
  ],
  database: [
    { name: "MongoDB", icon: <SiMongodb /> },
  ],
  tools: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Cloudinary", icon: <SiCloudinary /> },
  ],
};

const others = [];

const tabs = ["all", ...Object.keys(categories)];

const Stack = () => {
  const [active, setActive] = useState("all");

  const Capsule = ({ tech }) => (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="group flex items-center justify-start gap-3 sm:gap-4 px-4 py-2.5 sm:py-3
        w-full rounded-xl sm:rounded-full border border-gray-700/40 hover:border-[#8B5CF6]/60
        bg-gray-900/40 hover:bg-gradient-to-r hover:from-[#8B5CF6]/10 hover:to-[#3B82F6]/10 
        backdrop-blur transition-colors duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] cursor-pointer"
    >
      <span className="text-xl sm:text-2xl text-gray-400 group-hover:text-[#3B82F6] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 flex-shrink-0">
        {tech.icon}
      </span>
      <span className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-white transition-colors duration-300 truncate">{tech.name}</span>
    </motion.div>
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="px-4 sm:px-6 md:px-8 lg:ml-65 lg:p-5 space-y-8 md:space-y-12"
    >
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0">
        <div className="max-w-2xl w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#8B5CF6] text-left">My Tech Stack</h2>
          <p className="text-[#94A3B8] text-base sm:text-lg mt-2 text-left">
            The technologies I reach for most often - each chosen with purpose
          </p>
        </div>
        <div className="hidden lg:block w-full lg:w-60 bg-gray-900/40 backdrop-blur-sm py-4 px-5 lg:mr-35 rounded-xl border border-gray-700/40">
          <p className="text-gray-200 text-sm italic leading-relaxed mb-3">
            &quot;First, solve the problem. Then, write the code.&quot;
          </p>
          <div className="flex items-center">
            <div className="flex-1">
              <span className="text-gray-400 text-xs font-medium">
                ~ John Johnson
              </span>
            </div>
            <div className="w-2 h-2 rounded-full bg-[#8B5CF6]"></div>
          </div>
        </div>
      </div>
      
      <div className="flex overflow-x-auto gap-4 pb-1 w-full snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-b border-gray-800/50">
        {tabs.map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`relative px-2 py-3 text-sm sm:text-base font-semibold capitalize whitespace-nowrap transition-all snap-start
              ${
                active === key
                  ? "text-[#8B5CF6]"
                  : "text-gray-400 hover:text-gray-200"
              }`}
          >
            {key}
            {active === key && (
              <motion.span
                layoutId="stackTab"
                className="absolute left-0 bottom-0 h-[2px] w-full bg-[#8B5CF6]"
              />
            )}
          </button>
        ))}
      </div>
      
      {active === "all" ? (
        <div className="space-y-8 md:space-y-10 max-w-6xl w-full">
          {Object.entries(categories).map(([group, techs]) => (
            <div key={group} className="space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-gray-500 uppercase tracking-widest text-left">
                {group}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 w-full">
                {techs.map((tech) => (
                  <Capsule key={tech.name} tech={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 w-full max-w-6xl"
        >
          {categories[active].map((tech) => (
            <motion.div
              key={tech.name}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Capsule tech={tech} />
            </motion.div>
          ))}
        </motion.div>
      )}
      
      {others.length > 0 && (
        <div className="space-y-4">
          <p className="font-mono text-sm sm:text-base text-gray-500 text-left">
            {"// Also comfortable with:"}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 w-full">
            {others.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ y: -2 }}
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-gray-700/40 bg-gray-900/30 backdrop-blur"
              >
                <span className="text-lg text-gray-400">{tech.icon}</span>
                <span className="text-xs sm:text-sm text-gray-300 font-medium truncate">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Stack;
