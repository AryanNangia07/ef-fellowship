/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import { 
  Network, 
  TrendingUp, 
  Zap, 
  Music, 
  Users, 
  Target, 
  Database, 
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ClipboardList,
  Coffee
} from "lucide-react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-purple-100 selection:text-purple-900">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-40 mix-blend-difference text-white">
        <div className="font-display font-bold text-xl tracking-tighter">AN / EF</div>
        <div className="flex gap-8 text-sm font-medium uppercase tracking-widest hidden md:flex">
          <a href="#who" className="hover:text-purple-400 transition-colors">Who</a>
          <a href="#network" className="hover:text-purple-400 transition-colors">Network</a>
          <a href="#experience" className="hover:text-purple-400 transition-colors">Growth</a>
          <a href="#scrappy" className="hover:text-purple-400 transition-colors">Drive</a>
          <a href="#problem" className="hover:text-purple-400 transition-colors">Problem</a>
          <a href="#strategy" className="hover:text-purple-400 transition-colors">Strategy</a>
        </div>
      </nav>

      <main className="scroll-container">
        {/* Hero Section */}
        <section id="who" className="scroll-section relative overflow-hidden bg-black text-white pt-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="z-10 text-center px-4"
          >
            <div className="mb-8 relative inline-block">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-purple-600 overflow-hidden bg-neutral-800 mx-auto brutal-border relative group">
                <img 
                  src="/me.png" 
                  alt="Aryan Nangia" 
                  className="w-full h-full object-cover transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2 bg-purple-600 text-white p-2 rounded-full hidden md:block"
              >
                <Music size={20} />
              </motion.div>
            </div>
            
            <h1 className="font-display text-5xl md:text-8xl font-black mb-4 tracking-tight leading-none uppercase">
              Aryan Nangia
            </h1>
            <p className="font-mono text-purple-400 text-sm md:text-xl mb-8 uppercase tracking-widest">
              Business & Data Science @ Berkeley
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm font-mono opacity-60">
              <span className="px-3 py-1 border border-zinc-800 rounded-full">ENTREPRENEURIAL</span>
              <span className="px-3 py-1 border border-zinc-800 rounded-full">CURIOUS</span>
              <span className="px-3 py-1 border border-zinc-800 rounded-full">BUILDER</span>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 0.1 }}
             className="absolute inset-0 pointer-events-none"
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}
          />
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
            <ArrowRight className="rotate-90" />
          </div>
        </section>

        {/* Why EF Intro */}
        <section className="py-32 flex items-center justify-center bg-purple-600 text-white p-6 md:p-24 overflow-hidden">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-4xl md:text-7xl font-bold tracking-tighter leading-tight max-w-4xl text-center"
          >
            I am the ideal EF Fellow because:
          </motion.h2>
        </section>

        {/* Point 1: Network */}
        <section id="network" className="scroll-section bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                  <Database size={32} />
                </div>
                <span className="font-mono text-sm uppercase tracking-widest text-zinc-500">Network & Access</span>
              </div>
              <h3 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Berkeley's deepest <span className="text-purple-600 underline">founder dataset</span>.
              </h3>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                As a member of <span className="font-bold text-black">Free Ventures</span>, I sit on a vast dataset of pre-seed founders across Fintech, Biotech, and AI. I don't just know people; I track the signals.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg mb-8 border-l-4 border-purple-600">
                <p className="text-sm font-semibold text-purple-900">
                  "The bridge between ambitious builders and EF's global network."
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl">
                  <div className="text-3xl font-display font-bold text-purple-600">50%</div>
                  <div className="text-xs uppercase font-bold text-zinc-400 mt-1 italic leading-tight">YC Acceptance Rate in Last Batch</div>
                </div>
                <div className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl">
                  <div className="text-3xl font-display font-bold text-purple-600">All</div>
                  <div className="text-xs uppercase font-bold text-zinc-400 mt-1 italic leading-tight">Pre-Seed Berkeley Founders Logged</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative hidden md:block"
            >
              <div className="aspect-square bg-zinc-50 rounded-full border-2 border-dashed border-zinc-200 flex items-center justify-center p-12">
                <div className="relative w-full h-full">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 bg-purple-500/10 rounded-full" 
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white p-6 rounded-full shadow-xl z-10">
                    <Network size={40} />
                  </div>
                  {/* Floating Bubbles representing industries */}
                  <div className="absolute top-0 left-1/4 bg-white brutal-border p-3 text-xs font-bold px-4">AI</div>
                  <div className="absolute bottom-10 right-0 bg-white brutal-border p-3 text-xs font-bold px-4 tracking-tighter cursor-default">BIOTECH</div>
                  <div className="absolute top-1/3 -right-4 bg-white brutal-border p-3 text-xs font-bold px-4 tracking-tighter cursor-default">FINTECH</div>
                  <div className="absolute bottom-1/4 left-0 bg-white brutal-border p-3 text-xs font-bold px-4 tracking-tighter cursor-default">HARDWARE</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Point 2: Execution */}
        <section id="experience" className="scroll-section bg-zinc-950 text-white overflow-hidden relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto z-10">
             <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <div className="p-8 bg-zinc-900/50 backdrop-blur rounded-3xl border border-zinc-800">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <div className="text-zinc-500 text-xs font-mono mb-1 uppercase tracking-widest">Growth Metric</div>
                    <div className="text-5xl font-display font-bold text-white">$10K<span className="text-purple-500">/mo</span></div>
                  </div>
                  <TrendingUp className="text-green-400 w-12 h-12" />
                </div>
                <div className="space-y-4">
                  <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-purple-600" 
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500 uppercase">
                    <span>Month 0: $0</span>
                    <span className="text-white">This Semester: $10,000 MRR</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="order-1 md:order-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-600/20 rounded-lg text-purple-400">
                  <Zap size={32} />
                </div>
                <span className="font-mono text-sm uppercase tracking-widest text-zinc-400 text-center md:text-left">Execution & Scale</span>
              </div>
              <h3 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
                I have <span className="italic text-purple-400">done it</span> before.
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Communities built. Products scaled. This semester, I took an online course from absolute zero to <span className="text-white font-bold">$10K MRR</span> with no prior experience. 
              </p>
              <ul className="space-y-4 font-mono text-xs md:text-sm text-zinc-300">
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 bg-purple-500 rotate-45" />
                  AGILE MARKETING RECAPS
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 bg-purple-500 rotate-45" />
                  HIGH-CONVERSION SALES FUNNELS
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 bg-purple-500 rotate-45" />
                  COMMUNITY-FIRST PRODUCT DESIGN
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Point 3: Scrappy */}
        <section id="scrappy" className="scroll-section bg-purple-50">
          <div className="w-full max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block p-4 bg-black text-white brutal-border mb-12">
                <Target size={48} />
              </div>
              <h3 className="font-display text-5xl md:text-7xl font-black mb-8 leading-none uppercase italic tracking-tighter">
                Scrappy. Fast. Above and Beyond.
              </h3>
              <p className="text-zinc-600 text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl mx-auto">
                "This website is the perfect example. I don't just talk about value; I build it."
              </p>
              
              <div className="p-8 bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-left">
                <h4 className="font-display text-2xl font-bold mb-4 uppercase italic">My Mission as a Fellow</h4>
                <p className="text-zinc-700 leading-relaxed font-medium">
                  I care about the Berkeley ecosystem. My goal as an EF Fellow is to be the bridge for founders who have the talent but lack the resources. I am the catalyst that connects world-class ambition to world-class investment.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Problem Statement */}
        <section id="problem" className="scroll-section bg-black text-white p-6 md:p-24 flex flex-col justify-center overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-mono text-purple-500 uppercase tracking-widest text-sm mb-4 block">The Context</span>
              <h3 className="font-display text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight max-w-4xl">
                Berkeley is stuck in a <span className="text-red-500">"YC-only"</span> loop.
              </h3>
              <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed max-w-3xl">
                The ecosystem is incredibly crowded with builders who reapply until they get in. There is a misconception that YC is the "end-all-be-all." My mission is to shift the gravity toward <span className="text-white font-bold">Entrepreneurs First</span>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Detailed Strategy Section */}
        <section id="strategy" className="py-32 bg-white px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-24"
            >
              <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                In Month 1, I would:
              </h2>
              <p className="text-zinc-500 font-mono tracking-widest text-sm uppercase">Strategic Implementation at Berkeley</p>
            </motion.div>

            <div className="space-y-32">
              {/* Strategy 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-purple-600 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform" />
                    <img 
                      src="/hackathon.jpeg" 
                      alt="EF Hackathon Concept" 
                      className="w-full aspect-[4/3] object-cover border-2 border-black"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-purple-600 font-bold font-mono text-sm mb-4 block">ACTION 01</span>
                  <h3 className="font-display text-3xl md:text-5xl font-bold mb-6 italic tracking-tight">Organize an EF Hackathon</h3>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    The cost of missing out on potential investments is too high. A hackathon will build the brand recall required to source high-quality applications from day one. 
                  </p>
                  <p className="text-zinc-600 text-lg leading-relaxed mt-4">
                    I'll build an active pipeline of builders through regular event touch-points and high-impact email programming.
                  </p>
                </motion.div>
              </div>

              {/* Strategy 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="md:order-2"
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-black -translate-x-4 translate-y-4 -z-10 group-hover:-translate-x-6 group-hover:translate-y-6 transition-transform" />
                    <img 
                      src="/survey.jpg" 
                      alt="YC vs EF Strategy" 
                      className="w-full aspect-[4/3] object-cover border-2 border-black"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="md:order-1"
                >
                  <span className="text-purple-600 font-bold font-mono text-sm mb-4 block">ACTION 02</span>
                  <h3 className="font-display text-3xl md:text-5xl font-bold mb-6 italic tracking-tight">Shifting Perception: EF vs YC</h3>
                  <p className="text-zinc-600 text-lg leading-relaxed mb-6 font-bold">
                    YC wants your idea and expects traction, EF just wants you.
                  </p>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    I will survey 50+ founders to understand how we can shift the perception towards reality. EF will help you find cofounders, finalize your idea, and get your first revenue. 
                  </p>
                  <p className="text-zinc-600 text-lg leading-relaxed mt-4">
                    By understanding what early stage founders are looking for, we can modify EF's marketing material to highlight the unique "talent-first" model.
                  </p>
                </motion.div>
              </div>

              {/* Strategy 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-purple-600 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform" />
                    <img 
                      src="/private-event.jpg" 
                      alt="Private Founder Dinner" 
                      className="w-full aspect-[4/3] object-cover border-2 border-black"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-purple-600 font-bold font-mono text-sm mb-4 block">ACTION 03</span>
                  <h3 className="font-display text-3xl md:text-5xl font-bold mb-6 italic tracking-tight">Early-Stage Relationships</h3>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    I will organize 3 private events with top Berkeley talent, specifically Freshmen and Sophomores, to build relationships early.
                  </p>
                  <p className="text-zinc-600 text-lg leading-relaxed mt-4">
                    The goal is for them to understand the EF vision and have us on top-of-mind long before they apply to competitors like YC. Personal relationships win investments.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing / Footer */}
        <footer className="bg-black text-white p-12 md:p-24 flex flex-col items-center justify-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center"
          >
            <div className="font-display text-6xl md:text-9xl font-black mb-12 opacity-10 tracking-tighter">EF FELLOW</div>
            <p className="font-mono text-xs uppercase tracking-widest mb-8 opacity-60 italic">Let's build the next generation of founders.</p>
            
            <div className="flex gap-8 mb-12 justify-center">
              <a href="https://www.linkedin.com/in/aryan-nangia/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-all hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="mailto:aryan.nangia@berkeley.edu" className="hover:text-purple-500 transition-all hover:scale-110">
                <Mail size={24} />
              </a>
            </div>

            <div className="text-[10px] font-mono opacity-30 mt-12">
              ARYAN NANGIA • BUILT FAST • EF 2026
            </div>
          </motion.div>
        </footer>
      </main>
    </div>
  );
}
