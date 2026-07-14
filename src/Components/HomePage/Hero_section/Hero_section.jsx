import React, { useEffect, useRef } from "react";
import Navbar from "../../Navbar/Navbar";
import personImg from "../../../assets/Hero_image-removebg-preview.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FlowButton } from "../../../components/ui/FlowButton";
import "../common.css";

gsap.registerPlugin(ScrollTrigger);



const Hero_section = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const reviewRef = useRef(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance animation timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Hero image - scales in from below with fade
      tl.fromTo(imageRef.current,
        { opacity: 0, x: 100, scale: 0.8 },
        { opacity: 1, x: 0, scale: 1, duration: 1.2, delay: 0.2 }
      );

      // Title - slide up with stagger for words
      tl.fromTo(titleRef.current.querySelectorAll(".title-word"),
        { opacity: 0, y: 40, rotateX: -30 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.15 },
        "-=0.8"
      );

      // Subtitle - fade in
      tl.fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      );

      // Button - scale in with bounce
      tl.fromTo(buttonRef.current,
        { opacity: 0, scale: 0, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.3"
      );

      // Floating animation for image (continuous)
    

      // Subtle floating for title elements
      gsap.to(".doodle-burst", {
        rotation: 15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Sparkle rotation
      gsap.to(".doodle-sparkle", {
        scale: 1.2,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Subtle parallax effect for image on scroll (only when hero is in view)
      gsap.to(imageRef.current, {
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);


  return (
    <>
      <style>{`
        .hero-section {
          font-family: var(--font-primary);
          color: var(--text-dark);
          background: var(--bg-light-purple);
          min-height: 640px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 110px 20px 0px;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        .background-doodle-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          opacity: 0.2;
          pointer-events: none;
        }

        .hero-content {
          text-align: center;
          z-index: 10;
          max-width: 800px;
          margin-right: 240px;
          position: relative;
        }

        .headline-container {
          position: relative;
          display: inline-block;
          margin-bottom: 20px;
        }

        .doodle-burst {
          position: absolute;
          left: -40px;
          top: -25px;
          width: 35px;
          height: 35px;
        }

        .doodle-sparkle {
          position: absolute;
          right: -45px;
          top: 30%;
          width: 28px;
          height: 28px;
          animation: spinSlow 6s linear infinite;
        }

        .main-title {
          font-size: 68px;
          font-weight: 800;
          margin: 0;
          line-height: 1.15;
        }

        .title-word {
          display: inline-block;
        }

        .yellow-pill {
          background-color: var(--accent-yellow);
          color: var(--text-dark);
          padding: 8px 30px;
          border-radius: 50px;
          display: inline-block;
          margin-right: 15px;
        }

        .subtitle {
          font-size: 20px;
          color: var(--text-secondary);
          margin-top: 16px;
          margin-bottom: 35px;
        }

        .button-container {
          position: relative;
          display: inline-block;
        }

        .dashed-line {
          position: absolute;
          left: -50px;
          bottom: -40px;
          width: 60px;
          height: 50px;
          color: #888888;
        }

        .get-started-button {
          background-color: var(--text-dark);
          color: #ffffff;
          font-size: 18px;
          font-weight: 600;
          padding: 15px 35px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }

        .get-started-button:hover {
          background-color: var(--text-secondary);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .get-started-button:active {
          transform: translateY(0px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        .hero-image {
          position: absolute;
          right: 0;
          bottom: -20px;
          height: 90%;
          z-index: 5;
          object-fit: contain;
          pointer-events: none;
        }

       

       

        
       

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @media (max-width: 900px) {
          .main-title { font-size: 45px; }
          .hero-content { margin-right: 150px; }
          .hero-image { height: 65%; opacity: 0.9; }
        }

        @media (max-width: 600px) {
          .hero-section {
            margin: 15px;
            border-radius: 30px;
            min-height: 850px;
            padding: 100px 20px 0px;
          }
          .hero-content { margin-right: 0; margin-top: 20px; }
          .main-title { font-size: 38px; }
          .yellow-pill { padding: 6px 18px; margin-right: 0; margin-bottom: 10px; }
          .subtitle { font-size: 17px; }
          .doodle-burst, .doodle-sparkle, .dashed-line { display: none; }
          .hero-image { height: 45%; right: -20px; bottom: -10px; }
        }
      `}</style>

      <Navbar />

      <section className="hero-section" ref={heroRef}>
        <svg
          className="background-doodle-svg"
          viewBox="0 0 1000 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 150,150 Q 300,100 450,250 T 750,150 T 950,300"
            stroke="#059669"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 100,200 Q 280,350 480,150 T 800,250"
            stroke="#059669"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        <img src={personImg} alt="person" className="hero-image" ref={imageRef} />

        <div className="hero-content">
          <div className="headline-container" ref={titleRef}>
            <svg className="doodle-burst" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 28L6 31" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M15 16L9 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M26 13L24 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>

            <svg className="doodle-sparkle" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
            </svg>

            <h1 className="main-title">
              <span className="title-word"><span className="yellow-pill">Digital</span></span>
              <span className="title-word">marketing</span>
              <br />
              <span className="title-word">agency</span>
            </h1>
          </div>

          <p className="subtitle" ref={subtitleRef}>Improve your business in digital.</p>

          <div className="button-container" ref={buttonRef}>
            <svg className="dashed-line" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="80" y1="10" x2="10" y2="70" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" />
            </svg>
            <FlowButton text="Get started" />
          </div>
        </div>





      </section>
    </>
  );
};

export default Hero_section;