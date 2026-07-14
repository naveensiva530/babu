import { ArrowUpRight } from "lucide-react";
import "../common.css";

/**
 * ProjectSection
 * -------------------------------------------------
 * Left  : 5 cards that STACK on top of each other while scrolling
 *         (rummy-card style — each new card slides in and covers
 *         part of the previous one, like a deck being laid down).
 * Right : Heading + description + CTA, stays FIXED (sticky) while
 *         the left side scrolls past it.
 *
 * Requires: TailwindCSS + lucide-react (npm i lucide-react)
 * -------------------------------------------------
 */

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
      className="sticky"
      style={{
        top: `${96 + index * 16}px`, // each card sticks a bit lower -> stack look
        zIndex: index + 1,
      }}
    >
      <div className="bg-neutral-100 rounded-3xl p-3 md:p-4 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.15)] border border-black/5">
        <div className="grid grid-cols-1 sm:grid-cols-[1.1fr_1fr] gap-4 sm:gap-6 items-center">
          {/* image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* content */}
          <div className="py-2 sm:py-4 pr-2 sm:pr-4">
            <span className="text-orange-600 text-sm font-medium tracking-wide">
              [{project.year}]
            </span>
            <h3 className="mt-3 text-xl sm:text-2xl font-semibold text-neutral-900 leading-snug">
              {project.title}
            </h3>

            <button
              type="button"
              aria-label="View project"
              className="mt-6 w-11 h-11 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-orange-600 transition-colors"
            >
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Blog() {
  return (
    <section
      className="bg-white py-20 md:py-28"
      style={{ fontFamily: "var(--font-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* ── HEADING — same format as Services / Testimonial ── */}
        <div className="text-center mb-16">

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

        {/* ── ORIGINAL TWO-COLUMN LAYOUT (unchanged) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT — stacking cards */}
          <div className="flex flex-col gap-6">
            {projects.map((project, index) => (
              <StackCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* RIGHT — sticky/fixed content (original) */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="flex items-center gap-2 text-orange-600 mb-6">
              <span className="w-5 h-5 rounded-full border border-orange-600 flex items-center justify-center">
                <ArrowUpRight size={12} />
              </span>
              <span className="italic text-sm">Portfolio showcase</span>
            </div>

            <h2 className="text-4xl md:text-5xl leading-tight text-neutral-900">
              <span className="italic font-serif">Our Creative</span>{" "}
              <span className="font-semibold">Work Examples.</span>
            </h2>

            <p className="mt-6 text-neutral-500 max-w-sm">
              Our team is always available to address your concerns.
            </p>

            <button
              type="button"
              className="mt-8 inline-flex items-center gap-3 bg-neutral-900 text-white rounded-full pl-6 pr-2 py-2 font-medium hover:bg-neutral-800 transition-colors"
            >
              Explore More
              <span className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center">
                <ArrowUpRight size={16} />
              </span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}