import { motion } from 'motion/react';
import BorderGlow from './ui/BorderGlow';

const faqs = [
  {
    q: "Is XonPulse cloud based?",
    a: "No. XonPulse is positioned as an on-prem deployment for customer-controlled environments. This helps keep infrastructure visibility and operational data inside the customer network.",
    glowColor: "190 100 50"
  },
  {
    q: "What does XonPulse monitor?",
    a: "XonPulse can provide visibility for switches, wireless controllers, access points and infrastructure devices using SNMP, syslog, CLI outputs, topology data and reporting workflows.",
    glowColor: "210 100 50"
  },
  {
    q: "Is Captive5 a security product?",
    a: "Captive5 is best described as a branded captive portal and guest Wi-Fi onboarding platform. It improves the guest access experience and portal branding, but it should not be positioned as a full security platform.",
    glowColor: "180 100 50"
  },
  {
    q: "Can you work with our existing Wi-Fi and switching infrastructure?",
    a: "Yes. WaveXon is designed to work alongside existing infrastructure. Final integration depends on vendor support, available access methods and the customer environment.",
    glowColor: "230 100 50"
  },
  {
    q: "Who is XonPulse best suited for?",
    a: "XonPulse is best suited for environments where network teams need deeper visibility across many devices, sites, logs, topology relationships and performance indicators.",
    glowColor: "250 100 50"
  },
  {
    q: "Do you support custom branding?",
    a: "Yes. Captive5 supports branded portal pages for venues such as hospitals, cafés, restaurants, hotels, malls and enterprise guest Wi-Fi networks.",
    glowColor: "270 100 50"
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 mb-6 block"
          >
            FAQ
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold leading-[1.1] tracking-tight text-white"
          >
            Common questions from enterprise customers
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <BorderGlow
                glowColor={faq.glowColor}
                colors={['#0ea5e9', '#2563eb']}
                backgroundColor="#0f172a"
                borderRadius={24}
                glowRadius={30}
                animated={true}
              >
                <div className="p-8 bg-slate-900/40 border border-white/5 h-full group hover:bg-slate-900/60 transition-all">
                  <h3 className="text-base md:text-lg font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {faq.q}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed opacity-80">
                    {faq.a}
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
