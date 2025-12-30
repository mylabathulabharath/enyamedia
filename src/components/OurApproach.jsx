import React from 'react'

const OurApproach = () => {
  const principles = [
    {
      statement: 'Engineering is the foundation, not an afterthought',
      explanation: 'Every decision starts with system architecture. We build for scale, reliability, and long-term maintainability from day one—not as optimizations later.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      gradient: 'from-blue-500/20 via-cyan-500/20 to-teal-500/20',
    },
    {
      statement: 'AI is applied only where it creates measurable leverage',
      explanation: 'We use AI models when they solve real operational problems. No AI for the sake of AI. Every model deployment must justify its computational cost and complexity.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      gradient: 'from-purple-500/20 via-pink-500/20 to-blue-500/20',
    },
    {
      statement: 'Products are designed to survive real-world scale',
      explanation: 'We build systems that handle production load, edge cases, and failure modes. What works in development must work under real constraints—latency, throughput, and reliability.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      gradient: 'from-orange-500/20 via-red-500/20 to-pink-500/20',
    },
  ]

  return (
    <section id="approach" className="section-padding bg-enyamedia-dark relative">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <div className="inline-block text-xs text-gray-500 font-mono uppercase tracking-widest mb-4">
            How We Think
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
            Our Approach
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mt-6 max-w-3xl leading-relaxed">
            These principles guide every technical decision. They are not aspirations—they are constraints we work within.
          </p>
        </div>

        {/* Principles with Images */}
        <div className="space-y-12 lg:space-y-16">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-enyamedia-primary/30 transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className={`relative h-64 lg:h-auto overflow-hidden ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${principle.image}')`,
                      filter: 'grayscale(30%) brightness(0.4)',
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-60`} />
                  <div className="absolute inset-0 bg-enyamedia-dark/40" />
                  
                  {/* Number Badge */}
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-enyamedia-primary/20 backdrop-blur-sm border border-enyamedia-primary/30 flex items-center justify-center">
                    <span className="text-enyamedia-primary font-bold text-lg">{index + 1}</span>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`relative p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 group-hover:text-enyamedia-primary/80 transition-colors duration-300">
                    {principle.statement}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                    {principle.explanation}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-enyamedia-primary/5 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-enyamedia-primary/0 group-hover:bg-enyamedia-primary/5 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 lg:mt-20 pt-8 border-t border-white/5">
          <p className="text-sm text-gray-500 font-mono uppercase tracking-widest text-center">
            These principles are non-negotiable
          </p>
        </div>
      </div>
    </section>
  )
}

export default OurApproach
