import { type FC } from 'react';
import { ElevatorShowcase } from './ElevatorShowcase';

export const ServicesSection: FC = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* V-Shift Architectural Elevator Cabin Models & Finishes Showcase */}
        <ElevatorShowcase />
      </div>
    </section>
  );
};
