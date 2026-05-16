import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'XonPulse', id: 'xonpulse-details' },
    { name: 'Captive5', id: 'captive5' },
    { name: 'AI Ops', id: 'ai-ops' },
    { name: 'Pulse Insight', id: 'pulse-insight' },
    { name: 'Reports', id: 'reports' },
    { name: 'Industries', id: 'industries' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[95%] lg:max-w-7xl px-2 md:px-4"
    >
      <div className="glass rounded-full py-1.5 md:py-2 px-4 md:px-7 flex items-center shadow-2xl border-white/10 gap-2 md:gap-4 relative">
        {/* Logo Section - Left Anchor */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex-1 flex items-center gap-2 md:gap-4 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
            {/* Background splash effect */}
            <div className="absolute inset-0 bg-cyan-500/10 blur-xl rounded-full scale-150" />
            <div className="absolute inset-0 bg-blue-500/5 blur-2xl rounded-full scale-110" />
            
            {/* SVG Logo Implementation */}
            <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              <path 
                d="M20 50 Q35 20 50 50 T80 50" 
                fill="none" 
                stroke="url(#logoGrad)" 
                strokeWidth="8" 
                strokeLinecap="round" 
              />
              <path 
                d="M25 60 Q40 40 50 60 T75 60" 
                fill="none" 
                stroke="url(#logoGrad)" 
                strokeWidth="4" 
                strokeLinecap="round" 
                opacity="0.5"
              />
            </svg>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display font-black text-sm md:text-2xl tracking-tighter uppercase whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-white/70">
              WaveXon
            </span>
            <span className="text-[6px] md:text-[10px] uppercase font-bold text-cyan-400/80 tracking-[0.4em]">Technologies</span>
          </div>
        </motion.div>

        {/* Center Links - Centered */}
        <div className="hidden xl:flex flex-[5] justify-center items-center gap-1 xl:gap-4">
          {navLinks.map((item, idx) => (
            <motion.button 
              key={item.name} 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.05 + 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                color: '#22d3ee',
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.id)}
              className="text-[9px] xl:text-[10px] font-black uppercase tracking-[0.12em] opacity-60 hover:opacity-100 transition-all whitespace-nowrap cursor-pointer relative group px-2 py-1"
            >
              {item.name}
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              />
            </motion.button>
          ))}
        </div>

        {/* CTA Buttons - Right Anchor */}
        <div className="flex-1 flex items-center justify-end gap-1 px-1 shrink-0">
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="hidden 2xl:block text-[10px] font-bold uppercase tracking-wider opacity-70 hover:opacity-100 transition-opacity border border-white/20 px-4 py-1.5 rounded-full whitespace-nowrap cursor-pointer"
          >
            Get a Quote
          </motion.button>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 25px rgba(34,211,238,0.4)',
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="hidden xl:block bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black py-1.5 px-3 xl:py-2 xl:px-4 rounded-full text-[9px] xl:text-[10px] uppercase tracking-[0.1em] transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)] whitespace-nowrap cursor-pointer"
          >
            Book Discovery Call
          </motion.button>
          
          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-white/70 hover:text-white transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute top-full left-0 right-0 mt-4 mx-0 bg-slate-900/98 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 lg:hidden flex flex-col gap-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-[60]"
            >
              {navLinks.map((item, idx) => (
                <motion.button 
                  key={item.name} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm font-bold uppercase tracking-[0.2em] opacity-70 hover:opacity-100 hover:text-cyan-400 border-b border-white/5 pb-3 transition-all cursor-pointer"
                >
                  {item.name}
                </motion.button>
              ))}
              <div className="flex flex-col gap-4 mt-2">
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-white/5 border border-white/10 py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-colors"
                >
                  Get a Quote
                </motion.button>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-lg shadow-cyan-500/20"
                >
                  Book Discovery Call
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
