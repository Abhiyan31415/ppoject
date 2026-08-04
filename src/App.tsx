import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import CommandPalette from "./components/CommandPalette";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import DevMetrics from "./components/DevMetrics";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-bg"
    >
      <div className="w-[min(92vw,28rem)] rounded-2xl border border-border bg-card p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.85)]">
        <p className="eyebrow mb-3">Loading portfolio</p>
        <div className="h-2 overflow-hidden rounded-full bg-bg">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-1/2 rounded-full bg-accent"
          />
        </div>
        <p className="mt-4 text-sm text-warm">
          Preparing a minimal terminal-inspired experience.
        </p>
      </div>
    </motion.div>
  );
}

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-lg rounded-2xl border border-border bg-card p-8 text-center">
        <p className="eyebrow mb-3">404</p>
        <h1 className="text-3xl font-semibold tracking-tight text-warm">
          Page not found
        </h1>
        <p className="mt-3 text-warm">
          The page you requested does not exist. Return to the homepage to view
          the portfolio.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent-hover"
        >
          Go home
        </a>
      </div>
    </main>
  );
}

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 650);
    return () => window.clearTimeout(timer);
  }, []);

  if (window.location.pathname !== "/") {
    return <NotFound />;
  }

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <DevMetrics />
        <Skills />
        <Certifications />
        <Contact />
        <Footer />
      </main>
      <BackToTop />
      <CommandPalette />
      <AnimatePresence>{!ready && <LoadingScreen />}</AnimatePresence>
    </>
  );
}
