import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Paintbrush, MonitorSmartphone, Database, Server, Zap } from 'lucide-react';

const techStack = [
  { name: 'React', icon: <MonitorSmartphone className="w-5 h-5" /> },
  { name: 'Node.js', icon: <Server className="w-5 h-5" /> },
  { name: 'Tailwind CSS', icon: <Paintbrush className="w-5 h-5" /> },
  { name: 'SQL/NoSQL', icon: <Database className="w-5 h-5" /> },
  { name: 'TypeScript', icon: <Code2 className="w-5 h-5" /> },
  { name: 'Next.js', icon: <Zap className="w-5 h-5" /> }
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* About Me Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card col-span-1 lg:col-span-2 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start"
        >
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-semibold uppercase mb-6 border border-green-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              Available for work
            </div>
            
            <h2 className="text-3xl font-bold mb-4 uppercase tracking-tight">About Me</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-lg">
              Hi, I'm John — a Full Stack Developer passionate about crafting meaningful and impactful web experiences. I bridge the gap between design and engineering to build scalable applications.
            </p>
            
            <div className="flex gap-8">
              <div>
                <h3 className="text-3xl font-black text-accent">5+</h3>
                <p className="text-xs uppercase font-bold opacity-50 mt-1">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-black text-accent">50+</h3>
                <p className="text-xs uppercase font-bold opacity-50 mt-1">Projects Delivered</p>
              </div>
              <div>
                <h3 className="text-3xl font-black text-accent">20+</h3>
                <p className="text-xs uppercase font-bold opacity-50 mt-1">Happy Clients</p>
              </div>
            </div>
          </div>
          
          <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 rounded-[2rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
            <img src="/logo.jpeg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Working" />
          </div>
        </motion.div>

        {/* Services / What I can do */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bento-card col-span-1 p-8 bg-slate-900 border-none text-white dark:bg-card-bg dark:text-text-color dark:border-solid dark:border"
        >
          <h2 className="text-2xl font-bold mb-6 uppercase tracking-tight">What I can do</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold flex justify-between items-center border-b border-white/10 dark:border-slate-800 pb-2">
                1. Frontend Dev <span>↗</span>
              </h4>
              <p className="text-xs opacity-60 mt-2">Crafting responsive, interactive user interfaces with React and Tailwind.</p>
            </div>
            <div>
              <h4 className="font-bold flex justify-between items-center border-b border-white/10 dark:border-slate-800 pb-2 text-accent">
                2. Backend APIs <span>↗</span>
              </h4>
             <p className="text-xs opacity-60 mt-2">Designing robust scalable APIs with Node.js, Express, and Databases.</p>
            </div>
            <div>
              <h4 className="font-bold flex justify-between items-center border-b border-white/10 dark:border-slate-800 pb-2">
                3. UI/UX Refinement <span>↗</span>
              </h4>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Bento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bento-card col-span-1 lg:col-span-3 p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-4 md:mb-0">My Tech Stack</h2>
            <p className="max-w-md text-sm opacity-60">
              I build with intention. From robust backend infrastructure to dynamic frontends, utilizing the latest web technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {techStack.map((tech, i) => (
              <div 
                key={i} 
                className="aspect-square rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex flex-col items-center justify-center gap-3 border border-slate-200 dark:border-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm text-slate-800 dark:text-slate-200">
                  {tech.icon}
                </div>
                <span className="font-semibold text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
