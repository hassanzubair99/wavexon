import { motion } from 'motion/react';
import BorderGlow from './ui/BorderGlow';

const tabs = ["Branding", "Guest Wi-Fi", "Self Registration", "Portal Pages"];

const features = [
  "Custom branded captive portal pages",
  "Mobile-first guest login and registration experience",
  "Self-registration workflows for open guest access models",
  "Portal themes for hospitality, healthcare, retail and enterprise sites",
  "Guest session visibility and basic usage insights",
  "Pre-configured gateway model for simple deployment",
  "Optional branding updates for campaigns and venue identity"
];

export default function Captive5() {
  return (
    <section id="captive5" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 mb-6 block"
            >
              CAPTIVE5
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold leading-[1.1] tracking-tight text-white mb-6"
            >
              Branded captive portal experiences for guest Wi-Fi onboarding
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-slate-400 text-sm md:text-base leading-relaxed pt-8 lg:pt-16"
          >
            Captive5 focuses on branded portal pages, guest onboarding journeys and visitor access experience. It is suitable for venues that want a polished first impression when guests connect to Wi-Fi.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <BorderGlow
              glowColor="180 100 50"
              colors={['#22d3ee', '#06b6d4']}
              backgroundColor="#0f172a"
              borderRadius={32}
              glowRadius={50}
              glowIntensity={1.2}
              edgeSensitivity={20}
              animated={true}
              className="h-full"
            >
              <div className="p-10 bg-slate-900/40 h-full">
                <div className="flex flex-wrap gap-2 mb-10">
                  {tabs.map((tab) => (
                    <span key={tab} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-wider text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
                      {tab}
                    </span>
                  ))}
                </div>

                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  Captive5 transforms a basic guest Wi-Fi login screen into a professional branded experience. It helps hotels, cafés, restaurants, clinics, hospitals, malls and offices present clean portal pages, collect guest registration details and provide a more organized visitor onboarding flow.
                </p>

                <ul className="space-y-4 mb-10">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-400 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4 pt-4">
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-cyan-500/20 hover:scale-105 transition-transform cursor-pointer"
                  >
                    Request Captive5 Demo
                  </button>
                  <button className="px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
                    View Guest Journey
                  </button>
                </div>
              </div>
            </BorderGlow>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <BorderGlow
              glowColor="250 100 50"
              colors={['#6366f1', '#4f46e5']}
              backgroundColor="#0f172a"
              borderRadius={32}
              glowRadius={50}
              glowIntensity={1.2}
              edgeSensitivity={20}
              animated={true}
              className="h-full"
            >
              <div className="bg-slate-900/60 h-full p-6 md:p-12 flex items-center justify-center relative overflow-hidden group">
                <div className="relative z-10 w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950">
                  <video 
                    className="w-full h-full object-cover pointer-events-none"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    preload="auto"
                    disablePictureInPicture
                    disableRemotePlayback
                    tabIndex={-1}
                    controls={false}
                  >
                    <source src="https://captive5.com/Visual_content/Captive5_intro.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {/* Subtle overlay to soften the video and integrate with UI */}
                  <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay pointer-events-none" />
                </div>
                
                {/* Visual accents */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10 opacity-30">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/30 via-transparent to-transparent blur-3xl" />
                </div>
              </div>
            </BorderGlow>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

