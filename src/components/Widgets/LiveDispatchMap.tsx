import { useState, type FC } from 'react';
import { Radio, Truck, MapPin, CheckCircle2, Phone, ArrowRight } from 'lucide-react';

interface FleetUnit {
  id: string;
  vehicle: string;
  sectorName: string;
  status: 'active-site' | 'en-route' | 'standby';
  statusLabel: string;
  leadEngineer: string;
  eta: string;
  toolsOnboard: string;
  currentAssignment: string;
}

const FLEET_UNITS: FleetUnit[] = [
  {
    id: 'TCE-FLEET-01',
    vehicle: 'Toyota HiAce Heavy Service Unit #01',
    sectorName: 'Multan Industrial Estate & Khanewal Rd',
    status: 'active-site',
    statusLabel: 'Live On-Site Maintenance',
    leadEngineer: 'Engr. Muhammad Tariq (Daikin & VRV Certified)',
    eta: 'Active On Site',
    toolsOnboard: '550 PSI Nitrogen Test Rig, Digital Manifold, Inverter In-circuit Analyzer',
    currentAssignment: 'Industrial Plant Compressor Commissioning'
  },
  {
    id: 'TCE-FLEET-02',
    vehicle: 'Rapid Response Mobile Unit #02',
    sectorName: 'Multan Cantt & SP Chowk Commercial',
    status: 'en-route',
    statusLabel: 'En Route to Client Site',
    leadEngineer: 'Engr. Asif Raza (Commercial HVAC Specialist)',
    eta: '18 Minutes',
    toolsOnboard: 'Rotary Vacuum Pump, R-32/R-410A Refrigerant Recovery Kit, Ultrasonic Leak Detector',
    currentAssignment: 'Bank Branch 4-Way Cassette Cooling Restoration'
  },
  {
    id: 'TCE-FLEET-03',
    vehicle: 'V-Shift Elevator Engineering Rig #03',
    sectorName: 'DHA Multan & Bosan Road Corridor',
    status: 'active-site',
    statusLabel: 'Hoistway & Controller Setup',
    leadEngineer: 'Engr. Kamran Shah (Senior Elevator Systems Lead)',
    eta: 'Active On Site',
    toolsOnboard: 'Laser Rail Alignment Jig, Traction Cable Tensioner, ARD Battery Diagnostic Kit',
    currentAssignment: 'V-Shift Passenger MRL Elevator Dynamic Commissioning'
  },
  {
    id: 'TCE-FLEET-04',
    vehicle: 'Mobile Support Unit #04',
    sectorName: 'Khanewal Road Head Office (Standby)',
    status: 'standby',
    statusLabel: 'Standby Ready for Priority Dispatch',
    leadEngineer: 'Engr. Shahbaz Ahmed (Emergency Response Supervisor)',
    eta: 'Immediate 10-Min Departure',
    toolsOnboard: 'Complete Emergency Diagnostic & OEM Spare Parts Inventory',
    currentAssignment: 'HQ Standby Squad for Critical Unscheduled Callouts'
  },
  {
    id: 'TCE-FLEET-05',
    vehicle: 'Regional South Punjab Unit #05',
    sectorName: 'DHA Bahawalpur & Southern Corridor',
    status: 'en-route',
    statusLabel: 'En Route on Highway',
    leadEngineer: 'Engr. Bilal Hussain (VRV Field Specialist)',
    eta: '35 Minutes',
    toolsOnboard: 'Heavy-Duty Brazing Nitrogen Station, Electronic Vacuum Microns Gauge',
    currentAssignment: 'Commercial Plaza VRV Expansion Verification'
  }
];

interface LiveDispatchMapProps {
  onOpenSchedule: (serviceName?: string) => void;
  onOpenEtaModal?: () => void;
}

export const LiveDispatchMap: FC<LiveDispatchMapProps> = ({ onOpenSchedule, onOpenEtaModal }) => {
  const [selectedUnitId, setSelectedUnitId] = useState<string>('TCE-FLEET-02');

  const selectedUnit = FLEET_UNITS.find((u) => u.id === selectedUnitId) || FLEET_UNITS[0];

  return (
    <div id="dispatch-map" className="dispatch-map-section">
      <div className="container">
        {/* Header */}
        <div className="section-head-center">
          <div className="section-pill">
            <Radio size={14} className="pill-icon text-red animate-pulse-dot" />
            <span>Real-Time Operations Telemetry</span>
          </div>
          <h2 className="section-title">
            Live Service Dispatch & <span className="text-highlight-red">Fleet Radar</span>
          </h2>
          <p className="section-subtitle">
            Monitor active Technicool Engineering mobile field squads in real-time across Multan,
            South Punjab, and regional industrial corridors. 24/7 rapid emergency dispatch readiness.
          </p>
        </div>

        {/* Live Radar Console Grid */}
        <div className="dispatch-radar-console">
          {/* Left: Sector Fleet Selector */}
          <div className="radar-fleet-list">
            <div className="radar-list-header">
              <Truck size={17} color="var(--primary-blue)" />
              <span>Active Field Squads ({FLEET_UNITS.length} Units Online)</span>
            </div>

            <div className="fleet-items-scroll">
              {FLEET_UNITS.map((unit) => {
                const isSelected = unit.id === selectedUnitId;
                return (
                  <div
                    key={unit.id}
                    className={`fleet-item-card ${isSelected ? 'active' : ''}`}
                    onClick={() => setSelectedUnitId(unit.id)}
                  >
                    <div className="fleet-item-top">
                      <span className="fleet-id">{unit.id}</span>
                      <span
                        className={`status-pill ${
                          unit.status === 'active-site'
                            ? 'pill-green'
                            : unit.status === 'en-route'
                            ? 'pill-blue'
                            : 'pill-amber'
                        }`}
                      >
                        {unit.statusLabel}
                      </span>
                    </div>

                    <h4 className="fleet-sector-name">{unit.sectorName}</h4>

                    <div className="fleet-item-footer">
                      <span className="fleet-tech">{unit.leadEngineer.split('(')[0]}</span>
                      <span className="fleet-eta">ETA: {unit.eta}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Selected Squad Live Telemetry Detail Panel */}
          <div className="radar-telemetry-panel">
            <div className="panel-header-badge">
              <div className="live-dot animate-pulse-dot" />
              <span>LIVE TELEMETRY: {selectedUnit.id}</span>
            </div>

            <div className="telemetry-lead-box">
              <h3 className="telemetry-vehicle-title">{selectedUnit.vehicle}</h3>
              <div className="telemetry-sector-callout">
                <MapPin size={16} color="var(--accent-red)" />
                <span>Operating Sector: <strong>{selectedUnit.sectorName}</strong></span>
              </div>
            </div>

            <div className="telemetry-metrics-grid">
              <div className="telemetry-metric-card">
                <span className="metric-caption">Mission Status</span>
                <strong className="metric-value text-blue">{selectedUnit.statusLabel}</strong>
              </div>

              <div className="telemetry-metric-card">
                <span className="metric-caption">Estimated Arrival Window</span>
                <strong className="metric-value">{selectedUnit.eta}</strong>
              </div>
            </div>

            <div className="telemetry-detail-list">
              <div className="detail-row">
                <CheckCircle2 size={16} color="var(--primary-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Assigned Master Engineer:</strong>
                  <p>{selectedUnit.leadEngineer}</p>
                </div>
              </div>

              <div className="detail-row">
                <CheckCircle2 size={16} color="var(--vshift-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Current Objective:</strong>
                  <p>{selectedUnit.currentAssignment}</p>
                </div>
              </div>

              <div className="detail-row">
                <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Diagnostic Rig Onboard:</strong>
                  <p>{selectedUnit.toolsOnboard}</p>
                </div>
              </div>
            </div>

            {/* Radar CTA Actions */}
            <div className="telemetry-actions-row">
              <button
                className="btn-dispatch-request"
                onClick={() => onOpenSchedule(`Emergency Mobile Squad for ${selectedUnit.sectorName}`)}
              >
                <span>Request Squad to My Location</span>
                <ArrowRight size={15} />
              </button>

              {onOpenEtaModal && (
                <button className="btn-track-portal" onClick={onOpenEtaModal}>
                  <span>Track ETA Live Portal</span>
                </button>
              )}

              <a href="tel:0616303281" className="btn-radar-call">
                <Phone size={15} />
                <span>061-6303281</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
