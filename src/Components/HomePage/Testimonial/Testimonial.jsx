import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { LayoutGroup, motion } from 'framer-motion';
import { TextRotate } from '../../ui/text-rotate';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../common.css';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Darrell Steward",
    role: "Designer at Themexriver",
    quote: "Their expert team provided exceptional digital solutions, making our brand more competitive and successful in today's market.",
    rating: "5.0",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    name: "Guy Hawkins",
    role: "Designer at Themexriver",
    quote: "Their expert team provided exceptional digital solutions, making our brand more competitive and successful in today's market.",
    rating: "5.0",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    name: "Esther Howard",
    role: "Designer at Themexriver",
    quote: "Their expert team provided exceptional digital solutions, making our brand more competitive and successful in today's market.",
    rating: "5.0",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 4,
    name: "Ralph Edwards",
    role: "Designer at Themexriver",
    quote: "Their expert team provided exceptional digital solutions, making our brand more competitive and successful in today's market.",
    rating: "5.0",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 5,
    name: "Sarah Jenkins",
    role: "Designer at Themexriver",
    quote: "Their expert team provided exceptional digital solutions, making our brand more competitive and successful in today's market.",
    rating: "5.0",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80"
  }
];

// Duplicated array for seamless infinite looping
const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const autoPlayRef = useRef(null);
  const sectionRef = useRef(null);
  const cardBoxRef = useRef(null);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Seamless infinite loop reset logic
  useEffect(() => {
    if (currentIndex >= testimonials.length * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(testimonials.length);
      }, 700);
      return () => clearTimeout(timer);
    } else if (currentIndex < testimonials.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(testimonials.length * 2 - 1);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  // Automatic 4s smooth auto-play carousel
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(autoPlayRef.current);
  }, [currentIndex]);

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(testimonials.length + index);
  };

  // Scroll Trigger entrance animation for card box
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardBoxRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activeDotIndex = currentIndex % testimonials.length;

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-20 relative overflow-hidden bg-white font-sans">

      {/* ── Heading matching Process.jsx format ── */}
      <div className="flex flex-col items-center justify-center gap-3 mb-10 md:mb-14 relative z-10 px-4">


        <LayoutGroup>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-x-3 gap-y-1 text-[32px] sm:text-[42px] md:text-[48px] font-extrabold leading-[1.15] tracking-tight text-center flex-wrap"
            layout
            style={{ color: 'var(--brand-navy)' }}
          >
            <motion.span layout transition={{ type: 'spring', damping: 30, stiffness: 400 }} className="whitespace-nowrap">
              What Our Clients
            </motion.span>

            <TextRotate
              texts={['Say ✦', 'Share', 'Experience', 'Achieve', 'Think']}
              mainClassName="text-white px-4 py-1 overflow-hidden rounded-xl justify-center shadow-md"
              style={{ background: 'var(--brand-navy)' }}
              staggerFrom="last"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-120%' }}
              staggerDuration={0.03}
              splitLevelClassName="overflow-hidden pb-0.5"
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />
          </motion.div>
        </LayoutGroup>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 relative">
        {/* Main Outer Container with background: var(--bg-light-purple) and borderRadius: 40px */}
        <div
          ref={cardBoxRef}
          className="p-4 sm:p-6 md:p-8 shadow-[0_15px_40px_rgba(30,47,87,0.08)] relative z-10"
          style={{
            background: 'var(--bg-light-purple)',
            borderRadius: '40px',
            opacity: 0,
          }}
        >
          {/* Continuous Smooth Slider Track */}
          <div className="overflow-hidden py-1 w-full">
            <div
              className={`flex gap-4 md:gap-5 ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''
                }`}
              style={{
                transform: `translateX(calc(-${currentIndex} * (360px + 1.25rem)))`,
              }}
            >
              {extendedTestimonials.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="flex-shrink-0 w-[290px] sm:w-[330px] md:w-[360px] bg-white rounded-2xl p-4 md:p-5 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]"
                  style={{
                    border: '1px solid rgba(30, 47, 87, 0.08)',
                  }}
                >
                  {/* Top Row: Rating & Avatar */}
                  <div>
                    <div className="flex items-start justify-between gap-2.5 mb-2">
                      {/* Rating & Stars Pill Badge */}
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1">
                          <span className="font-extrabold text-sm md:text-base" style={{ color: 'var(--brand-navy)' }}>
                            {item.rating}
                          </span>
                          <span className="text-[11px] md:text-xs font-medium" style={{ color: 'var(--brand-steel)' }}>
                            Rating
                          </span>
                        </div>
                        <div
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full shadow-2xs"
                          style={{ background: 'var(--brand-yellow)' }}
                        >
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 fill-current text-[#1e2f57]"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Compact Avatar Image */}
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-14 h-14 md:w-16 md:h-16 rounded-xl object-cover shadow-2xs border-2 border-white flex-shrink-0"
                      />
                    </div>

                    {/* Name & Role */}
                    <div className="text-left my-2">
                      <h3
                        className="text-sm md:text-base font-bold tracking-tight mb-0.5"
                        style={{ color: 'var(--brand-navy)' }}
                      >
                        {item.name}
                      </h3>
                      <p
                        className="text-[11px] md:text-xs font-medium"
                        style={{ color: 'var(--brand-steel)' }}
                      >
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Compact Sleek Quote Box */}
                  <div className="bg-slate-50/90 rounded-xl p-3.5 md:p-4 border border-slate-100 relative shadow-2xs mt-2 flex-1 flex flex-col justify-between min-h-[75px]">
                    <p
                      className="text-[12px] md:text-[13px] italic font-normal leading-relaxed mb-1"
                      style={{ color: 'var(--brand-navy)' }}
                    >
                      "{item.quote}"
                    </p>
                    <div className="flex justify-end">
                      <Quote
                        className="w-3.5 h-3.5 rotate-180"
                        style={{ color: 'var(--brand-steel)', opacity: 0.35 }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls: Left/Right Arrow Buttons + 5 Dots */}
          <div className="flex items-center justify-between gap-4 mt-6 pt-1">
            {/* Left Arrow Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="w-10 h-10 rounded-xl border border-slate-200/80 bg-white flex items-center justify-center shadow-xs transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              style={{ color: 'var(--brand-navy)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--brand-navy)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.color = 'var(--brand-navy)';
              }}
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Connecting Track Line with 5 Dots */}
            <div className="flex-1 relative flex items-center justify-center mx-2 sm:mx-6 max-w-xs md:max-w-sm">
              <div className="w-full h-[1px] bg-slate-300/60 absolute top-1/2 left-0 -translate-y-1/2 z-0" />
              <div className="relative z-10 flex items-center gap-3 px-3 rounded-full" style={{ background: 'var(--bg-light-purple)' }}>
                {testimonials.map((_, dotIdx) => {
                  const isCurrent = dotIdx === activeDotIndex;
                  return (
                    <button
                      key={dotIdx}
                      onClick={() => handleDotClick(dotIdx)}
                      aria-label={`Go to review ${dotIdx + 1}`}
                      className="transition-all duration-300 cursor-pointer flex items-center justify-center"
                    >
                      {isCurrent ? (
                        <div
                          className="w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center shadow-2xs"
                          style={{ borderColor: 'var(--brand-navy)' }}
                        >
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ background: 'var(--brand-navy)' }}
                          />
                        </div>
                      ) : (
                        <div className="w-3 h-3 rounded-full border-2 border-slate-400/80 bg-white hover:border-[var(--brand-navy)] transition-colors" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Arrow Button */}
            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="w-10 h-10 rounded-xl border border-slate-200/80 bg-white flex items-center justify-center shadow-xs transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              style={{ color: 'var(--brand-navy)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--brand-navy)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.color = 'var(--brand-navy)';
              }}
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}