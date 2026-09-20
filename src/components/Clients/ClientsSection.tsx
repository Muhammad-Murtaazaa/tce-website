import { type FC } from 'react';
import {
  CheckCircle2,
  Target,
  Compass,
  Factory,
  Snowflake,
  Building2,
  ShieldCheck,
  Layers,
  Store
} from 'lucide-react';
import { OEM_BRANDS, COMPANY_INFO } from '../../data/companyData';

interface ClientLogo {
  name: string;
  logo: string;
}

interface ClientSector {
  name: string;
  category: string;
  highlight: string;
  badge: string;
  icon: typeof Factory;
  logos: ClientLogo[];
}

const CLIENT_SECTORS: ClientSector[] = [
  {
    name: 'Heavy Industry & Chemicals',
    category: 'Fertilizer & Process Plants',
    highlight: 'Pak Arab Fertilizer, FFC Goth Machi, Patron Chemicals & UCH Power',
    badge: 'Industrial Duty',
    icon: Factory,
    logos: [
      { name: 'Pak Arab Fertilizer', logo: '/Pakarab.png' },
      { name: 'FFC Goth Machi', logo: '/FFC.png' },
      { name: 'Patron Chemicals', logo: '/Patron%20group.png' },
      { name: 'Nuchem', logo: '/Nuchem.png' },
      { name: 'UCH Power Plant', logo: '/UCH.png' }
    ]
  },
  {
    name: 'FMCG & Food Processing',
    category: 'Production Plants & Cold Lines',
    highlight: 'PepsiCo Industrial, Suncrop Foods & Fazal Cloth Mills',
    badge: 'Cold Chain Uptime',
    icon: Snowflake,
    logos: [
      { name: 'PepsiCo Industrial', logo: '/Pepsico-Emblem-removebg-preview.png' },
      { name: 'Suncrop Foods', logo: '/Suncrop-Foods-Logo-removebg-preview.png' },
      { name: 'Fazal Cloth Mills', logo: '/Fazal%20Cloth.png' },
      { name: 'Yaqoob Group', logo: '/Yaqoob%20Group.png' }
    ]
  },
  {
    name: 'Commercial Banking & Corporate Towers',
    category: 'Financial HQs & Plaza Networks',
    highlight: 'Allied Bank Regional Head Office, Sharif Complex & Servo Oil',
    badge: 'VRV Multi-Zone',
    icon: Building2,
    logos: [
      { name: 'Allied Bank', logo: '/Allied%20Bank.png' },
      { name: 'Sharif Complex', logo: '/Sharif%20COmplex.png' },
      { name: 'PCPA Office', logo: '/PCPA-removebg-preview.png' },
      { name: 'Servo Oil', logo: '/SERVO.png' }
    ]
  },
  {
    name: 'Healthcare & Cleanrooms',
    category: 'Hospitals & Medical Centers',
    highlight: 'Ayat Hospital Multan & Al-Shifa Hospital Faisalabad',
    badge: 'ISO Cleanroom Standards',
    icon: ShieldCheck,
    logos: [
      { name: 'Ayat Hospital Multan', logo: '/Ayat%20Hospital.png' },
      { name: 'Shifa International Hospital', logo: '/Shifa%20International%20HOspital.png' }
    ]
  },
  {
    name: 'Higher Education & Campuses',
    category: 'Universities & Academic Blocks',
    highlight: 'University of Management and Technology (UMT) Lahore',
    badge: 'Institutional Scale',
    icon: Layers,
    logos: [
      { name: 'UMT Lahore', logo: '/UMT.png' },
      { name: 'Sinaco Engineers', logo: '/Sinaco%20Engineers.png' }
    ]
  },
  {
    name: 'Hospitality, F&B & Retail Malls',
    category: 'Fast-Casual, Marquees & Malls',
    highlight: 'KFC South Punjab, 14th Street Pizza, SOHA Mall & DHA Projects',
    badge: 'Concourse & Kitchen MEP',
    icon: Store,
    logos: [
      { name: 'KFC South Punjab', logo: '/KFC.png' },
      { name: '14th Street Pizza', logo: '/14%20street%20pizza.png' },
      { name: 'SOHA Mall', logo: '/SOHA%20Mall.png' },
      { name: 'DHA Bahawalpur', logo: '/DHA%20Bahawalpur.png' },
      { name: 'DHA Quetta', logo: '/DHA%20qUETTA.png' }
    ]
  }
];

export const ClientsSection: FC = () => {
  return (
    <section id="clients" className="clients-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head-center">
          <h2 className="section-title">
            Factory Authorized Partnerships & <span className="text-highlight-red">Industry Sectors</span>
          </h2>
          <p className="section-subtitle">
            Technicool Engineering represents the world's most dependable climate brands, partnering with Pakistan's leading industrial,
            financial, and healthcare institutions.
          </p>
        </div>

        {/* 1. Vision & Mission Cards */}
        <div className="vision-mission-grid">
          <div className="vision-mission-card">
            <div className="vm-header">
              <div className="vm-icon-box vm-icon-blue">
                <Compass size={24} />
              </div>
              <div>
                <span className="vm-badge">Strategic Direction</span>
                <h3 className="vm-title">Our Vision</h3>
              </div>
            </div>
            <p className="vm-text">{COMPANY_INFO.vision}</p>
          </div>

          <div className="vision-mission-card">
            <div className="vm-header">
              <div className="vm-icon-box vm-icon-red">
                <Target size={24} />
              </div>
              <div>
                <span className="vm-badge">Engineering Mandate</span>
                <h3 className="vm-title">Our Mission</h3>
              </div>
            </div>
            <p className="vm-text">{COMPANY_INFO.mission}</p>
          </div>
        </div>

        {/* 2. OEM Authorized Manufacturer Brands Row */}
        <div className="oem-partners-container">
          <div className="oem-header">
            <h3 className="oem-title">Authorized Equipment Brands We Deal In</h3>
            <p className="oem-subtitle">
              Direct factory equipment access, genuine manufacturer warranties, and specialized engineering support.
            </p>
          </div>

          <div className="oem-grid">
            {OEM_BRANDS.map((brand, idx) => (
              <div key={idx} className="oem-card">
                <div className="oem-logo-wrap">
                  <img src={brand.logo} alt={brand.name} className="oem-brand-img" loading="lazy" />
                </div>
                <div className="oem-brand-name">{brand.name}</div>
                <div className="oem-badge-chip">{brand.badge}</div>
                <div className="oem-category-label">{brand.category}</div>
                <p className="oem-desc">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. The Industries We've Worked With */}
        <div className="industries-section-wrap">
          <div className="industries-header">
            <h3 className="industries-title">
              The Industries <span className="text-highlight-red">We've Worked With</span>
            </h3>
            <p className="industries-subtitle">
              Tailored MEP, HVAC, and vertical transit solutions engineered for strict compliance, uninterrupted uptime, and architectural elegance across Pakistan.
            </p>
          </div>

          <div className="client-sectors-grid">
            {CLIENT_SECTORS.map((sector, idx) => {
              const SectorIcon = sector.icon;
              return (
                <div key={idx} className="client-sector-card">
                  <div className="client-sector-top">
                    <div className="client-sector-icon-box">
                      <SectorIcon size={22} />
                    </div>
                    <span className="client-sector-badge">{sector.badge}</span>
                  </div>

                  <div className="client-sector-main">
                    <h4 className="client-sector-name">{sector.name}</h4>
                    <p className="client-sector-category">{sector.category}</p>
                    <div className="client-sector-metric">
                      <CheckCircle2 size={16} className="client-sector-check" />
                      <span>{sector.highlight}</span>
                    </div>
                  </div>

                  <div className="client-logos-section">
                    <div className="client-logos-label">
                      <span>Key Client Deployments</span>
                    </div>
                    <div className="client-logos-shelf">
                      {sector.logos.map((client, cIdx) => (
                        <div key={cIdx} className="client-logo-chip" title={client.name}>
                          <img
                            src={client.logo}
                            alt={client.name}
                            className="client-logo-img"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
