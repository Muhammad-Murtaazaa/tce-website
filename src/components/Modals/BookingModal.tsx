import { useState, type FormEvent, type FC } from 'react';
import { X, CheckCircle2, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const BookingModal: FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Air Conditioning'
}) => {
  const [service, setService] = useState(defaultService);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: 'Morning (8am - 12pm)',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3>Schedule Service Online</h3>
            <p style={{ fontSize: '13px', color: '#64748b', marginTop: '2px' }}>
              Quick, convenient dispatch with guaranteed on-time arrival.
            </p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '24px 10px' }}>
              <CheckCircle2 size={64} color="#16a34a" style={{ margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                Appointment Confirmed!
              </h3>
              <p style={{ color: '#475569', fontSize: '15px', marginBottom: '24px' }}>
                Thank you, <strong>{formData.name || 'valued client'}</strong>. Our engineering dispatch department in Multan has received your request for <strong>{service}</strong> and our team will contact you shortly at <strong>{formData.phone || '061-6303281 / 0300-4384978'}</strong>.
              </p>
              <button className="btn-submit-booking" onClick={handleReset}>
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Select Engineering Service Needed</label>
                <select
                  className="form-select"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="Residential Inverter AC">Residential Inverter / Split AC</option>
                  <option value="Commercial Daikin VRV">Commercial Daikin VRV / VRF Multi-Zone System</option>
                  <option value="Light Commercial Cassette">Light Commercial (Cassette / Ducted / Floor Standing)</option>
                  <option value="V-Shift Passenger Elevator">V-Shift Passenger Elevator (MRL / Traction)</option>
                  <option value="V-Shift Cargo Lift">V-Shift Heavy Industrial Cargo & Freight Lift</option>
                  <option value="Copper Piping & Ducting">Copper Piping & Sheet Metal Ducting Fabrication</option>
                  <option value="Preventative AMC">Annual Preventative Maintenance Contract (AMC)</option>
                  <option value="Emergency Field Dispatch">🚨 Priority Emergency HVAC / Elevator Dispatch</option>
                </select>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Preferred Date</label>
                  <input
                    type="date"
                    required
                    className="form-input"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Preferred Time Window</label>
                  <select
                    className="form-select"
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  >
                    <option value="Morning (8am - 12pm)">Morning (8:00 AM – 12:00 PM)</option>
                    <option value="Afternoon (12pm - 4pm)">Afternoon (12:00 PM – 4:00 PM)</option>
                    <option value="Evening (4pm - 8pm)">Evening (4:00 PM – 8:00 PM)</option>
                    <option value="Emergency Now">🚨 Immediate 24/7 Emergency</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Tell Us About the Problem</label>
                <textarea
                  rows={3}
                  placeholder="Describe any symptoms (e.g. AC blowing warm air, leak under sink, drain backing up)..."
                  className="form-textarea"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '12px', marginBottom: '16px' }}>
                <ShieldCheck size={16} color="#16a34a" />
                <span>100% Satisfaction Guarantee & Upfront Pricing Before Any Work Begins</span>
              </div>

              <button type="submit" className="btn-submit-booking">
                Confirm Appointment Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
