import { type FC } from 'react';
import { Building2, Phone } from 'lucide-react';

export const HeroSection: FC = () => {
  return (
    <section id="hero" className="hero-wrapper">
      {/* Clean engineering mesh gradient background */}
      <div className="hero-mesh-background" />

      {/* Full-Bleed Blended Team & Facility Backdrop */}
      <div className="hero-bleed-backdrop" aria-hidden="true">
        <img
          src="/hero.jpeg"
          alt="Technicool Engineering Multan Team and Facility"
          className="hero-bleed-img"
          loading="eager"
        />
      </div>

      <div className="container hero-container">
        <div className="hero-main-grid">
          <div className="hero-content">

            <h1 className="hero-headline">
              Make Your Desire<br />
              <span className="headline-highlight">Climate.</span>
            </h1>

            <p className="hero-description">
              Technicool Engineering (TCE) delivers dependable HVAC supply, installation,
              commissioning, and Daikin VRV engineering for residential and commercial spaces.
              Expanding in 2024 with <strong>V-Shift Elevators</strong>—delivering precision passenger
              and heavy cargo vertical mobility across Pakistan.
            </p>

            <div className="hero-actions">
              <a href="tel:0616303281" className="btn-hero-primary" title="Call Multan Head Office">
                <Phone size={18} />
                <span>Call 061-6303281</span>
              </a>

              <a href="#projects" className="btn-hero-secondary" title="Explore Commissioned Projects">
                <Building2 size={18} />
                <span>View 33 Projects</span>
              </a>
            </div>
          </div>
        </div>

        {/* Big Factory Authorized Equipment Logos Showcase */}
        <div className="hero-brands-trust">
          <span className="hero-brands-label">Factory Authorized Equipment Partners:</span>
          <div className="hero-brands-logos">
            <div className="hero-brand-chip" title="Daikin Authorized Partner">
              <img src="/Daikin.png" alt="Daikin" className="hero-brand-logo-img" />
            </div>
            <div className="hero-brand-chip" title="Midea Authorized Partner">
              <img src="/Midea.png" alt="Midea" className="hero-brand-logo-img" />
            </div>
            <div className="hero-brand-chip" title="Acson International">
              <img src="/Acson.png" alt="Acson" className="hero-brand-logo-img" />
            </div>
            <div className="hero-brand-chip" title="Cross Air">
              <img src="/Cross Air.png" alt="Cross Air" className="hero-brand-logo-img" />
            </div>
            <div className="hero-brand-chip" title="AirX Air Conditioners">
              <img src="/AirX.png" alt="AirX" className="hero-brand-logo-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
