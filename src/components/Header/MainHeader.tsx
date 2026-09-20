import { useState, type FC } from 'react';
import {
  Phone,
  Menu,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Wind,
  Building2,
  Wrench
} from 'lucide-react';

interface MainHeaderProps {
  onToggleMobileMenu: () => void;
}

export const MainHeader: FC<MainHeaderProps> = ({
  onToggleMobileMenu,
}) => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  return (
    <header className="main-header">
      <div className="container header-inner">
        {/* Brand Identity: Logo + Technicool Engineering + Tagline */}
        <a href="#hero" className="brand-logo-wrap" title="Technicool Engineering (TCE) Multan">
          <img
            src="/TCE.png"
            alt="Technicool Engineering (TCE)"
            className="brand-header-logo-img"
          />
          <div className="brand-badge">
            <span className="brand-since">Founded 2010 • Multan</span>
            <div className="brand-title">
              <span className="brand-name">TECHNICOOL ENGINEERING</span>
            </div>
            <span className="brand-subtitle">Make Your Desire Climate</span>
          </div>
        </a>

        {/* Desktop Navigation Links matching actual website content */}
        <nav className="header-nav" aria-label="Main Navigation">
          <ul className="header-nav-list">
            {/* Services with Mega Dropdown */}
            <li
              className="header-nav-item"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <a href="#services" className="header-nav-link">
                <span>Services</span>
                <ChevronDown size={14} className={`nav-chevron ${showServicesDropdown ? 'rotated' : ''}`} />
              </a>

              {showServicesDropdown && (
                <div className="services-mega-dropdown">
                  <div className="dropdown-grid">
                    <div className="dropdown-col">
                      <div className="dropdown-col-header">
                        <Wind size={16} className="dropdown-col-icon text-blue" />
                        <span>HVAC-R Climate Solutions</span>
                      </div>
                      <a href="#services" className="dropdown-item" onClick={() => setShowServicesDropdown(false)}>
                        <span className="dropdown-item-title">Daikin VRV / VRF Systems</span>
                        <span className="dropdown-item-desc">Multi-zone inverter heating & cooling</span>
                      </a>
                      <a href="#services" className="dropdown-item" onClick={() => setShowServicesDropdown(false)}>
                        <span className="dropdown-item-title">Commercial Cassettes & Ducted</span>
                        <span className="dropdown-item-desc">Ceiling concealed & 4-way airflow</span>
                      </a>
                      <a href="#services" className="dropdown-item" onClick={() => setShowServicesDropdown(false)}>
                        <span className="dropdown-item-title">Residential Inverter Splits</span>
                        <span className="dropdown-item-desc">High-ambient 52°C T3 systems</span>
                      </a>
                    </div>

                    <div className="dropdown-col">
                      <div className="dropdown-col-header">
                        <Building2 size={16} className="dropdown-col-icon text-amber" />
                        <span>V-Shift Elevators</span>
                      </div>
                      <a href="#services" className="dropdown-item" onClick={() => setShowServicesDropdown(false)}>
                        <span className="dropdown-item-title">Passenger Elevators</span>
                        <span className="dropdown-item-desc">Gearless & MRL luxury mobility</span>
                      </a>
                      <a href="#services" className="dropdown-item" onClick={() => setShowServicesDropdown(false)}>
                        <span className="dropdown-item-title">Industrial Cargo Lifts</span>
                        <span className="dropdown-item-desc">Heavy-duty hydraulic & traction</span>
                      </a>
                      <a href="#services" className="dropdown-item" onClick={() => setShowServicesDropdown(false)}>
                        <span className="dropdown-item-title">Maintenance & AMC</span>
                        <span className="dropdown-item-desc">24/7 safety inspection contracts</span>
                      </a>
                    </div>

                    <div className="dropdown-col">
                      <div className="dropdown-col-header">
                        <Wrench size={16} className="dropdown-col-icon text-slate" />
                        <span>Engineering Scope</span>
                      </div>
                      <a href="#services" className="dropdown-item" onClick={() => setShowServicesDropdown(false)}>
                        <span className="dropdown-item-title">Nitrogen Copper Brazing</span>
                        <span className="dropdown-item-desc">Zero-oxidation refrigerant piping</span>
                      </a>
                      <a href="#services" className="dropdown-item" onClick={() => setShowServicesDropdown(false)}>
                        <span className="dropdown-item-title">Sheet Metal Ducting</span>
                        <span className="dropdown-item-desc">Galvanized duct fabrication & IAQ</span>
                      </a>
                      <a href="#services" className="dropdown-item" onClick={() => setShowServicesDropdown(false)}>
                        <span className="dropdown-item-title">Thermal Load Calculations</span>
                        <span className="dropdown-item-desc">Precision CFM & cooling simulations</span>
                      </a>
                    </div>
                  </div>

                  <div className="dropdown-footer">
                    <div className="dropdown-footer-info">
                      <ShieldCheck size={16} className="text-blue" />
                      <span>Factory Certified Engineering Squads • Multan & South Punjab</span>
                    </div>
                    <a
                      href="tel:0616303281"
                      className="dropdown-footer-btn"
                      onClick={() => setShowServicesDropdown(false)}
                      title="Call Multan Head Office"
                    >
                      <span>Call 061-6303281</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              )}
            </li>

            {/* Projects Portfolio */}
            <li className="header-nav-item">
              <a href="#projects" className="header-nav-link">
                <span>Projects</span>
                <span className="nav-count-badge">33+</span>
              </a>
            </li>

            {/* Authorized Brands */}
            <li className="header-nav-item">
              <a href="#trusted-brands" className="header-nav-link">
                <span>Brands</span>
              </a>
            </li>

            {/* About TCE */}
            <li className="header-nav-item">
              <a href="#about" className="header-nav-link">
                <span>About</span>
              </a>
            </li>

            {/* Contact */}
            <li className="header-nav-item">
              <a href="#contact" className="header-nav-link">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Action Callouts */}
        <div className="header-actions">
          {/* Direct Phone Callout */}
          <a href="tel:0616303281" className="phone-callout" title="Call Multan Head Office">
            <div className="phone-icon-wrap">
              <Phone size={15} />
            </div>
            <div className="phone-text-wrap">
              <span className="phone-primary">061-6303281</span>
              <span className="phone-secondary">0300-4384978</span>
            </div>
          </a>

          {/* Mobile Hamburger Trigger */}
          <button
            className="mobile-toggle-btn"
            onClick={onToggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
};
