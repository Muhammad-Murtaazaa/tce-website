import { useState, useMemo, useEffect, type FC } from 'react';
import {
  Layers,
  Wind,
  Building2,
  Activity,
  CheckCircle2,
  ArrowRight,
  Clock,
  ShieldCheck,
  Wrench,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface Discipline {
  name: string;
  description: string;
  deliverables: string[];
  standard: string;
}

interface ScopeCategory {
  id: string;
  icon: any;
  title: string;
  shortTitle: string;
  shortDesc: string;
  disciplines: Discipline[];
}

const SCOPES_DATA: ScopeCategory[] = [
  {
    id: 'hvac-engineering',
    icon: Wind,
    title: 'HVAC-R Climate Engineering',
    shortTitle: 'HVAC-R Systems',
    shortDesc: 'Complete mechanical HVAC supply, design-build thermodynamic load calculations, multi-zone VRV networks, and energy optimization.',
    disciplines: [
      {
        name: 'Daikin VRV & VRF Multi-Split Networks',
        description: 'Design and installation of modular variable refrigerant flow systems providing simultaneous cooling and heating with intelligent room sub-metering.',
        deliverables: ['Thermal cooling-load simulation', 'Refnet branch selector brazing', 'Micro-climate smart thermostat integration', 'Automated centralized BMS dashboard'],
        standard: 'Daikin Certified Standards'
      },
      {
        name: 'Rooftop Package Units & Chillers',
        description: 'High-tonnage packaged cooling solutions for large auditoriums, marquee event centers, corporate towers, and shopping malls.',
        deliverables: ['Vibration-isolated steel curb mounting', 'High-ambient condenser fan optimization', 'Factory commissioning & initial charge balancing', 'Multi-stage compressor sequencing'],
        standard: 'Heavy Industrial Rating'
      },
      {
        name: 'Light Commercial (Cassettes & Ducted Splits)',
        description: 'Concealed ceiling ducted and 4-way cassette units providing 360-degree silent air distribution for offices, clinics, and banks.',
        deliverables: ['Gravity/pump drain gradient testing', 'Acoustic diffuser positioning', 'Fresh air intake duct integration', 'Motorized airflow damper controls'],
        standard: 'ASHRAE Comfort Standard 55'
      },
      {
        name: 'Residential Inverter Splits',
        description: 'Energy-efficient home climate systems utilizing eco-friendly R-32 and R-410A refrigerants engineered to sustain continuous 50°C summer operation.',
        deliverables: ['Anti-vibration outdoor rubber grommets', 'Copper flare torque sealing', 'High-vacuum evacuation to 500 microns', 'Electrical surge protector integration'],
        standard: 'T3 High Ambient Certified'
      }
    ]
  },
  {
    id: 'copper-ducting',
    icon: Wrench,
    title: 'Copper Piping & Duct Fabrication',
    shortTitle: 'Copper & Ducting',
    shortDesc: 'Precision in-house mechanical fabrication of refrigeration copper line sets and heavy-gauge galvanized sheet metal ducting.',
    disciplines: [
      {
        name: 'Dry Nitrogen Purge Copper Brazing',
        description: 'Specialized silver alloy brazing performed under continuous inert nitrogen flow, ensuring zero internal copper oxide scaling inside refrigerant tubes.',
        deliverables: ['Deoxidized high-phosphorus seamless copper', 'Nitrogen hold pressure test at 550 PSI', 'Triple vacuum dehydration protocol', 'Closed-cell elastomeric thermal insulation'],
        standard: 'ASTM B280 Refrigeration Spec'
      },
      {
        name: 'Galvanized Sheet Metal (GI) Ducting',
        description: 'CNC-formed low-loss galvanized duct networks fabricated for optimal static pressure and whisper-quiet airflow delivery.',
        deliverables: ['SMACNA-compliant duct joints and seams', 'Internal acoustic acoustic lining', 'Fire dampers and volume control dampers (VCD)', 'Supply, return and exhaust air diffusers'],
        standard: 'SMACNA HVAC Duct Standard'
      },
      {
        name: 'Commercial Kitchen & Exhaust Balancing',
        description: 'Heavy grease and heat exhaust ventilation systems for restaurants, bakeries, and industrial food processing facilities.',
        deliverables: ['High-temperature stainless steel hood connections', 'Centrifugal belt-driven utility blowers', 'Make-up fresh air interlock systems', 'Zero static air stagnation balancing'],
        standard: 'Commercial F&B Code'
      },
      {
        name: 'Refrigerant Line Sizing & Flow Calculations',
        description: 'Accurate equivalent length calculations ensuring zero oil-trapping and proper compressor oil return across long pipe runs.',
        deliverables: ['Oil-return P-traps on vertical risers', 'Vibration eliminator bellows on discharge lines', 'Digital manifold commissioning logs', 'Factory-specified refrigerant top-up'],
        standard: 'OEM Piping Guidelines'
      }
    ]
  },
  {
    id: 'vshift-elevators',
    icon: Building2,
    title: 'V-Shift Vertical Transportation',
    shortTitle: 'V-Shift Elevators',
    shortDesc: 'Turnkey vertical mobility engineering encompassing passenger lifts, industrial cargo lifts, imported assemblies, and modernization.',
    disciplines: [
      {
        name: 'Passenger Elevators (MRL & Gearless)',
        description: 'State-of-the-art Machine-Room-Less (MRL) and gearless traction lifts delivering smooth acceleration, micro-leveling, and silent travel.',
        deliverables: ['German/Italian safety gear & overspeed governor', 'VVVF regenerative frequency drive control', 'Hairline stainless steel or panoramic glass cabin', 'Automatic Rescue Device (ARD) battery descent'],
        standard: 'EN 81 European Lift Safety'
      },
      {
        name: 'Heavy Industrial Cargo & Freight Lifts',
        description: 'Heavy-tonnage cargo lifts built to withstand forklift impacts, harsh chemical environments, and high-frequency pallet loading.',
        deliverables: ['Heavy-duty checker plate steel platform', 'Bi-parting reinforced steel hoistway doors', 'Hydraulic or heavy-traction lifting mechanism', 'Overload sensory lockout warning system'],
        standard: 'Heavy Freight Class-A/B/C'
      },
      {
        name: 'Elevator Modernization & Safety Retrofitting',
        description: 'Revitalizing legacy lift systems with microprocessor controller boards, new traction cables, and energy-efficient motor packages.',
        deliverables: ['Microprocessor serial communication controller', 'Infrared light curtain full-height door sensors', 'Emergency intercom and car alarm telemetry', 'Counterweight and guide rail realignments'],
        standard: 'Modernization Safety Code'
      },
      {
        name: 'Shaft Dimensioning & Architectural Coordination',
        description: 'Pre-construction hoistway engineering, pit depth calculations, overhead clearance verification, and structural bracket mounting.',
        deliverables: ['Autodesk 2D/3D hoistway layout drawings', 'Anchor bolt pull-test verification', 'Machine room / shaft ventilation calculations', 'Contractor coordination guidelines'],
        standard: 'Architectural Integration'
      }
    ]
  },
  {
    id: 'commissioning-maintenance',
    icon: Activity,
    title: 'Commissioning & Maintenance AMC',
    shortTitle: 'AMC & Testing',
    shortDesc: 'Certified testing, pre-commissioning checklists, 24/7 priority emergency dispatch, and preventative annual maintenance contracts.',
    disciplines: [
      {
        name: 'Annual Maintenance Contracts (AMC)',
        description: 'Customized preventative maintenance plans for corporate towers, hospitals, textile mills, and residential societies across Punjab.',
        deliverables: ['Monthly condenser chemical coil wash', 'Filter media replacement and sanitization', 'Operating pressure and amp draw logs', 'Priority 24/7 emergency dispatch hotline'],
        standard: 'Guaranteed SLA Uptime'
      },
      {
        name: 'Diagnostic Refrigerant Leak Testing',
        description: 'Non-destructive electronic sensor and ultraviolet dye testing to identify and eliminate micro-fissures in high-pressure VRV systems.',
        deliverables: ['Electronic halogen sniffer inspection', 'UV fluorescent dye pressure test', 'Nitrogen bubble immersion verification', 'R-410A / R-32 recovery and recycling'],
        standard: 'Zero Refrigerant Loss'
      },
      {
        name: 'Elevator Statutory Drop & Safety Testing',
        description: 'Routine dynamic safety gear tests, buffer inspections, and emergency governor trips to guarantee passenger safety.',
        deliverables: ['Safety gear free-fall drop test certification', 'Governor trip speed calibration', 'Emergency ARD battery run-time audit', 'Door safety touch sensor verification'],
        standard: 'Annual Safety Certification'
      },
      {
        name: 'Predictive Vibration & Motor Analysis',
        description: 'Early failure detection on blower motors, compressor bearings, and elevator traction sheaves before outages occur.',
        deliverables: ['Infrared thermal thermography imaging', 'Bearing FFT acoustic analysis', 'Laser motor pulley alignment', 'Detailed preventive health report'],
        standard: 'ISO 10816 Condition Severity'
      }
    ]
  }
];

export const ScopeOfWorkSection: FC<{ onOpenSchedule: () => void }> = ({ onOpenSchedule }) => {
  const [activeScopeId, setActiveScopeId] = useState<string>('hvac-engineering');
  const [currentPage, setCurrentPage] = useState<number>(0);

  const cardsPerPage = 2;

  // Selected Scope
  const currentScope = useMemo(() => {
    return SCOPES_DATA.find((s) => s.id === activeScopeId) || SCOPES_DATA[0];
  }, [activeScopeId]);

  // Current scope disciplines
  const currentDisciplines = currentScope.disciplines;
  const totalPages = Math.max(1, Math.ceil(currentDisciplines.length / cardsPerPage));

  // Reset page to 0 when category changes
  useEffect(() => {
    setCurrentPage(0);
  }, [activeScopeId]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  // Slice disciplines for current page
  const visibleDisciplines = useMemo(() => {
    const start = currentPage * cardsPerPage;
    return currentDisciplines.slice(start, start + cardsPerPage);
  }, [currentDisciplines, currentPage, cardsPerPage]);

  return (
    <section id="scope-of-work" className="scope-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head-center">
          <div className="section-pill">
            <Layers size={14} className="pill-icon" />
            <span>Interactive Engineering Scope</span>
          </div>
          <h2 className="section-title">
            Our Defined <span className="text-highlight-red">Scope of Work</span>
          </h2>
          <p className="section-subtitle">
            An interactive carousel breakdown of HVAC-R mechanical disciplines, precision copper fabrication standards,
            and V-Shift vertical mobility engineering protocols executed by Technicool Engineering.
          </p>

          {/* Scope Pillar Selector */}
          <div className="scope-pillar-selector">
            {SCOPES_DATA.map((scope) => {
              const Icon = scope.icon;
              const isActive = scope.id === activeScopeId;
              return (
                <button
                  key={scope.id}
                  className={`scope-pillar-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveScopeId(scope.id)}
                >
                  <Icon size={18} className="scope-btn-icon" />
                  <span>{scope.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Scope Content Box */}
        <div className="scope-display-container">
          <div className="scope-overview-bar">
            <div className="scope-overview-left">
              <h3 className="scope-display-title">{currentScope.title}</h3>
              <p className="scope-display-desc">{currentScope.shortDesc}</p>
            </div>
            <button className="btn-scope-consult" onClick={onOpenSchedule}>
              <span>Request Engineering Consultation</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Scope Carousel Controls Bar */}
          <div className="carousel-controls-bar">
            <div className="carousel-status-info">
              <span>
                Showing disciplines <strong>{currentPage * cardsPerPage + 1}–{Math.min((currentPage + 1) * cardsPerPage, currentDisciplines.length)}</strong> of <strong>{currentDisciplines.length}</strong> in <strong>{currentScope.shortTitle}</strong>
              </span>
            </div>

            {/* Navigation Arrows */}
            <div className="carousel-nav-buttons">
              <button
                className="carousel-btn prev-btn"
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                aria-label="Previous disciplines slide"
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
                disabled={currentPage >= totalPages - 1}
                aria-label="Next disciplines slide"
                title="Next Slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Carousel Slide Cards */}
          <div className="scope-carousel-wrapper" key={`${activeScopeId}-${currentPage}`}>
            <div className="scope-disciplines-grid">
              {visibleDisciplines.map((item, idx) => {
                const globalIdx = currentPage * cardsPerPage + idx;
                return (
                  <div key={idx} className="scope-discipline-card carousel-card-enter">
                    <div className="discipline-header">
                      <span className="discipline-number">0{globalIdx + 1}</span>
                      <span className="discipline-standard-badge">{item.standard}</span>
                    </div>

                    <h4 className="discipline-name">{item.name}</h4>
                    <p className="discipline-desc">{item.description}</p>

                    <div className="discipline-deliverables">
                      <div className="deliverables-title">Technical Deliverables:</div>
                      <ul className="deliverables-list">
                        {item.deliverables.map((deliv, dIdx) => (
                          <li key={dIdx}>
                            <CheckCircle2 size={14} className="text-blue-accent" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dot Indicators */}
          {totalPages > 1 && (
            <div className="carousel-dots-row" style={{ marginTop: '24px' }}>
              {Array.from({ length: totalPages }).map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  className={`carousel-dot ${dotIdx === currentPage ? 'active' : ''}`}
                  onClick={() => setCurrentPage(dotIdx)}
                  aria-label={`Jump to slide ${dotIdx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Scope Assurance Guarantee */}
        <div className="scope-compliance-strip">
          <div className="compliance-item">
            <ShieldCheck size={20} className="compliance-icon" />
            <div>
              <strong>OEM & International Compliance:</strong> Strict adherence to Daikin, Midea, SMACNA, and EN 81 engineering baselines.
            </div>
          </div>
          <div className="compliance-item">
            <Clock size={20} className="compliance-icon" />
            <div>
              <strong>Guaranteed Project Delivery:</strong> Transparent bill of quantities (BOQ) with fixed engineering estimates prior to installation.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
