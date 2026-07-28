import React, { useRef, useEffect } from 'react';
import { Monitor, Box, Users, Megaphone, Settings, Presentation, Smartphone, ArrowRight } from 'lucide-react';
import { ConnoisseurStackInteractor } from '../../../Components/ui/connoisseur-stack-interactor.jsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import service images for projects
import socialMediaImg from "../../../assets/Services/Social Media Marketing.webp";
import performanceImg from "../../../assets/Services/Performance marketing.webp";
import websiteDevImg from "../../../assets/Services/Website Development.webp";
import influencerImg from "../../../assets/Services/Influncer Marketing.webp";
import seoImg from "../../../assets/Services/SEO.webp";

gsap.registerPlugin(ScrollTrigger);

export default function Projectsection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const stackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header fades up
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stack component entrance with scale
      gsap.fromTo(
        stackRef.current,
        { scale: 0.95, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 bg-white font-sans">

      {/* Top Upward Curve Divider */}
      <div className="absolute top-0 left-0 w-full -translate-y-[99%] overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[120px] md:h-[180px] lg:h-[220px]"
        >
          <path
            d="M0,120 Q720,0 1440,120 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-30">

        {/* Header */}
        <div ref={headerRef} className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 mb-6 px-4 py-1.5 border border-gray-200 rounded-full bg-white shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5b5b]"></span>
            <span className="text-[11px] font-bold text-[#ff5b5b] tracking-widest uppercase">Our Services</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5b5b]"></span>
          </div>
          <h2 className="text-[38px] md:text-[50px] font-extrabold text-slate-900 text-center leading-[1.1] tracking-tight flex flex-wrap justify-center">
            Recent <span className="text-white px-4 py-1 bg-[#1e2f57] overflow-hidden rounded-xl mx-2">Projects</span> ✦
          </h2>
        </div>

        {/* GSAP Connoisseur Stack Interactor Component */}
        <div ref={stackRef}>
          <ConnoisseurStackInteractor
            items={[
              {
                num: "01",
                name: "Social Media Marketing",
                clipId: "clip-original",
                image: socialMediaImg
              },
              {
                num: "02",
                name: "Performance Marketing",
                clipId: "clip-hexagons",
                image: performanceImg
              },
              {
                num: "03",
                name: "Website Development",
                clipId: "clip-pixels",
                image: websiteDevImg
              },
              {
                num: "04",
                name: "Influencer Marketing",
                clipId: "clip-original",
                image: influencerImg
              },
              {
                num: "05",
                name: "SEO Services",
                clipId: "clip-hexagons",
                image: seoImg
              }
            ]}
            className="min-h-[500px] md:min-h-[600px]"
          />
        </div>

        {/* Explore Projects Button */}
        <div className="flex flex-col items-center mt-20 relative w-full overflow-hidden py-10">
          
          {/* Decorative curved line behind the button */}
          <div className="absolute top-1/2 left-0 w-full h-[160px] -translate-y-1/2 pointer-events-none z-0 flex items-center justify-center opacity-80">
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 1440 160" 
              preserveAspectRatio="none" 
              className="min-w-[1200px]"
            >
              <path 
                d="M-100,110 L480,110 C540,110 560,50 620,50 L820,50 C880,50 900,110 960,110 L1540,110" 
                stroke="var(--accent-orange)" 
                strokeWidth="3.5" 
                fill="none" 
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          <p className="text-[13px] font-bold uppercase tracking-[0.2em] mb-4 relative z-10 bg-white px-6" style={{ color: "var(--accent-orange)" }}>
            Hungry for more?
          </p>
          <button className="group relative flex items-center gap-3 px-10 py-5 bg-[#1e2f57] text-white text-lg font-bold rounded-full shadow-[0_10px_30px_rgba(30,47,87,0.25)] hover:shadow-[0_15px_40px_rgba(30,47,87,0.4)] hover:-translate-y-1 transition-all duration-300 z-10">
            <span>Explore All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}