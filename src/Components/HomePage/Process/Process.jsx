import React, { useRef } from 'react';
import { LayoutGroup, motion, useScroll, useTransform } from 'motion/react';
import { TextRotate } from '../../../components/ui/text-rotate';
import '../common.css';
import processImg from '../../../assets/k (2).png';


const processes = [
  { title: "Concept & Design", desc: "Creating visually stunning and user-friendly designs tailored to your brand." },
  { title: "Research", desc: "Deep dive into your market to discover new growth opportunities." },
  { title: "Discovery", desc: "Identifying the absolute best approach for your specific needs." },
  { title: "Improvement", desc: "Continuous refinement to maximize performance and ROI." }
];

export default function Process() {
  const sectionRef = useRef(null);

  // Parallax scroll effect for the character image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Moves UP as you scroll down to create "emerging" effect
  const y = useTransform(scrollYProgress, [0, 1], ["30%", "-10%"]);

  return (
    <section ref={sectionRef} className="w-full pt-24 md:pt-32 bg-[#fff] relative z-0" style={{ fontFamily: 'var(--font-primary)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10 pb-[150px] md:pb-[200px]">

        {/* ── Heading (unchanged) ── */}
        <div className="flex flex-col items-center justify-center gap-3 mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#e08326] inline-block"></span>
            <span className="text-[13px] uppercase tracking-widest font-semibold text-gray-500">How We Work</span>
          </div>

          <LayoutGroup>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-1 text-[38px] md:text-[50px] font-extrabold leading-[1.1] tracking-tight text-center flex-wrap"
              layout
              style={{ color: 'var(--text-dark)' }}
            >
              <motion.span layout transition={{ type: 'spring', damping: 30, stiffness: 400 }} className="whitespace-nowrap">
                Our Proven
              </motion.span>

              <TextRotate
                texts={['Process ✦', 'Strategy', 'Framework', 'Workflow', 'Blueprint', 'Approach']}
                mainClassName="text-white px-4 py-1 bg-[#1e2f57] overflow-hidden rounded-xl justify-center"
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.03}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2200}
              />

              <motion.span layout transition={{ type: 'spring', damping: 30, stiffness: 400 }} className="whitespace-nowrap">
                for Success
              </motion.span>
            </motion.div>
          </LayoutGroup>

          <p className="text-[15px] text-gray-500 font-medium mt-3 max-w-[480px] text-center leading-relaxed">
            A clear, repeatable method that turns ideas into impactful results — every time.
          </p>
        </div>

        {/* ── Process Cards Layout - 2 Left | Center Image | 2 Right ── */}
        <div className="relative w-full max-w-[1100px] mx-auto mt-8 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-x-6 lg:gap-x-10 gap-y-12 items-center">

          {/* Left Column - 2 Cards */}
          <div className="flex flex-col gap-12 md:gap-16 w-full z-20">
            {/* Top card - Pushed RIGHT (IN towards center) */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative w-full max-w-[320px] ml-auto md:mr-[-30px]"
            >
              <div className="absolute top-1/2 -translate-y-1/2 left-[-40px] w-[100px] h-[80px] rounded-full bg-[#3a7eb7] z-0 flex items-center justify-start pl-4 text-white text-[28px] font-bold shadow-md">
                1
              </div>
              <div className="relative z-10 bg-white rounded-full py-4 px-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center min-h-[90px]">
                <div className="flex-1 pr-3">
                  <h3 className="text-[15px] font-bold text-gray-800 mb-1 leading-tight">Concept & Design</h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed">Creating visually stunning designs tailored to your brand.</p>
                </div>
                <div className="text-gray-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </div>
              </div>
            </motion.div>

            {/* Bottom card - Pushed LEFT (OUT away from center) */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative w-full max-w-[320px] mr-auto md:ml-[-20px]"
            >
              <div className="absolute top-1/2 -translate-y-1/2 right-[-40px] w-[100px] h-[80px] rounded-full bg-[#1a7974] z-0 flex items-center justify-end pr-4 text-white text-[28px] font-bold shadow-md">
                2
              </div>
              <div className="relative z-10 bg-white rounded-full py-4 px-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center min-h-[90px]">
                <div className="text-gray-400 pr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div className="flex-1 text-right">
                  <h3 className="text-[15px] font-bold text-gray-800 mb-1 leading-tight">Discovery</h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed">Identifying the best approach for your specific needs.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Center - reduced width so top cards can get closer to the character */}
          <div className="hidden md:block w-[180px] lg:w-[220px] h-[400px] flex-shrink-0" />

          {/* Right Column - 2 Cards */}
          <div className="flex flex-col gap-12 md:gap-16 w-full z-20">
            {/* Top card - Pushed slightly RIGHT as requested */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-[320px] mr-auto md:ml-[30px]"
            >
              <div className="absolute top-1/2 -translate-y-1/2 left-[-40px] w-[100px] h-[80px] rounded-full bg-[#d97c23] z-0 flex items-center justify-start pl-4 text-white text-[28px] font-bold shadow-md">
                3
              </div>
              <div className="relative z-10 bg-white rounded-full py-4 px-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center min-h-[90px]">
                <div className="flex-1 pr-3 text-left">
                  <h3 className="text-[15px] font-bold text-gray-800 mb-1 leading-tight">Research</h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed">Deep dive into market to discover growth opportunities.</p>
                </div>
                <div className="text-gray-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
              </div>
            </motion.div>

            {/* Bottom card - Pushed RIGHT (OUT away from center) */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative w-full max-w-[320px] ml-auto md:mr-[-20px]"
            >
              <div className="absolute top-1/2 -translate-y-1/2 right-[-40px] w-[100px] h-[80px] rounded-full bg-[#4e5e4d] z-0 flex items-center justify-end pr-4 text-white text-[28px] font-bold shadow-md">
                4
              </div>
              <div className="relative z-10 bg-white rounded-full py-4 px-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center min-h-[90px]">
                <div className="text-gray-400 pr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <div className="flex-1 text-right">
                  <h3 className="text-[15px] font-bold text-gray-800 mb-1 leading-tight">Improvement</h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed">Continuous refinement to maximize performance.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>


      {/* Absolute Bottom Image - Behind the next section */}
      <div className="absolute bottom-[20px] md:bottom-[40px] left-1/2 -translate-x-1/2 w-full max-w-[380px] md:max-w-[400px] flex justify-center items-end z-10 pointer-events-none">
        <motion.img
          src={processImg}
          alt="Process Character"
          style={{
            y,


          }}
          className="w-full h-auto object-contain object-bottom block"
        />
      </div>

      {/* Purple Curve Shape - Drawn inside Process bottom as requested */}
      <svg
        viewBox="0 0 1440 120"
        className="absolute bottom-0 left-0 w-full h-[60px] md:h-[120px] z-20 pointer-events-none"
        preserveAspectRatio="none"
      >
        <path d="M0,0 C720,120 1440,0 1440,0 L1440,120 L0,120 Z" fill="var(--bg-light-purple)" />
      </svg>

    </section>
  );
}
