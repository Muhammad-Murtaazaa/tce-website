import { useState, type FC } from 'react';
import { X, CheckCircle2, Phone, ShieldCheck, MapPin, Radio, Wrench } from 'lucide-react';

interface TechnicianEtaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechnicianEtaModal: FC<TechnicianEtaModalProps> = ({ isOpen, onClose }) => {
  const [ticketId] = useState('TCE-2024-8842');
  const [etaMinutes, setEtaMinutes] = useState(14);
  const [activeStep, setActiveStep] = useState(3); // 1 = Logged, 2 = Assigned, 3 = En Route, 4 = Arrived

  if (!isOpen) return null;

  const simulateProgress = () => {
    if (activeStep < 4) {
      setActiveStep(activeStep + 1);
      if (activeStep === 3) setEtaMinutes(0);
    } else {
      setActiveStep(2);
      setEtaMinutes(18);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card eta-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Radio size={18} color="var(--accent-red)" className="animate-pulse-dot" />
            <div>
              <h3>Customer Portal • Live Technician Dispatch Telemetry</h3>
              <p style={{ fontSize: '13px', color: '#64748b' }}>
                Real-time field tracking for HVAC diagnostics and V-Shift Elevator service calls.
              </p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {/* Ticket ID search strip */}
          <div className="eta-ticket-strip">
            <div className="ticket-label">
              <span>Work Order #:</span>
              <strong>{ticketId}</strong>
            </div>
            <div className="ticket-badge">
              <span className="live-dot animate-pulse-dot" />
              <span>Priority Corporate SLA</span>
            </div>
          </div>

          {/* Technician Profile Card */}
          <div className="technician-profile-card">
            <div className="tech-avatar-box">
              <span>MT</span>
            </div>
            <div className="tech-details">
              <h4 className="tech-name">Engr. Muhammad Tariq</h4>
              <p className="tech-role">Lead Daikin VRV & Inverter Specialist • 12 Yrs Field Experience</p>
              <div className="tech-meta-row">
                <span className="tech-meta-item">
                  <ShieldCheck size={14} color="#16a34a" /> PEC Verified
                </span>
                <span className="tech-meta-item">
                  <Wrench size={14} color="var(--primary-blue)" /> Fully Stocked Tool Rig #01
                </span>
              </div>
            </div>
            <a href="tel:0616303281" className="btn-call-tech">
              <Phone size={15} />
              <span>Call Dispatch</span>
            </a>
          </div>

          {/* Live ETA Box */}
          <div className="eta-countdown-card">
            <div className="eta-left">
              <span className="eta-title">
                {activeStep === 4 ? 'Squad Has Arrived' : 'Estimated Arrival Window'}
              </span>
              <div className="eta-time-val">
                {activeStep === 4 ? 'On Site' : `${etaMinutes} Minutes`}
              </div>
              <p className="eta-destination">
                <MapPin size={14} color="var(--accent-red)" style={{ display: 'inline', marginRight: '4px' }} />
                Navigating to Client Address in Multan Corridor
              </p>
            </div>

            <button className="btn-simulate-step" onClick={simulateProgress}>
              <span>{activeStep === 4 ? 'Reset Simulation' : 'Simulate Progress'}</span>
            </button>
          </div>

          {/* 5-Stage Step Progress Indicator */}
          <div className="eta-stepper">
            <div className={`step-item ${activeStep >= 1 ? 'completed' : ''}`}>
              <div className="step-circle">
                <CheckCircle2 size={16} />
              </div>
              <div className="step-label">
                <strong>Dispatch Logged</strong>
                <span>Work order verified</span>
              </div>
            </div>

            <div className="step-connector" />

            <div className={`step-item ${activeStep >= 2 ? 'completed' : ''}`}>
              <div className="step-circle">
                <CheckCircle2 size={16} />
              </div>
              <div className="step-label">
                <strong>Engineer Assigned</strong>
                <span>Rig #01 allocated</span>
              </div>
            </div>

            <div className="step-connector" />

            <div className={`step-item ${activeStep >= 3 ? (activeStep === 3 ? 'active' : 'completed') : ''}`}>
              <div className="step-circle">
                {activeStep > 3 ? <CheckCircle2 size={16} /> : <span>3</span>}
              </div>
              <div className="step-label">
                <strong>Vehicle In Transit</strong>
                <span>GPS Telemetry live</span>
              </div>
            </div>

            <div className="step-connector" />

            <div className={`step-item ${activeStep >= 4 ? 'completed' : ''}`}>
              <div className="step-circle">
                {activeStep >= 4 ? <CheckCircle2 size={16} /> : <span>4</span>}
              </div>
              <div className="step-label">
                <strong>On-Site Diagnostic</strong>
                <span>Direct service handoff</span>
              </div>
            </div>
          </div>

          {/* Safety & Protocol Card */}
          <div className="eta-safety-box">
            <ShieldCheck size={18} color="#16a34a" />
            <div>
              <strong>Technicool Engineering Guarantee:</strong> Technicians arrive in official TCE branded uniforms with photo ID credentials, calibrated digital equipment, and genuine OEM parts.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
