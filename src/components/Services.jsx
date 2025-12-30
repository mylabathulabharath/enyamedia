import React from 'react'
import BeforeAfterSlider from './BeforeAfterSlider'

const Services = () => {
  const services = [
    {
      name: 'Media Restoration',
      category: 'Restoration Services',
      description:
        'Restore damaged, degraded, or historical media to pristine condition. Our advanced AI-powered restoration brings old films, photos, and videos back to life, preserving memories for future generations.',
      highlights: [
        'Film and video restoration',
        'Photo restoration and repair',
        'Damage correction and enhancement',
        'Historical media preservation',
      ],
      hasComparison: false,
      mediaType: 'image',
      mediaUrl: '/resstore.png',
      gradient: 'from-purple-500/20 via-pink-500/20 to-blue-500/20',
    },
    {
      name: 'Recoloring',
      category: 'Colorization Services',
      description:
        'Transform black and white memories into vibrant, realistic color. Our AI-powered recoloring brings historical photos and vintage videos to life with intelligent colorization that understands context, lighting, and natural color palettes.',
      highlights: [
        'Breathe life into historical content',
        'Realistic color restoration for images and videos',
        'Intelligent context-aware colorization',
        'Preserve memories in full color',
      ],
      hasComparison: true,
      beforeImage: '/ccB_W.gif',
      afterImage: '/ccCOLOR.gif',
      beforeLabel: 'Grayscale',
      afterLabel: 'AI Colored',
      beforeMediaType: 'gif',
      afterMediaType: 'gif',
      gradient: 'from-blue-500/20 via-cyan-500/20 to-teal-500/20',
    },
    {
      name: 'Upscaling',
      category: 'Enhancement Services',
      description:
        'Enhance resolution and quality of low-resolution media using advanced AI upscaling technology. Transform pixelated images and videos into crisp, high-definition content suitable for modern displays.',
      highlights: [
        'AI-powered resolution enhancement',
        'Multi-frame video upscaling',
        'Detail preservation and sharpening',
        'Quality improvement for any media',
      ],
      hasComparison: false,
      mediaType: 'image',
      mediaUrl: '/upscaling.png',
      gradient: 'from-teal-500/20 via-green-500/20 to-emerald-500/20',
    },
    {
      name: 'Character Curation',
      category: 'Content Services',
      description:
        'Professional character and content curation services for media projects. From character design to content organization, we help bring your creative vision to life with precision and artistry.',
      highlights: [
        'Character design and development',
        'Content organization and curation',
        'Creative direction and guidance',
        'Professional media production support',
      ],
      hasComparison: false,
      mediaType: 'image',
      mediaUrl: '/character.png',
      gradient: 'from-orange-500/20 via-red-500/20 to-pink-500/20',
    },
    {
      name: 'Language Subtitling',
      category: 'Localization Services',
      description:
        'Professional subtitle creation and translation services for films, videos, and media content. Accurate, culturally-aware subtitles that make your content accessible to global audiences.',
      highlights: [
        'Multi-language subtitle creation',
        'Accurate translation and timing',
        'Cultural adaptation and localization',
        'Professional formatting and styling',
      ],
      hasComparison: false,
      mediaType: 'image',
      mediaUrl: '/subtitle.png',
      gradient: 'from-indigo-500/20 via-purple-500/20 to-pink-500/20',
    },
    {
      name: 'Dubbing Services',
      category: 'Localization Services',
      description:
        'High-quality dubbing services for films, videos, and multimedia content. Professional voice talent and seamless audio integration that maintains the original content\'s emotional impact and authenticity.',
      highlights: [
        'Professional voice talent',
        'Multi-language dubbing',
        'Lip-sync and timing precision',
        'Cultural and linguistic adaptation',
      ],
      hasComparison: false,
      mediaType: 'gif',
      mediaUrl: '/dubbing.png',
      gradient: 'from-red-500/20 via-orange-500/20 to-yellow-500/20',
    },
  ]

  return (
    <section id="services" className="section-padding bg-enyamedia-dark">
      <div className="container-custom">
        <div className="text-center mb-20">
          <span className="inline-block text-sm text-enyamedia-primary font-semibold uppercase tracking-widest mb-4 px-4 py-2 bg-enyamedia-primary/10 rounded-full border border-enyamedia-primary/30 backdrop-blur-sm">
            Services
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 text-white">
            Our Services
          </h2>
        </div>
        <div className="space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content Section */}
                <div className={index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}>
                  <span className="inline-block text-xs sm:text-sm text-enyamedia-primary font-semibold uppercase tracking-wider mb-4 px-4 py-2 bg-enyamedia-primary/10 rounded-full border border-enyamedia-primary/30">
                    {service.category}
                  </span>
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                    {service.name}
                  </h3>
                  <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group/item"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-enyamedia-primary/20 flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-enyamedia-primary/40 transition-colors">
                          <span className="text-enyamedia-primary text-xs">✓</span>
                        </div>
                        <span className="text-gray-200 text-sm sm:text-base leading-relaxed">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Section - Before/After Slider or Regular Image */}
                <div className={index % 2 === 0 ? 'order-1 lg:order-2 relative' : 'order-1 lg:order-1 relative'}>
                  {service.hasComparison ? (
                    <div className="relative rounded-2xl overflow-hidden glass-card border-2 border-white/10 hover:border-enyamedia-primary/50 transition-all duration-500 shadow-2xl">
                      <div className="aspect-video w-full">
                        <BeforeAfterSlider
                          beforeImage={service.beforeImage}
                          afterImage={service.afterImage}
                          beforeLabel={service.beforeLabel}
                          afterLabel={service.afterLabel}
                          beforeMediaType={service.beforeMediaType}
                          afterMediaType={service.afterMediaType}
                        />
                      </div>
                      {/* Gradient Overlay for Depth */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 pointer-events-none`}
                      />
                    </div>
                  ) : (
                    <div className="relative rounded-2xl overflow-hidden glass-card border-2 border-white/10 hover:border-enyamedia-primary/50 transition-all duration-500 shadow-2xl group/image">
                      <div className="aspect-video w-full relative overflow-hidden">
                        {service.mediaType === 'gif' ? (
                          <img
                            src={service.mediaUrl}
                            alt={service.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                            loading="eager"
                            onError={(e) => {
                              console.error('Failed to load GIF:', service.mediaUrl)
                            }}
                          />
                        ) : (
                          <div
                            className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover/image:scale-110"
                            style={{
                              backgroundImage: `url('${service.mediaUrl}')`,
                              filter: 'grayscale(20%) brightness(0.7)',
                            }}
                          />
                        )}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-30`}
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* Decorative Glow */}
                  <div className={`absolute -top-20 -right-20 w-64 h-64 bg-enyamedia-primary/10 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 ${index % 2 === 0 ? 'lg:-left-20 lg:right-auto' : 'lg:-right-20 lg:left-auto'}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

