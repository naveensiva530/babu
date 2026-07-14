import React, { useState } from 'react';
import faqimg from '../../../assets/j.png';

const faqs = [
  {
    id: 1,
    question: "What Is Business Consulting?",
    answer: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the"
  },
  {
    id: 2,
    question: "What Do Business Consultants Do?",
    answer: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the"
  },
  {
    id: 3,
    question: "Why Do Companies Hire Business Consultants?",
    answer: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the"
  },
  {
    id: 4,
    question: "Do You Support Sustainability Initiatives?",
    answer: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the"
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState(4); // Default open 4th item, as in the new image

  return (
    <div className="flex flex-col w-full">
      {/* FAQ Section */}
      <section className="w-full bg-white pt-24 font-sans overflow-hidden z-10 relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16 lg:items-end">

          {/* Left Side: Content & Accordion */}
          <div className="w-full lg:w-1/2 flex flex-col z-10 pb-16 lg:pb-24">

            {/* Header */}
            <div className="mb-10">
              <div className="text-[#ff5b2e] text-[13px] font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
                FAQ
              </div>
              <h2 className="text-4xl md:text-[46px] font-extrabold text-[#111827] leading-[1.15] tracking-tight">
                Frequently Asked <br className="hidden md:block" /> Questions?
              </h2>
            </div>

            {/* Accordion List */}
            <div className="flex flex-col gap-4">
              {faqs.map(faq => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`w-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-300 border border-transparent ${isOpen ? 'py-6 rounded-[32px] shadow-[0_15px_40px_rgb(0,0,0,0.06)]' : 'py-4 rounded-full'} px-6 cursor-pointer`}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                  >
                    <div className="flex items-center gap-5">
                      {/* Icon Circle */}
                      <div className={`w-[34px] h-[34px] flex-shrink-0 rounded-full flex items-center justify-center text-white font-medium text-[22px] transition-colors duration-300 ${isOpen ? 'bg-[#ff5b2e]' : 'bg-[#111827]'}`}>
                        <span className="leading-none mt-[-2px]">{isOpen ? '-' : '+'}</span>
                      </div>
                      {/* Question Text */}
                      <h3 className={`font-bold text-[16px] transition-colors duration-300 ${isOpen ? 'text-[#ff5b2e]' : 'text-[#111827]'}`}>
                        {faq.question}
                      </h3>
                    </div>

                    {/* Answer Text */}
                    {isOpen && (
                      <div className="mt-4 pl-[54px] pr-2 animate-fade-in">
                        <p className="text-gray-500 text-[13px] leading-[1.8] font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Side: Image Placeholder */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[550px] flex items-end justify-center mt-10 lg:mt-0">

            {/* Decorative background elements */}
            <div className="absolute top-[10%] left-[10%] text-[#ff5b2e] opacity-80 z-0 hidden lg:block">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </div>

            <div className="absolute right-[10%] top-[20%] text-gray-400 opacity-60 z-0 hidden lg:block">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>

            {/* User's Right Side Image */}
            <div className="relative z-10 w-full flex items-end justify-center pt-8">
              <img
                src={faqimg}
                alt="FAQ Illustration"
                className="w-full h-auto max-w-full object-contain -mb-[1px] transform scale-[1.15] md:scale-[1.25] lg:scale-[1.35] origin-bottom"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-[#ddd0f5] relative font-sans pt-24 pb-48 md:pb-56 z-0">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-16 justify-between items-center relative z-10">

          {/* Left Side */}
          <div className="flex flex-col">
            <div className="text-[#000000] text-[11px] font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
              NUMBERS DON'T LIE
            </div>
            <h2 className=" text-[40px] md:text-[52px] font-extrabold text-white leading-[1.15] tracking-tight">
              They Reveal the <br />
              True Power of a <br />
              Company
            </h2>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-5 w-full md:w-auto">

            {/* Pill 1 */}
            <div className="flex items-center bg-[#1f2937] border border-gray-700 hover:border-gray-500 transition-colors duration-300 rounded-full p-2 pr-8 md:pr-12 w-full md:w-[460px]">
              <div className="w-[56px] h-[56px] rounded-full bg-white flex items-center justify-center flex-shrink-0 text-[#111827]">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" />
                </svg>
              </div>
              <div className="flex-1 flex justify-between items-center ml-6">
                <span className="text-white text-[32px] font-bold">230k</span>
                <span className="text-gray-400 text-[14px] font-medium text-right w-[140px]">Completed Projects</span>
              </div>
            </div>

            {/* Pill 2 */}
            <div className="flex items-center bg-[#1f2937] border border-gray-700 hover:border-gray-500 transition-colors duration-300 rounded-full p-2 pr-8 md:pr-12 w-full md:w-[460px]">
              <div className="w-[56px] h-[56px] rounded-full bg-white flex items-center justify-center flex-shrink-0 text-[#111827]">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1 21H5V9H1V21ZM22 10C22 8.9 21.1 8 20 8H13.68L14.64 3.43C14.66 3.32 14.68 3.2 14.68 3.09C14.68 2.68 14.51 2.3 14.24 2.03L13.18 1L7.59 6.59C7.22 6.95 7 7.45 7 8V19C7 20.1 7.9 21 9 21H18C18.83 21 19.54 20.5 19.84 19.78L22.86 12.73C22.95 12.5 23 12.26 23 12V10H22Z" />
                  <circle cx="18" cy="4" r="2" fill="currentColor" />
                  <circle cx="22" cy="6" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <div className="flex-1 flex justify-between items-center ml-6">
                <span className="text-white text-[32px] font-bold">100%</span>
                <span className="text-gray-400 text-[14px] font-medium text-right w-[140px]">Satisfied customers</span>
              </div>
            </div>

            {/* Pill 3 */}
            <div className="flex items-center bg-[#1f2937] border border-gray-700 hover:border-gray-500 transition-colors duration-300 rounded-full p-2 pr-8 md:pr-12 w-full md:w-[460px]">
              <div className="w-[56px] h-[56px] rounded-full bg-white flex items-center justify-center flex-shrink-0 text-[#111827]">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" />
                </svg>
              </div>
              <div className="flex-1 flex justify-between items-center ml-6">
                <span className="text-white text-[32px] font-bold">960k</span>
                <span className="text-gray-400 text-[14px] font-medium text-right w-[140px]">Seo & impressions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Zig-Zag Orange Line */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block relative -bottom-[1px]">
            <path d="M0,20 L240,100 L480,20 L720,100 L960,20 L1200,100 L1440,20 L1440,120 L0,120 Z" fill="#ffffff" />
            <path d="M0,20 L240,100 L480,20 L720,100 L960,20 L1200,100 L1440,20" fill="none" stroke="#ff5b2e" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}} />
    </div>
  );
}
