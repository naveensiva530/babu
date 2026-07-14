import React from 'react';
import imgPlaceholder from '../../../assets/j.png';
import { ArrowRight } from 'lucide-react';

export default function Email() {
  return (
    <section className="w-full bg-white py-24 md:py-32 font-sans flex flex-col items-center justify-center text-center px-4 overflow-hidden relative">

      {/* Subtle bg accent */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(30,47,87,0.04) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(224,131,38,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center relative z-10">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-[3px] rounded-full" style={{ background: '#e08326' }}></div>
          <span className="text-xs font-bold tracking-[5px] uppercase" style={{ color: '#e08326' }}>CONTACT US</span>
          <div className="w-8 h-[3px] rounded-full" style={{ background: '#e08326' }}></div>
        </div>

        {/* Big headline with pill image */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 leading-none tracking-tighter mb-2">
          <span className="text-[52px] md:text-[88px] font-extrabold" style={{ color: '#1e2f57' }}>Let's Chat</span>
          <div className="w-36 md:w-56 h-16 md:h-24 rounded-full overflow-hidden inline-flex relative shadow-xl" style={{ border: '4px solid #e08326' }}>
            <img src={imgPlaceholder} alt="Chat with us" className="w-full h-full object-cover" />
          </div>
          <span className="text-[52px] md:text-[88px] font-extrabold" style={{ color: '#1e2f57' }}>with us.</span>
        </div>

        <div className="text-[52px] md:text-[88px] font-extrabold tracking-tighter mb-4" style={{ color: '#e08326' }}>
          Digital agency
        </div>

        <p className="text-[15px] max-w-lg mb-12 leading-relaxed" style={{ color: 'rgba(30,47,87,0.6)' }}>
          Ready to take your digital presence to the next level? Drop your email and let's start a conversation.
        </p>

        {/* Subscribe form */}
        <div className="w-full max-w-[600px] flex items-stretch shadow-2xl overflow-hidden" style={{ borderRadius: 16, border: '1px solid rgba(30,47,87,0.1)' }}>
          <div className="flex items-center gap-3 flex-1 px-6 bg-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1e2f57" strokeWidth="2" strokeOpacity="0.4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 bg-transparent outline-none font-medium text-[14px] py-5"
              style={{ color: '#1e2f57' }}
            />
          </div>
          <button className="flex items-center gap-3 font-bold uppercase tracking-wider text-[13px] px-8 py-5 transition-all duration-300 hover:opacity-90 flex-shrink-0"
            style={{ background: '#1e2f57', color: '#fff' }}
            onMouseEnter={e => e.currentTarget.style.background = '#e08326'}
            onMouseLeave={e => e.currentTarget.style.background = '#1e2f57'}>
            Subscribe
            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </button>
        </div>

        <p className="mt-4 text-[11px] tracking-wide" style={{ color: 'rgba(30,47,87,0.4)' }}>
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
