import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Wrench, PlayCircle } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Glow = ({ className = '' }) => (
  <div
    aria-hidden
    className={`pointer-events-none absolute inset-0 ${className}`}
  >
    <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
    <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-rose-500/20 blur-3xl" />
  </div>
);

export default function Hero({ onBuildClick, onPartsClick }) {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <Glow />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-8 px-6 pb-16 pt-24 md:flex-row md:gap-12">
        <motion.div
          className="z-10 w-full md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <PlayCircle className="h-4 w-4 text-cyan-400" />
            <span className="text-xs uppercase tracking-widest text-cyan-300">Lovable — Futuristic Robot Toys</span>
          </div>

          <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Build a robot friend that feels
            <span className="bg-gradient-to-r from-cyan-400 via-white to-rose-400 bg-clip-text text-transparent"> alive</span>
          </h1>
          <p className="mt-4 max-w-xl text-zinc-300">
            Meet Lovable — a glossy, matte-black companion with glowing emotions. Craft, customize, and bring your robot to life with cinematic motion, realistic lighting, and playful personality.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={onBuildClick}
              className="group relative overflow-hidden rounded-full bg-cyan-500 px-6 py-3 font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,.35)] transition-colors hover:bg-cyan-400"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Wrench className="h-4 w-4" /> Build Your Lovable
              </span>
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-white/0 via-white/40 to-white/0 opacity-0 transition-all duration-700 group-hover:translate-x-[120%] group-hover:opacity-100" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={onPartsClick}
              className="group relative overflow-hidden rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-white/10"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Rocket className="h-4 w-4 text-rose-400" /> See Parts & Kits
              </span>
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 transition-all duration-700 group-hover:translate-x-[120%] group-hover:opacity-100" />
            </motion.button>
          </div>

          <div className="mt-6 text-sm text-zinc-400">
            Cinematic 3D • Neon cyan & coral accents • Smooth micro-interactions
          </div>
        </motion.div>

        <motion.div
          className="relative h-[60vh] w-full md:h-[70vh] md:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0" />
          <Spline
            scene="https://prod.spline.design/xXD1hOqciVNtJX50/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
