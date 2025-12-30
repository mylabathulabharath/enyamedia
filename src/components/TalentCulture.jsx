import React from 'react'

const TalentCulture = () => {
  const culture = {
    statement: 'We are engineers and system builders. Depth over speed. Systems over shortcuts. Production outcomes over demos.',
    principles: [
      'Depth over speed',
      'Systems over shortcuts',
      'Curiosity with discipline',
      'Responsibility for outcomes',
    ],
  }

  return (
    <section
      id="talent-culture"
      className="section-padding bg-enyamedia-dark-lighter relative"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-block text-xs text-gray-500 font-mono uppercase tracking-widest mb-4">
            Culture & Philosophy
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Talent & Culture
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Culture Statement */}
          <div>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              {culture.statement}
            </p>
          </div>

          {/* Principles List */}
          <div className="space-y-6">
            {culture.principles.map((principle, index) => (
              <div
                key={index}
                className="group relative border-l-2 border-white/5 pl-6 hover:border-enyamedia-primary/30 transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-enyamedia-primary/80 transition-colors">
                  {principle}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TalentCulture
