import React, { useState, useEffect, useRef, useMemo, type FC } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  CheckCircle2,
  Compass,
  FileText
} from 'lucide-react';
import {
  ELEVATOR_SERIES_DATA,
  type ElevatorCategory,
  type ElevatorSeriesItem
} from '../../data/elevatorData';

export const ElevatorShowcase: FC = () => {
  const [activeCategory, setActiveCategory] = useState<ElevatorCategory>('all');
  const [selectedItemForModal, setSelectedItemForModal] = useState<ElevatorSeriesItem | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  // Filter series items
  const filteredSeries = useMemo(() => {
    if (activeCategory === 'all') return ELEVATOR_SERIES_DATA;
    return ELEVATOR_SERIES_DATA.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Triple items for seamless infinite marquee loop
  const tripledSeries = useMemo(() => {
    return [...filteredSeries, ...filteredSeries, ...filteredSeries];
  }, [filteredSeries]);

  // Position at the middle loop on category change
  useEffect(() => {
    const initMiddle = () => {
      const el = scrollContainerRef.current;
      if (!el) return;
      const oneThird = el.scrollWidth / 3;
      if (oneThird > 0) {
        el.scrollLeft = oneThird;
      }
    };
    initMiddle();
    const t = setTimeout(initMiddle, 60);
    return () => clearTimeout(t);
  }, [filteredSeries]);

  // Continuous auto-glide animation loop
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      // Continuously glide when not hovered and not actively dragged
      if (!isHoveredRef.current && !isMouseDownRef.current && el) {
        el.scrollLeft += 46 * delta; // Silky smooth glide ~46px/s

        // Seamless infinite wrap-around
        const oneThird = el.scrollWidth / 3;
        if (oneThird > 0) {
          if (el.scrollLeft >= oneThird * 2) {
            el.scrollLeft -= oneThird;
          } else if (el.scrollLeft <= 20) {
            el.scrollLeft += oneThird;
          }
        }
      }

      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [filteredSeries]);

  // Handle wrap-around during user drag or smooth arrow scroll
  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const oneThird = el.scrollWidth / 3;
    if (oneThird > 0) {
      if (el.scrollLeft >= oneThird * 2 + 300) {
        el.scrollLeft -= oneThird;
      } else if (el.scrollLeft <= 40) {
        el.scrollLeft += oneThird;
      }
    }
  };

  const getCardStep = () => {
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.querySelector('.elevator-card') as HTMLElement;
      if (firstCard) {
        return firstCard.offsetWidth + 24;
      }
    }
    return window.innerWidth < 768 ? 320 : 420;
  };

  // Next Arrow: jump to the next elevator series card
  const handleNext = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const step = getCardStep();
    el.scrollBy({ left: step, behavior: 'smooth' });
  };

  // Prev Arrow: jump to the previous elevator series card
  const handlePrev = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const step = getCardStep();
    el.scrollBy({ left: -step, behavior: 'smooth' });
  };

  // Mouse hover & drag interaction handlers (allows fast movement on hover)
  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    isMouseDownRef.current = false;
    setIsDragging(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    isMouseDownRef.current = true;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftStartRef.current = el.scrollLeft;
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeftStartRef.current - walk;
  };

  const handleMouseUp = () => {
    isMouseDownRef.current = false;
    setIsDragging(false);
  };

  // Mouse wheel / trackpad scroll support
  const handleWheel = (e: React.WheelEvent) => {
    if (!scrollContainerRef.current) return;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) > 4) {
      scrollContainerRef.current.scrollLeft += delta * 1.2;
    }
  };

  const categories: { key: ElevatorCategory; label: string; count: number }[] = [
    { key: 'all', label: 'All Cabin Series', count: ELEVATOR_SERIES_DATA.length },
    { key: 'passenger', label: 'Passenger & Luxury Cabins', count: ELEVATOR_SERIES_DATA.filter((i) => i.category === 'passenger').length },
    { key: 'panoramic', label: 'Panoramic Observation Glass', count: ELEVATOR_SERIES_DATA.filter((i) => i.category === 'panoramic').length },
    { key: 'hospital', label: 'Hospital Stretcher & Bed Lifts', count: ELEVATOR_SERIES_DATA.filter((i) => i.category === 'hospital').length },
    { key: 'villa', label: 'Villa & Platform Lifts', count: ELEVATOR_SERIES_DATA.filter((i) => i.category === 'villa').length },
    { key: 'doors', label: 'Landing Door Series', count: ELEVATOR_SERIES_DATA.filter((i) => i.category === 'doors').length }
  ];

  return (
    <div id="elevator-cabin-showcase" className="elevator-showcase-section">
      {/* Showcase Sub-Header */}
      <div className="elevator-showcase-head">
        <h3 className="elevator-showcase-title">
          Elevator Cabin Finishes & <span className="text-highlight-red">Engineering Series</span>
        </h3>
        <p className="elevator-showcase-desc">
          Browse certified V-Shift elevator cabin interior architectures, panoramic sightseeing glass cars, hospital stretcher transports, 
          and custom residential villa platforms engineered for Pakistan's premier infrastructure.
        </p>

        {/* Filter Pills */}
        <div className="elevator-filter-pills">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`elevator-filter-pill ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              <span>{cat.label}</span>
              <span className="filter-pill-count">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Floating Side Arrow Controls + Carousel Viewport */}
      <div
        className="elevator-marquee-viewport"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="elevator-fade-left" />
        <div className="elevator-fade-right" />

        {/* Left Floating Arrow */}
        <button
          className="elevator-side-nav-btn prev-btn"
          onClick={handlePrev}
          aria-label="Previous Elevator Model"
          title="Previous Model"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Right Floating Arrow */}
        <button
          className="elevator-side-nav-btn next-btn"
          onClick={handleNext}
          aria-label="Next Elevator Model"
          title="Next Model"
        >
          <ChevronRight size={28} />
        </button>

        {/* Interactive Scroll Container */}
        <div
          ref={scrollContainerRef}
          className={`elevator-scroll-container ${isDragging ? 'is-dragging' : ''}`}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onWheel={handleWheel}
        >
          {tripledSeries.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="elevator-card"
            >
              {/* Card Header Badge */}
              <div className="elevator-card-top-bar">
                <span className="elevator-card-tag">{item.badge}</span>
                <span className="elevator-model-code">{item.modelCodes}</span>
              </div>

              {/* Card Image with Lightbox Zoom Trigger */}
              <div
                className="elevator-card-media-wrap"
                onClick={() => setSelectedItemForModal(item)}
                title="Click to view full-resolution specification sheet"
              >
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.badge} (${item.modelCodes}) Architectural Specifications`}
                  className="elevator-card-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="elevator-media-hover-overlay">
                  <div className="elevator-zoom-pill">
                    <Maximize2 size={16} />
                    <span>View Full Catalog Sheet</span>
                  </div>
                </div>
              </div>

              {/* Card Body Details */}
              <div className="elevator-card-body">
                <h4 className="elevator-card-name">{item.title}</h4>
                <p className="elevator-card-sub">{item.subtitle}</p>

                {/* Application Tag */}
                <div className="elevator-app-box">
                  <div className="elevator-app-title">
                    <Compass size={14} className="text-blue" />
                    <span>Engineered For:</span>
                  </div>
                  <span className="elevator-app-text">{item.bestFor}</span>
                </div>

                <p className="elevator-card-desc-text">{item.description}</p>

                {/* Specifications Grid */}
                <div className="elevator-specs-grid">
                  <div className="elevator-spec-cell">
                    <span className="spec-cell-label">Ceiling:</span>
                    <span className="spec-cell-val">{item.specs.ceiling}</span>
                  </div>
                  <div className="elevator-spec-cell">
                    <span className="spec-cell-label">Car Wall:</span>
                    <span className="spec-cell-val">{item.specs.carWall}</span>
                  </div>
                  <div className="elevator-spec-cell">
                    <span className="spec-cell-label">Handrail:</span>
                    <span className="spec-cell-val">{item.specs.handrail}</span>
                  </div>
                  <div className="elevator-spec-cell">
                    <span className="spec-cell-label">Floor:</span>
                    <span className="spec-cell-val">{item.specs.flooring}</span>
                  </div>
                </div>

                {/* Features Bullets */}
                <ul className="elevator-feature-list">
                  {item.features.slice(0, 3).map((feat, fIdx) => (
                    <li key={fIdx}>
                      <CheckCircle2 size={15} className="elevator-check-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="elevator-card-actions">
                  <button
                    className="btn-elevator-view-sheet"
                    onClick={() => setSelectedItemForModal(item)}
                    title="Inspect Full Specifications"
                  >
                    <FileText size={16} />
                    <span>View Specifications & Drawings</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for High-Resolution Catalog Sheet */}
      {selectedItemForModal && (
        <div className="elevator-lightbox-backdrop" onClick={() => setSelectedItemForModal(null)}>
          <div className="elevator-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="elevator-lightbox-header">
              <div>
                <div className="lightbox-badge">{selectedItemForModal.badge}</div>
                <h3 className="lightbox-title">{selectedItemForModal.title}</h3>
                <span className="lightbox-models">{selectedItemForModal.modelCodes}</span>
              </div>
              <button
                className="elevator-lightbox-close"
                onClick={() => setSelectedItemForModal(null)}
                aria-label="Close"
              >
                <X size={22} />
              </button>
            </div>

            <div className="elevator-lightbox-image-wrap">
              <img
                src={selectedItemForModal.image}
                alt={`${selectedItemForModal.title} - ${selectedItemForModal.badge} (${selectedItemForModal.modelCodes}) High-Resolution Catalog Sheet`}
                className="elevator-lightbox-img"
                decoding="async"
              />
            </div>

            <div className="elevator-lightbox-footer">
              <div className="lightbox-footer-info">
                <span className="lightbox-info-label">Application Scope:</span>
                <span className="lightbox-info-text">{selectedItemForModal.bestFor}</span>
              </div>
              <button
                className="btn-lightbox-action"
                onClick={() => setSelectedItemForModal(null)}
              >
                <span>Close Specifications Sheet</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
