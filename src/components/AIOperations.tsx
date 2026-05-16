import { motion } from 'motion/react';
import { Zap, Target, FileText } from 'lucide-react';
import BorderGlow from './ui/BorderGlow';

const aiFeatures = [
  {
    icon: <Zap size={24} />,
    title: "Event classification",
    description: "Classify logs and operational events into meaningful areas such as interface, power, CPU, memory, wireless, authentication and infrastructure health.",
    glowColor: "190 100 50"
  },
  {
    icon: <Target size={24} />,
    title: "Correlation view",
    description: "Help engineers connect alerts with device health, topology position, interface condition and historical behavior.",
    glowColor: "210 100 50"
  },
  {
    icon: <FileText size={24} />,
    title: "Operational summaries",
    description: "Convert technical signals into short summaries that support faster troubleshooting and better communication with management.",
    glowColor: "280 100 60"
  }
];

export default function AIOperations() {
  return (
    <section id="ai-ops" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 mb-6 block"
            >
              AI OPERATIONS
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold leading-[1.1] tracking-tight text-white mb-6"
            >
              From raw events to operational understanding
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-slate-400 text-sm md:text-base leading-relaxed pt-8 lg:pt-16"
          >
            AI Operations is not just decoration. It is the direction of XonPulse: making infrastructure events, syslogs, alerts and reports easier for engineers and management to understand.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiFeatures.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <BorderGlow
                glowColor={feature.glowColor}
                colors={['#3b82f6', '#1d4ed8']}
                backgroundColor="#0f172a"
                borderRadius={24}
                glowRadius={30}
                glowIntensity={1.2}
                edgeSensitivity={20}
                animated={true}
                className="h-full"
              >
                <div className="p-10 bg-slate-900/40 h-full group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-cyan-400 mb-8 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6 underline decoration-cyan-500/0 group-hover:decoration-cyan-500/100 transition-all underline-offset-8">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed opacity-80">
                    {feature.description}
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
