import React, { useState, useRef, useCallback, useEffect } from 'react';

export default function ImageSlider({ 
  beforeImage, 
  afterImage, 
  beforeLabel = "Altes Design (Vorher)", 
  afterLabel = "Neues Design (Nachher)", 
  beforeStyle = {} 
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState('slider'); // 'slider' | 'before' | 'after'
  const containerRef = useRef(null);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = (e) => {
    if (viewMode !== 'slider') setViewMode('slider');
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handleTouchStart = (e) => {
    if (viewMode !== 'slider') setViewMode('slider');
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

  // Determine active clip percentage based on viewMode
  const activePosition = viewMode === 'before' ? 100 : viewMode === 'after' ? 0 : sliderPosition;

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      {/* Mode Switcher Tabs */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '12px', 
        marginBottom: '20px',
        zIndex: 10,
        position: 'relative' 
      }}>
        <button
          type="button"
          onClick={() => { setViewMode('before'); setSliderPosition(100); }}
          style={{
            padding: '8px 18px',
            borderRadius: '20px',
            border: '1px solid ' + (viewMode === 'before' ? 'var(--accent-color)' : 'rgba(255,255,255,0.15)'),
            backgroundColor: viewMode === 'before' ? 'rgba(242, 91, 36, 0.2)' : 'rgba(255,255,255,0.05)',
            color: viewMode === 'before' ? '#fff' : 'var(--color-text-soft)',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          🔴 {beforeLabel}
        </button>

        <button
          type="button"
          onClick={() => { setViewMode('slider'); setSliderPosition(50); }}
          style={{
            padding: '8px 18px',
            borderRadius: '20px',
            border: '1px solid ' + (viewMode === 'slider' ? 'var(--accent-color)' : 'rgba(255,255,255,0.15)'),
            backgroundColor: viewMode === 'slider' ? 'rgba(242, 91, 36, 0.2)' : 'rgba(255,255,255,0.05)',
            color: viewMode === 'slider' ? '#fff' : 'var(--color-text-soft)',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          ↔️ Interaktiver Slider
        </button>

        <button
          type="button"
          onClick={() => { setViewMode('after'); setSliderPosition(0); }}
          style={{
            padding: '8px 18px',
            borderRadius: '20px',
            border: '1px solid ' + (viewMode === 'after' ? 'var(--accent-color)' : 'rgba(255,255,255,0.15)'),
            backgroundColor: viewMode === 'after' ? 'rgba(242, 91, 36, 0.2)' : 'rgba(255,255,255,0.05)',
            color: viewMode === 'after' ? '#fff' : 'var(--color-text-soft)',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          🟢 {afterLabel}
        </button>
      </div>

      {/* Main Image Slider Container */}
      <div 
        className="ba-slider-container"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        style={{ 
          userSelect: 'none', 
          WebkitUserSelect: 'none', 
          position: 'relative', 
          borderRadius: '16px', 
          overflow: 'hidden', 
          background: '#080808',
          aspectRatio: '16/10'
        }}
      >
        {/* After Image (Background) */}
        <img 
          src={afterImage} 
          alt={afterLabel} 
          className="ba-slider-img" 
          style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
        />
        
        {/* Before Image (Foreground, Clipped) */}
        <div 
          className="ba-slider-clip"
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            overflow: 'hidden', 
            pointerEvents: 'none',
            clipPath: `polygon(0 0, ${activePosition}% 0, ${activePosition}% 100%, 0 100%)` 
          }}
        >
          <img 
            src={beforeImage} 
            alt={beforeLabel} 
            className="ba-slider-img" 
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', background: '#080808', ...beforeStyle }} 
          />
        </div>

        {/* Slider Handle Line & Button */}
        {viewMode === 'slider' && (
          <div 
            className="ba-slider-handle"
            style={{ left: `${activePosition}%`, position: 'absolute', top: 0, bottom: 0, zIndex: 20 }}
          >
            <div className="ba-slider-line"></div>
            <div className="ba-slider-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 17L3 12M3 12L8 7M3 12H21M16 17L21 12M21 12L16 7" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
