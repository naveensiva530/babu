import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, ChevronDown, X } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const menuItems = ["HOME", "ABOUT", "SERVICES", "PROJECTS", "BLOG"];

  const [darkReady, setDarkReady] = useState(false);
  const [barReady, setBarReady] = useState(false);
  const [contentReady, setContentReady] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const dummyServices = [
    { name: "Social Media Marketing", path: "/services/social-media-marketing" },
    { name: "Performance Marketing", path: "/services/performance-marketing" },
    { name: "Website Development", path: "/services/website-development" },
    { name: "Influencer Marketing", path: "/services/influencer-marketing" },
    { name: "SEO Services", path: "/services/seo-services" },
    { name: "Video Production", path: "/services/video-production" },
    { name: "Branding Solutions", path: "/services/branding-solutions" },
    { name: "Digital Consulting", path: "/services/digital-consulting" },
    { name: "Content Writing", path: "/services/content-writing" },
    { name: "Instagram Marketing", path: "/services/instagram-marketing" },
    { name: "Health Care", path: "/services/health-care" },
    { name: "Real Estate", path: "/services/real-estate" },
    { name: "Education", path: "/services/education" },
    { name: "IT-Tech SAAS", path: "/services/it-tech-saas" },
    { name: "Beauty And Salon", path: "/services/beauty-and-salon" }
  ];

  useEffect(() => {
    // Step 1: Dark section slides in
    const t1 = setTimeout(() => setDarkReady(true), 100);
    // Step 2: White bar slides left → right
    const t2 = setTimeout(() => setBarReady(true), 500);
    // Step 3: Menu content fades in
    const t3 = setTimeout(() => setContentReady(true), 950);

    // Scroll detection for sticky navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Helper to keep menu open during hover gap
  let closeTimeout;
  const handleServicesEnter = () => {
    clearTimeout(closeTimeout);
    setIsServicesOpen(true);
  };
  const handleServicesLeave = () => {
    closeTimeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  // Smooth scroll to a section by id
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <style>{`
        @keyframes darkSlideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes barSlideIn {
          from { transform: translateX(-60px); opacity: 0; width: 0%; }
          to   { transform: translateX(0);     opacity: 1; width: calc(100% - 262px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-menu-item {
          opacity: 0;
        }
        .nav-menu-item.visible {
          animation: fadeUp 0.4s ease forwards;
        }
        .nav-icons {
          opacity: 0;
        }
        .nav-icons.visible {
          animation: fadeUp 0.4s ease 0.3s forwards;
        }
        .nav-logo-text {
          opacity: 0;
        }
        .nav-logo-text.visible {
          animation: fadeUp 0.4s ease 0.2s forwards;
        }
        .nav-logo-img {
          opacity: 0;
        }
        .nav-logo-img.visible {
          animation: fadeUp 0.4s ease 0.1s forwards;
        }
        
        /* Search Popup Specific Styles */
        .search-input-field::placeholder {
          color: #4b5563;
          font-weight: 400;
        }

        /* Services Mega Menu Styles */
        .mega-menu-link {
          position: relative;
          color: #374151;
          font-weight: 600;
          font-size: 16px;
          transition: color 0.3s;
          display: inline-block;
          padding: 8px 0;
        }
        .mega-menu-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: #ff6b35;
          transition: width 0.3s ease;
        }
        .mega-menu-link:hover {
          color: #ff6b35;
        }
        .mega-menu-link:hover::after {
          width: 100%;
        }
      `}</style>

      {/* ── Services Mega Menu Overlay ── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          background: "rgba(0,0,0,0.6)",
          zIndex: 9998, // Below navbar so navbar is still clickable/hoverable
          opacity: isServicesOpen ? 1 : 0,
          pointerEvents: isServicesOpen ? "auto" : "none",
          transition: "opacity 0.6s ease",
        }}
        onClick={() => setIsServicesOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          onMouseEnter={handleServicesEnter}
          onMouseLeave={handleServicesLeave}
          style={{
            width: "100%",
            height: "auto",
            minHeight: "400px",
            background: "#ffffff",
            transform: isServicesOpen ? "translateY(0)" : "translateY(-100%)",
            transition: "transform 0.6s cubic-bezier(0.77, 0, 0.175, 1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            paddingTop: "90px", // Offset for the fixed navbar
            boxSizing: "border-box"
          }}
        >
          <div style={{ width: "100%", maxWidth: "1200px", padding: "40px 20px" }}>
            <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#111827", marginBottom: "30px", borderBottom: "2px solid #f3f4f6", paddingBottom: "10px" }}>
              Our Services
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)", // 3 columns, 5 rows = 15 items
              gap: "24px 40px",
            }}>
              {dummyServices.map((service, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ff6b35" }}></div>
                  <Link 
                    to={service.path} 
                    className="mega-menu-link" 
                    onClick={() => {
                      setIsServicesOpen(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    {service.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Search Popup Overlay ── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          background: "rgba(0,0,0,0.6)",
          zIndex: 100000,
          opacity: isSearchOpen ? 1 : 0,
          pointerEvents: isSearchOpen ? "auto" : "none",
          transition: "opacity 0.6s ease",
        }}
        onClick={() => setIsSearchOpen(false)} // Close when clicking backdrop
      >
        <div
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside white area
          style={{
            width: "100%",
            height: "45vh",
            minHeight: "350px",
            background: "#ffffff",
            transform: isSearchOpen ? "translateY(0)" : "translateY(-100%)",
            transition: "transform 0.6s cubic-bezier(0.77, 0, 0.175, 1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        >
          {/* Top Bar: Logo and Close */}
          <div style={{ width: "100%", padding: "30px 50px", display: "flex", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "45px", height: "45px", background: "#ff6b35", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", padding: "4px" }}>
                <img src={logo} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
              </div>
              <span style={{ fontSize: "24px", fontWeight: "800", color: "#111827", fontFamily: "'Segoe UI', sans-serif" }}>ADS SERV</span>
            </div>

            <X
              size={36}
              color="#374151"
              style={{ cursor: "pointer", transition: "transform 0.3s ease, color 0.3s ease" }}
              onClick={() => setIsSearchOpen(false)}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "rotate(90deg) scale(1.1)"; e.currentTarget.style.color = "#ff6b35"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "rotate(0deg) scale(1)"; e.currentTarget.style.color = "#374151"; }}
            />
          </div>

          {/* Search Input Area */}
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", width: "100%", padding: "0 20px", marginTop: "-40px" }}>
            <div style={{ width: "100%", maxWidth: "900px", position: "relative" }}>
              <input
                type="text"
                className="search-input-field"
                placeholder="Type Words Then Enter"
                style={{
                  width: "100%",
                  border: "none",
                  borderBottom: "1px solid #d1d5db",
                  fontSize: "40px",
                  color: "#111827",
                  padding: "15px 60px 15px 0",
                  outline: "none",
                  background: "transparent",
                  fontFamily: "'Segoe UI', sans-serif",
                  transition: "border-color 0.3s"
                }}
                onFocus={(e) => e.target.style.borderBottom = "1px solid #ff6b35"}
                onBlur={(e) => e.target.style.borderBottom = "1px solid #d1d5db"}
              />
              <Search
                size={32}
                color="#ff6b35"
                style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer", transition: "transform 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-50%) scale(1.1)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(-50%) scale(1)"}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Scrolled Full-Width Navbar ── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "90px",
          background: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          transform: isScrolled ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
          boxSizing: "border-box"
        }}
      >
        {/* Scrolled Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}>
          {/* Removed orange box and invert filter so the logo is clearly visible */}
          <img src={logo} alt="Logo" style={{ width: "45px", height: "45px", objectFit: "contain" }} />
          <span style={{
            fontSize: "24px",
            fontWeight: "900",
            letterSpacing: "1px",
            background: "linear-gradient(90deg, #7c3aed, #ff6b35)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontFamily: "'Segoe UI', sans-serif"
          }}>
            ADS SERV
          </span>
        </div>

        {/* Scrolled Menu Items */}
        <ul style={{ display: "flex", alignItems: "center", gap: "38px", listStyle: "none", margin: 0, padding: 0 }}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={item === "SERVICES" ? handleServicesEnter : undefined}
              onMouseLeave={item === "SERVICES" ? handleServicesLeave : undefined}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "15px",
                fontWeight: item === "HOME" ? "700" : "600",
                color: item === "HOME" ? "#7c3aed" : "#374151",
                cursor: "pointer",
                position: "relative",
                paddingBottom: "6px",
                transition: "color 0.3s ease"
              }}
            >
              {item === "HOME" ? (
                <Link to="/" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>
                  {item}
                </Link>
              ) : item === "ABOUT" ? (
                <Link to="/about" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
              ) : item === "PROJECTS" ? (
                <Link to="/projects" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
              ) : item === "BLOG" ? (
                <Link to="/blog" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
              ) : (
                <>{item}</>
              )}
              {(item === "SERVICES" || item === "PAGES") && (
                <ChevronDown
                  size={13}
                  color={item === "HOME" ? "#7c3aed" : "#374151"}
                  style={{
                    transform: item === "SERVICES" && isServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s"
                  }}
                />
              )}
              {item === "HOME" && (
                <span style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "2px", background: "#7c3aed", borderRadius: "10px" }} />
              )}
            </li>
          ))}
        </ul>

        {/* Scrolled Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px", borderLeft: "1px solid #d1d5db", paddingLeft: "24px" }}>
          <Search
            size={20}
            color="#111827"
            style={{ cursor: "pointer", transition: "color 0.2s" }}
            onClick={() => setIsSearchOpen(true)}
            onMouseEnter={(e) => e.currentTarget.style.color = "#ff6b35"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#111827"}
          />
          <User
            size={20}
            color="#111827"
            style={{ cursor: "pointer", transition: "color 0.2s" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#ff6b35"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#111827"}
          />
        </div>
      </div>

      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "90px",
          background: "transparent",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* ── Dark Logo Section ── */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "320px",
            background: "#070716",
            clipPath: "polygon(0 0, 82% 0, 100% 100%, 0 100%)",
            display: "flex",
            alignItems: "center",
            paddingLeft: "28px",
            zIndex: 10001,
            boxSizing: "border-box",
            animation: darkReady ? "darkSlideIn 0.5s cubic-bezier(0.22,1,0.36,1) forwards" : "none",
            opacity: darkReady ? undefined : 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              cursor: "pointer",
            }}
          >
            {/* Logo white box */}
            <div
              className={`nav-logo-img${darkReady ? " visible" : ""}`}
              style={{
                width: "62px",
                height: "62px",
                borderRadius: "10px",
                background: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                padding: "4px",
                boxSizing: "border-box",
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            <span
              className={`nav-logo-text${darkReady ? " visible" : ""}`}
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#ffffff",
                letterSpacing: "1px",
                whiteSpace: "nowrap",
                fontFamily: "'Segoe UI', sans-serif",
              }}
            >
              ADS SERV
            </span>
          </div>
        </div>

        {/* ── White Navbar Bar ── */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "250px",
            right: "12px",
            height: "66px",
            background: "#ffffff",
            borderRadius: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 32px 0 70px",
            boxSizing: "border-box",
            zIndex: 10000,
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            animation: barReady
              ? "barSlideIn 0.55s cubic-bezier(0.22,1,0.36,1) forwards"
              : "none",
            opacity: barReady ? undefined : 0,
            overflow: "hidden", // This must be visible if we need dropdowns to escape the bar. BUT the mega menu overlay is outside the bar, so it's fine.
          }}
        >
          {/* Menu Items */}
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "38px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`nav-menu-item${contentReady ? " visible" : ""}`}
                onMouseEnter={item === "SERVICES" ? handleServicesEnter : undefined}
                onMouseLeave={item === "SERVICES" ? handleServicesLeave : undefined}
                style={{
                  animationDelay: contentReady ? `${index * 0.07}s` : "0s",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "15px",
                  fontWeight: item === "HOME" ? "700" : "500",
                  color: item === "HOME" ? "#7c3aed" : "#374151",
                  cursor: "pointer",
                  position: "relative",
                  paddingBottom: "6px",
                }}
              >
                {item === "HOME" ? (
                  <Link to="/" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>
                    {item}
                  </Link>
                ) : item === "ABOUT" ? (
                  <Link to="/about" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                ) : item === "PROJECTS" ? (
                  <Link to="/projects" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                ) : item === "BLOG" ? (
                  <Link to="/blog" onClick={() => window.scrollTo(0, 0)} style={{ color: "inherit", textDecoration: "none" }}>{item}</Link>
                ) : (
                  <>{item}</>
                )}
                {(item === "SERVICES" || item === "PAGES") && ( // Add chevron to SERVICES if it has a dropdown
                  <ChevronDown
                    size={13}
                    color={item === "HOME" ? "#7c3aed" : "#374151"}
                    style={{
                      transform: item === "SERVICES" && isServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s"
                    }}
                  />
                )}
                {item === "HOME" && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "2px",
                      background: "#7c3aed",
                      borderRadius: "10px",
                    }}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Right Icons */}
          <div
            className={`nav-icons${contentReady ? " visible" : ""}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              borderLeft: "1px solid #d1d5db",
              paddingLeft: "24px",
            }}
          >
            <Search
              size={20}
              color="#111827"
              style={{ cursor: "pointer", transition: "color 0.2s" }}
              onClick={() => setIsSearchOpen(true)}
              onMouseEnter={(e) => e.currentTarget.style.color = "#ff6b35"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#111827"}
            />
            <User
              size={20}
              color="#111827"
              style={{ cursor: "pointer", transition: "color 0.2s" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#ff6b35"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#111827"}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;