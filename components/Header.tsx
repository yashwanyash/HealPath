
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
            <i className="fas fa-heartbeat text-white"></i>
          </div>
          <span className="text-xl font-bold text-slate-800 tracking-tight">HealPath</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#home" className="hover:text-emerald-600 transition-colors">Home</a>
          <a href="#support" className="hover:text-emerald-600 transition-colors">Get Support</a>
          <a href="#about" className="hover:text-emerald-600 transition-colors">About Us</a>
          <a href="#donate" className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-all shadow-sm">Donate</a>
        </nav>
        <button className="md:hidden text-slate-500 p-2">
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
