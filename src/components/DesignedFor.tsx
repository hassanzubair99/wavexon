import { motion } from 'motion/react';
import BorderGlow from './ui/BorderGlow';

const targets = [
  "Enterprise Campuses",
  "Government & Public Sector", 
  "Hotels & Resorts",
  "Shopping Malls & Retail Chains",
  "Cafés, Restaurants & QSR",
  "Healthcare & Clinics",
  "Education & Training Centres",
  "Managed Service Providers"
];

export default function DesignedFor() {
  return (
    <section id="industries" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 mb-6 block"
            >
              INDUSTRIES
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold leading-[1.1] tracking-tight text-white mb-6"
            >
              Tailored for high-density, multi-site and regulated environments
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-slate-400 text-sm md:text-base leading-relaxed pt-8 lg:pt-16"
          >
            WaveXon supports environments where network uptime, visitor experience and infrastructure visibility matter to daily operations.
          </motion.p>
        </div>

        <div className="mb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400 block mb-2">
              DESIGNED FOR
            </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {targets.map((target, index) => (
            <motion.div
              key={target}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <BorderGlow
                glowColor="190 100 50"
                colors={['#22d3ee', '#0ea5e9']}
                backgroundColor="#0f172a"
                borderRadius={16}
                glowRadius={20}
                animated={true}
              >
                <div className="px-8 py-5 flex items-center justify-center text-center border border-white/5 bg-slate-900/40 h-full group hover:bg-slate-900/60 transition-all cursor-default">
                  <span className="text-[11px] md:text-xs font-bold tracking-widest text-slate-300 group-hover:text-cyan-400 transition-colors uppercase">
                    {target}
                  </span>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
