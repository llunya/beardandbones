'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "The attention to detail here is unmatched. It's not just a haircut; it's a complete reset. The atmosphere is consistently welcoming and professional.",
    author: "James T.",
    role: "Regular Client Since 2018"
  },
  {
    id: 2,
    quote: "A true sanctuary. You walk in, grab a drink, and switch off from the world. The craftsmanship these guys provide is simply on another level.",
    author: "Marcus R.",
    role: "Member"
  },
  {
    id: 3,
    quote: "More than a barbershop, it's a community. The standard of barbering is elite, and you're always treated with the highest level of respect.",
    author: "David L.",
    role: "Executive"
  }
];

export function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      next();
    }, 8000);
    return () => clearInterval(timer);
  }, [current, isAutoPlaying]);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto px-4 py-8"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="flex justify-center mb-10">
        <Quote className="w-12 h-12 text-amber/30" />
      </div>
      
      <div className="relative min-h-[300px] md:min-h-[220px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
            }}
            className="absolute w-full text-center px-4 md:px-16"
          >
            <p className="font-serif text-2xl md:text-4xl text-bone mb-10 leading-snug">
              "{testimonials[current].quote}"
            </p>
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-amber font-bold mb-2">
                {testimonials[current].author}
              </p>
              <p className="font-sans text-[0.65rem] uppercase tracking-widest text-bone/50">
                {testimonials[current].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-6 mt-16 relative z-10">
        <button 
          onClick={prev}
          aria-label="Previous testimonial"
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-bone/50 hover:text-amber hover:border-amber transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to testimonial ${idx + 1}`}
              onClick={() => {
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
              }}
              className={`h-1 transition-all duration-300 ${
                idx === current ? 'w-10 bg-amber' : 'w-4 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
        <button 
          onClick={next}
          aria-label="Next testimonial"
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-bone/50 hover:text-amber hover:border-amber transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
