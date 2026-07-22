import React, { useState, useRef, useEffect } from 'react';

export default function ImageSlider({ beforeImage, afterImage, beforeLabel = "Before", afterLabel = "After", beforeStyle = {} }) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const onMouseMove = (e) => handleMove(e.clientX);
  const onTouchMove = (e) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', () => setIsDragging(false));
      window.addEventListener('touchmove', onTouchMove, { passive: false });
      window.addEventListener('touchend', () => setIsDragging(false));
    } else {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', () => setIsDragging(false));
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', () => setIsDragging(false));
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', () => setIsDragging(false));
    };
  }, [isDragging]);

  return (
    <div 
      className="ba-slider-container"
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After Image (Background, Full Width) */}
      <img src={afterImage} alt="After" className="ba-slider-img" />
      
      {/* Before Image (Foreground, Clipped) */}
      <div 
        className="ba-slider-clip"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={beforeImage} alt="Before" className="ba-slider-img" style={beforeStyle} />
      </div>

      {/* Slider Handle */}
      <div 
        className="ba-slider-handle"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="ba-slider-line"></div>
        <div className="ba-slider-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 17L3 12M3 12L8 7M3 12H21M16 17L21 12M21 12L16 7" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="ba-label ba-label-before" style={{ opacity: sliderPosition > 15 ? 1 : 0 }}>
        {beforeLabel}
      </div>
      <div className="ba-label ba-label-after" style={{ opacity: sliderPosition < 85 ? 1 : 0 }}>
        {afterLabel}
      </div>
    </div>
  );
}
