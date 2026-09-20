import { useState, type FC, type FormEvent } from 'react';
import {
  Briefcase,
  HardHat,
  Send,
  CheckCircle2,
  Phone,
  Mail,
  Shield,
  FileCheck,
  Award,
  DollarSign,
  HeartPulse,
  Truck,
  GraduationCap
} from 'lucide-react';

const CAREER_BENEFITS = [
  {
    icon: DollarSign,
    title: 'Competitive Industry Compensation',
    desc: 'Attractive salary packages with project bonuses, travel allowance, and overtime opportunities.'
  },
  {
    icon: HeartPulse,
    title: 'Health & Safety Protection',
    desc: 'Comprehensive on-site safety equipment, certified harness gear, and medical emergency coverage.'
  },
  {
    icon: Truck,
    title: 'Company Transport & Tool Rigs',
    desc: 'Equipped service vehicles provided for field squads with state-of-the-art diagnostic gear.'
  },
  {
    icon: GraduationCap,
    title: 'Factory OEM Training',
    desc: 'Direct manufacturer technical training on Daikin VRV, Midea inverter, and V-Shift lift systems.'
  }
];

const OPEN_POSITIONS = [
  {
    title: 'Senior Daikin VRV / VRF Field Engineer',
    location: 'Multan & South Punjab',
    type: 'Full-Time • Competitive Pkg',
    experience: '4+ Years Commercial VRV/VRF Experience'
  },
  {
    title: 'V-Shift Elevator Commissioning Lead',
    location: 'Multan HQ / Regional Sites',
    type: 'Full-Time • Competitive Pkg',
    experience: '3+ Years Passenger/Cargo Lift Installation'
  },
  {
    title: 'Refrigeration Copper Brazing & Ducting Foreman',
    location: 'Multan Fabrication Shop & Sites',
    type: 'Full-Time • Immediate Join',
    experience: 'Master Nitrogen Purge & Sheet Metal Skills'
  },
  {
    title: 'Commercial MEP & HVAC Estimator',
    location: 'Khanewal Road Office, Multan',
    type: 'Full-Time • Executive Grade',
    experience: 'Heat-load Calculation & BOQ Preparation'
  }
];

export const WorkWithUsSection: FC<{ onOpenSchedule: () => void }> = ({ onOpenSchedule }) => {
  const [activeTab, setActiveTab] = useState<'careers' | 'partners'>('careers');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    roleOrCompany: '',
    interest: 'career',
    notes: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // simulated success
    }, 1000);
  };

  return (
    <section id="work-with-us" className="work-with-us-section">
      <div className="container">
        {/* Header */}
        <div className="section-head-center">
          <h2 className="section-title">
            Work With Us: <span className="text-highlight-red">Careers & Contractor Alliances</span>
          </h2>
          <p className="section-subtitle">
            Whether you are a master tradesperson seeking a permanent home with unmatched benefits,
            or a general contractor looking for a reliable, bonded mechanical subcontractor—we deliver excellence.
          </p>

          {/* Toggle Tab */}
          <div className="work-tabs-bar">
            <button
              className={`work-tab-btn ${activeTab === 'careers' ? 'active' : ''}`}
              onClick={() => setActiveTab('careers')}
            >
              <HardHat size={17} />
              <span>Join Our Team (Careers)</span>
            </button>
            <button
              className={`work-tab-btn ${activeTab === 'partners' ? 'active' : ''}`}
              onClick={() => setActiveTab('partners')}
            >
              <Briefcase size={17} />
              <span>Commercial Subcontractors & RFPs</span>
            </button>
          </div>
        </div>

        {/* Dynamic Content Panel */}
        {activeTab === 'careers' ? (
          <div className="careers-container">
            {/* Benefits Row */}
            <div className="career-benefits-grid">
              {CAREER_BENEFITS.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="career-benefit-card">
                    <div className="benefit-icon-box">
                      <Icon size={24} />
                    </div>
                    <h4 className="benefit-title">{benefit.title}</h4>
                    <p className="benefit-desc">{benefit.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Positions Listing & Application Call */}
            <div className="positions-and-form-row">
              <div className="open-positions-col">
                <div className="positions-header">
                  <h3 className="positions-title">Immediate Open Positions</h3>
                  <span className="positions-badge">Actively Interviewing</span>
                </div>

                <div className="positions-list">
                  {OPEN_POSITIONS.map((pos, idx) => (
                    <div key={idx} className="position-item-card">
                      <div className="position-item-info">
                        <h4 className="pos-item-title">{pos.title}</h4>
                        <div className="pos-item-meta">
                          <span className="pos-location">{pos.location}</span>
                          <span className="pos-separator">•</span>
                          <span className="pos-type">{pos.type}</span>
                        </div>
                        <span className="pos-exp">{pos.experience}</span>
                      </div>
                      <button
                        className="btn-apply-pos"
                        onClick={() => {
                          setFormData({ ...formData, roleOrCompany: pos.title, interest: 'career' });
                          const el = document.getElementById('inquiry-form-card');
                          el?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <span>Apply</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Application / Inquiry Form */}
              <div id="inquiry-form-card" className="inquiry-form-card">
                <h3 className="inquiry-form-title">
                  {formSubmitted ? 'Application Received!' : 'Quick Application / Inquiry'}
                </h3>
                <p className="inquiry-form-sub">
                  {formSubmitted
                    ? 'Thank you! Our recruitment and operations manager will review your submission and contact you within 24 hours.'
                    : 'Submit your contact info and our hiring director will contact you confidentially within 24 hours.'}
                </p>

                {formSubmitted ? (
                  <div className="submission-success-box">
                    <CheckCircle2 size={48} className="success-icon" />
                    <h4>We Look Forward to Speaking With You</h4>
                    <p>Have an urgent inquiry? Call our Multan engineering office directly at 061-6303281 or 0300-4384978.</p>
                    <button
                      className="btn-reset-form"
                      onClick={() => setFormSubmitted(false)}
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="inquiry-form">
                    <div className="form-group-row">
                      <div className="form-group">
                        <label>Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. John Miller"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label>Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="(885) 555-0123"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label>Position Desired / Trade Specialty</label>
                      <input
                        type="text"
                        placeholder="e.g. Senior HVAC Tech or Plumber"
                        value={formData.roleOrCompany}
                        onChange={(e) => setFormData({ ...formData, roleOrCompany: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label>Brief Background / Certifications / Questions</label>
                      <textarea
                        rows={3}
                        placeholder="EPA Universal, 6 years commercial experience, clean DMV..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="btn-submit-inquiry">
                      <Send size={16} />
                      <span>Submit Confidential Inquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Subcontractors & RFPs Tab */
          <div className="partners-container">
            <div className="partners-intro-grid">
              <div className="partner-intro-card">
                <FileCheck size={32} className="partner-intro-icon" />
                <h3 className="partner-intro-title">RFP & Bid Invitations</h3>
                <p className="partner-intro-text">
                  We welcome bid packages for Class-A commercial tenant improvements, multi-family construction,
                  and municipal mechanical retrofits.
                </p>
                <div className="partner-intro-meta">
                  <CheckCircle2 size={15} className="text-blue" />
                  <span>Prompt 48-hour plan-takeoff turnaround</span>
                </div>
              </div>

              <div className="partner-intro-card">
                <Shield size={32} className="partner-intro-icon" />
                <h3 className="partner-intro-title">Fully Bonded & Insured</h3>
                <p className="partner-intro-text">
                  Complete peace of mind for prime contractors. Standard $5,000,000 commercial liability,
                  workman's compensation, and payment/performance bonding capacity.
                </p>
                <div className="partner-intro-meta">
                  <CheckCircle2 size={15} className="text-blue" />
                  <span>Established in Multan Since 2010</span>
                </div>
              </div>

              <div className="partner-intro-card">
                <Award size={32} className="partner-intro-icon" />
                <h3 className="partner-intro-title">Dedicated Project Engineers</h3>
                <p className="partner-intro-text">
                  Every commercial project is assigned a dedicated site superintendent who oversees trade coordination
                  meetings, nitrogen leak testing, and ensures zero handover delays.
                </p>
                <div className="partner-intro-meta">
                  <CheckCircle2 size={15} className="text-blue" />
                  <span>Daikin VRV & V-Shift Elevator Certified</span>
                </div>
              </div>
            </div>

            {/* RFP Call to Action Card */}
            <div className="partner-cta-box">
              <div className="partner-cta-info">
                <h4 className="partner-cta-heading">Ready to Submit Plans or an RFP for Mechanical / Lift Takeoff?</h4>
                <p className="partner-cta-sub">
                  Send drawings directly to our commercial engineering department or speak directly with our Senior Project Director.
                </p>
                <div className="partner-contact-row">
                  <div className="partner-contact-item">
                    <Mail size={16} />
                    <span>info@technicool.com.pk</span>
                  </div>
                  <div className="partner-contact-item">
                    <Phone size={16} />
                    <span>061-6303281 / 0300-4384978</span>
                  </div>
                </div>
              </div>

              <button className="btn-partner-action" onClick={onOpenSchedule}>
                <span>Request Commercial Vendor Package</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
