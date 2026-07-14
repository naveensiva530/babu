import React, { useState, useEffect, useRef } from 'react';
import { Quote, Star, ArrowLeft, ArrowRight, TrendingUp } from 'lucide-react';
import '../common.css';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Marketing Director",
    company: "TechVision Inc.",
    quote: "Working with this team has completely transformed our online presence. The attention to detail and strategic thinking delivered results well beyond our expectations.",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
    stat: "+312%", statLabel: "ROI Increase",
    tag: "ROI"
  },
  {
    name: "Marcus Johnson",
    role: "CEO & Founder",
    company: "GrowthLabs",
    quote: "A brilliant team that executes flawlessly and always delivers on time. Their digital marketing strategies tripled our qualified leads in just 90 days.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    stat: "3x", statLabel: "Lead Growth",
    tag: "GROWTH"
  },
  {
    name: "Jessica Taylor",
    role: "E-commerce Manager",
    company: "StyleHouse",
    quote: "Our conversion rates doubled after implementing their UX suggestions and ad campaigns. The return on investment has been absolutely phenomenal.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    stat: "2x", statLabel: "Conversions",
    tag: "SALES"
  },
  {
    name: "David Chen",
    role: "Head of Growth",
    company: "ScaleUp Digital",
    quote: "From strategy to execution, everything was handled professionally. Our brand awareness grew significantly and so did our revenue month after month.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    stat: "89%", statLabel: "Brand Lift",
    tag: "BRAND"
  }
];

export default function Testimonial() {
  const [current, setCurrent]     = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(1); // 1=forward, -1=backward
  const timeoutRef = useRef(null);

  const goTo = (next, dir = 1) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(next);
      setAnimating(false);
    }, 350);
  };

  const goPrev = () => goTo((current - 1 + testimonials.length) % testimonials.length, -1);
  const goNext = () => goTo((current + 1) % testimonials.length, 1);

  // Auto-advance
  useEffect(() => {
    timeoutRef.current = setTimeout(goNext, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const t = testimonials[current];

  return (
    <section
      className="w-full py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'var(--primary-white)', fontFamily: 'var(--font-primary)' }}
    >

      {/* ── Background decoration ───────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large navy circle top-left */}
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
          style={{ background: 'var(--bg-light-purple)', opacity: 0.5 }}
        />
        {/* Orange glow bottom-right */}
        <div
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'rgba(224,131,38,0.12)' }}
        />
        {/* Subtle grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tgrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1e2f57" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tgrid)" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">

        {/* ── Heading ───────────────────────────────── */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full" style={{ background: 'var(--accent-orange)' }} />
            <span
              className="text-[13px] uppercase tracking-widest font-semibold"
              style={{ color: 'var(--text-gray)' }}
            >
              Client Stories
            </span>
          </div>

          <h2
            className="text-[38px] md:text-[50px] font-extrabold leading-[1.15] tracking-tight mb-4"
            style={{ color: 'var(--text-dark-blue)' }}
          >
            What Our{' '}
            <span
              className="px-4 py-1 rounded-xl inline-block"
              style={{ background: 'var(--text-dark-blue)', color: '#fff' }}
            >
              Clients
            </span>
            {' '}Say
          </h2>

          <p
            className="text-[15px] max-w-[480px] mx-auto leading-relaxed"
            style={{ color: 'var(--text-gray)' }}
          >
            Don't just take our word for it — hear from some of our amazing clients.
          </p>
        </div>

        {/* ── Main card + side mini cards layout ────── */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* ── LEFT: Previous card (mini) ── */}
          <div className="hidden lg:flex flex-col justify-center w-64 flex-shrink-0">
            {(() => {
              const prev = testimonials[(current - 1 + testimonials.length) % testimonials.length];
              return (
                <button
                  onClick={goPrev}
                  className="w-full text-left rounded-2xl p-5 transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'var(--bg-light-purple)',
                    border: '1px solid var(--border-gray)',
                    opacity: 0.7
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img src={prev.avatar} alt={prev.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <div className="font-bold text-[13px]" style={{ color: 'var(--text-dark-blue)' }}>{prev.name}</div>
                      <div className="text-[11px]" style={{ color: 'var(--text-gray)' }}>{prev.company}</div>
                    </div>
                  </div>
                  <p className="text-[12px] leading-relaxed line-clamp-3" style={{ color: 'var(--text-gray)' }}>
                    "{prev.quote}"
                  </p>
                </button>
              );
            })()}
          </div>

          {/* ── CENTER: Active testimonial card ── */}
          <div className="flex-1">
            <div
              className="rounded-3xl p-8 md:p-12 relative overflow-hidden h-full"
              style={{
                background: 'var(--text-dark-blue)',
                boxShadow: '0 30px 80px rgba(30,47,87,0.30)',
              }}
            >
              {/* Card background decoration */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
                style={{ background: 'rgba(224,131,38,0.15)', transform: 'translate(30%, -30%)' }}
              />
              <div
                className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl pointer-events-none"
                style={{ background: 'rgba(221,208,245,0.08)', transform: 'translate(-20%, 20%)' }}
              />

              {/* Tag */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <span
                  className="text-[11px] font-bold uppercase tracking-[3px] px-3 py-1 rounded-full"
                  style={{ background: 'rgba(224,131,38,0.2)', color: 'var(--accent-orange)' }}
                >
                  {t.tag}
                </span>
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'var(--accent-orange)' }} />
                  ))}
                </div>
              </div>

              {/* Quote icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                style={{ background: 'var(--accent-orange)' }}
              >
                <Quote className="w-7 h-7 text-white" />
              </div>

              {/* Quote text — animated */}
              <blockquote
                className="text-[19px] md:text-[23px] leading-[1.75] font-medium mb-10 relative z-10"
                style={{
                  color: '#fff',
                  opacity: animating ? 0 : 1,
                  transform: animating
                    ? `translateX(${direction * 30}px)`
                    : 'translateX(0)',
                  transition: 'opacity 0.35s ease, transform 0.35s ease',
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Divider */}
              <div
                className="w-full h-px mb-8 relative z-10"
                style={{ background: 'rgba(255,255,255,0.1)' }}
              />

              {/* Author + stat */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10"
                style={{
                  opacity: animating ? 0 : 1,
                  transition: 'opacity 0.35s ease',
                }}
              >
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover"
                      style={{ border: '3px solid var(--accent-orange)' }}
                    />
                    {/* Online dot */}
                    <span
                      className="absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white"
                      style={{ background: '#22c55e', borderColor: 'var(--text-dark-blue)' }}
                    />
                  </div>
                  <div>
                    <div className="font-bold text-white text-[17px]">{t.name}</div>
                    <div className="text-[13px]" style={{ color: 'var(--text-gray)' }}>{t.role}</div>
                    <div className="text-[12px] font-semibold" style={{ color: 'var(--accent-orange)' }}>{t.company}</div>
                  </div>
                </div>

                {/* Stat badge */}
                <div
                  className="flex items-center gap-4 rounded-2xl px-6 py-4"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)' }}
                >
                  <TrendingUp className="w-5 h-5" style={{ color: 'var(--accent-orange)' }} />
                  <div className="text-center">
                    <div className="text-[30px] font-extrabold leading-none" style={{ color: 'var(--accent-orange)' }}>
                      {t.stat}
                    </div>
                    <div className="text-[11px] uppercase tracking-wider mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {t.statLabel}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Next card (mini) ── */}
          <div className="hidden lg:flex flex-col justify-center w-64 flex-shrink-0">
            {(() => {
              const next = testimonials[(current + 1) % testimonials.length];
              return (
                <button
                  onClick={goNext}
                  className="w-full text-left rounded-2xl p-5 transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'var(--bg-light-purple)',
                    border: '1px solid var(--border-gray)',
                    opacity: 0.7
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img src={next.avatar} alt={next.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <div className="font-bold text-[13px]" style={{ color: 'var(--text-dark-blue)' }}>{next.name}</div>
                      <div className="text-[11px]" style={{ color: 'var(--text-gray)' }}>{next.company}</div>
                    </div>
                  </div>
                  <p className="text-[12px] leading-relaxed line-clamp-3" style={{ color: 'var(--text-gray)' }}>
                    "{next.quote}"
                  </p>
                </button>
              );
            })()}
          </div>
        </div>

        {/* ── Navigation ───────────────────────────── */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={goPrev}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
            style={{
              border: '1px solid var(--border-gray)',
              background: 'var(--primary-white)',
              color: 'var(--text-dark-blue)',
              boxShadow: '0 2px 12px var(--shadow-light)',
            }}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Dot indicators */}
          <div className="flex gap-2 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className="rounded-full transition-all duration-300"
                style={{
                  width:  i === current ? 28 : 8,
                  height: 8,
                  background: i === current ? 'var(--accent-orange)' : 'var(--border-gray)',
                }}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95"
            style={{
              background: 'var(--accent-orange)',
              boxShadow: '0 4px 20px var(--shadow-orange)',
            }}
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}