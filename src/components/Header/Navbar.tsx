import { useState, type FC } from 'react';
import { ChevronDown, X, Phone, Wind, Building2, Wrench, ShieldCheck } from 'lucide-react';

interface NavCategory {
  title: string;
  icon: any;
  links: { name: string; href: string }[];
}

const MOBILE_CATEGORIES: NavCategory[] = [
  {
    title: 'HVAC-R Climate Solutions',
    icon: Wind,
    links: [
      { name: 'Commercial VRV / VRF Systems (Daikin)', href: '#services' },
      { name: 'Light Commercial Cassettes & Ducted', href: '#services' },
      { name: 'Residential Inverter Splits', href: '#services' },
      { name: 'Rooftop Packaged Chillers', href: '#services' }
    ]
  },
  {
    title: 'V-Shift Elevators',
    icon: Building2,
    links: [
      { name: 'Passenger Lifts (MRL & Gearless)', href: '#services' },
      { name: 'Industrial Heavy Cargo Lifts', href: '#services' },
      { name: 'Elevator Modernization & AMC', href: '#services' }
    ]
  },
  {
    title: 'Engineering Scope',
    icon: Wrench,
    links: [
      { name: 'Nitrogen Purge Copper Brazing', href: '#services' },
      { name: 'Sheet Metal Ducting Fabrication', href: '#services' },
      { name: 'Thermal Sizing & Load Simulation', href: '#services' }
    ]
  },
  {
    title: 'Projects Portfolio',
    icon: ShieldCheck,
    links: [
      { name: 'Healthcare Projects (Ayat & Al-Shifa)', href: '#projects' },
      { name: 'Industrial Plants (PepsiCo & FFC)', href: '#projects' },
      { name: 'Corporate Commercial Towers', href: '#projects' },
      { name: 'Elevator Installations (33+ Completed)', href: '#projects' }
    ]
  }
];

interface NavbarProps {
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

export const Navbar: FC<NavbarProps> = ({
  isMobileOpen,
  onCloseMobile
}) => {
  const [expandedSection, setExpandedSection] = useState<number | null>(0);

  if (!isMobileOpen) {
    return null;
  }

  return (
    <div className="mobile-drawer" onClick={onCloseMobile}>
      <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Brand Header */}
        <div className="drawer-header">
          <div className="drawer-brand">
            <img
              src="/TCE.png"
              alt="TCE Logo"
              className="drawer-logo-img"
            />
            <div className="drawer-brand-text">
              <span className="drawer-brand-since">Founded 2010 • Multan</span>
              <div className="drawer-brand-name">
                <span>TECHNICOOL ENGINEERING</span>
              </div>
              <span className="drawer-brand-tagline">Make Your Desire Climate</span>
            </div>
          </div>
          <button
            onClick={onCloseMobile}
            className="drawer-close-btn"
            aria-label="Close navigation"
          >
            <X size={22} />
          </button>
        </div>

        {/* Quick Direct Links */}
        <div className="drawer-quick-links">
          <a href="#services" onClick={onCloseMobile} className="drawer-quick-link">
            Services
          </a>
          <a href="#projects" onClick={onCloseMobile} className="drawer-quick-link">
            Projects (33+)
          </a>
          <a href="#trusted-brands" onClick={onCloseMobile} className="drawer-quick-link">
            Brands
          </a>
          <a href="#about" onClick={onCloseMobile} className="drawer-quick-link">
            About
          </a>
          <a href="#contact" onClick={onCloseMobile} className="drawer-quick-link">
            Contact
          </a>
        </div>

        {/* Accordion Categories */}
        <ul className="drawer-nav-list">
          {MOBILE_CATEGORIES.map((cat, idx) => {
            const isExpanded = expandedSection === idx;
            const Icon = cat.icon;
            return (
              <li key={idx} className="drawer-nav-item">
                <button
                  type="button"
                  className="drawer-nav-header"
                  onClick={() => setExpandedSection(isExpanded ? null : idx)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Icon size={16} className="drawer-cat-icon" />
                    <span>{cat.title}</span>
                  </div>
                  <ChevronDown
                    size={16}
                    style={{
                      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease'
                    }}
                  />
                </button>

                {isExpanded && (
                  <div className="drawer-sublinks">
                    {cat.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.href}
                        onClick={onCloseMobile}
                        className="drawer-sublink"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Drawer CTAs */}
        <div className="drawer-cta-group">
          <a
            href="tel:0616303281"
            className="drawer-phone-btn"
          >
            <Phone size={17} />
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <span style={{ fontWeight: 800, fontSize: '15px' }}>061-6303281</span>
              <span style={{ fontSize: '11px', opacity: 0.8 }}>Emergency: 0300-4384978</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
