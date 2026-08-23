import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#101318]/80 backdrop-blur-md pt-16 pb-8 border-t border-[#8B5CF6]/20 shadow-[0_-8px_30px_rgba(139,92,246,0.1)] mt-20 lg:ml-64">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-blue-400 tracking-tight">
              &lt;Aditya/&gt;
            </h2>
            <p className="mt-4 text-gray-400 text-sm max-w-xs leading-relaxed">
              Full-Stack Developer focused on building robust, scalable, and visually stunning web applications.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-300 font-semibold mb-4 text-sm tracking-widest uppercase">Connect</p>
            <div className="flex space-x-4">
              <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="https://github.com/assistaditya027" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2.5 bg-gray-900 rounded-lg text-gray-400 hover:text-[#8B5CF6] hover:bg-gray-800 transition-colors border border-gray-800 hover:border-[#8B5CF6]/50 cursor-pointer shadow-sm">
                <Github size={20} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="https://linkedin.com/in/aditya-kumar-94b65b315" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2.5 bg-gray-900 rounded-lg text-gray-400 hover:text-[#3B82F6] hover:bg-gray-800 transition-colors border border-gray-800 hover:border-[#3B82F6]/50 cursor-pointer shadow-sm">
                <Linkedin size={20} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="mailto:aditya123fx@gmail.com" aria-label="Email" className="p-2.5 bg-gray-900 rounded-lg text-gray-400 hover:text-rose-400 hover:bg-gray-800 transition-colors border border-gray-800 hover:border-rose-400/50 cursor-pointer shadow-sm">
                <Mail size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Aditya Kumar. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#8B5CF6] transition-colors group cursor-pointer"
          >
            Back to top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;