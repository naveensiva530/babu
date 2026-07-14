// src/components/Services.jsx

import React, { useState, useEffect, useRef, useCallback } from "react";
import "../common.css";

import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Megaphone,
  UserCog,
  PersonStanding,
  Globe,
} from "lucide-react";

const services = [
  {
    num: "01", tag: "MARKETING", title: "Social Media\nMarketing", icon: Globe,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "02", tag: "ADS", title: "Performance\nMarketing", icon: ArrowUpRight,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "03", tag: "WEB", title: "Website\nDevelopment", icon: UserCog,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "04", tag: "INFLUENCER", title: "Influencer\nMarketing", icon: PersonStanding,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "05", tag: "SEO", title: "SEO\nServices", icon: Megaphone,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "06", tag: "VIDEO", title: "Video\nProduction", icon: UserCog,
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "07", tag: "BRANDING", title: "Branding\nSolutions", icon: Megaphone,
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "08", tag: "CONSULTING", title: "Digital\nConsulting", icon: PersonStanding,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "09", tag: "CONTENT", title: "Content\nWriting", icon: Megaphone,
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "10", tag: "SOCIAL", title: "Instagram\nMarketing", icon: Globe,
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "11", tag: "HEALTH", title: "Health\nCare", icon: UserCog,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "12", tag: "REAL ESTATE", title: "Real\nEstate", icon: Globe,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "13", tag: "EDUCATION", title: "Education\nSector", icon: PersonStanding,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "14", tag: "TECH", title: "IT-Tech\nSAAS", icon: Globe,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "15", tag: "BEAUTY", title: "Beauty &\nSalon", icon: UserCog,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
  },
];

// ─── carousel config ──────────────────────────────────────────
const CARDS_PER_VIEW = 4;
const CLONE_COUNT    = CARDS_PER_VIEW;   // 4 clones on each side
const TOTAL          = services.length;  // 15
const EXT_LEN        = TOTAL + CLONE_COUNT * 2; // 23

const extendedCards = [
  ...services.slice(-CLONE_COUNT).map((s, i) => ({ ...s, _key: `cs${i}` })),
  ...services.map((s)             => ({ ...s, _key: s.num })),
  ...services.slice(0, CLONE_COUNT).map((s, i) => ({ ...s, _key: `ce${i}` })),
];

export default function Services() {
  const [idx, setIdx]           = useState(CLONE_COUNT); // start at real card 0
  const [animated, setAnimated] = useState(true);
  const [hoveredKey, setHoveredKey] = useState(null);
  const trackRef = useRef(null); // ref to the sliding track div

  // ── Bug fix: only react to the track's own "transform" transition end ──
  const handleTransitionEnd = useCallback((e) => {
    // Ignore events bubbling up from child elements (card hover animations)
    if (e.target !== trackRef.current) return;
    // Ignore non-transform transitions
    if (e.propertyName !== "transform") return;

    setAnimated(false);
    setIdx((prev) => {
      if (prev >= TOTAL + CLONE_COUNT) return prev - TOTAL; // overshot right
      if (prev < CLONE_COUNT)          return prev + TOTAL; // overshot left
      return prev;
    });
  }, []);

  // Re-enable transition after silent teleport (two rAF ticks = guaranteed paint)
  useEffect(() => {
    if (!animated) {
      let raf1 = requestAnimationFrame(() => {
        let raf2 = requestAnimationFrame(() => setAnimated(true));
        return () => cancelAnimationFrame(raf2);
      });
      return () => cancelAnimationFrame(raf1);
    }
  }, [animated]);

  const next = () => setIdx((p) => p + 1);
  const prev = () => setIdx((p) => p - 1);

  const translateX = `calc(-${idx} / ${EXT_LEN} * 100%)`;

  return (
    <section
      className="relative overflow-hidden pb-40 lg:pb-64 px-4 pt-32 md:pt-40"
      style={{ background: "var(--bg-light-purple)", fontFamily: "var(--font-primary)" }}
    >
      <div className="relative mx-auto max-w-7xl z-20">

        {/* ── TOP BAR: heading CENTERED (Process.jsx style), arrows RIGHT ── */}
        <div className="relative mb-14 flex flex-col items-center justify-center text-center">

          {/* ARROWS — absolutely right-positioned */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-4">
            <button
              onClick={prev}
              className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95"
              style={{ border: "1px solid var(--border-gray)", background: "var(--primary-white)", color: "var(--text-dark-blue)" }}
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95"
              style={{ background: "var(--accent-orange)", color: "#fff" }}
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* label */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full inline-block" style={{ background: "var(--accent-orange)" }} />
            <span className="text-[13px] uppercase tracking-widest font-semibold" style={{ color: "var(--text-gray)" }}>Our Services</span>
          </div>

          {/* title — Process.jsx style with dark pill badge */}
          <h2
            className="text-[38px] md:text-[50px] font-extrabold leading-[1.15] tracking-tight"
            style={{ color: "var(--text-dark-blue)" }}
          >
            Services We&apos;re{" "}
            <span
              className="px-4 py-1 rounded-xl inline-block"
              style={{ background: "var(--text-dark-blue)", color: "#fff" }}
            >
              Offering
            </span>
            {" "}to Customers
          </h2>

          {/* subtitle */}
          <p
            className="text-[15px] font-medium mt-3 max-w-[480px] leading-relaxed"
            style={{ color: "var(--text-gray)" }}
          >
            From social media to SEO — we cover every corner of digital growth.
          </p>
        </div>

        {/* ── CAROUSEL VIEWPORT ─────────────────────────── */}
        <div style={{ overflow: "hidden", paddingTop: "2.5rem", marginTop: "-2.5rem" }}>
          {/*
            Track width = EXT_LEN / CARDS_PER_VIEW × 100% of viewport
            → each card occupies exactly 25% of the viewport
          */}
          <div
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            style={{
              display: "flex",
              alignItems: "stretch",
              width: `calc(${EXT_LEN} / ${CARDS_PER_VIEW} * 100%)`,
              transform: `translateX(${translateX})`,
              transition: animated ? "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
              willChange: "transform",
            }}
          >
            {extendedCards.map((s) => {
              const Icon = s.icon;
              const isHovered = hoveredKey === s._key;

              return (
                <div
                  key={s._key}
                  className="services-card-item group relative flex-shrink-0 px-4"
                  style={{
                    width: `calc(100% / ${EXT_LEN})`,
                    transform: isHovered ? "translateY(-12px)" : "translateY(0)",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={() => setHoveredKey(s._key)}
                  onMouseLeave={() => setHoveredKey(null)}
                >
                  {/* FLOATING ICON */}
                  <div
                    className="absolute -top-6 left-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full shadow-xl"
                    style={{
                      // Default: orange bg, white icon
                      // Hover:   white bg, orange icon
                      background: isHovered ? "#fff" : "var(--accent-orange)",
                      transform: `translateX(-50%) scale(${isHovered ? 1.12 : 1})`,
                      transition: "background 0.4s ease, transform 0.4s ease",
                      boxShadow: isHovered ? "0 8px 24px rgba(224,131,38,0.35)" : undefined,
                    }}
                  >
                    <Icon
                      className="h-6 w-6"
                      style={{
                        color: isHovered ? "var(--accent-orange)" : "#fff",
                        transition: "color 0.4s ease",
                      }}
                    />
                  </div>

                  {/* CARD */}
                  <div
                    className="relative overflow-hidden border shadow-2xl rounded-tl-[150px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px]"
                    style={{
                      background: isHovered ? "var(--text-dark-blue)" : "var(--primary-white)",
                      border: isHovered ? "1px solid transparent" : "1px solid var(--border-gray-light)",
                      transition: "background 0.4s ease, border 0.4s ease, box-shadow 0.4s ease",
                      boxShadow: isHovered ? "0 25px 60px rgba(26,26,64,0.35)" : undefined,
                    }}
                  >
                    {/* CONTENT */}
                    <div className="p-6 pt-10">
                      <div
                        className="text-right text-5xl font-bold"
                        style={{
                          color: isHovered ? "var(--accent-orange)" : "var(--text-gray)",
                          transition: "color 0.4s ease",
                        }}
                      >
                        {s.num}
                      </div>
                      <p
                        className="mt-6 text-xs font-semibold uppercase tracking-[3px]"
                        style={{
                          color: isHovered ? "rgba(255,255,255,0.65)" : "var(--text-gray)",
                          transition: "color 0.4s ease",
                        }}
                      >
                        {s.tag}
                      </p>
                      <h3
                        className="mt-3 whitespace-pre-line text-2xl font-bold leading-snug"
                        style={{
                          color: isHovered ? "#fff" : "var(--text-dark-blue)",
                          transition: "color 0.4s ease",
                        }}
                      >
                        {s.title}
                      </h3>
                    </div>

                    {/* IMAGE */}
                    <div className="relative mt-4">
                      <div className="relative overflow-hidden rounded-tr-[150px]">
                        <img
                          src={s.image}
                          alt={s.title.replace("\n", " ")}
                          style={{
                            height: "15rem",
                            width: "100%",
                            objectFit: "cover",
                            transform: isHovered ? "scale(1.1)" : "scale(1)",
                            transition: "transform 0.7s ease",
                          }}
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: isHovered ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.1)",
                            transition: "background 0.4s ease",
                          }}
                        />
                        <button
                          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center shadow-lg rounded-[20px] transition-all duration-300 hover:rotate-45 hover:scale-110"
                          style={{ background: "var(--accent-orange)", color: "#fff" }}
                        >
                          <ArrowUpRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    {/* GLOW */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ opacity: isHovered ? 1 : 0, transition: "opacity 0.5s ease" }}
                    >
                      <div className="absolute -left-10 top-10 h-32 w-32 rounded-full blur-3xl" style={{ background: "rgba(255,107,157,0.15)" }} />
                      <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full blur-3xl" style={{ background: "rgba(224,131,38,0.2)" }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}