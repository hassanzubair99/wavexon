import { motion } from 'motion/react';
import BorderGlow from './ui/BorderGlow';

const useCases = [
  {
    tag: "NOC VISIBILITY",
    title: "When manual checks no longer scale",
    description: "For large environments with hundreds of switches and access points, manual monitoring creates blind spots. XonPulse centralizes the view so teams can detect issues faster.",
    glowColor: "190 100 50"
  },
  {
    tag: "TROUBLESHOOTING",
    title: "Find where a user or device is connected",
    description: "Pulse Insight helps engineers quickly trace endpoint context such as IP, MAC, switch, port and VLAN instead of searching multiple systems manually.",
    glowColor: "210 100 50"
  },
  {
    tag: "MANAGEMENT REPORTING",
    title: "Turn network data into reports",
    description: "Weekly and on-demand reports help management understand network health, traffic trends, integrity issues and operational risk without reading raw technical logs.",
    glowColor: "250 100 60"
  },
  {
    tag: "GUEST WI-FI",
    title: "Improve first impression for visitors",
    description: "Captive5 helps businesses replace generic Wi-Fi login pages with branded portals suitable for hotels, clinics, malls, cafés and corporate guest networks.",
    glowColor: "180 100 50"
  },
  {
    tag: "COMPLIANCE SUPPORT",
    title: "Keep visibility inside your environment",
    description: "On-prem deployment supports environments where customer data and operational telemetry should remain within controlled infrastructure.",
    glowColor: "340 100 60"
  },
  {
    tag: "OPERATIONS MATURITY",
    title: "Move from reactive to visible operations",
    description: "XonPulse gives your team structured dashboards, historical data, error visibility and operational context to support better decisions.",
    glowColor: "280 100 60"
  }
];

export default function UseCases() {
  return (
    <section id="use-cases" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 mb-6 block"
          >
            OPERATIONAL USE CASES
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold leading-[1.1] tracking-tight text-white"
          >
            Built around problems network teams face every day
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <BorderGlow
                glowColor={item.glowColor}
                colors={['#3b82f6', '#1d4ed8']}
                backgroundColor="#0f172a"
                borderRadius={24}
                glowRadius={30}
                glowIntensity={1.2}
                edgeSensitivity={20}
                animated={true}
                className="h-full"
              >
                <div className="p-8 bg-slate-900/40 h-full group border border-white/5">
                  <span className="text-[10px] font-black tracking-[0.2em] text-slate-500 mb-4 block group-hover:text-cyan-400 transition-colors">
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed opacity-80">
                    {item.description}
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
