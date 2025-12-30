import React, { useState, useEffect, useRef } from 'react'

const Hero = () => {
  const [isColored, setIsColored] = useState(false)
  const hasScrolled = useRef(false)

  useEffect(() => {
    // Auto transition after 2 seconds
    const timer = setTimeout(() => {
      setIsColored(true)
    }, 2000)

    // Transition on scroll
    const handleScroll = () => {
      if (!hasScrolled.current && window.scrollY > 50) {
        setIsColored(true)
        hasScrolled.current = true
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Image with Grayscale Transition */}
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-[2000ms] ${
          isColored ? 'grayscale-0 scale-105' : 'grayscale scale-100'
        }`}
        style={{
          backgroundImage: `url('/hero2.jpeg')`,
          filter: isColored ? 'grayscale(0%)' : 'grayscale(100%)',
        }}
      />

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-enyamedia-dark/90 via-enyamedia-dark/70 to-enyamedia-dark/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-enyamedia-dark via-transparent to-transparent opacity-60" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="mb-6">
          <span className="inline-block text-sm sm:text-base text-enyamedia-primary font-semibold uppercase tracking-widest mb-4 px-4 py-2 bg-enyamedia-primary/10 rounded-full border border-enyamedia-primary/30 backdrop-blur-sm">
            AI-Powered Technology Studio
          </span>
        </div>
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight flex items-center justify-center gap-2">
          {/* Logo that slides in from behind */}
          <div className="relative h-16 sm:h-20 lg:h-24 w-auto overflow-hidden">
            <img
              src="/enya_logo.png"
              alt="enyaMedia Logo"
              className="h-full w-auto object-contain animate-slide-in-logo"
              style={{
                animationDelay: '0.5s',
              }}
            />
          </div>
          {/* "Media" text that stays constant */}
          <span className="bg-gradient-to-r from-white via-enyamedia-primary to-white bg-clip-text text-transparent">
            Media
          </span>
        </h1>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6 text-gray-100 tracking-tight">
          Engineering Intelligence.
          <br />
          <span className="text-enyamedia-primary">Designing the Future.</span>
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          enyaMedia is a technology studio building AI-powered platforms,
          intelligent automation systems, and scalable digital products.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('products')}
            className="group relative px-10 py-4 bg-enyamedia-primary text-enyamedia-dark font-semibold rounded-xl hover:bg-enyamedia-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-enyamedia-primary/50 hover:shadow-enyamedia-primary/70"
          >
            <span className="relative z-10">Explore Our Products</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-enyamedia-primary to-enyamedia-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button
            onClick={() => scrollToSection('cta')}
            className="px-10 py-4 glass-card text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-enyamedia-primary/50 backdrop-blur-md"
          >
            Partner With Us
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

