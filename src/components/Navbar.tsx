import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-black/10 border-b border-white/5">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-linear-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">B</span>
        </div>
        <span className="text-xl font-bold tracking-tight text-white">Brand</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <a href="#" className="hover:text-white transition-colors">Features</a>
        <a href="#" className="hover:text-white transition-colors">Solutions</a>
        <a href="#" className="hover:text-white transition-colors">Pricing</a>
        <a href="#" className="hover:text-white transition-colors">Resources</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Log in</button>
        <button className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-gray-200 transition-colors">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
