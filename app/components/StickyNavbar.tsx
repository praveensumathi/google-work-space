"use client";

import { useEffect, useState } from "react";
import { navMenus } from "../utils/util";

export default function StickyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Track navbar visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [lastScrollY, setLastScrollY] = useState(0); // Last scroll position

  // Check if scrolling up or down
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // If scroll down, hide navbar
      setIsVisible(false);
    } else {
      // If scroll up, show navbar
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY); // Update last scroll position
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`shadow-md sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0 bg-white text-black" : "-translate-y-20 "
      }`}
    >
      <div className="max-w-7xl mx-auto ">
        <div className="h-16 relative">
          <div className="px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
            <div className="flex-shrink-0 ">
              <a href="#" className="text-2xl font-bold">
                Capzim
              </a>
            </div>

            <div className="hidden md:flex space-x-8">
              {navMenus.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  className="p-2 border-b-2 border-transparent hover:border-primary cursor-pointer transition-all duration-300 ease-linear font-semibold"
                >
                  {item.title}
                </a>
              ))}
            </div>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="z-50 focus:outline-none">
                <div
                  className={`w-6 h-1 bg-gray-500 transition-all duration-300 ease-in-out transform ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></div>
                <div
                  className={`w-6 h-1 bg-gray-500 transition-all duration-300 ease-in-out my-1 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></div>
                <div
                  className={`w-6 h-1 bg-gray-500 transition-all duration-300 ease-in-out transform ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></div>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg absolute top-16 w-full transition-all border-t-2">
              {navMenus.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 "
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
