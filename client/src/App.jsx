import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Moon, Sun } from 'lucide-react';
import { useAuth0 } from "@auth0/auth0-react";

export default function App() {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="relative min-h-screen noise-bg overflow-x-hidden selection:bg-accent selection:text-white">
      {/* Pill-shaped Floating Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 floating-pill px-6 py-3 rounded-full flex items-center gap-6 md:gap-10 shadow-xl shadow-black/5 dark:shadow-black/20">
        
        {/* User profile / Logo */}
        {isAuthenticated && user?.picture ? (
          <img src={user.picture} alt="Profile" className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700" />
        ) : (
          <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-xs font-bold">
            JD
          </div>
        )}

        {/* Links */}
        <div className="hidden sm:flex items-center gap-6 text-sm font-semibold opacity-80">
          <a href="#home" className="hover:opacity-100 transition-opacity">Home</a>
          <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
          <a href="#projects" className="hover:opacity-100 transition-opacity">Projects</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a href="#contact" className="px-4 py-1.5 text-sm font-bold rounded-full bg-accent text-accent-inverse hover:brightness-110 transition-all">
            Contact
          </a>

          {!isLoading && (
            isAuthenticated ? (
              <button 
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                className="hidden sm:block text-sm font-medium hover:opacity-70 transition-opacity"
              >
                Log Out
              </button>
            ) : (
              <button 
                onClick={() => loginWithRedirect()}
                className="hidden sm:block text-sm font-medium hover:opacity-70 transition-opacity"
              >
                Log In
              </button>
            )
          )}

          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-2"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center opacity-50 text-sm mt-20">
        <p>© {new Date().getFullYear()} John Doe. Designed with intention.</p>
      </footer>
    </div>
  );
}
