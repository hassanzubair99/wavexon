import { motion } from 'motion/react';
import BorderGlow from './ui/BorderGlow';

const modules = [
  {
    tag: 'AI OPERATIONS',
    title: 'Operational Intelligence',
    description: 'Analyzes events, logs and health indicators to support faster operational understanding.',
    glowColor: '190 100 50',
    colors: ['#22d3ee', '#0ea5e9']
  },
  {
    tag: 'PULSE INSIGHT',
    title: 'Endpoint Lookup',
    description: 'Search endpoint or device context and map it to infrastructure visibility.',
    glowColor: '210 100 50',
    colors: ['#3b82f6', '#2563eb']
  },
  {
    tag: 'TOPOLOGY',
    title: 'Topology Engine',
    description: 'Maps infrastructure relationships and helps teams understand network layout.',
    glowColor: '190 100 50',
    colors: ['#22d3ee', '#0ea5e9'],
    highlight: true
  },
  {
    tag: 'REPORTS',
    title: 'Reporting Engine',
    description: 'Generates executive and technical reports for management and engineering teams.',
    glowColor: '210 100 50',
    colors: ['#3b82f6', '#1d4ed8']
  },
  {
    tag: 'INTEGRITY',
    title: 'Network Integrity',
    description: 'Highlights interface errors, CRC, collisions and other indicators affecting network quality.',
    glowColor: '250 100 60',
    colors: ['#6366f1', '#4f46e5']
  },
  {
    tag: 'BACKUP',
    title: 'Backup Engine',
    description: 'Tracks configuration backups to support operational control and recovery readiness.',
    glowColor: '250 100 60',
    colors: ['#6366f1', '#4f46e5']
  },
  {
    tag: 'WIRELESS',
    title: 'Wireless Visibility',
    description: 'Provides visibility into controllers, access points, SSIDs and users where supported.',
    glowColor: '190 100 50',
    colors: ['#22d3ee', '#0ea5e9']
  },
  {
    tag: 'PERFORMANCE',
    title: 'Packet Loss Analytics',
    description: 'Tracks reachability, latency, packet loss and performance degradation trends.',
    glowColor: '210 100 50',
    colors: ['#3b82f6', '#1d4ed8']
  }
];

export default function Modules() {
  return (
    <section id="modules" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 mb-6 block"
            >
              XonPulse Modules
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold leading-[1.1] tracking-tight text-white mb-6"
            >
              Deep modules for enterprise visibility
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-slate-400 text-sm md:text-base leading-relaxed pt-8 lg:pt-16"
          >
            These modules are the core operational value of XonPulse. The homepage shows enough to create confidence, while deeper demos can show the real technical implementation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, idx) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="h-full"
            >
              <BorderGlow
                glowColor={module.glowColor}
                colors={module.colors}
                backgroundColor="#0f172a"
                borderRadius={20}
                glowRadius={30}
                glowIntensity={1.2}
                edgeSensitivity={20}
                animated={true}
                className="h-full"
              >
                <div className={`p-8 flex flex-col h-full bg-slate-900/40 relative group ${module.highlight ? 'bg-cyan-950/20 ring-1 ring-cyan-500/30' : ''}`}>
                  <span className={`text-[10px] font-black tracking-[0.3em] mb-4 block ${module.highlight ? 'text-cyan-400' : 'text-slate-500'}`}>
                    {module.tag}
                  </span>
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                    className="text-lg font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors"
                  >
                    {module.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 + 0.2 }}
                    className="text-slate-400 text-xs md:text-sm leading-relaxed opacity-70"
                  >
                    {module.description}
                  </motion.p>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
