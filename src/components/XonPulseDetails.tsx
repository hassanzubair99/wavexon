import { memo } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Monitor, Wifi, Database, Share2 } from 'lucide-react';
import BorderGlow from './ui/BorderGlow';

const features = [
  'Infrastructure health, uptime and availability visibility',
  'SNMP-based monitoring for switches, controllers and infrastructure devices',
  'Syslog collection and event analytics for operational visibility',
  'Topology visibility and infrastructure relationship mapping',
  'Pulse Insight for endpoint and infrastructure lookup context',
  'Automated configuration backup tracking',
  'Network integrity reports for interface errors and operational risk',
  'Traffic and capacity reporting for operational planning',
  'Packet loss visibility and performance trend analysis',
  'Role-based access for operational teams',
];

const pills = ['On-Prem', 'SNMP', 'Syslog', 'Topology', 'AI Operations'];

const XonPulseDetails = memo(function XonPulseDetails() {
  return (
    <section id="xonpulse-details" className="relative py-32 px-6 overflow-hidden">
      {/* Background Accents removed to use DarkVeil from App.tsx */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 mb-6 block"
            >
              XonPulse
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold leading-[1.05] tracking-tight text-white"
            >
              On-prem network intelligence for serious operations
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-slate-400 text-sm md:text-base leading-relaxed pt-8 lg:pt-16"
          >
            XonPulse is built for environments where manual monitoring does not scale. A few switches can be checked manually, but hundreds of switches, APs and controllers require deep visibility, correlation and structured reporting.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column: Feature List Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <BorderGlow
              glowColor="210 100 50"
              colors={['#24c6dc', '#514a9d']}
              backgroundColor="#0f172a"
              borderRadius={40}
              glowRadius={50}
              edgeSensitivity={30}
              animated={true}
              className="h-full"
            >
              <div className="p-8 md:p-12 flex flex-col h-full bg-slate-900/40 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Database size={120} />
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                  {pills.map((pill) => (
                    <span key={pill} className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider text-slate-400">
                      {pill}
                    </span>
                  ))}
                </div>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-10 opacity-80">
                  XonPulse provides a deep operational layer for enterprise networks. It brings together monitoring, telemetry, topology context, switch statistics, wireless visibility, logs, backups and reports into one platform that helps network teams understand what is happening across the environment.
                </p>

                <ul className="space-y-4 mb-12">
                  {features.map((f, i) => (
                    <motion.li 
                      key={f}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-4 text-sm text-slate-400"
                    >
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {f}
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black py-4 px-8 rounded-2xl text-sm uppercase tracking-widest hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-lg shadow-cyan-500/20 cursor-pointer"
                  >
                    Request XonPulse Demo
                    <ArrowRight size={18} />
                  </button>
                  <button 
                    onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex-1 glass bg-white/5 border-white/10 text-white font-bold py-4 px-8 rounded-2xl text-sm uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-3 cursor-pointer"
                  >
                    View Architecture
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </BorderGlow>
          </motion.div>

          {/* Right Column: Previews */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <BorderGlow
                glowColor="190 100 50"
                colors={['#06b6d4', '#0891b2']}
                backgroundColor="#0f172a"
                borderRadius={40}
                glowRadius={50}
                edgeSensitivity={20}
                animated={true}
                className="h-full"
              >
                <div className="p-8 flex flex-col gap-6 bg-slate-900/40 relative overflow-hidden group h-full">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-white flex items-center gap-3">
                      <Monitor className="text-cyan-400" size={20} />
                      Wired Infrastructure Overview
                    </h3>
                  </div>
                  <div className="aspect-video bg-black/40 rounded-2xl border border-white/5 relative overflow-hidden group/img mt-auto">
                    <img 
                      src="https://wavexon.com/assets/Wired-Dashboard.png" 
                      alt="Wired Infrastructure Overview"
                      className="w-full h-full object-cover opacity-80 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <button className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-400 opacity-0 group-hover/img:opacity-100 transition-opacity">
                      Masked Data view
                    </button>
                  </div>
                </div>
              </BorderGlow>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="h-full"
            >
              <BorderGlow
                glowColor="210 100 50"
                colors={['#3b82f6', '#1d4ed8']}
                backgroundColor="#0f172a"
                borderRadius={40}
                glowRadius={50}
                edgeSensitivity={20}
                animated={true}
                className="h-full"
              >
                <div className="p-8 flex flex-col gap-6 bg-slate-900/40 relative overflow-hidden group h-full">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-white flex items-center gap-3">
                      <Wifi className="text-blue-400" size={20} />
                      Wireless Operations Overview
                    </h3>
                  </div>
                  <div className="aspect-video bg-black/40 rounded-2xl border border-white/5 relative overflow-hidden group/img mt-auto">
                    <img 
                      src="https://wavexon.com/assets/Wireless-Dashboard.png" 
                      alt="Wireless Operations Overview"
                      className="w-full h-full object-cover opacity-80 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <button className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-400 opacity-0 group-hover/img:opacity-100 transition-opacity">
                      Masked Data view
                    </button>
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default XonPulseDetails;
