import { motion } from 'motion/react';
import BorderGlow from './ui/BorderGlow';

const steps = [
  {
    number: "STEP 01",
    title: "Discovery",
    description: "Understand your network size, sites, device types, guest Wi-Fi requirements and operational pain points.",
    glowColor: "190 100 50"
  },
  {
    number: "STEP 02",
    title: "Design",
    description: "Define the deployment model, data sources, access method, monitoring scope and reporting requirements.",
    glowColor: "210 100 50"
  },
  {
    number: "STEP 03",
    title: "Pilot",
    description: "Deploy XonPulse or Captive5 in a controlled scope to validate visibility, data accuracy and operational value.",
    glowColor: "250 100 60"
  },
  {
    number: "STEP 04",
    title: "Rollout",
    description: "Expand to additional devices, sites or guest locations with documentation and operational handover.",
    glowColor: "280 100 60"
  }
];

export default function Deployment() {
  return (
    <section id="deployment" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 mb-6 block"
            >
              DEPLOYMENT
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold leading-[1.1] tracking-tight text-white mb-6"
            >
              Designed for customer-controlled environments
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-slate-400 text-sm md:text-base leading-relaxed pt-8 lg:pt-16"
          >
            WaveXon products are positioned around on-prem deployment, controlled data flow and practical integration with the customer network.
          </motion.p>
        </div>

        <div className="space-y-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <BorderGlow
                glowColor={step.glowColor}
                colors={['#0ea5e9', '#2563eb']}
                backgroundColor="#0f172a"
                borderRadius={20}
                glowRadius={30}
                glowIntensity={1.2}
                edgeSensitivity={20}
                animated={true}
              >
                <div className="bg-slate-900/40 border border-white/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 group hover:bg-slate-900/60 transition-all">
                  <div className="text-cyan-500 font-black text-xs tracking-widest min-w-[100px]">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed opacity-80">
                      {step.description}
                    </p>
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
