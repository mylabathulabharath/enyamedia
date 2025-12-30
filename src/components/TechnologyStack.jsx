import React from 'react'

const TechnologyStack = () => {
  const aiGroups = [
    {
      title: 'ComfyUI & Workflow Orchestration',
      description: 'Advanced node-based workflows for complex AI video generation pipelines.',
    },
    {
      title: 'Diffusion Models',
      description: 'State-of-the-art text-to-video and image-to-video models for cinematic output.',
    },
    {
      title: 'Model Runtimes',
      description: 'Optimized inference engines for video generation workloads on GPU/CPU.',
    },
    {
      title: 'Video Processing & Post-Production',
      description: 'Frame interpolation, upscaling, and consistency systems for professional output.',
    },
  ]

  return (
    <section
      id="technology"
      className="section-padding bg-enyamedia-dark-lighter relative"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-block text-xs text-gray-500 font-mono uppercase tracking-widest mb-4">
            AI Capability Stack
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Technology That Powers Us
          </h2>
        </div>

        {/* Premium Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {aiGroups.map((group, index) => (
            <div
              key={index}
              className="group relative border-l-4 border-white/10 pl-6 lg:pl-8 py-6 lg:py-8 hover:border-enyamedia-primary/50 transition-all duration-300 bg-white/0 hover:bg-white/5 rounded-r-lg"
            >
              {/* Number Indicator */}
              <div className="absolute -left-2 top-6 w-4 h-4 rounded-full bg-enyamedia-dark-lighter border-2 border-white/10 group-hover:border-enyamedia-primary/50 transition-all duration-300" />
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-enyamedia-primary/80 transition-colors duration-300">
                {group.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {group.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-r-lg bg-enyamedia-primary/0 group-hover:bg-enyamedia-primary/5 transition-all duration-500 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnologyStack
