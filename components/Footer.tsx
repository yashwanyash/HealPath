
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 text-white mb-4">
            <i className="fas fa-heartbeat text-emerald-500"></i>
            <span className="text-lg font-bold">HealPath NGO</span>
          </div>
          <p className="text-sm leading-relaxed">
            A non-profit organization dedicated to providing immediate healthcare consultation for underprivileged communities worldwide.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-emerald-400">Emergency Resources</a></li>
            <li><a href="#" className="hover:text-emerald-400">Volunteer Portal</a></li>
            <li><a href="#" className="hover:text-emerald-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-emerald-400">Contact Support</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <p className="text-sm mb-2">info@healpath-ngo.org</p>
          <p className="text-sm">+1 (555) 000-HEAL</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-8 border-t border-slate-800 text-center text-xs">
        <p>© {new Date().getFullYear()} HealPath Healthcare Support NGO. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
