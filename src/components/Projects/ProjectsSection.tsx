import { useState, useMemo, useRef, useEffect, type FC } from 'react';
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

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef<boolean>(false);
  const isMouseDownRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const scrollLeftStartRef = useRef<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const rafIdRef = useRef<number | null>(null);

  // Compute filtered projects
  const filteredProjects = useMemo(() => {
    return PROJECTS_LIST.filter((p) => {
      const matchVertical = verticalFilter === 'all' || p.vertical === verticalFilter;
      const matchSector = sectorFilter === 'all' || p.sector === sectorFilter;
      return matchVertical && matchSector;
    });
  }, [verticalFilter, sectorFilter]);

  // Duplicate filtered projects in 3 sets for seamless infinite scrolling in both directions
  const displayProjects = useMemo(() => {
    if (filteredProjects.length === 0) return [];
    let list = [...filteredProjects];
    while (list.length < 8) {
      list = [...list, ...filteredProjects];
    }
    return [...list, ...list, ...list];
  }, [filteredProjects]);

  // Position initial scroll position to middle set (Set 2 of 3)
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const initMiddle = () => {
      const oneThird = el.scrollWidth / 3;
      if (oneThird > 0) {
        el.scrollLeft = oneThird;
      }
    };
    initMiddle();
    const t = setTimeout(initMiddle, 60);
    return () => clearTimeout(t);
  }, [displayProjects]);

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
        el.scrollLeft += 48 * delta; // Silky smooth ~48px/s

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
  }, [displayProjects]);

  // Handle wrap-around during user drag or smooth arrow scroll
  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const oneThird = el.scrollWidth / 3;
    if (oneThird > 0) {
      if (el.scrollLeft >= oneThird * 2 + 400) {
        el.scrollLeft -= oneThird;
      } else if (el.scrollLeft <= 50) {
        el.scrollLeft += oneThird;
      }
    }
  };

  const getCardStep = () => {
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.querySelector('.project-card') as HTMLElement;
      if (firstCard) {
        return firstCard.offsetWidth + 24;
      }
    }
    return window.innerWidth < 768 ? 334 : 404;
  };

  // Next Arrow: jump to the next project card
  const handleNext = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const step = getCardStep();
    el.scrollBy({ left: step, behavior: 'smooth' });
  };

  // Prev Arrow: jump to the previous project card
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

  const hvacCount = PROJECTS_LIST.filter((p) => p.vertical === 'hvac').length;
  const elevatorCount = PROJECTS_LIST.filter((p) => p.vertical === 'elevators').length;

  const sectors: SectorType[] = [
    'all',
    'Industrial',
    'Corporate',
    'Healthcare',
    'Retail',
    'F&B',
    'Hospitality',
    'Government',
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
            Explore our carousel of {PROJECTS_LIST.length} mission-critical installations across Pakistan—from luxury coastal resorts
            and heavy industrial fertilizer plants to corporate banking headquarters and multi-story passenger lift banks.
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

        {/* Reset filters pill if filters applied */}
        {(verticalFilter !== 'all' || sectorFilter !== 'all') && (
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <button
              className="btn-clear-filters"
              onClick={() => {
                setVerticalFilter('all');
                setSectorFilter('all');
              }}
            >
              Reset Filters ({filteredProjects.length} found)
            </button>
          </div>
        )}
      </div>

      {/* 2. Full-Width Continuous Moving Projects Carousel */}
      <div
        className="projects-marquee-viewport"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Soft edge gradient fades */}
        <div className="projects-fade-left" aria-hidden="true" />
        <div className="projects-fade-right" aria-hidden="true" />

        {/* Floating Left Navigation Arrow Button: jumps to previous project */}
        <button
          type="button"
          className="projects-side-nav-btn prev-btn"
          onClick={handlePrev}
          aria-label="Previous project"
          title="Previous Project"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Floating Right Navigation Arrow Button: jumps to next project */}
        <button
          type="button"
          className="projects-side-nav-btn next-btn"
          onClick={handleNext}
          aria-label="Next project"
          title="Next Project"
        >
          <ChevronRight size={24} />
        </button>

        <div
          ref={scrollContainerRef}
          className={`projects-scroll-container ${isDragging ? 'is-dragging' : ''}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onWheel={handleWheel}
          onScroll={handleScroll}
        >
          {displayProjects.map((project, pIdx) => (
            <div
              key={`${project.id}-loop-${pIdx}`}
              className="project-card"
            >
              {/* Background Project Photograph */}
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.name} - ${project.location} Engineering Installation`}
                  className="project-card-bg-img"
                  loading="lazy"
                  decoding="async"
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
                        <img src={project.logo} alt={`${project.name} Client Logo`} className="project-badge-img" loading="lazy" decoding="async" />
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

      <div className="container">

        {/* Bottom Portfolio Guarantee Cards - 3 Distinct Cards in a Single Row */}
        <div className="projects-metrics-row">
          <div className="project-metric-card">
            <div className="metric-icon-wrap metric-blue">
              <Building2 size={22} />
            </div>
            <div className="metric-card-content">
              <span className="metric-card-val">37+</span>
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
