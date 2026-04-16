import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function Services() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="py-10 max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Need a Custom Solution?</h1>
        <p className="text-xl text-textMuted max-w-2xl mx-auto">
          From tailored web applications to complex API integrations, request a custom service directly from our expert team.
        </p>
      </div>

      <motion.div 
        className="glass-panel p-8 md:p-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-20 text-center relative z-10">
            <CheckCircle size={64} className="text-blue-500 mb-6" />
            <h2 className="text-3xl font-bold mb-4">Request Submitted Successfully!</h2>
            <p className="text-textMuted max-w-md">Our team will review your requirements and get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700">Project Type</label>
                <select className="input-field appearance-none" required>
                  <option value="" disabled selected>Select a service type</option>
                  <option value="web">Web Development</option>
                  <option value="api">API Integration</option>
                  <option value="design">UI/UX Design</option>
                  <option value="consulting">Tech Consulting</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700">Budget Range</label>
                <select className="input-field appearance-none" required>
                  <option value="" disabled selected>Select budget</option>
                  <option value="small">&lt; $1,000</option>
                  <option value="medium">$1,000 - $5,000</option>
                  <option value="large">$5,000+</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-700">Project Description</label>
              <textarea 
                rows="5" 
                className="input-field resize-none" 
                placeholder="Describe your goals, requirements, and any specific technologies needed..."
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn-primary w-full py-4 text-lg mt-4 flex items-center justify-center gap-2">
              Submit Request <Send size={20} />
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
