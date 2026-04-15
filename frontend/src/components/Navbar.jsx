import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Wrench, Menu, X, User } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 px-6 py-4 transition-all duration-300 backdrop-blur-lg bg-surface/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-white">
          <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center rotate-3 hover:rotate-12 transition-transform shadow-lg shadow-primary/50">
            <Package size={20} className="text-white" />
          </div>
          SaaS<span className="text-primary font-light">Hub</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/tools" className="text-textMuted hover:text-white transition-colors flex items-center gap-2">
            <Wrench size={18} /> Tools
          </Link>
          <Link to="/services" className="text-textMuted hover:text-white transition-colors">Services</Link>
          <div className="h-6 w-px bg-white/20"></div>
          <Link to="/login" className="text-textMuted hover:text-white transition-colors">Login</Link>
          <Link to="/signup" className="btn-primary">Get Started</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-textMuted hover:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-white/10 py-6 px-6 flex flex-col gap-6 shadow-2xl animate-fade-in">
          <Link to="/tools" onClick={() => setIsOpen(false)} className="text-xl">Tools</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="text-xl">Services</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="text-xl text-primary">Login</Link>
        </div>
      )}
    </nav>
  );
}
