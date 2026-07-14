import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import Projects from '../HomePage/Projects/Projectsection';
import '../HomePage/common.css';

export default function ProjectsPage() {
  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Header Banner */}
      <div className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center mt-[90px]">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-[#111827]/85 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Our Projects
          </h1>
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-3 text-lg font-medium">
            <Link to="/" className="text-[#ff6b35] cursor-pointer hover:underline">Home</Link>
            <span className="text-white">&gt;</span>
            <span className="text-white">Projects</span>
          </div>
        </div>
      
        {/* Curved bottom overlay */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[60px] md:h-[100px]" style={{ transform: "translateY(1px)" }}>
            <path d="M0,120 C300,0 900,0 1200,120 Z" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full pb-10">
        <Projects />
      </div>

      <Footer />
    </div>
  );
}
