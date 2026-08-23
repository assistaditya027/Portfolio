import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
      className="relative bg-[#101318]/80 backdrop-blur-md pt-16 pb-8 border-t border-[#8B5CF6]/20 shadow-[0_-8px_30px_rgba(139,92,246,0.1)] mt-20 lg:ml-64 overflow-hidden"
    >
      {/* Background glowing orb */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-violet-600/20 blur-[100px] rounded-full pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 sm:gap-8">
          
          {/* Brand & Tagline */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="relative inline-block mt-4 md:mt-0">
              <motion.div
                animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full bg-gradient-to-r from-violet-600/30 to-blue-600/30 blur-xl md:blur-lg"
              />
              <motion.h2 
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative text-4xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-blue-400 tracking-tighter drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]"
              >
                &lt;Aditya/&gt;
              </motion.h2>
            </div>
            <p className="mt-8 md:mt-4 text-gray-400 text-sm max-w-xs leading-relaxed border-t border-gray-800/60 pt-6 md:border-t-0 md:pt-0">
              Full-Stack Developer focused on building robust, scalable, and visually stunning web applications.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-end">
            <p className="text-gray-300 font-semibold mb-6 md:mb-4 text-xs sm:text-sm tracking-widest uppercase bg-gray-900/50 px-4 py-1 rounded-full border border-gray-800/80">Connect</p>
            <div className="flex gap-5 sm:space-x-4 sm:gap-0">
              <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} href="https://github.com/assistaditya027" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-3.5 sm:p-2.5 bg-gray-900/80 backdrop-blur-sm rounded-full sm:rounded-lg text-gray-400 hover:text-white transition-colors border border-gray-700/50 hover:border-violet-500/50 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                <Github size={22} className="relative z-10 sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} href="https://linkedin.com/in/aditya-kumar-94b65b315" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-3.5 sm:p-2.5 bg-gray-900/80 backdrop-blur-sm rounded-full sm:rounded-lg text-gray-400 hover:text-white transition-colors border border-gray-700/50 hover:border-blue-500/50 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                <Linkedin size={22} className="relative z-10 sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} href="mailto:aditya123fx@gmail.com" aria-label="Email" className="p-3.5 sm:p-2.5 bg-gray-900/80 backdrop-blur-sm rounded-full sm:rounded-lg text-gray-400 hover:text-white transition-colors border border-gray-700/50 hover:border-rose-400/50 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(251,113,133,0.2)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                <Mail size={22} className="relative z-10 sm:w-5 sm:h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-gray-800/60 flex flex-col-reverse sm:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs sm:text-sm font-medium tracking-wide">
            &copy; {currentYear} Aditya Kumar. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-800/40 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors group cursor-pointer border border-gray-700/50 hover:border-violet-500/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]"
          >
            Back to top
            <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <ArrowUp size={16} className="group-hover:text-violet-400" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;