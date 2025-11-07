import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Droplets, Palette, Cpu, Battery, RotateCw } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const COLORS = [
  { name: 'Carbon Black', value: '#0a0a0a' },
  { name: 'Neon Cyan', value: '#06b6d4' },
  { name: 'Soft Coral', value: '#fb7185' },
  { name: 'Plasma Violet', value: '#a78bfa' },
];

const PARTS = [
  { id: 'sensor-lidar', type: 'Sensor', label: 'Lidar Array' },
  { id: 'sensor-ir', type: 'Sensor', label: 'IR Eyes' },
  { id: 'actuator-servo', type: 'Actuator', label: 'Micro Servos' },
  { id: 'shell-glass', type: 'Shell', label: 'Glass Shell' },
  { id: 'battery-max', type: 'Battery', label: 'Max Battery' },
];

export default function Configurator() {
  const [color, setColor] = useState(COLORS[0].value);
  const [selected, setSelected] = useState([]);

  const addPart = (p) => {
    if (!selected.find((x) => x.id === p.id)) setSelected([...selected, p]);
  };

  const removePart = (id) => setSelected(selected.filter((x) => x.id !== id));

  const overlayGrad = useMemo(() => ({
    background: `radial-gradient(600px 240px at 50% 10%, ${color}33, transparent 60%)`,
  }), [color]);

  return (
    <section className="relative bg-gradient-to-b from-black via-zinc-950 to-black px-6 py-20 text-white">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">Robot Builder</h2>
          <p className="mt-2 max-w-xl text-zinc-400">Drag parts, choose colors, and preview your Lovable in 3D. It gently rotates and responds as you craft it.</p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="flex flex-wrap items-center gap-2">
              {COLORS.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setColor(c.value)}
                  className={`flex items-center gap-2 rounded-full border px-3 py-1 text-sm transition-colors ${color === c.value ? 'border-white/40 bg-white/10' : 'border-white/10 hover:border-white/30'}`}
                >
                  <span className="h-3 w-3 rounded-full" style={{ background: c.value }} /> {c.name}
                </button>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3">
              {PARTS.map((p) => (
                <motion.button
                  key={p.id}
                  whileHover={{ y: -2 }}
                  onClick={() => addPart(p)}
                  className="rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-left text-sm hover:border-white/20"
                >
                  <span className="block text-zinc-400">{p.type}</span>
                  <span className="font-medium">{p.label}</span>
                </motion.button>
              ))}
            </div>

            {selected.length > 0 && (
              <div className="mt-4 rounded-xl border border-white/10 bg-black/60 p-3">
                <div className="mb-2 flex items-center justify-between text-sm text-zinc-400">
                  <span>Selected parts</span>
                  <button onClick={() => setSelected([])} className="inline-flex items-center gap-1 text-xs text-cyan-300 hover:text-cyan-200"><RotateCw className="h-3 w-3"/> Reset</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selected.map((s) => (
                    <span key={s.id} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">
                      {s.label}
                      <button className="text-rose-300" onClick={() => removePart(s.id)}>×</button>
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-zinc-400">
              <div className="inline-flex items-center gap-2"><Cpu className="h-4 w-4 text-cyan-300"/> AI Core</div>
              <div className="inline-flex items-center gap-2"><Battery className="h-4 w-4 text-emerald-300"/> 12h Play</div>
              <div className="inline-flex items-center gap-2"><Droplets className="h-4 w-4 text-rose-300"/> Soft Glow</div>
            </div>
          </div>
        </div>

        <div className="relative h-[60vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0">
          <div className="pointer-events-none absolute inset-0" style={overlayGrad} />
          <Spline scene="https://prod.spline.design/xXD1hOqciVNtJX50/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  );
}
