import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Task Management App',
    description: 'A responsive drag-and-drop task board with real-time updates and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=800&auto=format&fit=crop',
    tech: ['React', 'Firebase', 'Framer Motion'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Analytics Dashboard',
    description: 'A data visualization dashboard tracking real-time metrics with interactive charts.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    tech: ['Next.js', 'Chart.js', 'SQL'],
    github: '#',
    demo: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 flex justify-between items-end"
      >
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Selected<br/>Works</h2>
        <a href="https://github.com" className="px-6 py-2 rounded-full border border-slate-300 dark:border-slate-700 font-medium text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          View All
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bento-card group flex flex-col h-full"
          >
            <div className="relative h-56 m-2 rounded-2xl overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
              
              {/* Floating action pills on hover */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <a href={project.github} className="w-10 h-10 rounded-full bg-white/90 text-slate-900 flex items-center justify-center hover:bg-white backdrop-blur-sm shadow-lg">
                  <Github className="w-4 h-4" />
                </a>
                <a href={project.demo} className="w-10 h-10 rounded-full bg-accent text-accent-inverse flex items-center justify-center hover:brightness-110 shadow-lg">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-sm bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-tight">{project.title}</h3>
              <p className="text-sm opacity-60 mb-6 flex-1">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
