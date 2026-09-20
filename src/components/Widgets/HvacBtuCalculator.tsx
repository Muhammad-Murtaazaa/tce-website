import { useState, useMemo, type FC } from 'react';
import { Sun, Users, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HvacBtuCalculatorProps {
  onOpenSchedule: (recommendedTonnage?: string) => void;
}

export const HvacBtuCalculator: FC<HvacBtuCalculatorProps> = ({ onOpenSchedule }) => {
  const [lengthFt, setLengthFt] = useState<number>(18);
  const [widthFt, setWidthFt] = useState<number>(14);
  const [ceilingHeight, setCeilingHeight] = useState<number>(10);
  const [sunExposure, setSunExposure] = useState<'low' | 'moderate' | 'high'>('high'); // Default Multan high sun
  const [roomType, setRoomType] = useState<'bedroom' | 'office' | 'restaurant' | 'server'>('bedroom');
  const [occupants, setOccupants] = useState<number>(3);

  const areaSqFt = lengthFt * widthFt;

  const calculation = useMemo(() => {
    // Base rule of thumb in Pakistan's high-ambient (45°C - 50°C summer):
    // ~28-32 BTU per sq ft base for standard ceiling
    let baseBtuPerSqFt = 30;

    // Room type adjustments
    if (roomType === 'office') baseBtuPerSqFt = 34;
    if (roomType === 'restaurant') baseBtuPerSqFt = 42;
    if (roomType === 'server') baseBtuPerSqFt = 50;

    let btu = areaSqFt * baseBtuPerSqFt;

    // Ceiling height multiplier
    if (ceilingHeight > 10) {
      btu *= 1 + ((ceilingHeight - 10) * 0.05);
    }

    // Sun exposure (Top floor / direct afternoon sun in South Punjab)
    if (sunExposure === 'high') btu *= 1.22;
    if (sunExposure === 'low') btu *= 0.92;

    // Occupants (add ~600 BTU per person above 2)
    if (occupants > 2) {
      btu += (occupants - 2) * 600;
    }

    // Convert to Tonnage (1 Ton = 12,000 BTU)
    const exactTons = btu / 12000;
    let recommendedTon = 1.0;
    let tonLabel = '1.0 Ton';

    if (exactTons <= 1.15) {
      recommendedTon = 1.0;
      tonLabel = '1.0 Ton (12,000 BTU)';
    } else if (exactTons <= 1.65) {
      recommendedTon = 1.5;
      tonLabel = '1.5 Ton (18,000 BTU)';
    } else if (exactTons <= 2.25) {
      recommendedTon = 2.0;
      tonLabel = '2.0 Ton (24,000 BTU)';
    } else if (exactTons <= 3.25) {
      recommendedTon = 3.0;
      tonLabel = '3.0 Ton (36,000 BTU)';
    } else if (exactTons <= 4.25) {
      recommendedTon = 4.0;
      tonLabel = '4.0 Ton Commercial Cassette';
    } else {
      recommendedTon = Math.ceil(exactTons);
      tonLabel = `${recommendedTon}.0 Ton VRV Multi-Split`;
    }

    // Recommended unit type
    let unitType = 'Inverter Wall-Mounted Split (Daikin / Midea)';
    if (exactTons > 2.0 && exactTons <= 3.5) {
      unitType = '4-Way Ceiling Cassette or Floor Standing Unit';
    } else if (exactTons > 3.5) {
      unitType = 'Daikin VRV Multi-Zone or Ducted Packaged System';
    }

    return {
      totalBtu: Math.round(btu),
      exactTons: exactTons.toFixed(2),
      recommendedTon,
      tonLabel,
      unitType
    };
  }, [areaSqFt, ceilingHeight, sunExposure, roomType, occupants]);

  return (
    <div id="calculator" className="calculator-widget-section">
      <div className="container">
        {/* Header */}
        <div className="section-head-center">
          <h2 className="section-title">
            HVAC Load & <span className="text-highlight-red">BTU Sizing Calculator</span>
          </h2>
          <p className="section-subtitle">
            Accurately size cooling capacity tailored for Pakistan's severe summer heat (up to 50°C).
            Calculate tonnage based on floor area, sun exposure, and occupancy.
          </p>
        </div>

        {/* Interactive Calculator Body */}
        <div className="calculator-card-layout">
          {/* Inputs Column */}
          <div className="calc-inputs-column">
            <h3 className="calc-card-title">1. Space Specifications</h3>

            {/* Dimensions Row */}
            <div className="calc-form-row">
              <div className="calc-field">
                <label>Room Length (ft)</label>
                <div className="calc-input-wrapper">
                  <input
                    type="number"
                    min="6"
                    max="100"
                    value={lengthFt}
                    onChange={(e) => setLengthFt(Math.max(1, Number(e.target.value)))}
                    className="calc-number-input"
                  />
                  <span className="calc-unit">ft</span>
                </div>
              </div>

              <div className="calc-field">
                <label>Room Width (ft)</label>
                <div className="calc-input-wrapper">
                  <input
                    type="number"
                    min="6"
                    max="100"
                    value={widthFt}
                    onChange={(e) => setWidthFt(Math.max(1, Number(e.target.value)))}
                    className="calc-number-input"
                  />
                  <span className="calc-unit">ft</span>
                </div>
              </div>

              <div className="calc-field">
                <label>Ceiling Height</label>
                <select
                  value={ceilingHeight}
                  onChange={(e) => setCeilingHeight(Number(e.target.value))}
                  className="calc-select-input"
                >
                  <option value={9}>Standard (9 - 10 ft)</option>
                  <option value={12}>High Ceiling (11 - 12 ft)</option>
                  <option value={15}>Double Height (14 - 16 ft)</option>
                </select>
              </div>
            </div>

            {/* Area Badge */}
            <div className="calc-computed-area-strip">
              <span>Calculated Floor Area:</span>
              <strong>{areaSqFt} sq. ft. (~{Math.round(areaSqFt / 9)} sq. meters)</strong>
            </div>

            {/* Space Type */}
            <div className="calc-field-group">
              <label className="field-group-title">Space Type / Application</label>
              <div className="calc-radio-pill-grid">
                <button
                  type="button"
                  className={`radio-pill-btn ${roomType === 'bedroom' ? 'active' : ''}`}
                  onClick={() => setRoomType('bedroom')}
                >
                  Residential Bedroom / Lounge
                </button>
                <button
                  type="button"
                  className={`radio-pill-btn ${roomType === 'office' ? 'active' : ''}`}
                  onClick={() => setRoomType('office')}
                >
                  Commercial Office / Bank
                </button>
                <button
                  type="button"
                  className={`radio-pill-btn ${roomType === 'restaurant' ? 'active' : ''}`}
                  onClick={() => setRoomType('restaurant')}
                >
                  Restaurant / Dining Hall
                </button>
                <button
                  type="button"
                  className={`radio-pill-btn ${roomType === 'server' ? 'active' : ''}`}
                  onClick={() => setRoomType('server')}
                >
                  Server / Equipment Room
                </button>
              </div>
            </div>

            {/* Sunlight Exposure & Occupancy */}
            <div className="calc-form-row">
              <div className="calc-field">
                <label>
                  <Sun size={14} style={{ display: 'inline', marginRight: '4px' }} />
                  Sun Exposure / Location
                </label>
                <select
                  value={sunExposure}
                  onChange={(e) => setSunExposure(e.target.value as any)}
                  className="calc-select-input"
                >
                  <option value="high">Top Floor Roof / Direct West Sun (Severe)</option>
                  <option value="moderate">Intermediate Floor / Moderate Sun</option>
                  <option value="low">Ground Floor / Well Shaded</option>
                </select>
              </div>

              <div className="calc-field">
                <label>
                  <Users size={14} style={{ display: 'inline', marginRight: '4px' }} />
                  Average Occupants
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={occupants}
                  onChange={(e) => setOccupants(Math.max(1, Number(e.target.value)))}
                  className="calc-number-input"
                />
              </div>
            </div>
          </div>

          {/* Results Display Column */}
          <div className="calc-results-column">
            <div className="results-header-badge">
              <span>Technicool Thermodynamic Sizing</span>
            </div>

            <div className="results-hero-box">
              <span className="results-caption">Recommended Capacity</span>
              <div className="results-tonnage-val">{calculation.tonLabel}</div>
              <div className="results-btu-sub">
                Estimated Peak Thermal Load: <strong>{calculation.totalBtu.toLocaleString()} BTU/hr</strong>
              </div>
            </div>

            <div className="results-specs-list">
              <div className="result-spec-item">
                <CheckCircle2 size={16} color="var(--primary-blue)" />
                <div>
                  <strong>Recommended System Architecture:</strong>
                  <p>{calculation.unitType}</p>
                </div>
              </div>

              <div className="result-spec-item">
                <CheckCircle2 size={16} color="#16a34a" />
                <div>
                  <strong>Inverter Power Efficiency:</strong>
                  <p>Up to 55% power savings over conventional non-inverter systems during continuous summer runs.</p>
                </div>
              </div>

              <div className="result-spec-item">
                <CheckCircle2 size={16} color="var(--vshift-gold)" />
                <div>
                  <strong>High Ambient Reliability:</strong>
                  <p>Guaranteed heat rejection performance up to 52°C outdoor ambient temperatures.</p>
                </div>
              </div>
            </div>

            <div className="results-action-box">
              <button
                className="btn-calc-consult"
                onClick={() => onOpenSchedule(`${calculation.tonLabel} System Consultation`)}
              >
                <span>Request Quotation for {calculation.tonLabel}</span>
                <ArrowRight size={16} />
              </button>
              <div className="calc-disclaimer">
                <ShieldCheck size={13} />
                <span>On-site engineering load survey provided before final procurement.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
