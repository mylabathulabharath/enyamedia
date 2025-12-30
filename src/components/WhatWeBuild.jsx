import React from 'react'

const WhatWeBuild = () => {
  const systems = [
    {
      title: 'Intelligence Layers',
      description: 'AI systems that understand and respond in real-time, powering smart features in our products.',
      featured: true,
    },
    {
      title: 'AI Video Generation',
      description: 'Create professional videos from simple text descriptions using advanced AI technology.',
    },
    {
      title: 'Product Infrastructure',
      description: 'Reliable and scalable systems that keep our products running smoothly for millions of users.',
    },
    {
      title: 'Media & Streaming',
      description: 'Fast and seamless video delivery that adapts to any device or connection speed.',
    },
  ]

  return (
    <section
      id="what-we-build"
      className="section-padding bg-enyamedia-dark relative"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-block text-xs text-gray-500 font-mono uppercase tracking-widest mb-4">
            Systems & Platforms
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            What We Build
          </h2>
        </div>

        {/* Hybrid Layout */}
        <div className="space-y-8">
          {/* Featured System */}
          <div className="group relative border-l-4 border-enyamedia-primary/50 pl-8 py-6 hover:border-enyamedia-primary transition-colors duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-enyamedia-primary/80 transition-colors">
              {systems[0].title}
            </h3>
            <p className="text-base text-gray-400">
              {systems[0].description}
            </p>
          </div>

          {/* Compact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {systems.slice(1).map((system, index) => (
              <div
                key={index}
                className="group relative border-l-2 border-white/5 pl-6 py-4 hover:border-enyamedia-primary/30 transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-enyamedia-primary/80 transition-colors">
                  {system.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {system.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeBuild
