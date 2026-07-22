import React, { useState, useRef, useCallback, useEffect } from 'react';

export default function ImageSlider({ 
  beforeImage, 
  afterImage, 
  beforeLabel = "Before", 
  afterLabel = "After", 
  beforeStyle = {} 
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    if (e.touches && e.touches[0]) {
      updatePosition(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    };

    const handleTouchMove = (e) => {
      if (!isDragging || !e.touches || !e.touches[0]) return;
      updatePosition(e.touches[0].clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, updatePosition]);

  return (
    <div 
      className="ba-slider-container"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
    >
      {/* After Image (Background, Full Width) */}
      <img src={afterImage} alt={afterLabel} className="ba-slider-img" />
      
      {/* Before Image (Foreground, Clipped) */}
      <div 
        className="ba-slider-clip"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`, WebkitClipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={beforeImage} alt={beforeLabel} className="ba-slider-img" style={beforeStyle} />
      </div>

      {/* Slider Handle Line & Button */}
      <div 
        className="ba-slider-handle"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="ba-slider-line"></div>
        <div className="ba-slider-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 17L3 12M3 12L8 7M3 12H21M16 17L21 12M21 12L16 7" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Badges / Labels */}
      <div className="ba-label ba-label-before" style={{ opacity: sliderPosition > 10 ? 1 : 0 }}>
        {beforeLabel}
      </div>
      <div className="ba-label ba-label-after" style={{ opacity: sliderPosition < 90 ? 1 : 0 }}>
        {afterLabel}
      </div>
    </div>
  );
}
