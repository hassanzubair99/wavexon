import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'motion/react';
import Silk from './components/ui/Silk';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import WhyXonPulse from './components/WhyXonPulse';
import Architecture from './components/Architecture';
import XonPulseDetails from './components/XonPulseDetails';
import ClickSpark from './components/ui/ClickSpark';

import Modules from './components/Modules';
import AIOperations from './components/AIOperations';
import PulseInsight from './components/PulseInsight';
import Reports from './components/Reports';
import Captive5 from './components/Captive5';
import UseCases from './components/UseCases';
import DesignedFor from './components/DesignedFor';
import Deployment from './components/Deployment';
import WhyWaveXon from './components/WhyWaveXon';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import ScrollVelocity from './components/ui/ScrollVelocity';
import Footer from './components/Footer';

function PremiumSection({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-[-1] opacity-30">
        <Silk color={color} />
      </div>
      {children}
    </div>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  
  if (!scrollYProgress) return null;
  
  return (
    <ClickSpark
      sparkColor='#22d3ee'
      sparkSize={12}
      sparkRadius={20}
      sparkCount={10}
      duration={500}
    >
      <main className="min-h-screen relative overflow-hidden bg-slate-950 font-sans selection:bg-cyan-500 selection:text-slate-900">
        
        {/* Global Fixed Background */}
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-slate-950 z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-40 z-20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.05)_0%,transparent_70%)] z-30"></div>
        </div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        
        {/* Sections */}
        <PremiumSection color="#4338ca">
          <WhoWeAre />
        </PremiumSection>

        <XonPulseDetails />
        
        <PremiumSection color="#15803d">
          <WhyXonPulse />
        </PremiumSection>
        
        <Architecture />
        <Modules />
        
        <PremiumSection color="#be185d">
          <AIOperations />
        </PremiumSection>

        <PulseInsight />
        <Reports />
        
        <PremiumSection color="#c2410c">
          <Captive5 />
        </PremiumSection>
        
        <UseCases />
        <DesignedFor />
        <Deployment />
        <WhyWaveXon />
        <FAQ />

        {/* Velocity Text Section */}
        <div className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50" />
          <ScrollVelocity 
            texts={[
              'WAVEXON',
              <span>WAVEXON <span className="text-cyan-400 font-bold">CAPTIVE5</span></span>,
              'VISIBILITY MATTERS'
            ]}
            velocity={50}
            className="font-display tracking-tighter uppercase italic opacity-80"
          />
        </div>

        <div className="relative">
          <Contact />
        </div>
      </div>

      <Footer />
    </main>

    </ClickSpark>
  );
}

