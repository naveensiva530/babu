import { ArrowUpRight } from "lucide-react";
import "../common.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    year: "2025",
    title: "Our Innovative Solution Modern Global.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2025",
    title: "Cloud Infrastructure That Scales With You.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2024",
    title: "Smarter Automation For Everyday Teams.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2024",
    title: "Secure Networks Built For The Future.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2023",
    title: "Data Driven Design From Idea To Launch.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
];

// One "playing card" — sticks at an increasing top offset so the
// next card slides over the previous one as the user scrolls.
function StackCard({ project, index }) {
  return (
    <div
      className="sticky group cursor-pointer"
      style={{
        top: `${96 + index * 16}px`, // each card sticks a bit lower -> stack look
        zIndex: index + 1,
      }}
    >
      <div
        className="rounded-[2rem] p-4 sm:p-5 border-2 border-white/60 transition-all duration-500 group-hover:border-[color:var(--accent-orange)] group-hover:-translate-y-2"
        style={{ background: "var(--bg-light-purple)" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr] gap-6 sm:gap-8 items-center">
          {/* image */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
            <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* content */}
          <div className="py-2 sm:py-4 pr-2 sm:pr-4">
            <span className="text-[13px] font-bold tracking-widest uppercase mb-2 inline-block" style={{ color: "var(--accent-orange)" }}>
              [{project.year}]
            </span>
            <h3 className="mt-2 text-xl sm:text-2xl font-bold leading-snug transition-colors duration-300" style={{ color: "var(--text-dark-blue)" }}>
              {project.title}
            </h3>

            <button
              type="button"
              aria-label="View project"
              className="mt-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-md group-hover:shadow-lg"
              style={{ background: "var(--text-dark-blue)", color: "#fff" }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--accent-orange)"}
              onMouseLeave={e => e.currentTarget.style.background = "var(--text-dark-blue)"}
            >
              <ArrowUpRight size={20} className="transition-transform duration-500 group-hover:rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Blog() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading: fade up
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Left column cards: stagger slide-up with subtle rotate
      gsap.fromTo(
        leftColRef.current.children,
        { y: 70, opacity: 0, rotate: 2 },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftColRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Right sticky column: slide in from right
      gsap.fromTo(
        rightColRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-20 md:py-28"
      style={{ fontFamily: "var(--font-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* ── HEADING ── */}
        <div ref={headingRef} className="text-center mb-16">

          {/* label */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span
              className="w-2 h-2 rounded-full inline-block"
              style={{ background: "var(--accent-orange)" }}
            />
            <span
              className="text-[13px] uppercase tracking-widest font-semibold"
              style={{ color: "var(--text-gray)" }}
            >
              Portfolio Showcase
            </span>
          </div>

          {/* title with dark pill badge */}
          <h2
            className="text-[38px] md:text-[50px] font-extrabold leading-[1.15] tracking-tight mb-4"
            style={{ color: "var(--text-dark-blue)" }}
          >
            Our{" "}
            <span
              className="px-4 py-1 rounded-xl inline-block"
              style={{ background: "var(--text-dark-blue)", color: "#fff" }}
            >
              Creative
            </span>
            {" "}Work Examples
          </h2>

          {/* subtitle */}
          <p
            className="text-[15px] max-w-[480px] mx-auto leading-relaxed"
            style={{ color: "var(--text-gray)" }}
          >
            A glimpse into the projects we've built and the results we've delivered.
          </p>
        </div>

        {/* ── TWO-COLUMN LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT — stacking cards */}
          <div ref={leftColRef} className="flex flex-col gap-6">
            {projects.map((project, index) => (
              <StackCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* RIGHT — sticky content */}
          <div ref={rightColRef} className="lg:sticky lg:top-24 h-fit">
            <div className="flex items-center gap-2 mb-6" style={{ color: "var(--accent-orange)" }}>
              <span className="w-5 h-5 rounded-full border flex items-center justify-center" style={{ borderColor: "var(--accent-orange)" }}>
                <ArrowUpRight size={12} />
              </span>
              <span className="text-[13px] uppercase tracking-widest font-semibold">Portfolio showcase</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight" style={{ color: "var(--text-dark-blue)" }}>
              <span className="font-serif italic" style={{ fontWeight: 400 }}>Our Creative</span>{" "}
              <span>Work Examples.</span>
            </h2>

            <p className="mt-6 text-[15px] leading-relaxed max-w-sm" style={{ color: "var(--text-gray)" }}>
              Our team is always available to address your concerns.
            </p>

            <button
              type="button"
              className="mt-8 inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 font-bold transition-all duration-300 shadow-lg hover:-translate-y-1 group"
              style={{ background: "var(--text-dark-blue)", color: "#fff" }}
            >
              Explore More
              <span className="w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: "var(--accent-orange)" }}>
                <ArrowUpRight size={16} />
              </span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}