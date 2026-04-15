import React, { useState, useEffect } from 'react';
import { Search, Download, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function Tools() {
  const [tools, setTools] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // In a real app we'd fetch from actual api
    // axios.get('/api/tools').then(res => setTools(res.data));
    setTools([
      { _id: '1', title: 'SEO Optimizer Pro', category: 'Marketing', downloadsCount: 1204, description: 'Boost your website ranking instantly with AI.' },
      { _id: '2', title: 'Design System Kit', category: 'Design', downloadsCount: 342, description: 'Complete Figma & React design system for modern apps.' },
      { _id: '3', title: 'Database Scraper', category: 'Development', downloadsCount: 890, description: 'Extract data safely from complex database systems.' },
      { _id: '4', title: 'Image Compressor API', category: 'Utility', downloadsCount: 4520, description: 'Lightweight node script to batch optimize images.' },
    ]);
  }, []);

  const filteredTools = tools.filter(t => t.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="py-10 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold mb-4">Discover Tools</h1>
          <p className="text-textMuted text-lg">Browse our collection of premium, vetted applications.</p>
        </div>
        
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-textMuted" size={20} />
          <input 
            type="text" 
            placeholder="Search tools..." 
            className="input-field pl-12"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTools.map((tool, i) => (
          <motion.div 
            key={tool._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel p-6 flex flex-col group hover:border-primary/50 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                {tool.category}
              </span>
              <div className="flex items-center text-textMuted text-sm gap-1">
                <Star size={14} className="text-yellow-500 fill-yellow-500" /> 4.9
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{tool.title}</h3>
            <p className="text-textMuted mb-8 flex-grow">{tool.description}</p>
            
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-200">
              <span className="text-sm font-medium text-textMuted flex items-center gap-2">
                <Download size={16} /> {tool.downloadsCount}
              </span>
              <button className="btn-secondary py-1.5 px-4 text-sm flex items-center gap-2 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                Install
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
