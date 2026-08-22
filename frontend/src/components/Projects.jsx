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
    subtitle: "MERN E-Commerce Platform",
    description:
      "Built a full-stack e-commerce platform with customer/admin applications for products, cart, wishlist, and orders.",
    highlights: [
      "JWT and OAuth 2.0 auth",
      "Stripe/Razorpay payments",
      "PWA support",
    ],
    tech: [
      "React",
      "Tailwind CSS",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
    ],
    github: "https://github.com/assistaditya027",
    live: "https://clovo-psi.vercel.app/",
    image: clovoImg,
    accent: "from-[#27CBCB]/40",
  },
  {
    title: "HostelLink",
    subtitle: "Multi-Tenant Hostel Management SaaS",
    description:
      "Built a multi-tenant hostel platform with role-based access for Super Admin, Admin, Warden, and Student.",
    highlights: [
      "JWT auth & data isolation",
      "Visitor/gate-pass management",
      "Razorpay payments",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github: "https://github.com/assistaditya027",
    live: "https://hostel-link-beta.vercel.app/",
    image: hostellinkImg,
    accent: "from-violet-400/40",
  },  
  {
    title: "NexHire",
    subtitle: "Full Stack Job Portal",
    description:
      "Built a full-stack job portal with public browsing and role-based workflows for Job Seekers, Employers, and Admins.",
    highlights: [
      "Job search & applications",
      "Applicant tracking",
      "AI-assisted architecture",
    ],
    tech: [
      "Angular",
      "ASP.NET Core",
    ],
    github: "https://github.com/assistaditya027",
    live: "https://nexhire-xi.vercel.app/",
    image: nexhireImg,
    accent: "from-amber-400/40",
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
          className={`absolute inset-0 bg-linear-to-r ${project.accent} to-transparent opacity-60`}
        />
        <div className="absolute bottom-3 left-4">
          <h3 className="text-base sm:text-lg font-semibold text-white">{project.title}</h3>
          <p className="text-xs text-[#27CBCB]">{project.subtitle}</p>
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

        <div className="flex flex-wrap gap-1 sm:gap-2">
          {project.tech
            .slice(0, expanded ? project.tech.length : 4)
            .map((t) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-2 py-1 text-xs rounded-md bg-gray-950 border border-gray-700/40 text-gray-400"
              >
                {t}
              </motion.span>
            ))}
          {project.tech.length > 4 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-2 py-1 text-xs rounded-md border border-gray-700/40 text-[#27CBCB] hover:bg-[#27CBCB]/10 transition-colors"
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
        <h2 className="text-3xl sm:text-4xl font-bold text-[#27CBCB] text-center lg:text-left">
          Things I&apos;ve Built
        </h2>
        <p className="mt-2 text-[#80978F] text-base sm:text-lg max-w-xl text-center lg:text-left mx-auto lg:mx-0">
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

      <div className="flex justify-center text-[#27CBCB]">
        <a
          href="https://github.com/assistaditya027"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 group"
        >
          <span className="relative">
            View all projects on GitHub
            <span className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-[#27CBCB] transition-all duration-300 group-hover:w-full group-hover:left-0" />
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