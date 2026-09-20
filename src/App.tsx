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

        {/* 6. Real Corporate Trust Highlights Bar */}
        <section id="about" style={{
          backgroundColor: '#fafbfc',
          borderTop: '1px solid #e2e8f0',
          borderBottom: '1px solid #e2e8f0',
          padding: '48px 0'
        }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '28px',
              textAlign: 'center'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: 'var(--primary-blue-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary-blue)'
                }}>
                  <Clock size={26} />
                </div>
                <h4 style={{ fontSize: '17px', fontWeight: 800, color: '#0f172a' }}>24/7 Rapid Field Response</h4>
                <p style={{ fontSize: '14px', color: '#64748b' }}>Live diagnostic and rescue dispatch ready across Multan and South Punjab.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: 'var(--accent-red-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-red)'
                }}>
                  <Award size={26} />
                </div>
                <h4 style={{ fontSize: '17px', fontWeight: 800, color: '#0f172a' }}>Established 2010 in Multan</h4>
                <p style={{ fontSize: '14px', color: '#64748b' }}>Over 15 years of proven mechanical climate engineering excellence.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: 'var(--primary-blue-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary-blue)'
                }}>
                  <ShieldCheck size={26} />
                </div>
                <h4 style={{ fontSize: '17px', fontWeight: 800, color: '#0f172a' }}>100% OEM Guaranteed</h4>
                <p style={{ fontSize: '14px', color: '#64748b' }}>Authorized partnerships with Daikin, Midea, Acson, Cross Air & AirX.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: 'var(--accent-red-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-red)'
                }}>
                  <Wrench size={26} />
                </div>
                <h4 style={{ fontSize: '17px', fontWeight: 800, color: '#0f172a' }}>Certified HVAC & Lift Squads</h4>
                <p style={{ fontSize: '14px', color: '#64748b' }}>Specialists trained for 50°C high-ambient VRV and precision VVVF elevators.</p>
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
