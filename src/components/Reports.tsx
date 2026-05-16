import { motion } from 'motion/react';
import BorderGlow from './ui/BorderGlow';

const reportTypes = [
  {
    tag: 'TRAFFIC INTELLIGENCE',
    title: 'Traffic & Capacity Report',
    description: 'Shows traffic trends, utilization visibility and capacity indicators to support planning and operational review.',
    glowColor: '210 100 50'
  },
  {
    tag: 'NETWORK INTEGRITY',
    title: 'Error & Integrity Report',
    description: 'Highlights CRC, collisions, interface errors and other risk indicators that may affect network quality.',
    glowColor: '250 100 60'
  },
  {
    tag: 'NETWORK HEALTH',
    title: 'Health & Operations Report',
    description: 'Summarizes infrastructure health, uptime indicators, operational events and performance visibility.',
    glowColor: '190 100 50'
  }
];

export default function Reports() {
  return (
    <section id="reports" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 mb-6 block"
            >
              REPORTS
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold leading-[1.1] tracking-tight text-white mb-6"
            >
              Executive and technical reporting for network operations
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-slate-400 text-sm md:text-base leading-relaxed pt-8 lg:pt-16"
          >
            XonPulse reporting is designed to translate technical infrastructure data into clear visibility for both engineering and management audiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reportTypes.map((report, idx) => (
            <motion.div
              key={report.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <BorderGlow
                glowColor={report.glowColor}
                colors={['#3b82f6', '#1d4ed8']}
                backgroundColor="#0f172a"
                borderRadius={24}
                glowRadius={40}
                glowIntensity={1.2}
                edgeSensitivity={20}
                animated={true}
                className="h-full"
              >
                <div className="p-10 bg-slate-900/40 h-full flex flex-col group">
                  <span className="text-[10px] font-black tracking-[0.3em] text-slate-500 mb-6 block">
                    {report.tag}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors">
                    {report.title}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed opacity-80">
                    {report.description}
                  </p>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
