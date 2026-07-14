import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import client1 from '../../../assets/clients/client1.webp';
import client2 from '../../../assets/clients/client2.webp';
import client3 from '../../../assets/clients/client3.webp';
import client4 from '../../../assets/clients/client4.webp';
import client5 from '../../../assets/clients/client5.webp';
import client6 from '../../../assets/clients/client6.webp';
import client7 from '../../../assets/clients/client7.webp';
import client8 from '../../../assets/clients/client8.webp';
import client9 from '../../../assets/clients/client9.webp';
import client10 from '../../../assets/clients/client10.webp';
import client11 from '../../../assets/clients/client11.webp';
import client12 from '../../../assets/clients/client12.webp';
import client13 from '../../../assets/clients/client13.webp';
import client14 from '../../../assets/clients/client14.webp';
import client15 from '../../../assets/clients/client15.webp';
import client16 from '../../../assets/clients/client16.webp';
import client17 from '../../../assets/clients/client17.webp';
import client18 from '../../../assets/clients/client18.webp';
import client19 from '../../../assets/clients/client19.webp';
import '../common.css';

/* ─── Client Images ─────────────────────────────────────── */
const clientImages = [
  client1, client2, client3, client4, client5,
  client6, client7, client8, client9, client10,
  client11, client12, client13, client14, client15,
  client16, client17, client18, client19
];

/* ─── Infinite Scroll Track ─────────────────────────────────── */
const LogoTrack = () => {
  const items = [...clientImages, ...clientImages]; // duplicate for seamless loop

  return (
    <div className="client-overflow-wrapper">
      <div className="client-fade-left" />
      <div className="client-fade-right" />
      <div className="client-scroll-track">
        {items.map((img, i) => (
          <div key={i} className="client-logo-card">
            <img src={img} alt={`Client ${i + 1}`} className="client-logo-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─── Main Component ─────────────────────────────────────────── */
const Client = () => (
  <section className="client-section">
    <div className="client-inner">

      {/* LEFT: Heading */}
      <div className="client-heading-block">
        <p className="client-heading-text">
          Trusted By<br />Top Companies
        </p>
        <span className="client-heading-arrow">
          <ArrowUpRight size={14} strokeWidth={2.5} />
        </span>
        {/* Divider */}
        <div className="client-divider" />
      </div>

      {/* RIGHT: Scrolling Logos */}
      <div className="client-logos-area">
        <LogoTrack />
      </div>

    </div>

    <style>{`
      /* ── Section Wrapper ── */
      .client-section {
        width: 100%;
        padding: 52px 54px 10px;
        background: #fff;
        font-family: var(--font-primary, 'Inter', sans-serif);
      }

      /* ── Inner Banner Card ── */
      .client-inner {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 24px;
        display: flex;
        align-items: center;
        gap: 0;
        border: 1.5px solid #e8e8ee;
        border-radius: 20px;
        background: #fff;
        box-shadow: 0 4px 24px -6px rgba(0,0,0,0.06);
        overflow: hidden;
        min-height: 90px;
      }

      /* ── Left Heading Block ── */
      .client-heading-block {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;
        padding: 20px 28px 20px 24px;
        position: relative;
      }

      .client-heading-text {
        font-size: 14px;
        font-weight: 800;
        line-height: 1.35;
        color: #1a233a;
        white-space: nowrap;
        margin: 0;
      }

      .client-heading-arrow {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: #f97316;
        color: #fff;
        flex-shrink: 0;
        margin-bottom: auto;
        margin-top: 2px;
      }

      /* Vertical Divider */
      .client-divider {
        position: absolute;
        right: 0;
        top: 16px;
        bottom: 16px;
        width: 1.5px;
        background: #e8e8ee;
        border-radius: 2px;
      }

      /* ── Logos Area ── */
      .client-logos-area {
        flex: 1;
        min-width: 0;
        overflow: hidden;
      }

      /* ── Overflow Container with Fade Edges ── */
      .client-overflow-wrapper {
        position: relative;
        width: 100%;
        overflow: hidden;
      }

      .client-fade-left {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 60px;
        background: linear-gradient(to right, #fff 0%, transparent 100%);
        z-index: 2;
        pointer-events: none;
      }

      .client-fade-right {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 60px;
        background: linear-gradient(to left, #fff 0%, transparent 100%);
        z-index: 2;
        pointer-events: none;
      }

      /* ── Scrolling Track ── */
      .client-scroll-track {
        display: flex;
        align-items: center;
        gap: 6px;
        width: max-content;
        padding: 14px 12px;
        animation: clientScrollLeft 30s linear infinite;
      }

      .client-scroll-track:hover {
        animation-play-state: paused;
      }

      /* ── Individual Logo Card ── */
      .client-logo-card {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 150px;
        height: 85px;
        padding: 10px 25px;
        transition: transform 0.25s ease, box-shadow 0.25s ease;
        cursor: pointer;
        flex-shrink: 0;
      }

      .client-logo-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 20px -6px rgba(0,0,0,0.12);
      }

      .client-logo-img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        width: 100%;
        height: 100%;
      }

      /* ── Keyframe ── */
      @keyframes clientScrollLeft {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      @media (prefers-reduced-motion: reduce) {
        .client-scroll-track {
          animation: none !important;
        }
      }
    `}</style>
  </section>
);

export default Client;