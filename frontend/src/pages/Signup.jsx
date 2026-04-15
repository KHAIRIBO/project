import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserPlus } from 'lucide-react';

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] animate-fade-in">
      <motion.div 
        className="w-full max-w-md glass-panel p-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Create Account</h2>
          <p className="text-textMuted">Join us to access premium tools and services.</p>
        </div>
        
        <form className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium mb-2 pl-1">Full Name</label>
            <input type="text" placeholder="John Doe" className="input-field" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 pl-1">Email Address</label>
            <input type="email" placeholder="name@example.com" className="input-field" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 pl-1">Password</label>
            <input type="password" placeholder="••••••••" className="input-field" required />
          </div>
          
          <button type="submit" className="btn-primary w-full py-3 mt-4 flex items-center justify-center gap-2">
            <UserPlus size={18} /> Sign Up
          </button>
        </form>
        
        <div className="mt-8 text-center text-sm text-textMuted">
          Already have an account? <Link to="/login" className="text-primary hover:underline ml-1">Log in</Link>
        </div>
      </motion.div>
    </div>
  );
}
