import { memo } from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Settings} from 'lucide-react';
import BorderGlow from './ui/BorderGlow';

const mainCards = [
  {
    icon: <Shield className="text-cyan-400" size={20} />,
    tag: 'XONPULSE',
    title: 'Enterprise Network Visibility',
    description: 'XonPulse gives IT and NOC teams a central operational view across switches, wireless controllers, access points and infrastructure devices using SNMP, telemetry, CLI output, syslog and historical analytics.',
    glowColor: '190 100 50', // Cyan-ish
    colors: ['#22d3ee', '#0ea5e9', '#3b82f6']
  },
  {
    icon: <Zap className="text-blue-400" size={20} />,
    tag: 'CAPTIVE5',
    title: 'Branded Guest Wi-Fi Portals',
    description: 'Captive5 provides branded captive portal pages and self-registration journeys for venues that want a clean, professional and measurable guest onboarding experience.',
    glowColor: '210 100 50', // Blue-ish
    colors: ['#3b82f6', '#2563eb', '#1d4ed8']
  },
  {
    icon: <Settings className="text-purple-400" size={20} />,
    tag: 'SERVICES',
    title: 'Deployment & Integration',
    description: 'We help customers plan, deploy and operate network visibility, reporting, portal branding and guest Wi-Fi onboarding solutions in their own environment.',
    glowColor: '280 100 50', // Purple-ish
    colors: ['#a855f7', '#9333ea', '#7c3aed'],
    highlight: true,
  }
];

const subCards = [
  { title: 'On-Prem', color: 'text-cyan-400', desc: 'Deployment model for customer-owned environments and controlled infrastructure' },
  { title: 'NOC Ready', color: 'text-blue-400', desc: 'Visibility for device health, topology, alerts, reports and infrastructure status' },
  { title: 'Multi-Site', color: 'text-indigo-400', desc: 'Designed for campuses, branches, hospitality sites and distributed networks' },
  { title: 'Field Built', color: 'text-purple-400', desc: 'Created by network engineers who understand real production environments' },
];

const WhoWeAre = memo(function WhoWeAre() {
  return (
    <section id="who-we-are" className="relative py-32 px-6 overflow-hidden">
      {/* Background Accents removed to use DarkVeil from App.tsx */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 mb-6 block"
            >
              Who We Are
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold leading-[1.1] tracking-tight text-white mb-6"
            >
              Engineering-led platforms for visibility, operations and guest Wi-Fi experience
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-slate-400 text-sm md:text-base leading-relaxed pt-8 lg:pt-16"
          >
            WaveXon is focused on practical network operations: visibility, reporting, topology context, infrastructure telemetry and branded guest access journeys. Our products are designed from real operational pain, not generic marketing checklists.
          </motion.p>
        </div>

        {/* Main Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mainCards.map((card, idx) => (
            <motion.div
              key={card.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="h-full"
            >
              <BorderGlow
                glowColor={card.glowColor}
                colors={card.colors}
                backgroundColor="#0f172a"
                borderRadius={24}
                glowRadius={30}
                glowIntensity={1.2}
                edgeSensitivity={20}
                animated={true}
                className="h-full"
              >
                <div className={`p-8 flex flex-col h-full group ${card.highlight ? 'bg-cyan-950/20' : ''}`}>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-black tracking-[0.3em] text-slate-500 mb-4">{card.tag}</span>
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                    className="text-slate-400 text-sm leading-relaxed mb-auto opacity-70"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {subCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + idx * 0.1 }}
            >
              <BorderGlow
                glowColor="210 100 50"
                colors={['#0ea5e9', '#2563eb']}
                backgroundColor="#0f172a"
                borderRadius={20}
                glowRadius={25}
                glowIntensity={1}
                edgeSensitivity={20}
                animated={true}
              >
                <div className="border border-white/5 bg-slate-900/40 p-6 h-full flex flex-col gap-2 hover:bg-white/5 transition-all">
                  <h4 className={`text-lg font-bold ${card.color}`}>{card.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                    {card.desc}
                  </p>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default WhoWeAre;
