import { motion } from 'motion/react';
import { Database, Activity, Map as MapIcon, Shield, BarChart, Server } from 'lucide-react';
import BorderGlow from './ui/BorderGlow';

const features = [
  {
    title: "On-Prem Deployment",
    description: "Complete control over your data. XonPulse is installed locally in your environment, not on the cloud.",
    icon: <Server size={24} />,
    glowColor: "210 100 50"
  },
  {
    title: "SNMP & Telemetry",
    description: "Deep infrastructure polling and real-time telemetry streaming for granular performance metrics.",
    icon: <Activity size={24} />,
    glowColor: "190 100 50"
  },
  {
    title: "Syslog Analytics",
    description: "Intelligent collection and correlation of log data to identify operational risks fast.",
    icon: <Database size={24} />,
    glowColor: "250 100 50"
  },
  {
    title: "Topology Intelligence",
    description: "Automatic discovery and mapping of your network physical and logical relationships.",
    icon: <MapIcon size={24} />,
    glowColor: "340 100 60"
  },
  {
    title: "Security Integrity",
    description: "Constant monitoring of interface errors, collisions and configuration drift for risk mitigation.",
    icon: <Shield size={24} />,
    glowColor: "280 100 60"
  },
  {
    title: "Operations Center",
    description: "A unified view for NOC teams, leadership and engineers to visualize network health.",
    icon: <BarChart size={24} />,
    glowColor: "190 100 50"
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-cyan-500 mb-6"
          >
            Core Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Built for mission-critical operations
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <BorderGlow
                glowColor={feature.glowColor}
                colors={['#3b82f6', '#1d4ed8']}
                backgroundColor="#0f172a"
                borderRadius={24}
                glowRadius={30}
                edgeSensitivity={20}
                animated={true}
                className="h-full"
              >
                <div className="p-8 bg-slate-900/40 h-full group hover:bg-slate-900/60 transition-colors">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed opacity-80">{feature.description}</p>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
