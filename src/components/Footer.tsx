import { motion } from 'motion/react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'About', id: 'who-we-are' },
    { name: 'XonPulse', id: 'xonpulse-details' },
    { name: 'Captive5', id: 'captive5' },
    { name: 'Reports', id: 'reports' },
    { name: 'Contact', id: 'contact' },
  ];

  const legalLinks = [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ];

  return (
    <footer className="relative z-10 bg-black/50 backdrop-blur-md border-t border-white/5 pb-12 pt-20 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-cyan-500/10 blur-xl rounded-full" />
                <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 drop-shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  <path d="M20 50 Q35 20 50 50 T80 50" fill="none" stroke="url(#footerLogoGrad)" strokeWidth="8" strokeLinecap="round" />
                  <path d="M25 60 Q40 40 50 60 T75 60" fill="none" stroke="url(#footerLogoGrad)" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display font-black text-2xl tracking-tighter uppercase text-white">WaveXon</span>
                <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-[0.4em]">Technologies</span>
              </div>
            </motion.div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Pioneering the future of network intelligence and visitor engagement through AI-driven insights and enterprise-grade infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Navigation</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => scrollToSection(link.id)}
                      className="text-slate-500 hover:text-cyan-400 text-[10px] uppercase font-bold tracking-widest transition-colors cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Contact Us</h4>
              <ul className="space-y-2 text-slate-500 text-[10px] uppercase font-bold tracking-widest">
                <li className="hover:text-white transition-colors cursor-default">info@wavexon.com</li>
                <li className="hover:text-white transition-colors cursor-default">+1 (888) WAVEXON</li>
              </ul>
            </div>

            <div className="space-y-4 col-span-2 lg:col-span-1">
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Newsletter</h4>
              <div className="flex items-center gap-2">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="bg-white/5 border border-white/10 px-4 py-2 text-[10px] uppercase font-bold tracking-widest text-white focus:outline-none focus:border-cyan-500/50 transition-all rounded-lg flex-1"
                />
                <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 p-2 rounded-lg transition-all group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-slate-600 text-[10px] uppercase font-bold tracking-[0.3em]">
            &copy; {currentYear} WaveXon Technologies. All rights reserved.
          </span>
          <div className="flex gap-10">
            {legalLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 hover:text-cyan-400 text-[10px] uppercase font-bold tracking-[0.3em] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
