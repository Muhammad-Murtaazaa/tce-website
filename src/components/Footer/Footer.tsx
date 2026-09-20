import { type FC } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="site-footer">
      {/* Clean, Simple Main Footer */}
      <div className="footer-main-body">
        <div className="container">
          <div className="footer-grid">
            {/* Col 1: Brand & Contact */}
            <div className="footer-col footer-col-main">
              <div className="footer-brand-lockup">
                <img src="/TCE.png" alt="TCE Logo" className="footer-logo-img" />
                <div>
                  <h4 className="footer-brand-name">Technicool Engineering</h4>
                  <p className="footer-brand-sub">Total HVAC-R & V-Shift Elevators</p>
                </div>
              </div>

              <p className="footer-short-tagline">
                Make Your Desire Climate • Multan, Pakistan • Founded 2010
              </p>

              <div className="footer-contact-compact">
                <div className="contact-compact-item">
                  <MapPin size={14} className="text-blue" />
                  <span>{COMPANY_INFO.address}</span>
                </div>
                <div className="contact-compact-item">
                  <Phone size={14} className="text-blue" />
                  <span>{COMPANY_INFO.phones.landline} • {COMPANY_INFO.phones.mobile1}</span>
                </div>
                <div className="contact-compact-item">
                  <Mail size={14} className="text-blue" />
                  <span>{COMPANY_INFO.email}</span>
                </div>
              </div>
            </div>

            {/* Col 2: Services */}
            <div className="footer-col">
              <h4 className="footer-col-title">Services</h4>
              <ul className="footer-clean-links">
                <li><a href="#services">Daikin VRV / VRF Systems</a></li>
                <li><a href="#services">Ducted & Cassette Air Conditioning</a></li>
                <li><a href="#services">Residential Inverter Splits</a></li>
                <li><a href="#services">V-Shift Elevators (Passenger & Cargo)</a></li>
                <li><a href="#services">Piping & Ducting Fabrication</a></li>
              </ul>
            </div>

            {/* Col 3: Company */}
            <div className="footer-col">
              <h4 className="footer-col-title">Company</h4>
              <ul className="footer-clean-links">
                <li><a href="#about">About TCE Multan</a></li>
                <li><a href="#projects">Flagship Projects (33+)</a></li>
                <li><a href="#trusted-brands">Authorized OEM Partners</a></li>
                <li><a href="#contact">Multan Head Office</a></li>
              </ul>
            </div>

            {/* Col 4: Authorized OEM Partners */}
            <div className="footer-col">
              <h4 className="footer-col-title">Authorized Partners</h4>
              <p className="footer-partners-desc">
                Factory certified supply and technical commissioning:
              </p>
              <div className="footer-brands-grid">
                <img src="/Daikin.png" alt="Daikin" className="footer-chip" title="Daikin Authorized Partner" />
                <img src="/Midea.png" alt="Midea" className="footer-chip" title="Midea Authorized Partner" />
                <img src="/Acson.png" alt="Acson" className="footer-chip" title="Acson International" />
                <img src="/Cross Air.png" alt="Cross Air" className="footer-chip" title="Cross Air" />
                <img src="/AirX.png" alt="AirX" className="footer-chip" title="AirX Air Conditioners" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Bottom Copyright & Developer Credit Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <div className="footer-bottom-info">
            <span className="bottom-copy">
              © {new Date().getFullYear()} Technicool Engineering & V-Shift Elevators. All rights reserved. Multan, Pakistan.
            </span>
            <span className="bottom-credit-separator" aria-hidden="true">•</span>
            <span className="bottom-developer-credit">
              Crafted & Engineered by{' '}
              <a
                href="https://omnysync.com"
                target="_blank"
                rel="noopener noreferrer"
                className="omnysync-credit-badge"
                title="OMNYSYNC - Web & Software Engineering (omnysync.com)"
              >
                <span className="omnysync-brand-name">OMNYSYNC</span>
                <span className="omnysync-brand-url">omnysync.com</span>
              </a>
            </span>
          </div>
          <button type="button" className="btn-back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
