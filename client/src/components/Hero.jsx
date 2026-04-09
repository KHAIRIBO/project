import React from 'react';
import { motion } from 'framer-motion';
import { Hand } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex mt-12 md:mt-0 items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background container for split text */}
      <div className="absolute inset-0 flex items-center justify-center flex-col md:flex-row -z-10 opacity-10 md:opacity-100 md:px-12 w-full gap-4 md:justify-between pointer-events-none">
        
        {/* Left Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-right w-full md:w-[45%]"
        >
          <h3 className="text-sm md:text-xl font-semibold uppercase tracking-wider mb-2 hidden md:block">John Doe</h3>
          <h1 className="text-6xl sm:text-7xl md:text-[7vw] font-black tracking-tighter leading-none uppercase 
            text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-400 dark:from-white dark:to-slate-500">
            Full
          </h1>
        </motion.div>
        
        {/* Right Text */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left w-full md:w-[45%]"
        >
          <h1 className="text-6xl sm:text-7xl md:text-[7vw] font-black tracking-tighter leading-none uppercase 
            text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-400 dark:from-white dark:to-slate-500">
            Stack
          </h1>
          <p className="mt-4 max-w-sm mx-auto md:mx-0 text-sm opacity-70 font-medium hidden md:block">
            I'm a dedicated Full Stack Developer crafting meaningful and impactful web experiences with modern tools.
          </p>
        </motion.div>
      </div>
      
      {/* Center Image */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 w-[85vw] max-w-[320px] aspect-[4/5] rounded-[2rem] overflow-hidden floating-pill border-8 border-transparent"
      >
        <img 
          src="/logo.jpeg" 
          alt="John Doe" 
          className="w-full h-full object-cover rounded-[1.5rem]" 
        />
        
        {/* Mobile floating text inside the portrait area */}
        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent md:hidden block">
            <h3 className="text-white font-bold text-lg">John Doe</h3>
            <p className="text-white/80 text-xs">Full Stack Developer</p>
        </div>
      </motion.div>

      {/* Floating Action Button near the image */}
      <motion.a 
        href="#contact"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.8, bounce: 0.5 }}
        whileHover={{ scale: 1.1, rotate: 10 }}
        className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-[180px] lg:-translate-x-[220px] translate-y-[80px] z-30 w-20 h-20 rounded-full items-center justify-center shadow-xl shadow-accent/20 cursor-pointer bg-accent text-accent-inverse"
      >
        <Hand className="w-8 h-8" />
      </motion.a>
    </section>
  );
}
