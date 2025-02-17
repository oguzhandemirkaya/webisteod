"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md shadow-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-center">
        
        {/* Desktop Menü */}
        <ul className="hidden md:flex space-x-8 text-white font-medium text-lg">
          {["Home", "Technologies", "Works", "Clients", "Contact"].map((item, index) => (
            <li key={index}>
              {pathname === "/" ? (
                <ScrollLink
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={400}
                  className="cursor-pointer hover:text-purple-400 transition-all duration-300"
                >
                  {item}
                </ScrollLink>
              ) : (
                <Link
                  href={`/#${item.toLowerCase()}`}
                  className="cursor-pointer hover:text-purple-400 transition-all duration-300"
                >
                  {item}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobil Menü Butonu */}
        <div className="md:hidden absolute right-6 text-white text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobil Menü */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg p-5 text-center md:hidden shadow-lg"
        >
          <ul className="text-white space-y-4 text-lg font-medium">
            {["Home", "Technologies", "Works", "Clients", "Contact"].map((item, index) => (
              <li key={index}>
                {pathname === "/" ? (
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={800}
                    className="cursor-pointer hover:text-purple-400 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </ScrollLink>
                ) : (
                  <Link
                    href={`/#${item.toLowerCase()}`}
                    className="cursor-pointer hover:text-purple-400 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
