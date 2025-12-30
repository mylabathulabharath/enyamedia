import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-enyamedia-dark-lighter border-t border-white/10 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-4 sm:px-6 lg:px-8">
          
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} enyaMedia
            </p>
            <p className="text-gray-500 text-xs mt-1">
              India: Cohort – Co Working, Kondapur, Hyderabad, Telangana
            </p>
            <p className="text-gray-500 text-xs mt-1">
              USA: Texas, United States of America
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <a
              href="mailto:info@enyamedia.com"
              className="text-gray-400 hover:text-enyamedia-primary transition-colors text-sm"
            >
              info@enyamedia.com
            </a>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/enyamedia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-enyamedia-primary transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/enyamedia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-enyamedia-primary transition-colors text-sm"
              >
                GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
