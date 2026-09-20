import { useState, type FC, type ChangeEvent } from 'react';
import { Flame, Snowflake, Activity, Zap, ArrowRight, Gauge } from 'lucide-react';

interface ThermalHeroSliderProps {
  onOpenSchedule: () => void;
}

export const ThermalHeroSlider: FC<ThermalHeroSliderProps> = ({ onOpenSchedule }) => {
  // Slider value: 0 (Extreme Cold 16°C) to 100 (Extreme Peak Ambient Heat 48°C)
  // Default centered around pleasant comfort 21°C (value ~ 30)
  const [sliderVal, setSliderVal] = useState<number>(25);

  // Compute temperatures based on sliderVal
  // At 0: Target = 16°C (Super Cool)
  // At 50: Target = 24°C (Standard Comfort)
  // At 100: Extreme Ambient = 48°C (Extreme Heat)
  const indoorTemp = Math.round(16 + (sliderVal / 100) * 14); // 16°C to 30°C
  const ambientOutdoorTemp = Math.round(34 + (sliderVal / 100) * 14); // 34°C to 48°C
  const powerSavingPercent = Math.max(25, Math.round(58 - (sliderVal * 0.25)));
  const inverterHz = Math.round(32 + ((100 - sliderVal) * 0.58));

  // Determine thermal color blend
  const heatRatio = sliderVal / 100; // 0 = fully cold cyan, 1 = fully hot amber

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSliderVal(Number(e.target.value));
  };

  const setPreset = (val: number) => {
    setSliderVal(val);
  };

  return (
    <div className="thermal-hero-card">
      <div className="thermal-card-glow-bg" style={{
        background: `radial-gradient(circle at ${sliderVal}% 40%, rgba(${Math.round(234 * heatRatio + 2 * (1 - heatRatio))}, ${Math.round(88 * heatRatio + 132 * (1 - heatRatio))}, ${Math.round(12 * heatRatio + 199 * (1 - heatRatio))}, 0.16) 0%, rgba(255,255,255,0) 70%)`
      }} />

      {/* Header telemetry badge */}
      <div className="thermal-header-row">
        <div className="thermal-badge-strip">
          <Activity size={15} color="var(--primary-blue)" />
          <span className="thermal-badge-title">Interactive Climate Simulator</span>
        </div>
        <div className="thermal-tagline-pill">
          <span>"Make Your Desire Climate"</span>
        </div>
      </div>

      {/* Dual Climate Display Meters */}
      <div className="thermal-meters-grid">
        {/* Desired Indoor Setpoint */}
        <div className="thermal-meter-box indoor-meter">
          <div className="meter-label-row">
            <span className="meter-caption">Engineered Indoor Setpoint</span>
            <Snowflake size={16} className="text-cyan-accent" />
          </div>
          <div className="meter-reading">
            <span className="temp-val" style={{ color: heatRatio > 0.6 ? '#d97706' : '#0284c7' }}>
              {indoorTemp}°C
            </span>
            <span className="temp-unit">/ {Math.round((indoorTemp * 9/5) + 32)}°F</span>
          </div>
          <div className="meter-status-note">
            <span className="status-dot-active" />
            <span>Inverter Modulating • Whisper Quiet</span>
          </div>
        </div>

        {/* Severe Ambient Heat Wave */}
        <div className="thermal-meter-box ambient-meter">
          <div className="meter-label-row">
            <span className="meter-caption">Peak Outdoor Ambient (Multan)</span>
            <Flame size={16} className="text-amber-accent" />
          </div>
          <div className="meter-reading">
            <span className="temp-val text-amber-accent">
              {ambientOutdoorTemp}°C
            </span>
            <span className="temp-unit">/ {Math.round((ambientOutdoorTemp * 9/5) + 32)}°F</span>
          </div>
          <div className="meter-status-note">
            <span>Extreme Summer Condition</span>
          </div>
        </div>
      </div>

      {/* Draggable Thermal Slider Control */}
      <div className="thermal-slider-container">
        <div className="slider-axis-labels">
          <button 
            type="button" 
            className={`preset-btn ${sliderVal <= 20 ? 'active' : ''}`}
            onClick={() => setPreset(15)}
          >
            <Snowflake size={13} />
            <span>Arctic Chill (18°C)</span>
          </button>
          <button 
            type="button" 
            className={`preset-btn ${sliderVal > 20 && sliderVal < 60 ? 'active' : ''}`}
            onClick={() => setPreset(35)}
          >
            <span>Balanced Comfort (21°C)</span>
          </button>
          <button 
            type="button" 
            className={`preset-btn ${sliderVal >= 60 ? 'active' : ''}`}
            onClick={() => setPreset(85)}
          >
            <Flame size={13} />
            <span>Desert Heatwave (46°C)</span>
          </button>
        </div>

        <div className="slider-track-wrap">
          <input
            type="range"
            min="0"
            max="100"
            value={sliderVal}
            onChange={handleSliderChange}
            className="thermal-range-input"
            aria-label="Drag to set your desire climate"
          />
          <div 
            className="slider-fill-glow" 
            style={{
              width: `${sliderVal}%`,
              background: `linear-gradient(90deg, #0284c7 0%, #06b6d4 50%, #f97316 100%)`
            }} 
          />
        </div>

        <div className="slider-legend-row">
          <span className="legend-cold">❄️ 16°C Deep Cooling</span>
          <span className="legend-hint">Drag slider to balance thermal load</span>
          <span className="legend-hot">🔥 48°C High Ambient</span>
        </div>
      </div>

      {/* Live Engineering Telemetry Strip */}
      <div className="thermal-telemetry-strip">
        <div className="telemetry-cell">
          <Gauge size={16} color="var(--primary-blue)" />
          <div className="telemetry-info">
            <span className="telemetry-val">{inverterHz} Hz</span>
            <span className="telemetry-lbl">Compressor Load</span>
          </div>
        </div>

        <div className="telemetry-divider" />

        <div className="telemetry-cell">
          <Zap size={16} color="#16a34a" />
          <div className="telemetry-info">
            <span className="telemetry-val">+{powerSavingPercent}%</span>
            <span className="telemetry-lbl">Energy Efficiency</span>
          </div>
        </div>

        <div className="telemetry-divider" />

        <div className="telemetry-cell">
          <button className="btn-thermal-book" onClick={onOpenSchedule}>
            <span>Design My Climate</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
