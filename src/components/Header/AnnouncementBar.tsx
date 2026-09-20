import { useState, type FC } from 'react';
import { Search, Flame, X } from 'lucide-react';

interface AnnouncementBarProps {
  onOpenSchedule: () => void;
}

export const AnnouncementBar: FC<AnnouncementBarProps> = ({ onOpenSchedule }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="announcement-bar">
      <div className="container announcement-content">
        <div className="promo-text">
          <span className="promo-tag">
            <Flame size={12} style={{ display: 'inline', marginRight: '3px' }} />
            TCE Multan
          </span>
          <span>Make Your Desire Climate • Total HVAC-R Solutions & V-Shift Elevators • 24/7 Field Support</span>
        </div>

        <div className="announcement-links">
          <a href="#services">HVAC-R Solutions</a>
          <div className="announcement-divider" />
          <a href="#services">V-Shift Elevators</a>
          <div className="announcement-divider" />
          <a href="#projects">Projects (33)</a>
          <div className="announcement-divider" />
          <a href="#trusted-brands">Trusted Brands</a>
          <div className="announcement-divider" />
          <a href="#contact">Contact</a>
          <div className="announcement-divider" />
          <button 
            type="button" 
            style={{ color: '#93c5fd', fontWeight: 800, fontSize: '12px' }}
            onClick={onOpenSchedule}
          >
            Emergency Callout
          </button>
          <div className="announcement-divider" />
          
          <button 
            className="search-trigger" 
            onClick={() => setShowSearch(!showSearch)}
            aria-label="Search site"
            title="Search"
          >
            <Search size={15} />
          </button>
        </div>
      </div>

      {showSearch && (
        <div style={{
          background: '#ffffff',
          borderBottom: '1px solid #cbd5e1',
          padding: '10px 0',
          boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
        }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Search size={18} color="#64748b" />
            <input 
              type="text"
              placeholder="Search services, e.g. AC repair, drain cleaning, water heater..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                fontSize: '14px',
                padding: '6px 0',
                fontFamily: 'inherit'
              }}
              autoFocus
            />
            <button 
              onClick={() => setShowSearch(false)}
              style={{ color: '#64748b', display: 'flex', alignItems: 'center' }}
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
