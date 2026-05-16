import { motion } from 'motion/react';
import BorderGlow from './ui/BorderGlow';
import Silk from './ui/Silk';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 z-[-1] opacity-20">
        <Silk color="#3730a3" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top CTA Banner */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-32"
        >
          <BorderGlow
            glowColor="280 100 60"
            colors={['#8b5cf6', '#a855f7']}
            backgroundColor="#0f172a"
            borderRadius={32}
            glowRadius={60}
            glowIntensity={1.5}
            edgeSensitivity={30}
            animated={true}
          >
            <div className="p-12 md:p-16 bg-slate-900/60 flex flex-col md:flex-row items-center justify-between gap-12 group">
              <div className="max-w-2xl">
                <span className="text-[10px] font-black tracking-[0.3em] text-slate-500 mb-4 block group-hover:text-cyan-400 transition-colors">
                  READY TO MODERNIZE VISIBILITY?
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                  Let's map your network visibility and guest Wi-Fi requirements.
                </h2>
                <p className="text-slate-400 text-base md:text-lg opacity-80">
                  Share your environment size, number of sites and what you want to improve. We will help you understand where XonPulse or Captive5 fits best.
                </p>
              </div>
              <button className="px-10 py-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-cyan-500/20 hover:scale-105 transition-transform whitespace-nowrap">
                Start Discovery
              </button>
            </div>
          </BorderGlow>
        </motion.div>

        {/* Contact Section Heading */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 mb-6 block"
            >
              CONTACT
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold leading-[1.1] tracking-tight text-white"
            >
              Talk to WaveXon
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-slate-400 text-sm md:text-base leading-relaxed pt-8 lg:pt-16"
          >
            Tell us about your network, number of sites, device count and whether you are looking for XonPulse, Captive5 or both.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <BorderGlow
              glowColor="190 100 50"
              colors={['#22d3ee', '#0ea5e9']}
              backgroundColor="#0f172a"
              borderRadius={24}
              glowRadius={40}
              animated={true}
              className="h-full"
            >
              <div className="p-8 md:p-10 bg-slate-900/60 space-y-6">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-4">
                  We usually respond within 1–2 business days.
                </span>
                <div className="space-y-4">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text" 
                    placeholder="Full name" 
                    className="w-full bg-slate-950 border border-white/5 rounded-xl px-6 py-4 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors" 
                  />
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email" 
                    placeholder="Work email address" 
                    className="w-full bg-slate-950 border border-white/5 rounded-xl px-6 py-4 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors" 
                  />
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text" 
                    placeholder="Company" 
                    className="w-full bg-slate-950 border border-white/5 rounded-xl px-6 py-4 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors" 
                  />
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text" 
                    placeholder="Role, e.g. IT Manager, Network Engineer, CTO" 
                    className="w-full bg-slate-950 border border-white/5 rounded-xl px-6 py-4 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors" 
                  />
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    placeholder="Briefly describe your network, number of sites/devices, and what you want to improve." 
                    rows={5} 
                    className="w-full bg-slate-950 border border-white/5 rounded-xl px-6 py-4 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none" 
                  />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-cyan-500/20"
                >
                  Send message
                </motion.button>
              </div>
            </BorderGlow>
          </motion.div>

          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <BorderGlow
              glowColor="220 100 50"
              colors={['#3b82f6', '#1d4ed8']}
              backgroundColor="#0f172a"
              borderRadius={24}
              glowRadius={40}
              animated={true}
              className="h-full"
            >
              <div className="p-10 bg-slate-900/40 h-full flex flex-col">
                <h3 className="text-xl font-bold text-white mb-8">Direct contact</h3>
                
                <div className="space-y-8 mb-12">
                  <div>
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Email</h4>
                    <p className="text-slate-300 text-sm font-bold">contact@wavexon.com</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Company</h4>
                    <p className="text-slate-400 text-sm">WaveXon Technologies Ltd</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Region</h4>
                    <p className="text-slate-400 text-sm">United Kingdom - Serving GCC and global clients remotely</p>
                  </div>
                </div>

                <div className="mt-auto pt-10 border-t border-white/5">
                  <h3 className="text-lg font-bold text-white mb-4">For partners and MSPs</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    We collaborate with system integrators, MSPs and consultants. Mention "Partnership inquiry" in your message if you want to discuss reseller or implementation collaboration.
                  </p>
                </div>
              </div>
            </BorderGlow>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
