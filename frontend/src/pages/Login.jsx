import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogIn } from 'lucide-react';

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] animate-fade-in">
      <motion.div 
        className="w-full max-w-md glass-panel p-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
          <p className="text-textMuted">Sign in to access your tools and requests.</p>
        </div>
        
        <form className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium mb-2 pl-1">Email Address</label>
            <input type="email" placeholder="name@example.com" className="input-field" required />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2 pl-1 pr-1">
              <label className="block text-sm font-medium">Password</label>
              <a href="#" className="text-xs text-primary hover:underline">Forgot password?</a>
            </div>
            <input type="password" placeholder="••••••••" className="input-field" required />
          </div>
          
          <button type="submit" className="btn-primary w-full py-3 mt-4 flex items-center justify-center gap-2">
            <LogIn size={18} /> Sign In
          </button>
        </form>
        
        <div className="mt-8 text-center text-sm text-textMuted">
          Don't have an account? <Link to="/signup" className="text-primary hover:underline ml-1">Sign up</Link>
        </div>
      </motion.div>
    </div>
  );
}
