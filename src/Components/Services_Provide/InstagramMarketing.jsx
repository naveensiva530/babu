import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import './common.css';

export default function InstagramMarketing() {
  return (
    <div className="service-page-wrapper font-sans bg-white min-h-screen flex flex-col">
      {/* Navbar at the top */}
      <Navbar />

      {/* Hero Header Banner */}
      <div className="service-hero-banner relative w-full h-[350px] md:h-[450px] flex items-center justify-center mt-[90px]">
        {/* Background Image Overlay */}
                <div 
          className="absolute inset-0 bg-[#111827]/85 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        {/* You can add your background image here via inline style or CSS class */}
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Instagram Marketing
          </h1>
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-3 text-lg font-medium">
            <Link to="/" className="text-[#ff6b35] cursor-pointer hover:underline">Home</Link>
            <span className="text-white">&gt;</span>
            <span className="text-white">Instagram Marketing</span>
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
      <div className="flex-1 max-w-[1200px] w-full mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-[#111827] mb-6">About Instagram Marketing</h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Detailed information and content for Instagram Marketing will go here.
          You can replace this placeholder with your actual service descriptions, images, and features.
        </p>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}
