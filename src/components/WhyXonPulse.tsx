import { motion, useScroll, useTransform } from 'motion/react';
import BorderGlow from './ui/BorderGlow';
import { useRef } from 'react';

const blocks = [
  {
    type: 'PROBLEM',
    title: 'Manual checks do not scale',
    description: 'Checking a few switches manually is possible. Checking hundreds of switches, ports, APs, controllers and logs manually is slow, reactive and risky.',
    glowColor: '210 100 50',
    colors: ['#3b82f6', '#1d4ed8']
  },
  {
    type: 'PROBLEM',
    title: 'Logs are not enough',
    description: 'Raw logs without context create noise. Engineers need correlation across device health, topology, interface errors, client visibility and performance patterns.',
    glowColor: '250 100 50',
    colors: ['#6366f1', '#4f46e5']
  },
  {
    type: 'SOLUTION',
    title: 'Operational visibility layer',
    description: 'XonPulse creates a practical layer above the infrastructure so NOC teams can see health, trends, topology, events, backups and reports from one place.',
    highlight: true,
    glowColor: '190 100 50',
    colors: ['#06b6d4', '#0891b2']
  }
];

export default function WhyXonPulse() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);

  return (
    <section ref={containerRef} id="why-xonpulse" className="relative py-24 px-6 overflow-hidden">
      {/* Background Accents removed to use DarkVeil from App.tsx */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div style={{ y }} className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 mb-6 block"
            >
              Why XonPulse Exists
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold leading-[1.1] tracking-tight text-white"
            >
              Network operations fail when <br />visibility is fragmented
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-slate-400 text-sm md:text-base leading-relaxed pt-8 lg:pt-12"
          >
            Most enterprise teams already have devices, logs and tools. The real issue is operational visibility. XonPulse is designed to bring scattered network data into a clear, usable and action-oriented view.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blocks.map((block, idx) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <BorderGlow
                glowColor={block.glowColor}
                colors={block.colors}
                backgroundColor="#0f172a"
                borderRadius={32}
                glowRadius={40}
                glowIntensity={1.2}
                edgeSensitivity={20}
                animated={true}
                className="h-full"
              >
                <div className={`p-10 flex flex-col h-full transition-all duration-300 ${
                  block.highlight ? 'bg-blue-950/20' : ''
                }`}>
                  <span className={`text-[10px] font-black tracking-[0.3em] mb-6 block ${
                    block.highlight ? 'text-blue-400' : 'text-slate-500'
                  }`}>
                    {block.type}
                  </span>
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    className="text-xl md:text-2xl font-bold text-white mb-6"
                  >
                    {block.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                    className="text-slate-400 text-sm md:text-base leading-relaxed opacity-80"
                  >
                    {block.description}
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
