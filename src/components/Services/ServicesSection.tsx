import { useState, type FC } from 'react';
import {
  Wind,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Layers,
  ThermometerSnowflake,
  Building2
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

interface ServiceItem {
  id: string;
  category: 'hvac' | 'elevators' | 'piping' | 'commercial';
  title: string;
  badge: string;
  icon: any;
  description: string;
  keyFeatures: string[];
  specs: string;
  sla: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'residential-hvac',
    category: 'hvac',
    title: 'Residential Inverter & Split Systems',
    badge: 'HVAC-R • Residential',
    icon: Wind,
    description: 'Conventional split and inverter single-split air conditioning systems engineered for rapid cooling in extreme summer temperatures while cutting electricity consumption.',
    keyFeatures: [
      'Inverter single-split units up to 60% power reduction',
      'High ambient T3 compressors operational up to 52°C',
      'Low-noise indoor blowers (<22 dB whisper quiet)',
      'Authorized Midea, Daikin, and AirX units with official warranty'
    ],
    specs: 'SEER ratings up to 20+ | Eco-friendly R-32 & R-410A',
    sla: 'Same-day installation & diagnostic support'
  },
  {
    id: 'light-commercial-hvac',
    category: 'hvac',
    title: 'Light Commercial (Cassette, Ducted & Floor Standing)',
    badge: 'HVAC-R • Commercial',
    icon: ThermometerSnowflake,
    description: 'Versatile cooling and heating architectures for retail outlets, bank branches, executive boardrooms, and medical clinics.',
    keyFeatures: [
      '4-way 360° airflow ceiling cassette units with condensation lift pumps',
      'High static pressure ducted split systems concealed in false ceilings',
      'High-capacity floor standing tower units for showrooms and banquet halls',
      'Ceiling exposed systems for industrial architectural interiors'
    ],
    specs: 'Capacities from 2.0 to 10.0 Tons per circuit',
    sla: 'Preventative quarterly maintenance packages'
  },
  {
    id: 'commercial-vrv-vrf',
    category: 'commercial',
    title: 'Commercial Daikin VRV & VRF Multi-Zone Networks',
    badge: 'Flagship Engineering',
    icon: Layers,
    description: 'Turnkey Variable Refrigerant Volume (VRV/VRF) engineering. Centralized climate automation with individual room temperature zoning for multi-story towers and hospitals.',
    keyFeatures: [
      'Daikin VRV simultaneous heating and cooling with heat recovery',
      'Automated building management system (BMS) central monitoring',
      'Modular outdoor condenser banks with low roof footprint',
      'Proven installations at Allied Bank Head Office, Ayat Hospital & UMT'
    ],
    specs: 'Modulation down to 10% capacity | Extended 1000m piping',
    sla: 'Dedicated corporate emergency response squad'
  },
  {
    id: 'copper-piping-ducting',
    category: 'piping',
    title: 'Copper Piping & Galvanized Sheet Metal Ducting',
    badge: 'Technical Fabrication',
    icon: Sparkles,
    description: 'Precision mechanical shop fabrication. Copper refrigeration lines brazed under inert dry nitrogen purge, paired with CNC-formed galvanized ducting.',
    keyFeatures: [
      'Zero-leak nitrogen-purged silver brazing preventing internal scaling',
      'Thermal acoustic insulation preventing sweating and duct vibration',
      'Industrial kitchen exhaust hood balancing and fresh air make-up',
      'High-grade gauge galvanized steel (GI) meeting SMACNA standards'
    ],
    specs: 'Pressure tested to 550 PSI nitrogen hold',
    sla: 'Full photographic inspection & test certification'
  },
  {
    id: 'vshift-passenger-lifts',
    category: 'elevators',
    title: 'V-Shift Passenger Elevators (MRL & Traction)',
    badge: 'V-Shift Elevators Division',
    icon: Building2,
    description: 'High-speed passenger lifts engineered for corporate towers, healthcare centers, and luxury residences. Combining whisper-quiet VVVF drive control with Italian/German safety components.',
    keyFeatures: [
      'Machine-Room-Less (MRL) technology saving architectural roof space',
      'Automatic Rescue Device (ARD) ensuring safe landing during power outages',
      'Customized panoramic glass cabins and hairline stainless steel interiors',
      'Micro-stepping floor leveling accuracy within ±2mm'
    ],
    specs: 'Speeds from 1.0 m/s to 2.5 m/s | Capacity 4 to 20 Persons',
    sla: '24/7 elevator emergency rescue dispatch'
  },
  {
    id: 'vshift-cargo-lifts',
    category: 'elevators',
    title: 'V-Shift Heavy Duty Industrial Cargo & Freight Lifts',
    badge: 'V-Shift Elevators Division',
    icon: ShieldCheck,
    description: 'Rugged hydraulic and heavy traction freight lifts built for chemical plants, food warehouses, textile mills, and commercial complexes.',
    keyFeatures: [
      'Reinforced non-slip steel checkered floors built for pallet jacks and forklifts',
      'Bi-parting automatic steel doors with heavy impact guide rails',
      'Overload sensor lockouts and emergency instant mechanical braking',
      'Semi-imported and imported configurations tailored to shaft dimensions'
    ],
    specs: 'Payload capacity from 1,000 kg up to 5,000+ kg',
    sla: 'Scheduled statutory safety audit & greasing AMC'
  }
];

export const ServicesSection: FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'hvac' | 'elevators' | 'commercial' | 'piping'>('all');

  const filteredServices = activeTab === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head-center">
          <div className="section-pill">
            <Sparkles size={14} className="pill-icon" />
            <span>Two Core Engineering Verticals</span>
          </div>
          <h2 className="section-title">
            Total HVAC-R Solutions & <span className="text-highlight-red">V-Shift Elevators</span>
          </h2>
          <p className="section-subtitle">
            From multi-zone Daikin VRV air conditioning and industrial ducting to high-speed passenger and heavy cargo freight lifts,
            Technicool Engineering delivers certified engineering meeting international standards.
          </p>

          {/* Filter Categories */}
          <div className="services-filter-tabs">
            <button
              className={`filter-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Engineering Divisions
            </button>
            <button
              className={`filter-tab-btn ${activeTab === 'hvac' ? 'active' : ''}`}
              onClick={() => setActiveTab('hvac')}
            >
              Total HVAC-R Solutions
            </button>
            <button
              className={`filter-tab-btn ${activeTab === 'elevators' ? 'active' : ''}`}
              onClick={() => setActiveTab('elevators')}
            >
              V-Shift Elevators
            </button>
            <button
              className={`filter-tab-btn ${activeTab === 'commercial' ? 'active' : ''}`}
              onClick={() => setActiveTab('commercial')}
            >
              Commercial VRV/VRF
            </button>
            <button
              className={`filter-tab-btn ${activeTab === 'piping' ? 'active' : ''}`}
              onClick={() => setActiveTab('piping')}
            >
              Copper Piping & Ducting
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="services-detailed-grid">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="service-detail-card">
                <div className="service-card-top">
                  <div className="service-icon-wrapper">
                    <Icon size={28} />
                  </div>
                  <span className="service-division-badge">{service.badge}</span>
                </div>

                <h3 className="service-detail-title">{service.title}</h3>
                <p className="service-detail-desc">{service.description}</p>

                <div className="service-spec-strip">
                  <ShieldCheck size={16} className="text-blue" />
                  <span>{service.specs}</span>
                </div>

                <ul className="service-bullets-list">
                  {service.keyFeatures.map((feat, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} className="bullet-check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-card-footer">
                  <div className="service-sla-badge">
                    <Clock size={14} />
                    <span>{service.sla}</span>
                  </div>

                  <button
                    className="btn-service-action"
                    onClick={() => onSelectService(service.title)}
                  >
                    <span>Request Quotation</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Dispatch Banner */}
        <div className="emergency-service-banner">
          <div className="emergency-banner-left">
            <div className="pulse-alert-dot" />
            <div>
              <h4 className="emergency-banner-title">Need Immediate HVAC or Elevator Engineering Dispatch?</h4>
              <p className="emergency-banner-desc">Our master technician crews and diagnostic squads are live 24/7/365 across Multan, South Punjab, and national industrial zones.</p>
            </div>
          </div>
          <div className="emergency-banner-actions">
            <a href="tel:0616303281" className="btn-emergency-call">
              <span>Call Dispatch: 061-6303281</span>
            </a>
            <button
              className="btn-emergency-schedule"
              onClick={() => onSelectService('Emergency Dispatch')}
            >
              <Calendar size={17} />
              <span>Book Priority Window</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
