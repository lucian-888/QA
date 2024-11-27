// app/components/Navbar.tsx
"use client";

import { useState } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full text-white bg-gray-700 opacity-80 z-50">
      <div className="container mx-auto px-10 py-5">
        <div className="flex items-center justify-around">
          <div className="text-xl font-semibold">QUEEN OF AFRICA</div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">ACCUEIL</Link>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">À PROPOS</Link>
            <Link to="gallery" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">GALERIE</Link>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">CONTACT</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="home" smooth={true} duration={500} className="block cursor-pointer hover:text-gray-300" onClick={toggleMenu}>ACCUEIL</Link>
              <Link to="about" smooth={true} duration={500} className="block cursor-pointer hover:text-gray-300" onClick={toggleMenu}>À PROPOS</Link>
              <Link to="gallery" smooth={true} duration={500} className="block cursor-pointer hover:text-gray-300" onClick={toggleMenu}>GALERIE</Link>
              <Link to="contact" smooth={true} duration={500} className="block cursor-pointer hover:text-gray-300" onClick={toggleMenu}>CONTACT</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
