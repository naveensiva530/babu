import React from "react";
import person1 from "../../../assets/h.png";
import person2 from "../../../assets/j.png";
import person3 from "../../../assets/f.png"; // small camera-woman image on the right
import { ArrowUpRight } from "lucide-react";
import "../common.css";

export default function About() {
  return (
    <section
      className="w-full pt-10 pb-16 md:pt-12 md:pb-20 overflow-hidden relative"
      style={{ background: "var(--primary-white)", fontFamily: "var(--font-primary)" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-10 items-center">

          {/* LEFT: Image Collage */}
          <div className="w-full lg:w-[46%] relative min-h-[520px] flex items-center justify-center lg:justify-start z-10">
            {/* Main blob image */}
            <div
              className="relative z-10 w-[360px] md:w-[400px] h-[420px] md:h-[580px] bg-white rounded-t-full rounded-b-[180px] md:rounded-b-[210px] flex items-center justify-center p-4"
              style={{
                boxShadow: "0 20px 50px -10px rgba(0,0,0,0.08)",
              }}
            >
              <img src={person1} alt="Team member working" className="w-full h-full object-cover rounded-t-full rounded-b-[164px] md:rounded-b-[194px]" />
            </div>

            {/* Video Thumbnail (bottom right, overlapping) */}
            <div
              className="absolute z-20 bottom-[-20px] right-[5%] md:right-[0%] w-[170px] md:w-[200px] h-[170px] md:h-[200px] rounded-full bg-white flex items-center justify-center p-2 overflow-hidden cursor-pointer"
              style={{
                boxShadow: "0 15px 35px -5px rgba(0,0,0,0.12)",
              }}
            >
              <div className="relative w-full h-full rounded-full overflow-hidden group">
                <img src={person2} alt="Video thumbnail" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* RIGHT: Text Content */}
          <div className="w-full lg:w-[54%] flex flex-col justify-center z-10 lg:pl-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm">
                <span className="text-[#f97316] text-xs font-bold leading-none">+</span>
              </span>
              <span
                className="text-[16px] italic text-[#1a233a] font-medium"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                About us
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[#1a233a] mb-6">
              <span
                className="block text-[40px] md:text-[50px] lg:text-[56px] italic font-medium leading-[1.1] mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Crafting Powerful
              </span>

            </h2>

            {/* Description */}
            <p className="text-[15px] md:text-[16px] leading-relaxed mb-8 max-w-[540px] text-gray-500 font-medium">
              We help ambitious brands break boundaries with bold design and smart
              strategies. Our creative team is driven by innovation and fueled by
              passion, delivering solutions that capture attention and drive growth.
              Whether you're a startup or an established business, we bring your
              vision to life.
            </p>

            {/* CTA */}
            <div className="mb-14">
              <button
                className="group flex items-center gap-4 font-bold text-[13px] md:text-[14px] uppercase tracking-wide pl-8 pr-2 py-2 rounded-full transition-transform hover:-translate-y-1"
                style={{
                  background: "#1e293b", // Dark navy/slate
                  color: "#ffffff",
                  boxShadow: "0 10px 25px -5px rgba(30, 41, 59, 0.4)"
                }}
              >
                Know More Us
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:rotate-45"
                  style={{ background: "#f97316" }}
                >
                  <ArrowUpRight className="w-5 h-5 text-white" strokeWidth={2.5} />
                </span>
              </button>
            </div>

            {/* Bottom Row: Stats & Image */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 mt-auto">
              {/* Stat */}
              <div className="flex items-start gap-1 max-w-[220px]">
                <h4 className="text-[64px] md:text-[80px] font-black leading-none text-[#1a233a] tracking-tighter">
                  10
                </h4>
                <div className="flex flex-col pt-1">
                  <span className="text-[32px] md:text-[40px] font-black leading-none text-[#1a233a] -ml-1">
                    +
                  </span>
                  <p className="text-[12px] md:text-[13px] leading-[1.4] mt-1 text-gray-500 font-medium max-w-[130px]">
                    Trusted Experience Built on Successful Projects.
                  </p>
                </div>
              </div>

              {/* Small right-side image (camera woman / phone hand) */}
              <div
                className="w-[200px] md:w-[240px] h-[140px] md:h-[160px] bg-white rounded-3xl p-1"
                style={{
                  boxShadow: "0 15px 40px -10px rgba(0,0,0,0.1)",
                }}
              >
                <img src={person3} alt="Photographer at work" className="w-full h-full object-cover rounded-[20px]" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}