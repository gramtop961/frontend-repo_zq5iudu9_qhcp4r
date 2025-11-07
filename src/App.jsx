import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Configurator from './components/Configurator';
import CommunityAndAssistant from './components/CommunityAndAssistant';

export default function App() {
  const partsRef = useRef(null);
  const buildRef = useRef(null);

  const scrollTo = (ref) => {
    if (ref?.current) ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-black font-[Inter] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,.7)]"/>
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-lg font-semibold tracking-tight text-transparent">Lovable</span>
          </div>
          <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
            <button onClick={() => scrollTo(buildRef)} className="hover:text-white">Builder</button>
            <button onClick={() => scrollTo(partsRef)} className="hover:text-white">Kits</button>
            <a href="#community" className="hover:text-white">Community</a>
          </nav>
          <button className="rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/20">Store</button>
        </div>
      </header>

      <AnimatePresence>
        <Hero onBuildClick={() => scrollTo(buildRef)} onPartsClick={() => scrollTo(partsRef)} />
      </AnimatePresence>

      <div ref={partsRef}>
        <ProductShowcase />
      </div>

      <div ref={buildRef}>
        <Configurator />
      </div>

      <div id="community">
        <CommunityAndAssistant />
      </div>

      <footer className="border-t border-white/10 bg-black px-6 py-10 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Lovable — Designed with glow and care.
      </footer>
    </div>
  );
}
