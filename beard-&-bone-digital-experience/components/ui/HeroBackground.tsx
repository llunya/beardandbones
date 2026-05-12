'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

export function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effect: image moves down slightly as we scroll down
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  // Zoom out effect: starts slightly zoomed in and zooms out to 1.05 as we scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1.05]);
  // Fade out effect: opacity decreases as we scroll past the hero
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <div ref={ref} className="absolute inset-0 z-0 overflow-hidden bg-matte-black">
      <motion.div style={{ scale, y, opacity }} className="relative w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
          alt="Beard & Bone Barbershop Interior"
          fill
          className="object-cover origin-center"
          priority
          referrerPolicy="no-referrer"
        />
      </motion.div>
      {/* Cinematic dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-charcoal-dark/80 to-matte-black/60 z-10 pointer-events-none" />
    </div>
  );
}
