import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdBanner from '../components/AdBanner';

export default function Home() {
  return (
    <div className="relative flex flex-col items-center animate-fade-in overflow-hidden">
      {/* Animated Background Blobs - "Live BG Move" */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-400/10 blur-[100px] rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[20%] -right-[5%] w-[35%] h-[35%] bg-cyan-400/10 blur-[100px] rounded-full"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-[10%] left-[20%] w-[30%] h-[30%] bg-indigo-400/10 blur-[100px] rounded-full"
        />
      </div>

      {/* Hero Section */}
      <section className="relative text-center py-20 md:py-32 w-full flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 font-medium text-sm backdrop-blur-sm"
        >
          Discover powerful tools with TanitTools 🚀
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Boost your productivity with modern tanitTools.
        </motion.h1>
        
        <motion.p 
          className="mt-8 text-xl text-textMuted max-w-2xl px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore premium applications, download essential assets, and request custom services — all in one platform.
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
          <Link to="/services" className="btn-secondary flex items-center justify-center text-lg px-8 py-4 bg-white/50 backdrop-blur-sm">
            Request a Service
          </Link>
        </motion.div>
      </section>

      {/* Ad Banner – Below Hero */}
      <AdBanner slot="1234567890" format="horizontal" />

      {/* Features Showcase */}
      <section className="w-full py-20 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Zap size={32} className="text-yellow-400" />, title: "Instant Access", desc: "Get your tools immediately after download or purchase." },
            { icon: <Shield size={32} className="text-blue-400" />, title: "Secure & Trusted", desc: "All tools are verified and safely hosted." },
            { icon: <Search size={32} className="text-primary" />, title: "Easy Discovery", desc: "Quickly find the right tool with our simple and powerful search." }
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
