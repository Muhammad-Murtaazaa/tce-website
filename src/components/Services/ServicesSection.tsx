import { type FC } from 'react';
import { Phone } from 'lucide-react';
import { ElevatorShowcase } from './ElevatorShowcase';

export const ServicesSection: FC = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* V-Shift Architectural Elevator Cabin Models & Finishes Showcase */}
        <ElevatorShowcase />

        {/* Emergency Dispatch Banner */}
        <div className="emergency-service-banner">
          <div className="emergency-banner-left">
            <div className="pulse-alert-dot" />
            <div>
              <h4 className="emergency-banner-title">Need Immediate HVAC or Elevator Engineering Dispatch?</h4>
              <p className="emergency-banner-desc">
                Our master technician crews and diagnostic squads are live 24/7/365 across Multan, South Punjab, and national industrial zones.
              </p>
            </div>
          </div>
          <div className="emergency-banner-actions">
            <a href="tel:0616303281" className="btn-emergency-call">
              <span>Call Dispatch: 061-6303281</span>
            </a>
            <a href="tel:03004384978" className="btn-emergency-schedule">
              <Phone size={16} />
              <span>Mobile: 0300-4384978</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
