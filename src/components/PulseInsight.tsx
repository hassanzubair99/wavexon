import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import BorderGlow from './ui/BorderGlow';

const steps = [
  {
    number: "1",
    title: "Search",
    description: "Search by IP, MAC, hostname or device information."
  },
  {
    number: "2",
    title: "Resolve",
    description: "Resolve endpoint context using infrastructure visibility and lookup data."
  },
  {
    number: "3",
    title: "Map",
    description: "Map the result to switch, port, VLAN and topology relationship where available."
  },
  {
    number: "4",
    title: "Act",
    description: "Give engineers faster operational context for troubleshooting and validation."
  }
];

export default function PulseInsight() {
  return (
    <section id="pulse-insight" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 mb-6 block"
            >
              PULSE INSIGHT
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold leading-[1.1] tracking-tight text-white mb-6"
            >
              Find endpoint and infrastructure context faster
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-slate-400 text-sm md:text-base leading-relaxed pt-8 lg:pt-16"
          >
            Pulse Insight is built for the question network engineers ask every day: where is this device connected, what switch is it on, what port, what VLAN and what is around it?
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="h-full relative"
            >
              <BorderGlow
                glowColor="190 100 50"
                colors={['#22d3ee', '#0ea5e9']}
                backgroundColor="#0f172a"
                borderRadius={24}
                glowRadius={30}
                glowIntensity={1.2}
                edgeSensitivity={20}
                animated={true}
                className="h-full"
              >
                <div className="p-8 flex flex-col h-full bg-slate-900/40 relative group">
                  <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-slate-950 font-black text-sm mb-6 shadow-lg shadow-cyan-500/20">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed opacity-80">
                    {step.description}
                  </p>
                </div>
              </BorderGlow>
              
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 z-20 items-center justify-center text-cyan-500/50 -translate-y-1/2 pointer-events-none">
                  <ArrowRight size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
