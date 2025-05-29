"use client"

import { useEffect, useState } from "react"

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("about-section")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about-section" className="relative w-full py-24 bg-[#000101] px-4 sm:px-6 lg:px-8">
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }
        
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .delay-200 { transition-delay: 0.2s; }
        .delay-400 { transition-delay: 0.4s; }
        .delay-600 { transition-delay: 0.6s; }
        
        .highlight {
          background: linear-gradient(90deg, rgba(255, 107, 53, 0.2), transparent);
          padding: 0 8px;
          border-radius: 4px;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Main Glass Card */}
        <div className={`glass-card rounded-3xl p-8 md:p-12 lg:p-16 fade-in ${isVisible ? "visible" : ""}`}>
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white/90 mb-12 tracking-wide">
            About <span className="text-orange-500">Rex Digital</span>
          </h2>

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Company Description */}
            <div className={`fade-in delay-200 ${isVisible ? "visible" : ""}`}>
              <h3 className="text-2xl font-light text-white/80 mb-6">Who We Are</h3>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Rex Digital is a forward-thinking web design studio crafting premium digital experiences for brands that
                demand excellence.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Founded in 2023, we combine cutting-edge technology with minimalist design principles to create websites
                that not only look stunning but perform flawlessly.
              </p>
            </div>

            {/* Right Column - Values & Approach */}
            <div className={`fade-in delay-400 ${isVisible ? "visible" : ""}`}>
              <h3 className="text-2xl font-light text-white/80 mb-6">Our Approach</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">01</span>
                  <div>
                    <h4 className="text-xl text-white/90 mb-1">Minimalist Design</h4>
                    <p className="text-white/70">Clean aesthetics with purpose-driven elements</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">02</span>
                  <div>
                    <h4 className="text-xl text-white/90 mb-1">Performance First</h4>
                    <p className="text-white/70">Optimized code for lightning-fast experiences</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">03</span>
                  <div>
                    <h4 className="text-xl text-white/90 mb-1">User-Centered</h4>
                    <p className="text-white/70">Intuitive interfaces that guide and delight</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats Section */}
          <div
            className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 fade-in delay-600 ${isVisible ? "visible" : ""}`}
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-orange-500 mb-2">45+</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-orange-500 mb-2">12</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-orange-500 mb-2">98%</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-orange-500 mb-2">24/7</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Support</div>
            </div>
          </div>

          {/* CTA */}
          <div className={`mt-16 text-center fade-in delay-600 ${isVisible ? "visible" : ""}`}>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-orange-500/20 hover:bg-orange-500/30 text-orange-500 rounded-full border border-orange-500/30 transition-all duration-300 text-lg backdrop-blur-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
