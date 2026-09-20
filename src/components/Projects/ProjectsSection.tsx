import { useState, useMemo, useEffect, type FC } from 'react';
import {
  Building2,
  Wind,
  MapPin,
  CheckCircle2,
  Layers,
  Wrench,
  ChevronLeft,
  ChevronRight,
  Clock
} from 'lucide-react';
import {
  PROJECTS_LIST,
  type VerticalType,
  type SectorType
} from '../../data/projectsData';

export const ProjectsSection: FC = () => {
  const [verticalFilter, setVerticalFilter] = useState<VerticalType>('all');
  const [sectorFilter, setSectorFilter] = useState<SectorType>('all');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');

  // Compute filtered projects
  const filteredProjects = useMemo(() => {
    return PROJECTS_LIST.filter((p) => {
      const matchVertical = verticalFilter === 'all' || p.vertical === verticalFilter;
      const matchSector = sectorFilter === 'all' || p.sector === sectorFilter;
      return matchVertical && matchSector;
    });
  }, [verticalFilter, sectorFilter]);

  // Responsive cards per page calculation (1 on mobile, 2 on tablet, 3 on desktop)
  const [cardsPerPage, setCardsPerPage] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
    }
    return 3;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / cardsPerPage));

  // Reset to first slide whenever filters or cardsPerPage change
  useEffect(() => {
    setCurrentPage(0);
  }, [verticalFilter, sectorFilter, cardsPerPage]);

  // Ensure currentPage is always within bounds
  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(Math.max(0, totalPages - 1));
    }
  }, [totalPages, currentPage]);

  // Continuous autoplay motion: automatically advances projects every 4.5 seconds
  useEffect(() => {
    if (isPaused || totalPages <= 1) return;
    const interval = setInterval(() => {
      setSlideDirection('next');
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, totalPages]);

  const handlePrevPage = () => {
    setSlideDirection('prev');
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNextPage = () => {
    setSlideDirection('next');
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  // Touch Swipe Gesture Support for Mobile
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (touchStartX === null || touchEndX === null) return;
    const diff = touchStartX - touchEndX;
    const threshold = 40; // minimum swipe distance in px
    if (diff > threshold) {
      // Swiped left -> next
      handleNextPage();
    } else if (diff < -threshold) {
      // Swiped right -> prev
      handlePrevPage();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const currentProjects = useMemo(() => {
    const start = currentPage * cardsPerPage;
    return filteredProjects.slice(start, start + cardsPerPage);
  }, [filteredProjects, currentPage, cardsPerPage]);

  const hvacCount = PROJECTS_LIST.filter((p) => p.vertical === 'hvac').length;
  const elevatorCount = PROJECTS_LIST.filter((p) => p.vertical === 'elevators').length;

  const sectors: SectorType[] = [
    'all',
    'Industrial',
    'Corporate',
    'Healthcare',
    'Retail',
    'F&B',
    'Education',
    'Religious',
    'Residential'
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head-center">
          <h2 className="section-title">
            Flagship HVAC-R & <span className="text-highlight-red">V-Shift Elevator</span> Projects
          </h2>
          <p className="section-subtitle">
            Explore our carousel of 33 mission-critical installations across Pakistan—from heavy industrial fertilizer plants
            and healthcare cleanrooms to corporate banking headquarters and multi-story passenger lift banks.
          </p>
        </div>

        {/* 1. Interactive Filter Controls */}
        <div className="projects-filter-wrapper">
          {/* Primary Vertical Filter (All / HVAC / Elevators) */}
          <div className="vertical-filter-tabs">
            <button
              className={`v-filter-btn ${verticalFilter === 'all' ? 'active' : ''}`}
              onClick={() => setVerticalFilter('all')}
            >
              <span>All Projects ({PROJECTS_LIST.length})</span>
            </button>
            <button
              className={`v-filter-btn hvac-btn ${verticalFilter === 'hvac' ? 'active' : ''}`}
              onClick={() => setVerticalFilter('hvac')}
            >
              <Wind size={15} />
              <span>HVAC-R Solutions ({hvacCount})</span>
            </button>
            <button
              className={`v-filter-btn elevator-btn ${verticalFilter === 'elevators' ? 'active' : ''}`}
              onClick={() => setVerticalFilter('elevators')}
            >
              <Building2 size={15} />
              <span>V-Shift Elevators ({elevatorCount})</span>
            </button>
          </div>

          {/* Secondary Sector Filter (Pills) */}
          <div className="sector-filter-pills">
            <span className="sector-filter-label">Filter by Sector:</span>
            {sectors.map((sec, idx) => (
              <button
                key={idx}
                className={`sector-pill-btn ${sectorFilter === sec ? 'active' : ''}`}
                onClick={() => setSectorFilter(sec)}
              >
                {sec === 'all' ? 'All Sectors' : sec}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Carousel Controls Bar */}
        <div className="carousel-controls-bar">
          <div className="carousel-status-info">
            <span>
              Showing projects <strong>{filteredProjects.length > 0 ? currentPage * cardsPerPage + 1 : 0}–{Math.min((currentPage + 1) * cardsPerPage, filteredProjects.length)}</strong> of <strong>{filteredProjects.length}</strong>
            </span>
            {(verticalFilter !== 'all' || sectorFilter !== 'all') && (
              <button
                className="btn-clear-filters"
                onClick={() => {
                  setVerticalFilter('all');
                  setSectorFilter('all');
                }}
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Arrow Buttons */}
          <div className="carousel-nav-buttons">
            <button
              className="carousel-btn prev-btn"
              onClick={handlePrevPage}
              aria-label="Previous projects slide"
              title="Previous Slide"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="carousel-page-indicator">
              Slide {currentPage + 1} / {totalPages}
            </span>
            <button
              className="carousel-btn next-btn"
              onClick={handleNextPage}
              aria-label="Next projects slide"
              title="Next Slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* 4. Projects Carousel Cards Grid with Animated Motion & Touch Gestures */}
        <div
          className="projects-carousel-wrapper"
          key={currentPage}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="projects-grid">
            {currentProjects.map((project, pIdx) => (
              <div
                key={project.id}
                className={`project-card carousel-card-enter ${
                  slideDirection === 'next' ? 'slide-from-right' : 'slide-from-left'
                }`}
                style={{ animationDelay: `${pIdx * 0.08}s` }}
              >
                {/* Background Project Photograph */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-card-bg-img"
                    loading="lazy"
                  />
                )}

                {/* Dark Gradient Overlay for Maximum Readability */}
                <div className="project-card-overlay" />

                {/* Card Content Foreground */}
                <div className="project-card-content">
                  {/* Card Header */}
                  <div className="project-card-header">
                    <div className="project-card-top-bar">
                      <div className="project-tags-row">
                        <span
                          className={`project-division-badge ${
                            project.vertical === 'elevators' ? 'badge-elevator' : 'badge-hvac'
                          }`}
                        >
                          {project.vertical === 'elevators' ? 'V-Shift Elevators' : 'HVAC-R Solutions'}
                        </span>
                        <span className="project-sector-tag">{project.sector}</span>
                      </div>

                      {project.logo && (
                        <div className="project-logo-badge" title={`${project.name} Logo`}>
                          <img src={project.logo} alt={project.name} className="project-badge-img" loading="lazy" />
                        </div>
                      )}
                    </div>

                    <h3 className="project-card-title">{project.name}</h3>

                    <div className="project-meta-location">
                      <MapPin size={14} className="text-location" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="project-card-body">
                    <div className="project-system-badge">
                      {project.vertical === 'elevators' ? (
                        <Building2 size={15} color="#fbbf24" />
                      ) : (
                        <Layers size={15} color="#38bdf8" />
                      )}
                      <strong>{project.brandOrType}</strong>
                    </div>

                    <div className="project-spec-title">
                      <Wrench size={13} style={{ marginRight: '6px', display: 'inline' }} />
                      {project.system}
                    </div>

                    <p className="project-description">{project.description}</p>
                  </div>

                  {/* Card Footer */}
                  <div className="project-card-footer">
                    <div className="project-verified-tag">
                      <CheckCircle2 size={14} color="#4ade80" />
                      <span>Commissioned & Verified</span>
                    </div>
                    <span className="project-id-chip">{project.id.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators & Mobile Progress */}
        {totalPages > 1 && (
          <div className="carousel-dots-container">
            {/* Mobile Progress Bar (active on mobile) */}
            <div className="carousel-mobile-progress-wrap" aria-hidden="true">
              <div
                className="carousel-mobile-progress-bar"
                style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
              />
            </div>

            {/* Desktop & Tablet Dot Indicators */}
            <div className="carousel-dots-row">
              {Array.from({ length: totalPages }).map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  className={`carousel-dot ${dotIdx === currentPage ? 'active' : ''}`}
                  onClick={() => setCurrentPage(dotIdx)}
                  aria-label={`Jump to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Mobile Swipe Hint */}
            <div className="carousel-swipe-hint">
              <span>← Swipe cards or tap arrows to navigate ({currentPage + 1}/{totalPages}) →</span>
            </div>
          </div>
        )}

        {/* Bottom Portfolio Guarantee Cards - 3 Distinct Cards in a Single Row */}
        <div className="projects-metrics-row">
          <div className="project-metric-card">
            <div className="metric-icon-wrap metric-blue">
              <Building2 size={22} />
            </div>
            <div className="metric-card-content">
              <span className="metric-card-val">33+</span>
              <span className="metric-card-label">Major Projects Commissioned in Pakistan</span>
            </div>
          </div>

          <div className="project-metric-card">
            <div className="metric-icon-wrap metric-green">
              <CheckCircle2 size={22} />
            </div>
            <div className="metric-card-content">
              <span className="metric-card-val">100%</span>
              <span className="metric-card-label">Factory OEM Standards Compliance</span>
            </div>
          </div>

          <div className="project-metric-card">
            <div className="metric-icon-wrap metric-red">
              <Clock size={22} />
            </div>
            <div className="metric-card-content">
              <span className="metric-card-val">24/7</span>
              <span className="metric-card-label">Technician Dispatch & Rapid Support AMC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
