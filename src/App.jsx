import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

// Lazy load all pages for code splitting
const AboutPage = lazy(() => import("./Components/Pages/AboutPage"));
const ProjectsPage = lazy(() => import("./Components/Pages/ProjectsPage"));
const BlogPage = lazy(() => import("./Components/Pages/BlogPage"));

// Lazy load all 15 services
const SocialMediaMarketing = lazy(() => import("./Components/Services_Provide/SocialMediaMarketing"));
const PerformanceMarketing = lazy(() => import("./Components/Services_Provide/PerformanceMarketing"));
const WebsiteDevelopment = lazy(() => import("./Components/Services_Provide/WebsiteDevelopment"));
const InfluencerMarketing = lazy(() => import("./Components/Services_Provide/InfluencerMarketing"));
const SEOServices = lazy(() => import("./Components/Services_Provide/SEOServices"));
const VideoProduction = lazy(() => import("./Components/Services_Provide/VideoProduction"));
const BrandingSolutions = lazy(() => import("./Components/Services_Provide/BrandingSolutions"));
const DigitalConsulting = lazy(() => import("./Components/Services_Provide/DigitalConsulting"));
const ContentWriting = lazy(() => import("./Components/Services_Provide/ContentWriting"));
const InstagramMarketing = lazy(() => import("./Components/Services_Provide/InstagramMarketing"));
const HealthCare = lazy(() => import("./Components/Services_Provide/HealthCare"));
const RealEstate = lazy(() => import("./Components/Services_Provide/RealEstate"));
const Education = lazy(() => import("./Components/Services_Provide/Education"));
const ITTechSAAS = lazy(() => import("./Components/Services_Provide/ITTechSAAS"));
const BeautyAndSalon = lazy(() => import("./Components/Services_Provide/BeautyAndSalon"));

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </Router>
  );
}