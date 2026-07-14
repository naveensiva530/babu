import React from "react";
import personImg from "../../../assets/g.png";
import { Mail, Phone, ArrowRight, ArrowUp, ChevronRight } from "lucide-react";
import "../common.css";

/* ── Social icon SVGs ─────────────────────────────────────── */
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socialLinks = [
  { icon: <FacebookIcon />, href: "#" },
  { icon: <TwitterIcon />,  href: "#" },
  { icon: <YoutubeIcon />,  href: "#" },
  { icon: <LinkedinIcon />, href: "#" },
];

const quickLinks = [
  "About Us", "Our Services", "Our Blogs", "FAQ'S", "Contact Us",
];

export default function Footer() {
  return (
    <footer className="relative mt-32" style={{ fontFamily: "var(--font-primary)" }}>

      {/* ── CTA BANNER (pops above footer) ─────────────────────────── */}
      <div className="absolute left-0 right-0 -top-24 z-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div
          className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-8 md:py-0 min-h-[160px] shadow-2xl rounded-2xl md:rounded-[2rem]"
          style={{ background: "var(--text-dark-blue)" }}
        >
          {/* Decorative blobs — clipped separately so they don't affect the image */}
          <div className="absolute inset-0 pointer-events-none z-0 rounded-2xl md:rounded-[2rem] overflow-hidden">
            <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full blur-3xl" style={{ background: "rgba(224,131,38,0.2)" }} />
            <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full blur-3xl" style={{ background: "rgba(221,208,245,0.08)" }} />
            {/* dot pattern */}
            <div className="absolute left-10 top-10 opacity-20">
              <svg width="60" height="60" viewBox="0 0 60 60">
                {[4,20,36,52].flatMap(x => [4,20,36,52].map(y => (
                  <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" fill="white" />
                )))}
              </svg>
            </div>
          </div>

          {/* Person image */}
          <div className="hidden md:block w-1/4 h-full relative z-10">
            <img
              src={personImg}
              alt="Person with laptop"
              className="absolute bottom-0 left-0 h-[220px] w-auto object-contain"
            />
          </div>

          {/* Heading */}
          <div className="text-center md:text-left z-10 md:w-1/2 flex justify-center md:justify-start">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-sm text-white">
              Stay Connected With{" "}
              <span style={{ color: "var(--accent-orange)" }}>Cutting Edge</span> IT
            </h2>
          </div>

          {/* CTA Button */}
          <div className="mt-6 md:mt-0 z-10 md:w-1/4 flex justify-center md:justify-end">
            <button
              className="font-bold text-sm px-6 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ background: "var(--accent-orange)", color: "#fff" }}
            >
              TALK TO A SPECIALIST
              <div
                className="p-1.5 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                <ArrowRight className="w-4 h-4" strokeWidth={3} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER ─────────────────────────────────────────────── */}
      <div
        className="pt-44 pb-16 px-4 md:px-8 relative"
        style={{ background: "var(--text-dark-blue)", color: "#fff" }}
      >
        {/* Subtle background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full blur-3xl opacity-5" style={{ background: "var(--accent-orange)" }} />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 relative z-10">

          {/* ── Col 1: Brand ── */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex flex-wrap w-9 h-9 items-center justify-center gap-[3px]">
                <div className="w-3.5 h-3.5 rounded-full" style={{ background: "var(--accent-orange)" }} />
                <div className="w-3.5 h-3.5 rounded-full border-2" style={{ borderColor: "var(--accent-orange)" }} />
                <div className="w-3.5 h-3.5 rounded-full border-2" style={{ borderColor: "rgba(255,255,255,0.4)" }} />
                <div className="w-3.5 h-3.5 rounded-full bg-white" />
              </div>
              <span className="text-2xl font-extrabold tracking-wide text-white">ADS SERV</span>
            </div>

            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
              We help brands grow through smart digital marketing, creative content, and data-driven strategies.
            </p>

            {/* Divider */}
            <div className="w-12 h-0.5 rounded-full" style={{ background: "var(--accent-orange)" }} />

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "var(--accent-orange)";
                    e.currentTarget.style.borderColor = "var(--accent-orange)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <h3 className="text-base font-bold mb-2 text-white">Quick Links</h3>
            <div className="w-8 h-0.5 mb-6 rounded-full" style={{ background: "var(--accent-orange)" }} />
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm transition-all duration-200 group"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--accent-orange)"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.55)"}
                  >
                    <ChevronRight
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: "var(--accent-orange)" }}
                    />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Recent Posts ── */}
          <div>
            <h3 className="text-base font-bold mb-2 text-white">Recent Posts</h3>
            <div className="w-8 h-0.5 mb-6 rounded-full" style={{ background: "var(--accent-orange)" }} />
            <div className="flex flex-col gap-5">
              {[
                {
                  img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=200&q=80",
                  date: "20 Feb, 2024",
                  title: "Top 5 Most Famous Technology Trend In 2024",
                },
                {
                  img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
                  date: "15 Dec, 2024",
                  title: "The Surfing Man Will Blow Your Mind",
                },
              ].map((post) => (
                <div key={post.title} className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0" style={{ border: "2px solid rgba(255,255,255,0.1)" }}>
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <p className="text-[11px] flex items-center gap-1.5 mb-1.5" style={{ color: "var(--accent-orange)" }}>
                      <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "var(--accent-orange)" }} />
                      {post.date}
                    </p>
                    <h4
                      className="text-sm font-semibold leading-snug transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.85)" }}
                      onMouseEnter={e => e.currentTarget.style.color = "var(--accent-orange)"}
                      onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.85)"}
                    >
                      {post.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Col 4: Contact + Newsletter ── */}
          <div>
            <h3 className="text-base font-bold mb-2 text-white">Contact Us</h3>
            <div className="w-8 h-0.5 mb-6 rounded-full" style={{ background: "var(--accent-orange)" }} />

            <div className="flex flex-col gap-3 text-sm mb-8">
              <a
                href="mailto:info@example.com"
                className="flex items-center gap-3 transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.55)" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--accent-orange)"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.55)"}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(224,131,38,0.15)" }}>
                  <Mail className="w-4 h-4" style={{ color: "var(--accent-orange)" }} />
                </div>
                info@example.com
              </a>
              <a
                href="tel:+2086660112"
                className="flex items-center gap-3 transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.55)" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--accent-orange)"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.55)"}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(224,131,38,0.15)" }}>
                  <Phone className="w-4 h-4" style={{ color: "var(--accent-orange)" }} />
                </div>
                +208-666-0112
              </a>
            </div>

            {/* Newsletter */}
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              Newsletter
            </p>
            <form className="flex flex-col gap-3" onSubmit={e => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full text-sm rounded-xl py-3 px-4 outline-none pr-14"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#fff",
                  }}
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 rounded-lg px-3 flex items-center justify-center transition-all duration-300 hover:scale-105"
                  style={{ background: "var(--accent-orange)", color: "#fff" }}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-0.5"
                  style={{ accentColor: "var(--accent-orange)" }}
                  required
                />
                <label htmlFor="privacy" className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                  I agree to the{" "}
                  <a href="#" className="underline" style={{ color: "var(--accent-orange)" }}>
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>
            </form>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="max-w-7xl mx-auto mt-14 mb-0" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />
      </div>

      {/* ── BOTTOM STRIP ────────────────────────────────────────────── */}
      <div className="relative" style={{ background: "var(--accent-orange)" }}>
        {/* Back to top */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg group"
            style={{ background: "var(--text-dark-blue)", border: "2px solid var(--accent-orange)", color: "#fff" }}
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

        <div
          className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between text-sm"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          <p className="font-medium">© All Copyright 2024 by <span className="font-bold">ADS SERV</span></p>
          <div className="flex items-center gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:underline transition-all" style={{ color: "rgba(255,255,255,0.9)" }}>Terms &amp; Condition</a>
            <a href="#" className="hover:underline transition-all" style={{ color: "rgba(255,255,255,0.9)" }}>Privacy Policy</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
