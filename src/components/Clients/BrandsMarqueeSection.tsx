import { type FC } from 'react';
import { Sparkles } from 'lucide-react';
import { CLIENT_LOGOS } from '../../data/projectsData';

export const BrandsMarqueeSection: FC = () => {
  const row1 = CLIENT_LOGOS.slice(0, 9);
  const row2 = CLIENT_LOGOS.slice(9);

  return (
    <section id="trusted-brands" className="brands-fullwidth-section">
      {/* Background subtle mesh glow */}
      <div className="brands-fullwidth-glow" />

      <div className="container">
        {/* Big, Commanding Heading */}
        <div className="section-head-center" style={{ marginBottom: '40px' }}>
          <div className="section-pill">
            <Sparkles size={14} className="pill-icon text-red" />
            <span>Enterprise Client Portfolio</span>
          </div>
          <h2 className="section-title brands-big-title">
            Trusted by Pakistan's <span className="text-highlight-red">Leading Brands</span> & Industry Giants
          </h2>
          <p className="section-subtitle brands-big-subtitle">
            Delivering high-reliability climate engineering, Daikin VRV central cooling, and V-Shift elevator mobility
            for multinational FMCGs, corporate banking towers, major hospitals, and industrial processing complexes.
          </p>
        </div>
      </div>

      {/* Full Screen Width Edge-to-Edge Animated Marquee Carousel */}
      <div className="brands-marquee-viewport" title="Moving Client Showcase - Hover to Pause">
        {/* Soft edge gradient fades spanning browser sides */}
        <div className="brands-fade-left" aria-hidden="true" />
        <div className="brands-fade-right" aria-hidden="true" />

        {/* Row 1: Scrolling Left Continuously */}
        <div className="brands-marquee-track brands-track-left">
          {[...row1, ...row1, ...row1, ...row1].map((client, idx) => (
            <div key={`track1-${idx}`} className="brand-marquee-card">
              <div className="brand-logo-stage">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="brand-stage-img"
                  loading="lazy"
                />
              </div>
              <div className="brand-info-box">
                <span className="brand-marquee-name">{client.name}</span>
                <span className="brand-marquee-sub">{client.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Scrolling Right Continuously in Opposite Direction */}
        <div className="brands-marquee-track brands-track-right">
          {[...row2, ...row2, ...row2, ...row2].map((client, idx) => (
            <div key={`track2-${idx}`} className="brand-marquee-card">
              <div className="brand-logo-stage">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="brand-stage-img"
                  loading="lazy"
                />
              </div>
              <div className="brand-info-box">
                <span className="brand-marquee-name">{client.name}</span>
                <span className="brand-marquee-sub">{client.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
