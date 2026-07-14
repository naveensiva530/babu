import React from 'react';
import { Monitor, Box, Users, Megaphone, Settings, Presentation, Smartphone, ArrowRight } from 'lucide-react';
import { ConnoisseurStackInteractor } from '../../../components/ui/connoisseur-stack-interactor.jsx';

export default function Projectsection() {
  return (
    <section className="relative py-20 bg-white font-sans">

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
        <div className="flex flex-col items-center mb-16">
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
        <ConnoisseurStackInteractor
          items={[
            {
              num: "01",
              name: "Web Development",
              clipId: "clip-original",
              image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
            },
            {
              num: "02",
              name: "Brand Design",
              clipId: "clip-hexagons",
              image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
            },
            {
              num: "03",
              name: "Marketing",
              clipId: "clip-pixels",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
            }
          ]}
          className="min-h-[500px] md:min-h-[600px]"
        />



      </div>
    </section>
  );
}