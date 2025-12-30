import React from 'react'

const CTA = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="cta" className="section-padding bg-enyamedia-dark">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">
            Let's Build the Future Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Ready to transform your ideas into intelligent, scalable platforms?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:contact@enyamedia.com"
              className="px-8 py-3 bg-enyamedia-primary text-enyamedia-dark font-semibold rounded-lg hover:bg-enyamedia-primary/90 transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
            <a
              href="mailto:collaborate@enyamedia.com"
              className="px-8 py-3 glass-card text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Collaborate With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

