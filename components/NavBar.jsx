"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';  
import { useState } from 'react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="w-full py-[1vh] fixed top-0 flex items-center bg-slate-900 text-white shadow">
        <div className="flex items-center justify-between w-full h-full px-5">
          <div className="flex items-center space-x-4">
            <img className="invert h-[8vh]" src="logo.webp" alt="logo" />
            <h2 className="text-lg font-medium">Hawk Tours</h2>
          </div>

          <button 
            className="text-2xl lg:hidden" 
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>

          <ul className="items-center hidden w-1/2 h-full lg:flex justify-evenly">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 z-10 w-full h-full bg-black bg-opacity-50 lg:hidden">
          <div className="flex flex-col items-center justify-center h-full bg-slate-900">
            <ul className="space-y-6 text-xl text-white">
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Services</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
            <button 
              className="absolute text-3xl text-white top-4 right-4" 
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
