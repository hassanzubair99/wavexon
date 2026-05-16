import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // More dynamic easing
      },
    },
  };

  return (
    <motion.section 
      ref={containerRef}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative pt-32 md:pt-40 pb-16 px-6 flex flex-col items-center text-center overflow-hidden"
    >
      {/* Local Background Effects for Hero */}
      <motion.div 
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          src="https://cdn.pixabay.com/video/2019/07/08/25047-347958032_large.mp4"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-90 scale-105 brightness-[1.1] saturate-[1.2] pointer-events-none"
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          tabIndex={-1}
          controls={false}
        />
        
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
        
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-cyan-950/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-950/20 blur-[150px] rounded-full"></div>

        <div className="absolute inset-0 opacity-[0.12]" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '80px 80px' 
          }}
        ></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          variants={itemVariants}
          className="glass border-white/10 px-5 py-2 rounded-full mb-3 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
        >
        <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-400 flex items-center">
          <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 mr-3 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
          On-Prem Network Intelligence • Guest Wi-Fi Portal Branding • NOC Visibility
        </span>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="max-w-4xl text-3xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tight mb-3 leading-[1.05] md:leading-[1.0]"
      >
        Deep <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">network visibility</span> for <br className="hidden md:block" />
        enterprise operations, built for <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">real-world NOC teams</span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="max-w-xl text-slate-400 text-xs sm:text-sm md:text-base mb-6 leading-relaxed font-sans opacity-95"
      >
        WaveXon Technologies helps enterprises, campuses, hospitality, retail, healthcare and regulated environments gain operational visibility across their infrastructure. XonPulse provides on-prem network intelligence, while Captive5 delivers branded captive portal experiences for guest Wi-Fi onboarding.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full"
      >
        <button 
          onClick={() => document.getElementById('xonpulse-details')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all text-slate-950 font-black py-3 px-8 rounded-full shadow-[0_0_25px_rgba(34,211,238,0.3)] text-sm md:text-[15px] whitespace-nowrap cursor-pointer"
        >
          Explore XonPulse
        </button>
        <button 
          onClick={() => document.getElementById('captive5')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full sm:w-auto glass hover:bg-white/10 border-white/20 text-white font-bold py-3 px-8 rounded-full transition-all text-sm md:text-[15px] whitespace-nowrap cursor-pointer"
        >
          Explore Captive5
        </button>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full sm:w-auto glass hover:bg-white/10 border-white/20 text-white font-bold py-3 px-8 rounded-full transition-all text-sm md:text-[15px] whitespace-nowrap cursor-pointer"
        >
          Book Discovery Call
        </button>
      </motion.div>
      </div>
    </motion.section>
  );
}
