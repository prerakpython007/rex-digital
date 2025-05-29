"use client"

import type React from "react"
import { useState, useEffect } from "react"
import VerticalNavbar from "./components/Navbar"

const RexDigitalLanding: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [showLanding, setShowLanding] = useState<boolean>(false)
  const [showNavbar, setShowNavbar] = useState<boolean>(false)
  const [loadingProgress, setLoadingProgress] = useState<number>(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Track mouse position for cursor effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Handle loading sequence with progress
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 2 + 0.5
      })
    }, 80)

    const loadingTimer = setTimeout(() => {
      setLoadingProgress(100)
      setTimeout(() => {
        setIsLoading(false)

        const showTimer = setTimeout(() => {
          setShowLanding(true)
          // Show navbar after landing page appears
          setTimeout(() => {
            setShowNavbar(true)
          }, 500)
        }, 500)

        return () => clearTimeout(showTimer)
      }, 1200)
    }, 3500)

    return () => {
      clearTimeout(loadingTimer)
      clearInterval(progressInterval)
    }
  }, [])

  return (
    <>
      <style jsx>{`
        /* Import Premium Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Playfair+Display:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&family=Exo+2:wght@300;400;500;600;700&display=swap');
        
        /* Custom cursor */
        * {
          cursor: none;
        }
        
        .custom-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          transition: transform 0.1s ease;
        }
        
        .cursor-trail {
          position: fixed;
          width: 8px;
          height: 8px;
          background: rgba(255, 107, 53, 0.6);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transition: all 0.3s ease;
        }

        /* Premium Loading Styles */
        .loading-container {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
          backdrop-filter: blur(20px);
        }
        
        .loading-logo {
          font-family: 'Playfair Display', serif;
          background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 50%, #e8e8e8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.1em;
        }
        
        .loading-progress-container {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .loading-progress-bar {
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0.8) 100%);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }
        
        .loading-dots {
          display: flex;
          gap: 8px;
        }
        
        .loading-dot {
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: loadingDots 1.5s ease-in-out infinite;
        }
        
        .loading-dot:nth-child(2) { animation-delay: 0.2s; }
        .loading-dot:nth-child(3) { animation-delay: 0.4s; }
        
        @keyframes loadingDots {
          0%, 80%, 100% { opacity: 0.3; transform: scale(1); }
          40% { opacity: 1; transform: scale(1.2); }
        }

        /* Premium Title Font */
        .title-font {
          font-family: 'Inter', sans-serif;
          font-weight: 200;
          letter-spacing: 0.05em;
        }
        
        /* Cursive Font for Web Designs */
        .cursive-font {
          font-family: 'Dancing Script', cursive;
          font-weight: 500;
        }
        
        .text-company-gradient {
          background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 25%, #ffffff 50%, #f0f0f0 75%, #ffffff 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: subtleShine 8s ease-in-out infinite;
        }
        
        @keyframes subtleShine {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Interactive Elements */
        .interactive-element {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .interactive-element:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }

        /* Existing animations and styles */
        .bg-particle-orange {
          background: radial-gradient(circle, rgba(255, 107, 53, 0.8), rgba(255, 107, 53, 0.2), transparent);
        }
        
        .bg-particle-red {
          background: radial-gradient(circle, rgba(255, 69, 0, 0.8), rgba(255, 69, 0, 0.2), transparent);
        }
        
        .bg-particle-yellow {
          background: radial-gradient(circle, rgba(255, 140, 0, 0.8), rgba(255, 140, 0, 0.2), transparent);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          50% { transform: translateY(-120px) rotate(180deg); opacity: 0.9; }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          50% { transform: translateY(-140px) rotate(180deg); opacity: 0.8; }
        }
        
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          50% { transform: translateY(-100px) rotate(180deg); opacity: 0.7; }
        }
        
        @keyframes text-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 30px rgba(255, 107, 53, 0.4), 0 0 60px rgba(255, 107, 53, 0.1);
          }
          50% { 
            box-shadow: 0 0 50px rgba(255, 107, 53, 0.6), 0 0 100px rgba(255, 107, 53, 0.2);
          }
        }

        .animate-float { animation: float 6s infinite ease-in-out; }
        .animate-float-slow { animation: float-slow 8s infinite ease-in-out; }
        .animate-float-slower { animation: float-slower 10s infinite ease-in-out; }
        .animate-text-float { animation: text-float 4s ease-in-out infinite; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }

        /* Video centering and stability */
        .video-container {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          transform: translate(-50%, -50%);
          z-index: -20;
        }

        /* Minimal Corner Angles */
        .corner-angle {
          position: absolute;
          width: 30px;
          height: 30px;
          z-index: 10;
          pointer-events: none;
          opacity: 0.4;
        }

        .corner-angle-tl {
          top: 30px;
          left: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.3);
          border-left: 1px solid rgba(255, 255, 255, 0.3);
        }

        .corner-angle-tr {
          top: 30px;
          right: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.3);
          border-right: 1px solid rgba(255, 255, 255, 0.3);
        }

        .corner-angle-bl {
          bottom: 30px;
          left: 30px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          border-left: 1px solid rgba(255, 255, 255, 0.3);
        }

        .corner-angle-br {
          bottom: 30px;
          right: 30px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          border-right: 1px solid rgba(255, 255, 255, 0.3);
        }

        /* Custom font classes */
        .font-exo {
          font-family: 'Exo 2', sans-serif;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .corner-angle {
            width: 25px;
            height: 25px;
          }
          
          .custom-cursor {
            display: none;
          }
          
          .cursor-trail {
            display: none;
          }
        }

        /* Radial Gradient */
        .bg-radial-gradient {
          background: radial-gradient(ellipse at center, rgba(255,107,53,0.05) 0%, rgba(0,0,0,0.95) 70%);
        }
      `}</style>

      <div className="m-0 p-0 font-exo overflow-hidden bg-black min-h-screen relative">
        {/* Custom Cursor */}
        <div
          className="custom-cursor"
          style={{
            left: mousePosition.x - 10,
            top: mousePosition.y - 10,
          }}
        />
        <div
          className="cursor-trail"
          style={{
            left: mousePosition.x - 4,
            top: mousePosition.y - 4,
          }}
        />

        {/* Web Designs Text at Top Center */}
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-20">
          <h2 className="cursive-font text-orange-500 text-lg md:text-xl lg:text-2xl">Web Designs</h2>
        </div>

        {/* Corner Angles */}
        <div className="corner-angle corner-angle-tl"></div>
        <div className="corner-angle corner-angle-tr"></div>
        <div className="corner-angle corner-angle-bl"></div>
        <div className="corner-angle corner-angle-br"></div>

        {/* Vertical Navbar Component - Only show after loading */}
        <VerticalNavbar show={showNavbar} />

        {/* Premium Loading Screen */}
        <div
          className={`loading-container fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center z-[1000] transition-all duration-1000 ease-out ${
            isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Loading Logo */}
          <div className="mb-16 text-center">
            <h1 className="loading-logo text-4xl md:text-5xl lg:text-6xl font-light tracking-wider">REX DIGITAL</h1>
            <div className="loading-dots mt-8 justify-center">
              <div className="loading-dot"></div>
              <div className="loading-dot"></div>
              <div className="loading-dot"></div>
            </div>
          </div>

          {/* Progress Container */}
          <div className="w-80 md:w-96 max-w-md">
            {/* Progress Bar */}
            <div className="loading-progress-container w-full h-[1px] rounded-full mb-4 relative overflow-hidden">
              <div
                className="loading-progress-bar h-full transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>

            {/* Progress Text */}
            <div className="text-center">
              <span className="text-white/60 text-xs font-light tracking-widest">{Math.round(loadingProgress)}%</span>
            </div>
          </div>
        </div>

        {/* Main Landing Page */}
        <div
          className={`relative w-full h-screen flex justify-center items-center transition-all duration-1000 ease-in ${
            showLanding ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          {/* Enhanced Video Background with Quality Optimization */}
          <video
            className="video-container"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/video-poster.jpg"
            style={{
              filter: "brightness(0.6) contrast(1.1) saturate(1.1)",
              objectFit: "cover",
            }}
            onLoadStart={() => console.log("Video loading started")}
            onCanPlay={() => console.log("Video can play")}
            onError={(e) => {
              console.log("Video failed to load, using fallback background")
              e.currentTarget.style.display = "none"
              const fallback = document.createElement("div")
              fallback.className = "video-container bg-gradient-to-br from-gray-900 via-black to-orange-900"
              fallback.style.background =
                "radial-gradient(ellipse at center, rgba(255,107,53,0.05) 0%, rgba(0,0,0,0.95) 70%)"
              e.currentTarget.parentNode?.appendChild(fallback)
            }}
          >
            <source src="/bg1.mp4" type="video/mp4" />
            <source src="/bg.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>

          {/* Enhanced Video Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 via-transparent to-black/50 -z-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient -z-10"></div>

          {/* Hero Content */}
          <div className="text-center text-white z-10 max-w-6xl px-4 sm:px-6 md:px-8">
            {/* Welcome Text */}
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white/80 mb-8 sm:mb-12 tracking-[0.2em] animate-text-float font-exo interactive-element">
              Welcome to
            </div>

            {/* Enhanced Company Name with Premium Typography */}
            <h1 className="title-font text-company-gradient relative inline-block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-extralight mb-6 sm:mb-8 md:mb-10 tracking-[0.1em] leading-none interactive-element">
              REX DIGITAL
            </h1>

            {/* Enhanced Slogan - Keeping Original Style */}
            <div className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-orange-500 tracking-[1px] sm:tracking-[2px] uppercase border-2 border-orange-500 py-3 sm:py-4 px-6 sm:px-8 rounded-full inline-block backdrop-blur-sm bg-orange-500/10 transition-all duration-300 hover:bg-orange-500/20 hover:-translate-y-1 hover:drop-shadow-[0_15px_35px_rgba(255,107,53,0.4)] animate-glow cursor-pointer font-exo">
              Crafting Digital Excellence
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RexDigitalLanding
