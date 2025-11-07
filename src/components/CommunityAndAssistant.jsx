import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, User, ThumbsUp } from 'lucide-react';

const posts = [
  { id: 1, user: 'Maya', title: 'Coral shell with Lidar eyes', likes: 124 },
  { id: 2, user: 'Leo', title: 'Cyan explorer with extra servos', likes: 89 },
  { id: 3, user: 'Ivy', title: 'Glass shell day-night theme', likes: 62 },
];

export default function CommunityAndAssistant() {
  return (
    <section className="relative bg-black px-6 py-20 text-white">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-3xl font-bold md:text-4xl">Community Creations</h2>
            <p className="mt-2 max-w-xl text-zinc-400">Share, like, and remix designs from makers worldwide.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {posts.map((p) => (
              <motion.div key={p.id} whileHover={{ y: -3 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm text-zinc-400"><User className="h-4 w-4"/> {p.user}</div>
                <div className="text-lg font-semibold">{p.title}</div>
                <div className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-400"><ThumbsUp className="h-4 w-4 text-cyan-300"/> {p.likes} likes</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-5 backdrop-blur">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-300"><MessageCircle className="h-3.5 w-3.5 text-cyan-300"/> Lovable Helper</div>
            <div className="space-y-3 text-sm text-zinc-300">
              <p>Hi! I’m Lovable Helper — your friendly build guide. Ask me about parts, kits, or how to animate your robot’s eyes. I’ll light the way ✨</p>
              <div className="rounded-xl border border-white/10 bg-black/60 p-3">
                <p className="text-zinc-400">Try:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>“What kit is best for a 7-year-old?”</li>
                  <li>“How do I add AR to my build?”</li>
                  <li>“Show me assembly step 3.”</li>
                </ul>
              </div>
              <input placeholder="Ask Lovable Helper…" className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-sm outline-none ring-cyan-400/0 transition focus:ring-2"/>
              <button className="w-full rounded-full bg-cyan-500 px-4 py-2 font-semibold text-black shadow-[0_0_20px_rgba(34,211,238,.3)] transition hover:bg-cyan-400">Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
