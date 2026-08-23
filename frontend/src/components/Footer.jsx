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
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          {/* Brand & Tagline */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start text-center md:text-left">
            <motion.h2 
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-blue-400 tracking-tight"
            >
              &lt;Aditya/&gt;
            </motion.h2>
            <p className="mt-4 text-gray-400 text-sm max-w-xs leading-relaxed">
              Full-Stack Developer focused on building robust, scalable, and visually stunning web applications.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-end">
            <p className="text-gray-300 font-semibold mb-4 text-sm tracking-widest uppercase">Connect</p>
            <div className="flex space-x-4">
              <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} href="https://github.com/assistaditya027" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2.5 bg-gray-900 rounded-lg text-gray-400 hover:text-[#8B5CF6] hover:bg-gray-800 transition-colors border border-gray-800 hover:border-[#8B5CF6]/50 cursor-pointer shadow-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                <Github size={20} className="relative z-10" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} href="https://linkedin.com/in/aditya-kumar-94b65b315" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2.5 bg-gray-900 rounded-lg text-gray-400 hover:text-[#3B82F6] hover:bg-gray-800 transition-colors border border-gray-800 hover:border-[#3B82F6]/50 cursor-pointer shadow-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                <Linkedin size={20} className="relative z-10" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} href="mailto:aditya123fx@gmail.com" aria-label="Email" className="p-2.5 bg-gray-900 rounded-lg text-gray-400 hover:text-rose-400 hover:bg-gray-800 transition-colors border border-gray-800 hover:border-rose-400/50 cursor-pointer shadow-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                <Mail size={20} className="relative z-10" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Aditya Kumar. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#8B5CF6] transition-colors group cursor-pointer"
          >
            Back to top
            <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <ArrowUp size={16} className="group-hover:text-[#8B5CF6]" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;