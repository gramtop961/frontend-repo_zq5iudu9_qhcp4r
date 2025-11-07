import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    id: 'kit-pro',
    name: 'Lovable Kit Pro',
    price: 329,
    color: 'from-cyan-500 to-teal-400',
    img: '/robot-pro.png',
    badge: 'Most Popular',
  },
  {
    id: 'kit-mini',
    name: 'Lovable Mini',
    price: 199,
    color: 'from-rose-500 to-orange-400',
    img: '/robot-mini.png',
    badge: 'Kid Friendly',
  },
  {
    id: 'kit-lab',
    name: 'Lovable Lab',
    price: 449,
    color: 'from-violet-500 to-fuchsia-400',
    img: '/robot-lab.png',
    badge: 'Creator Edition',
  },
];

function ProductCard({ p }) {
  return (
    <motion.div
      whileHover={{ rotateY: 6, translateY: -6 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-5 backdrop-blur will-change-transform"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/80">
        <Star className="h-3.5 w-3.5 text-yellow-300" /> {p.badge}
      </div>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-black to-zinc-900">
        <div className={`absolute inset-0 bg-gradient-to-tr ${p.color} opacity-10`} />
        <img
          src={p.img}
          alt={p.name}
          className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">{p.name}</h3>
          <p className="text-sm text-zinc-400">Premium parts, magnetic shells, glowing eyes</p>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-white">${p.price}</div>
          <div className="text-xs text-zinc-400">Free shipping</div>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 font-medium text-black shadow-[0_0_25px_rgba(255,255,255,.2)] transition-colors hover:bg-white"
      >
        <ShoppingCart className="h-4 w-4" /> Add to cart
      </motion.button>
    </motion.div>
  );
}

export default function ProductShowcase() {
  return (
    <section className="relative bg-black px-6 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Shiny Kits & Editions</h2>
            <p className="mt-2 max-w-xl text-zinc-400">Pick a base kit to start your journey. Swap shells, plug sensors, and evolve your Lovable over time.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
