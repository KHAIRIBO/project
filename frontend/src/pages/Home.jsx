import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdBanner from '../components/AdBanner';

export default function Home() {
  return (
    <div className="flex flex-col items-center animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-20 md:py-32 w-full flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 font-medium text-sm"
        >
          Discover cutting-edge SaaS tools 🚀
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight text-transparent bg-clip-text bg-gradient-to-br from-green-600 via-green-500 to-green-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Supercharge your workflow with premium tools.
        </motion.h1>
        
        <motion.p 
          className="mt-8 text-xl text-textMuted max-w-2xl px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Access top-tier applications, download essential assets, and request bespoke services all from one seamless platform.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/tools" className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4">
            Explore Tools <ArrowRight size={20} />
          </Link>
          <Link to="/services" className="btn-secondary flex items-center justify-center text-lg px-8 py-4">
            Request Service
          </Link>
        </motion.div>
      </section>

      {/* Ad Banner – Below Hero */}
      <AdBanner slot="1234567890" format="horizontal" />

      {/* Features Showcase */}
      <section className="w-full py-20 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Zap size={32} className="text-yellow-400" />, title: "Instant Downloads", desc: "Get access to your tools immediately after purchase or selection." },
            { icon: <Shield size={32} className="text-green-400" />, title: "Secure & Verified", desc: "Every tool is vetted and securely hosted for your safety." },
            { icon: <Search size={32} className="text-primary" />, title: "Easy Discovery", desc: "Find exactly what you need with our intuitive marketplace search." }
          ].map((feature, i) => (
            <motion.div 
              key={i} 
              className="glass-panel p-8 hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-14 h-14 bg-surfaceAlt rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-textMuted">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
