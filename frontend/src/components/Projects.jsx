/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import nexhireImg from "../assets/nexhire.png"
import clovoImg from "../assets/clovo.png"
import hostellinkImg from "../assets/hostellink.png"

const projects = [
  {
    title: "Clovo",
    subtitle: "Full-Stack E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution featuring a customer storefront, admin dashboard, and robust RESTful API backend.",
    highlights: [
      "Stripe & Razorpay integration",
      "OAuth & JWT Authentication",
      "PWA with offline fallback",
    ],
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Cloudinary",
    ],
    github: "https://github.com/assistaditya027/Clovo",
    live: "https://clovo-psi.vercel.app/",
    image: clovoImg,
    accent: "from-purple-500/80",
  },
  {
    title: "HostelLink",
    subtitle: "Full-Stack Hostel Management",
    description:
      "A comprehensive hostel management application featuring separate admin and student portals for room allocation, fees, attendance, and complaints.",
    highlights: [
      "Admin & Student Dashboards",
      "Room, Fee & Visitor Management",
      "OAuth & Payment Integrations",
    ],
    tech: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/assistaditya027/HostelLink",
    live: "https://hostel-link-beta.vercel.app/",
    image: hostellinkImg,
    accent: "from-blue-500/80",
  },  
  {
    title: "NexHire",
    subtitle: "Full-Stack Job Portal",
    description:
      "A modern job portal platform connecting Seekers with Employers, featuring comprehensive role-based workflows for Admin, Employer, and Seeker.",
    highlights: [
      "Strict Role-Based Access (RBAC)",
      "Applicant Tracking System",
      "Secure Resume Serving",
    ],
    tech: [
      "Angular",
      "Tailwind CSS",
      "ASP.NET Core API",
      "Entity Framework",
      "SQL Server",
      "JWT Auth",
    ],
    github: "https://github.com/assistaditya027/NexHire",
    live: "https://nexhire-xi.vercel.app/",
    image: nexhireImg,
    accent: "from-amber-500/80",
  },
];

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group rounded-xl border border-gray-700/40 bg-gray-900/20 backdrop-blur overflow-hidden"
    >
      <div className="relative h-40 sm:h-44 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover scale-105 blur-[2px] group-hover:blur-0 group-hover:scale-100 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
        <motion.div
          initial={{ x: "-60%" }}
          whileHover={{ x: "60%" }}
          transition={{ duration: 1.2 }}
          className={`absolute inset-0 bg-gradient-to-r ${project.accent} to-transparent opacity-90 mix-blend-overlay`}
        />
        <div className="absolute bottom-3 left-4">
          <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-md">{project.title}</h3>
          <p className="text-sm font-semibold text-[#C084FC] drop-shadow-md">{project.subtitle}</p>
        </div>
      </div>

      <div className="px-4 sm:px-5 py-3 sm:py-4 space-y-3 sm:space-y-4">
        <p className="text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 sm:gap-2 text-xs text-gray-400">
          {project.highlights.map((h) => (
            <span key={h} className="text-xs">• {h}</span>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
          {project.tech
            .slice(0, expanded ? project.tech.length : 4)
            .map((t) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-2.5 py-1 text-[11px] sm:text-xs font-semibold rounded-md bg-gray-800 border border-gray-600/60 text-gray-200 shadow-sm"
              >
                {t}
              </motion.span>
            ))}
          {project.tech.length > 4 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-2.5 py-1 text-[11px] sm:text-xs font-bold rounded-md bg-[#C084FC]/20 border border-[#C084FC]/40 text-[#E9D5FF] hover:bg-[#C084FC]/30 transition-colors shadow-sm cursor-pointer"
            >
              {expanded ? "− less" : `+${project.tech.length - 4}`}
            </button>
          )}
        </div>

        <div className="flex gap-4 text-gray-400 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub size={16} />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="px-4 sm:px-6 md:px-8 lg:ml-65 lg:p-5 space-y-6 sm:space-y-8 max-w-6xl lg:mr-36 mx-auto"
    >
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#8B5CF6] text-center lg:text-left">
          Things I&apos;ve Built
        </h2>
        <p className="mt-2 text-[#94A3B8] text-base sm:text-lg max-w-xl text-center lg:text-left mx-auto lg:mx-0">
          Real-world projects focused on system design, scalability, and clean engineering.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>

      <div className="flex justify-center text-[#8B5CF6]">
        <a
          href="https://github.com/assistaditya027"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 group"
        >
          <span className="relative">
            View all projects on GitHub
            <span className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-[#8B5CF6] transition-all duration-300 group-hover:w-full group-hover:left-0" />
          </span>
          <ExternalLink
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </motion.section>
  );
};

export default Projects;
