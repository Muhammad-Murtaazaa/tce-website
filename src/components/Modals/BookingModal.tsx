import { useState, type FormEvent, type FC } from 'react';
import { X, CheckCircle2, ShieldCheck, Send } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const BookingModal: FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'General Engineering Inquiry'
}) => {
  const [service, setService] = useState(defaultService);
  const [prevDefault, setPrevDefault] = useState(defaultService);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync state if defaultService prop updates while modal is triggered
  if (defaultService !== prevDefault) {
    setPrevDefault(defaultService);
    setService(defaultService);
  }

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      city: '',
      notes: ''
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3>Request Quotation & Specifications</h3>
            <p style={{ fontSize: '13px', color: '#64748b', marginTop: '2px' }}>
              Direct factory pricing, engineering submittals, and certified field dispatch.
            </p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '24px 10px' }}>
              <CheckCircle2 size={60} color="#16a34a" style={{ margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                Quotation Request Received!
              </h3>
              <p style={{ color: '#475569', fontSize: '14.5px', marginBottom: '18px', lineHeight: 1.6 }}>
                Thank you, <strong>{formData.name || 'valued client'}</strong>. Technicool Engineering's commercial team has received your quotation request for:
              </p>
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px', marginBottom: '20px', fontWeight: 700, color: '#0b4ea2', fontSize: '14px' }}>
                {service}
              </div>
              <p style={{ color: '#64748b', fontSize: '13px', marginBottom: '24px' }}>
                Our team will contact you shortly at <strong>{formData.phone || 'your phone number'}</strong>. For urgent technical queries, call our Multan head office directly at <a href="tel:0616303281" style={{ color: '#0b4ea2', fontWeight: 700 }}>061-6303281</a>.
              </p>
              <button className="btn-submit-booking" onClick={handleReset}>
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Selected System / Engineering Model</label>
                <input
                  type="text"
                  className="form-input"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  placeholder="e.g. V-Shift Passenger Elevator FJT-K001"
                  required
                />
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Engr. Ahmad Khan"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="0300-1234567"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Project City / Location *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Multan, Lahore, Gwadar"
                    className="form-input"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Project Scope & Technical Details</label>
                <textarea
                  rows={3}
                  placeholder="Specify floors/stops, passenger capacity, cooling tonnage, building drawings, or required timeline..."
                  className="form-textarea"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '12px', marginBottom: '16px' }}>
                <ShieldCheck size={16} color="#16a34a" />
                <span>OEM Certified Warranty • ISO Standard Safety Standards • Upfront Technical Submittals</span>
              </div>

              <button type="submit" className="btn-submit-booking">
                <Send size={15} style={{ display: 'inline', marginRight: '6px' }} />
                <span>Submit Quotation Request</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
