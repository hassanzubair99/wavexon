import { motion } from 'motion/react';
import BorderGlow from './ui/BorderGlow';

const features = [
  {
    number: "1",
    title: "On-prem first",
    description: "XonPulse and Captive5 are designed for customer-controlled deployments where operational data stays within the customer environment."
  },
  {
    number: "2",
    title: "Deep technical visibility",
    description: "We focus on real network signals: SNMP, syslog, topology, interface errors, backups, wireless data and operational reports."
  },
  {
    number: "3",
    title: "Designed for GCC and regulated environments",
    description: "Our approach fits organizations that prefer local control, practical deployment and clear operational ownership."
  },
  {
    number: "4",
    title: "Engineering-led support",
    description: "You work with people who understand switches, wireless controllers, logs, topology and production troubleshooting."
  }
];

const engagementSteps = [
  { step: "1. Discovery", detail: "Understand your sites, network size, operational pain and guest Wi-Fi needs." },
  { step: "2. Design", detail: "Prepare the deployment model, data sources, access method and reporting scope." },
  { step: "3. Pilot", detail: "Deploy XonPulse or Captive5 in a controlled environment and validate value." },
  { step: "4. Rollout", detail: "Expand to more devices, sites or guest locations with documentation and support." }
];

export default function WhyWaveXon() {
  return (
    <section id="why-wavexon" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 mb-6 block"
          >
            WHY WAVEXON
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold leading-[1.1] tracking-tight text-white"
          >
            Built by network engineers for real-world operations
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-[2] space-y-4">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <BorderGlow
                  glowColor="190 100 50"
                  colors={['#22d3ee', '#0ea5e9']}
                  backgroundColor="#0f172a"
                  borderRadius={16}
                  glowRadius={25}
                  animated={true}
                >
                  <div className="p-6 bg-slate-900/40 border border-white/5 h-full flex gap-6 hover:bg-slate-900/60 transition-all">
                    <div className="w-8 h-8 rounded-full border-2 border-cyan-500/50 flex items-center justify-center shrink-0 text-cyan-400 font-black text-sm">
                      {feature.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed opacity-80">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </BorderGlow>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <BorderGlow
              glowColor="210 100 50"
              colors={['#0ea5e9', '#2563eb']}
              backgroundColor="#0f172a"
              borderRadius={24}
              glowRadius={40}
              glowIntensity={1.2}
              edgeSensitivity={20}
              animated={true}
              className="h-full"
            >
              <div className="p-8 h-full bg-slate-900/40">
                <h3 className="text-xl font-bold text-white mb-8">How we engage</h3>
                <div className="space-y-8">
                  {engagementSteps.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <h4 className="text-cyan-400 font-bold text-sm uppercase tracking-wider">{item.step}</h4>
                      <p className="text-slate-400 text-xs md:text-sm leading-relaxed opacity-80">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </BorderGlow>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
