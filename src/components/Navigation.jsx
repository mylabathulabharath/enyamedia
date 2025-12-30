import React, { useState, useEffect } from 'react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-enyamedia-dark/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="/enya_logo.png"
              alt="enyaMedia Logo"
              className="h-8 w-auto"
            />
            <span className="text-2xl font-bold text-enyamedia-primary">
              Media
            </span>
          </button>
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('what-we-build')}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              What We Build
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('technology')}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Technology
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="text-sm text-enyamedia-primary hover:text-enyamedia-primary/80 transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

