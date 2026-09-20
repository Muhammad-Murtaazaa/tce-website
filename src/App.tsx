import { useState } from 'react';
import { MainHeader } from './components/Header/MainHeader';
import { Navbar } from './components/Header/Navbar';
import { HeroSection } from './components/Hero/HeroSection';
import { ServiceCards } from './components/Hero/ServiceCards';
import { BrandsMarqueeSection } from './components/Clients/BrandsMarqueeSection';
import { ProjectsSection } from './components/Projects/ProjectsSection';
import { ClientsSection } from './components/Clients/ClientsSection';
import { Footer } from './components/Footer/Footer';
import { FloatingChat } from './components/Widgets/FloatingChat';
import { ShieldCheck, Award, Clock, Wrench } from 'lucide-react';

import './styles/header.css';
import './styles/hero.css';
import './styles/sections.css';
import './styles/footer.css';
import './styles/widgets.css';

export function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="app-root">
      {/* 1. Main Identity & Utility Header */}
      <MainHeader
        onToggleMobileMenu={() => setIsMobileNavOpen(true)}
      />

      {/* 3. Multi-Category Navigation Bar */}
      <Navbar
        isMobileOpen={isMobileNavOpen}
        onCloseMobile={() => setIsMobileNavOpen(false)}
      />

      {/* Main Page Flow */}
      <main>
        {/* 4. Central Hero Section Showcase with Draggable Thermal Slider */}
        <HeroSection />

        {/* 5. Peeking Service Quick Cards (HVAC, Elevators, Copper/Ducting) */}
        <ServiceCards />

        {/* 6. Mid-Page Credibility Trust Bar (Industrial Engineering Tech) */}
        <section className="credibility-trust-section">
          <div className="container">
            <div className="credibility-trust-grid">
              {/* Item 01 */}
              <div className="credibility-trust-card">
                <div className="credibility-card-top">
                  <div className="credibility-icon-badge badge-blue">
                    <Clock size={22} />
                  </div>
                </div>
                <h4 className="credibility-title">24/7 Rapid Field Response</h4>
                <p className="credibility-desc">Live diagnostic and rescue dispatch ready across Multan and South Punjab.</p>
              </div>

              {/* Item 02 */}
              <div className="credibility-trust-card">
                <div className="credibility-card-top">
                  <div className="credibility-icon-badge badge-steel">
                    <Award size={22} />
                  </div>
                </div>
                <h4 className="credibility-title">15+ Years Track Record</h4>
                <p className="credibility-desc">Over 15 years of proven mechanical climate engineering excellence in Multan.</p>
              </div>

              {/* Item 03 */}
              <div className="credibility-trust-card">
                <div className="credibility-card-top">
                  <div className="credibility-icon-badge badge-emerald">
                    <ShieldCheck size={22} />
                  </div>
                </div>
                <h4 className="credibility-title">100% OEM Guaranteed</h4>
                <p className="credibility-desc">Authorized partnerships with Daikin, Midea, Acson, Cross Air & AirX.</p>
              </div>

              {/* Item 04 */}
              <div className="credibility-trust-card">
                <div className="credibility-card-top">
                  <div className="credibility-icon-badge badge-crimson">
                    <Wrench size={22} />
                  </div>
                </div>
                <h4 className="credibility-title">Certified HVAC & Lift Squads</h4>
                <p className="credibility-desc">Specialists trained for 50°C high-ambient VRV and precision VVVF elevators.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Full-Width Edge-to-Edge Animated Marquee: Trusted by Leading Brands */}
        <BrandsMarqueeSection />

        {/* 9. Flagship Projects Showcase (in an interactive Carousel) */}
        <ProjectsSection />

        {/* 9. Enterprise Clients & Authorized OEM Partners */}
        <ClientsSection />
      </main>

      {/* Corporate Engineering Footer */}
      <Footer />

      {/* Floating Interactive Support Tools */}
      <FloatingChat />
    </div>
  );
}

export default App;
