import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';
import EnterScreen from './components/EnterScreen';
import Footer from './components/Footer';
import Skills from './components/Skills';
import NotFound from './components/NotFound';
import ScrollToTop from './components/utils/ScrollToTop';
import ClickSpark from './components/utils/ClickSpark';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Helmet } from 'react-helmet-async';

function App() {
  const [started, setStarted] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [initialCheckDone, setInitialCheckDone] = useState(false);

useEffect(() => {
  const isBot = /bot|crawl|spider|slurp|bing/i.test(navigator.userAgent);
  const isHome = window.location.pathname === '/';
  const alreadyVisited = sessionStorage.getItem('alreadyVisited');

  if (isBot) {
    setStarted(true);
  } else if (isHome && !alreadyVisited) {
    setStarted(false);
  } else {
    setStarted(true);
  }
  setInitialCheckDone(true);
}, []);

  const handleStart = () => {
    sessionStorage.setItem('alreadyVisited', 'true');
    setStarted(true);
    setShowLoader(true);
  };

  if (!initialCheckDone) return null;

  return (
    <>
      {/* Global SEO Metadata */}
      <Helmet>
        <title>Sriram Vissakoti | AI & Full Stack Developer</title>
        <meta name="description" content="Portfolio of Sriram Vissakoti — AI & Data Science student and full stack developer. Building scalable, user-centric applications with C/C++, Java, Python, and modern web tech." />
        <link rel="canonical" href="/" />

        <meta property="og:title" content="Sriram Vissakoti | AI & Full Stack Developer" />
        <meta property="og:description" content="Explore AI-driven projects, full‑stack work, and skills by Sriram Vissakoti." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/profile_pic.jpg" />
        <meta property="og:site_name" content="Sriram Vissakoti's Portfolio" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sriram Vissakoti | AI & Full Stack Developer" />
        <meta name="twitter:description" content="AI & full‑stack development portfolio of Sriram Vissakoti." />
        <meta name="twitter:image" content="/profile_pic.jpg" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sriram Vissakoti",
              "url": "/",
              "sameAs": [
                "https://github.com/Ram6023",
                "https://www.instagram.com/_.sriramnaidu._/",
                "https://www.linkedin.com/in/chaitanya-sai-meka/",
                "https://www.hackerrank.com/profile/sriramnaidu799",
                "https://codeforces.com/profile/Chaitanyasai_meka"
              ],
              "jobTitle": "AI & Full Stack Developer",
              "image": "/profile_pic.jpg",
              "description": "AI & Data Science student and full stack developer creating scalable, user‑focused applications."
            }
          `}
        </script>
      </Helmet>

      {/* UI Flow */}
      {!started ? (
        <EnterScreen onEnter={handleStart} />
      ) : showLoader ? (
        <Loader onComplete={() => setShowLoader(false)} />
      ) : (
        <Router>
          <ClickSpark sparkColor="#ffffff" sparkSize={10} sparkRadius={18} sparkCount={10} duration={450}>
            <div className="bg-white dark:bg-black min-h-screen">
              <ScrollToTop />
              <Navbar />
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
              <SpeedInsights />
            </div>
          </ClickSpark>
        </Router>
      )}
    </>
  );
}

export default App;
