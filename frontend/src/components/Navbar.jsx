import { useEffect, useState, useRef } from "react";

const sections = ["about", "stack", "projects", "contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 20);

      if (currentY > lastScrollY.current && currentY > 120) {
        setHidden(true);
        setMobileMenuOpen(false); 
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false); 
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id, e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const el = document.getElementById(id);
    if (!el) return;

    const NAVBAR_HEIGHT = mobileMenuOpen ? 80 : 80; 
    const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 h-20
          px-4 sm:px-8 md:px-15 flex justify-between items-center
          transition-all duration-300 ease-out
          ${hidden ? "-translate-y-full" : "translate-y-0"}
          ${
            scrolled
              ? "bg-[#101318]/80 backdrop-blur-md border-b border-[#8B5CF6]/20 shadow-[0_8px_30px_rgba(139,92,246,0.15)]"
              : "bg-transparent"
          }
        `}
      >
        <a href="#top" onClick={scrollToTop}>
          <h1 className="text-xl sm:text-2xl font-bold cursor-pointer hover:scale-105 transition-transform duration-300">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 tracking-tight">&lt;Aditya/&gt;</span>
          </h1>
        </a>
        <div className="hidden md:flex items-center space-x-6 text-[15px] font-semibold tracking-wide capitalize">
          {sections.map((item) => {
            const isActive = active === item;

            return (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => scrollToSection(item, e)}
                className={`relative px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5
                  ${
                    isActive
                      ? "text-[#C084FC] drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]"
                      : "text-gray-300 hover:text-[#C084FC]"
                  }
                `}
              >
                {item}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#C084FC] rounded-full
                    transition-all duration-300
                    ${isActive ? "w-full" : "w-0"}
                  `}
                />
              </a>
            );
          })}
        </div>
        <button
          className="md:hidden text-gray-400 hover:text-[#8B5CF6] transition-colors p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>
      <div
        className={`fixed inset-0 z-40 bg-[#0a0d14]/98 backdrop-blur-xl
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden flex flex-col justify-center
          ${mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}
        `}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_70%)]" />
        
        <div className="flex flex-col items-start px-8 sm:px-12 space-y-8 z-10 w-full">
          {sections.map((item, index) => {
            const isActive = active === item;
            return (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => scrollToSection(item, e)}
                className={`group flex items-end gap-4 w-full transition-all duration-300
                  ${
                    isActive
                      ? "translate-x-2"
                      : "hover:translate-x-2"
                  }
                `}
              >
                <span className={`text-sm sm:text-base font-mono mb-2 transition-colors duration-300
                  ${isActive ? "text-[#8B5CF6]" : "text-gray-500 group-hover:text-[#8B5CF6]"}
                `}>
                  0{index + 1}.
                </span>
                <span className={`text-5xl sm:text-6xl font-bold capitalize tracking-tight transition-all duration-300
                  ${
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 drop-shadow-lg"
                      : "text-gray-300 group-hover:text-white"
                  }
                `}>
                  {item}
                </span>
              </a>
            );
          })}
        </div>
        
        <div className="absolute bottom-10 left-0 w-full px-8 sm:px-12 flex justify-between items-center z-10">
          <div className="flex gap-6">
            <a href="https://github.com/assistaditya027" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/aditya-kumar-94b65b315" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#3B82F6] transition-colors">
              LinkedIn
            </a>
          </div>
          <button
            className="text-xs font-mono text-gray-500 hover:text-white transition-colors uppercase tracking-widest border-b border-gray-700 pb-1"
            onClick={() => setMobileMenuOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
