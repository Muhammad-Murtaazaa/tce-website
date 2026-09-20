import { useState, type FC } from 'react';
import { Accessibility, ZoomIn, Sun, X } from 'lucide-react';

export const AccessibilityWidget: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largerText, setLargerText] = useState(false);

  const toggleContrast = () => {
    const next = !highContrast;
    setHighContrast(next);
    if (next) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  };

  const toggleTextSize = () => {
    const next = !largerText;
    setLargerText(next);
    if (next) {
      document.documentElement.style.fontSize = '18px';
    } else {
      document.documentElement.style.fontSize = '16px';
    }
  };

  return (
    <>
      <button
        className="floating-accessibility-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open accessibility options"
        title="Accessibility Tools"
      >
        <Accessibility size={24} />
      </button>

      {isOpen && (
        <div className="accessibility-menu">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <h5>Accessibility Tools</h5>
            <button onClick={() => setIsOpen(false)} style={{ color: '#64748b' }}>
              <X size={18} />
            </button>
          </div>

          <button className="acc-option-btn" onClick={toggleContrast}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sun size={16} />
              High Contrast Mode
            </span>
            <span>{highContrast ? 'ON' : 'OFF'}</span>
          </button>

          <button className="acc-option-btn" onClick={toggleTextSize}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ZoomIn size={16} />
              Larger Text
            </span>
            <span>{largerText ? 'ON' : 'OFF'}</span>
          </button>
        </div>
      )}
    </>
  );
};
