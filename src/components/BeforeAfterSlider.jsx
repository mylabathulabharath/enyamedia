import React, { useState, useRef, useEffect } from 'react'

const BeforeAfterSlider = ({ 
  beforeImage, 
  afterImage, 
  beforeLabel = 'Before', 
  afterLabel = 'After', 
  beforeMediaType = 'image',
  afterMediaType = 'image'
}) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const updateSliderPosition = (clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        updateSliderPosition(e.clientX)
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    const handleTouchMove = (e) => {
      if (isDragging && e.touches[0]) {
        updateSliderPosition(e.touches[0].clientX)
      }
    }

    const handleTouchEnd = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', handleTouchEnd)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isDragging])

  const handleMouseDown = (e) => {
    e.preventDefault()
    setIsDragging(true)
    updateSliderPosition(e.clientX)
  }

  const handleTouchStart = (e) => {
    e.preventDefault()
    setIsDragging(true)
    if (e.touches[0]) {
      updateSliderPosition(e.touches[0].clientX)
    }
  }

  const handleClick = (e) => {
    if (!isDragging) {
      updateSliderPosition(e.clientX)
    }
  }

  const renderMedia = (src, mediaType, isBefore = false) => {
    switch (mediaType) {
      case 'gif':
        return (
          <img
            src={src}
            alt={isBefore ? beforeLabel : afterLabel}
            className="w-full h-full object-cover"
            style={isBefore ? { filter: 'grayscale(100%)' } : {}}
            loading="eager"
            onError={(e) => {
              console.error('Failed to load image:', src)
            }}
          />
        )
      case 'video':
        return (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={isBefore ? { filter: 'grayscale(100%)' } : {}}
          >
            <source src={src} type="video/mp4" />
          </video>
        )
      default:
        return (
          <img
            src={src}
            alt={isBefore ? beforeLabel : afterLabel}
            className="w-full h-full object-cover"
            style={isBefore ? { filter: 'grayscale(100%)' } : {}}
          />
        )
    }
  }

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden group">
      <div
        ref={containerRef}
        className="relative w-full h-full cursor-col-resize select-none"
        onMouseDown={handleMouseDown}
        onClick={handleClick}
        onTouchStart={handleTouchStart}
      >
        {/* After Image/Video/GIF (Right Side - Full Width) */}
        <div className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          {renderMedia(afterImage, afterMediaType, false)}
        </div>

        {/* Before Image/GIF (Left Side - Width Based Reveal) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ width: `${sliderPosition}%`, zIndex: 2 }}
        >
          {renderMedia(beforeImage, beforeMediaType, true)}
        </div>

        {/* Slider Line and Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white z-20 shadow-2xl pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-grab active:cursor-grabbing hover:scale-110 transition-transform pointer-events-auto">
            <div className="flex space-x-1">
              <div className="w-1 h-4 bg-enyamedia-dark rounded-full"></div>
              <div className="w-1 h-4 bg-enyamedia-dark rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-lg text-white text-sm font-semibold z-10 pointer-events-none">
          {beforeLabel}
        </div>
        <div className="absolute top-4 right-4 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-lg text-white text-sm font-semibold z-10 pointer-events-none">
          {afterLabel}
        </div>

        {/* Arrow Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-lg text-white text-xs font-medium z-10 flex items-center space-x-2 animate-pulse pointer-events-none">
          <span>← Drag to compare →</span>
        </div>
      </div>
    </div>
  )
}

export default BeforeAfterSlider
