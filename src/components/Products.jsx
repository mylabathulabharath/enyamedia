import React from 'react'
import BeforeAfterSlider from './BeforeAfterSlider'

const Products = () => {
  const products = [
    {
      name: 'AI Coloring',
      category: 'AI / Computer Vision',
      description:
        'Transform black and white memories into vibrant, realistic color. AI Coloring brings historical photos and vintage videos to life with intelligent colorization that understands context, lighting, and natural color palettes.',
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
      gradient: 'from-purple-500/20 via-pink-500/20 to-blue-500/20',
    },
    {
      name: 'AI Movie Making',
      category: 'AI / Video Generation',
      description:
        'Create cinematic videos from text prompts using advanced AI models and workflow orchestration. Powered by ComfyUI and cutting-edge diffusion models for professional-grade video generation with precise control over every frame.',
      highlights: [
        'Text-to-video generation with advanced AI models',
        'ComfyUI workflow orchestration for complex pipelines',
        'Frame-by-frame control and consistency',
        'Professional-grade cinematic output',
      ],
      hasComparison: false,
      mediaType: 'image',
      mediaUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&q=80',
      gradient: 'from-blue-500/20 via-cyan-500/20 to-teal-500/20',
    },
    {
      name: 'Charitha',
      category: 'Media & Streaming',
      description:
        'Experience seamless video streaming with intelligent content delivery. Charitha adapts to your connection, device, and preferences to deliver the perfect viewing experience every time.',
      highlights: [
        'Adaptive streaming for any connection',
        'Crystal-clear video quality',
        'Personalized content recommendations',
        'Watch anywhere, anytime, on any device',
      ],
      hasComparison: false,
      mediaType: 'gif',
      mediaUrl: '/charitha.gif',
      gradient: 'from-red-500/20 via-orange-500/20 to-yellow-500/20',
    },
  ]

  return (
    <section id="products" className="section-padding bg-enyamedia-dark">
      <div className="container-custom">
        <div className="text-center mb-20">
          <span className="inline-block text-sm text-enyamedia-primary font-semibold uppercase tracking-widest mb-4 px-4 py-2 bg-enyamedia-primary/10 rounded-full border border-enyamedia-primary/30 backdrop-blur-sm">
            Products
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 text-white">
            Our Products
          </h2>
        </div>
        <div className="space-y-32">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content Section */}
                <div className={index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}>
                  <span className="inline-block text-xs sm:text-sm text-enyamedia-primary font-semibold uppercase tracking-wider mb-4 px-4 py-2 bg-enyamedia-primary/10 rounded-full border border-enyamedia-primary/30">
                    {product.category}
                  </span>
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.highlights.map((highlight, idx) => (
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
                  {product.hasComparison ? (
                    <div className="relative rounded-2xl overflow-hidden glass-card border-2 border-white/10 hover:border-enyamedia-primary/50 transition-all duration-500 shadow-2xl">
                      <div className="aspect-video w-full">
                        <BeforeAfterSlider
                          beforeImage={product.beforeImage}
                          afterImage={product.afterImage}
                          beforeLabel={product.beforeLabel}
                          afterLabel={product.afterLabel}
                          beforeMediaType={product.beforeMediaType}
                          afterMediaType={product.afterMediaType}
                        />
                      </div>
                      {/* Gradient Overlay for Depth */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20 pointer-events-none`}
                      />
                    </div>
                  ) : (
                    <div className="relative rounded-2xl overflow-hidden glass-card border-2 border-white/10 hover:border-enyamedia-primary/50 transition-all duration-500 shadow-2xl group/image">
                      <div className="aspect-video w-full relative overflow-hidden">
                        {product.mediaType === 'gif' ? (
                          <img
                            src={product.mediaUrl}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                            loading="eager"
                            onError={(e) => {
                              console.error('Failed to load GIF:', product.mediaUrl)
                            }}
                          />
                        ) : (
                          <div
                            className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover/image:scale-110"
                            style={{
                              backgroundImage: `url('${product.mediaUrl}')`,
                              filter: 'grayscale(20%) brightness(0.7)',
                            }}
                          />
                        )}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-30`}
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

export default Products

