import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Wrench, Menu, X, LayoutDashboard, LogOut, ChevronDown, BarChart3 } from 'lucide-react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../logo/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 px-6 py-4 transition-all duration-300 backdrop-blur-lg bg-white/90 border-b border-blue-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center -ml-2">
          <img src={logo} alt="TanitTools Logo" className="h-14 w-auto object-contain" />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/tools" className="text-textMuted hover:text-primary transition-colors flex items-center gap-2">
            <Wrench size={18} /> Tools
          </Link>
          <Link to="/services" className="text-textMuted hover:text-primary transition-colors">Services</Link>
          <div className="h-6 w-px bg-blue-200"></div>

          {user ? (
            /* ---- Logged In State ---- */
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 bg-surfaceAlt border border-blue-200 rounded-full px-3 py-1.5 hover:border-primary transition-all"
              >
                {user.photoURL ? (
                  <img src={user.photoURL} alt="avatar" className="w-7 h-7 rounded-full object-cover" />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                    {user.displayName?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase()}
                  </div>
                )}
                <span className="text-sm text-textMain max-w-[120px] truncate">
                  {user.displayName || user.email}
                </span>
                <ChevronDown size={16} className={`text-textMuted transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white border border-blue-200 rounded-2xl shadow-xl shadow-blue-100 overflow-hidden animate-fade-in">
                  <Link
                    to="/dashboard"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-textMain hover:bg-surfaceAlt transition-colors"
                  >
                    <LayoutDashboard size={16} className="text-primary" /> Dashboard
                  </Link>
                  <Link
                    to="/analytics"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-textMain hover:bg-surfaceAlt transition-colors"
                  >
                    <BarChart3 size={16} className="text-accent" /> Analytics
                  </Link>
                  <div className="h-px bg-blue-100 mx-3"></div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 transition-colors"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* ---- Logged Out State ---- */
            <>
              <Link to="/login" className="text-textMuted hover:text-primary transition-colors">Login</Link>
              <Link to="/signup" className="btn-primary">Get Started</Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-textMuted hover:text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-blue-200 py-6 px-6 flex flex-col gap-6 shadow-2xl animate-fade-in">
          <Link to="/tools" onClick={() => setIsOpen(false)} className="text-xl">Tools</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="text-xl">Services</Link>
          {user ? (
            <>
              <Link to="/dashboard" onClick={() => setIsOpen(false)} className="text-xl flex items-center gap-2">
                <LayoutDashboard size={18} className="text-primary" /> Dashboard
              </Link>
              <Link to="/analytics" onClick={() => setIsOpen(false)} className="text-xl flex items-center gap-2">
                <BarChart3 size={18} className="text-accent" /> Analytics
              </Link>
              <button onClick={handleLogout} className="text-xl text-red-500 flex items-center gap-2 text-left">
                <LogOut size={18} /> Logout
              </button>
            </>
          ) : (
            <Link to="/login" onClick={() => setIsOpen(false)} className="text-xl text-primary">Login</Link>
          )}
        </div>
      )}
    </nav>
  );
}
