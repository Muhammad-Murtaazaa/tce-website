import { type FC } from 'react';
import { Wind, Building2, Wrench, ArrowRight } from 'lucide-react';

interface ServiceCardsProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServiceCards: FC<ServiceCardsProps> = ({ onSelectService }) => {
  const cards = [
    {
      title: 'Total HVAC-R Solutions',
      icon: <Wind size={36} strokeWidth={1.8} color="#0b4ea2" />,
      bg: '#eff6ff',
      desc: 'Residential inverter splits, cassettes, rooftop packaged chillers, and Daikin VRV multi-zone systems.',
      linkText: 'Explore HVAC Solutions',
      badge: 'Core Division'
    },
    {
      title: 'V-Shift Elevators',
      icon: <Building2 size={36} strokeWidth={1.8} color="#d97706" />,
      bg: '#fffbeb',
      desc: 'Precision passenger elevators, heavy industrial cargo lifts, imported packages, and modernization AMC.',
      linkText: 'Explore Elevators',
      badge: '2024 Expansion'
    },
    {
      title: 'Copper Piping & Ducting',
      icon: <Wrench size={36} strokeWidth={1.8} color="#dc2626" />,
      bg: '#fef2f2',
      desc: 'In-house refrigeration copper line brazing under dry nitrogen purge, and heavy-gauge galvanized sheet ducting.',
      linkText: 'Explore Technical Ducting',
      badge: 'Engineering Works'
    }
  ];

  return (
    <div id="services" className="services-overlap-section">
      <div className="container">
        <div className="services-grid">
          {cards.map((card, idx) => (
            <a
              key={idx}
              href="#projects"
              className="service-card"
              onClick={(e) => {
                if (onSelectService) {
                  e.preventDefault();
                  onSelectService(card.title);
                }
              }}
              style={{ textDecoration: 'none' }}
            >
              <div className="service-icon-box" style={{ backgroundColor: card.bg }}>
                {card.icon}
              </div>
              <h3 className="service-title">{card.title}</h3>
              <p className="service-desc">{card.desc}</p>
              <div className="service-link-arrow">
                <span>{card.linkText}</span>
                <ArrowRight size={14} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
