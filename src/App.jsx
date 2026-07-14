import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

// Import core pages
import AboutPage from "./Components/Pages/AboutPage";
import ProjectsPage from "./Components/Pages/ProjectsPage";
import BlogPage from "./Components/Pages/BlogPage";

// Import all 15 services
import SocialMediaMarketing from "./Components/Services_Provide/SocialMediaMarketing";
import PerformanceMarketing from "./Components/Services_Provide/PerformanceMarketing";
import WebsiteDevelopment from "./Components/Services_Provide/WebsiteDevelopment";
import InfluencerMarketing from "./Components/Services_Provide/InfluencerMarketing";
import SEOServices from "./Components/Services_Provide/SEOServices";
import VideoProduction from "./Components/Services_Provide/VideoProduction";
import BrandingSolutions from "./Components/Services_Provide/BrandingSolutions";
import DigitalConsulting from "./Components/Services_Provide/DigitalConsulting";
import ContentWriting from "./Components/Services_Provide/ContentWriting";
import InstagramMarketing from "./Components/Services_Provide/InstagramMarketing";
import HealthCare from "./Components/Services_Provide/HealthCare";
import RealEstate from "./Components/Services_Provide/RealEstate";
import Education from "./Components/Services_Provide/Education";
import ITTechSAAS from "./Components/Services_Provide/ITTechSAAS";
import BeautyAndSalon from "./Components/Services_Provide/BeautyAndSalon";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
        <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
        <Route path="/services/website-development" element={<WebsiteDevelopment />} />
        <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
        <Route path="/services/seo-services" element={<SEOServices />} />
        <Route path="/services/video-production" element={<VideoProduction />} />
        <Route path="/services/branding-solutions" element={<BrandingSolutions />} />
        <Route path="/services/digital-consulting" element={<DigitalConsulting />} />
        <Route path="/services/content-writing" element={<ContentWriting />} />
        <Route path="/services/instagram-marketing" element={<InstagramMarketing />} />
        <Route path="/services/health-care" element={<HealthCare />} />
        <Route path="/services/real-estate" element={<RealEstate />} />
        <Route path="/services/education" element={<Education />} />
        <Route path="/services/it-tech-saas" element={<ITTechSAAS />} />
        <Route path="/services/beauty-and-salon" element={<BeautyAndSalon />} />
      </Routes>
    </Router>
  );
}