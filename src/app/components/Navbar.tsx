"use client"

import { useState } from "react"

interface VerticalNavbarProps {
  show: boolean
}

const VerticalNavbar = ({ show }: VerticalNavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ]

  if (!show) return null

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap');
        
        .hamburger-line {
          transition: all 0.3s ease;
        }
        
        .hamburger-open .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(3px, 3px);
        }
        
        .hamburger-open .hamburger-line:nth-child(2) {
          opacity: 0;
          transform: scale(0);
        }
        
        .hamburger-open .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(3px, -3px);
        }

        .nav-item {
          transition: all 0.3s ease;
          font-family: 'Montserrat', sans-serif;
        }

        .nav-open .nav-item:nth-child(1) { transition-delay: 0.1s; }
        .nav-open .nav-item:nth-child(2) { transition-delay: 0.15s; }
        .nav-open .nav-item:nth-child(3) { transition-delay: 0.2s; }
        .nav-open .nav-item:nth-child(4) { transition-delay: 0.25s; }
        .nav-open .nav-item:nth-child(5) { transition-delay: 0.3s; }

        .nav-closing .nav-item:nth-child(5) { transition-delay: 0.05s; }
        .nav-closing .nav-item:nth-child(4) { transition-delay: 0.1s; }
        .nav-closing .nav-item:nth-child(3) { transition-delay: 0.15s; }
        .nav-closing .nav-item:nth-child(2) { transition-delay: 0.2s; }
        .nav-closing .nav-item:nth-child(1) { transition-delay: 0.25s; }
      `}</style>

      {/* Toggle Button */}
      <button
        className={`fixed top-10 left-10 z-[1100] w-10 h-10 bg-black/80 border-none rounded cursor-pointer flex flex-col items-center justify-center gap-[3px] md:top-8 md:left-8 md:w-9 md:h-9 sm:top-6 sm:left-6 sm:w-8 sm:h-8 ${isOpen ? "hamburger-open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="hamburger-line block w-[18px] h-[2px] bg-white rounded-[1px] md:w-4 sm:w-[14px]"></span>
        <span className="hamburger-line block w-[18px] h-[2px] bg-white rounded-[1px] md:w-4 sm:w-[14px]"></span>
        <span className="hamburger-line block w-[18px] h-[2px] bg-white rounded-[1px] md:w-4 sm:w-[14px]"></span>
      </button>

      {/* Vertical Navbar */}
      <nav
        className={`fixed top-[90px] left-10 z-[1090] transition-all duration-300 ease-in-out md:top-[75px] md:left-8 sm:top-[65px] sm:left-6 ${
          isOpen ? "opacity-100 visible translate-y-0 nav-open" : "opacity-0 invisible -translate-y-2.5 nav-closing"
        }`}
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`nav-item block text-white no-underline py-3 px-5 bg-black/80 mb-[1px] rounded text-xl leading-6 font-thin md:text-lg md:py-2.5 md:px-4 sm:text-base sm:py-2 sm:px-3 ${
              isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2.5"
            }`}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </>
  )
}

export default VerticalNavbar
