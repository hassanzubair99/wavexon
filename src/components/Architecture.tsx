import { motion } from 'motion/react';
import BorderGlow from './ui/BorderGlow';

const layers = [
  {
    number: '1',
    title: 'Infrastructure Layer',
    description: 'Connects to enterprise wired and wireless environments.',
    tags: ['Switches', 'Routers', 'Controllers', 'Access Points', 'Servers'],
    glowColor: '210 100 50',
    colors: ['#3b82f6', '#1d4ed8']
  },
  {
    number: '2',
    title: 'Collection Layer',
    description: 'Collects operational data through controlled data sources.',
    tags: ['Telemetry Collection', 'Infrastructure Signals', 'Operational Data Sources', 'Network Intelligence Inputs', 'Infrastructure Telemetry', 'Enterprise Data Collection'],
    glowColor: '190 100 50',
    colors: ['#06b6d4', '#0891b2']
  },
  {
    number: '3',
    title: 'Intelligence Layer',
    description: 'Transforms raw signals into operational context.',
    tags: ['AI Operations', 'Pulse Insight', 'Packet Loss', 'Error Analytics', 'Health Trends'],
    glowColor: '280 100 60',
    colors: ['#a855f7', '#7c3aed']
  },
  {
    number: '4',
    title: 'Operations Layer',
    description: 'Presents visibility to engineers, NOC teams and leadership.',
    tags: ['Dashboards', 'Reports', 'Alerts', 'Topology', 'Backups'],
    glowColor: '340 100 60',
    colors: ['#f43f5e', '#e11d48']
  }
];

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-24 px-6 overflow-hidden">
      {/* Background Accents removed to use DarkVeil from App.tsx */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 mb-6 block"
            >
              Architecture
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold leading-[1.1] tracking-tight text-white uppercase"
            >
              XonPulse visibility engine
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-slate-400 text-sm md:text-base leading-relaxed pt-8 lg:pt-12"
          >
            XonPulse is structured around collection, intelligence and operational presentation. It is designed to work with existing network environments instead of replacing them.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {layers.map((layer, idx) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="h-full"
            >
              <BorderGlow
                glowColor={layer.glowColor}
                colors={layer.colors}
                backgroundColor="#0f172a"
                borderRadius={24}
                glowRadius={30}
                glowIntensity={1.2}
                edgeSensitivity={20}
                animated={true}
                className="h-full"
              >
                <div className="p-8 flex flex-col h-full bg-slate-900/40">
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    className="text-lg md:text-xl font-bold text-white mb-4"
                  >
                    {layer.number}. {layer.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                    className="text-slate-400 text-xs md:text-sm leading-relaxed mb-8 opacity-80"
                  >
                    {layer.description}
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.4 }}
                    className="flex flex-wrap gap-2 mt-auto"
                  >
                    {layer.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-slate-400 whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
