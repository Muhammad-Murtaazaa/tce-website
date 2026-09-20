export interface OEMBrand {
  name: string;
  category: string;
  badge: string;
  description: string;
  logo: string;
}

export const COMPANY_INFO = {
  name: 'Technicool Engineering',
  shortName: 'TCE',
  tagline: 'Make Your Desire Climate',
  foundedYear: 2010,
  headquarters: 'Multan, Pakistan',
  logo: '/TCE.png',
  address: 'Office No. 22, Inside Aneesa Center, Opp. MashAllah Electronics, Khanewal Road, Multan',
  phones: {
    landline: '061-6303281',
    mobile1: '0300-4384978',
    mobile2: '0300-8304978',
    displayPrimary: '061-6303281 / 0300-4384978'
  },
  email: 'info@technicool.com.pk',
  vision:
    'To be a leading provider of HVAC and vertical transportation solutions, delivering innovative, energy-efficient, and reliable systems that improve comfort, safety, and mobility in buildings.',
  mission:
    'Design, supply, install, and maintain high-quality HVAC and elevator systems meeting international standards, with dependable engineering solutions, safety, efficiency, and long-term value.',
  elevatorDivision: {
    brandName: 'V-Shift Elevators',
    foundedYear: 2024,
    tagline: 'Precision Vertical Mobility',
    description:
      'Engineered passenger and freight lift solutions, offering both semi-imported and imported configurations tailored for industrial reliability and architectural luxury.'
  }
};

export const OEM_BRANDS: OEMBrand[] = [
  {
    name: 'Daikin',
    category: 'VRV / Commercial Systems',
    badge: 'Authorized Solutions Provider',
    description: 'Global pioneer in Variable Refrigerant Volume (VRV/VRF), inverter rooftops, and magnetic chillers.',
    logo: '/Daikin.png'
  },
  {
    name: 'Midea',
    category: 'Commercial & Inverter Split',
    badge: 'Direct Dealership Partner',
    description: 'World-leading energy-efficient residential inverter splits, cassettes, and multi-zone VRF systems.',
    logo: '/Midea.png'
  },
  {
    name: 'Acson International',
    category: 'Commercial HVAC-R',
    badge: 'Authorized Equipment Partner',
    description: 'Robust Malaysian heavy commercial and light commercial air conditioning solutions for rigorous climates.',
    logo: '/Acson.png'
  },
  {
    name: 'Cross Air',
    category: 'Industrial Air Conditioning',
    badge: 'Specialized Commercial Partner',
    description: 'Precision environmental control units, heavy ducted units, and industrial air handling.',
    logo: '/Cross Air.png'
  },
  {
    name: 'AirX Air Conditioners',
    category: 'Precision Engineered Climate',
    badge: 'Authorized Channel Partner',
    description: 'High-performance commercial and residential split cooling systems optimized for extreme peak summers.',
    logo: '/AirX.png'
  }
];

export const SERVICE_VERTICALS = [
  {
    id: 'hvac-solutions',
    vertical: 'hvac',
    title: 'Total HVAC-R Solutions',
    badge: 'Core Division • Est. 2010',
    description:
      'Complete end-to-end HVAC lifecycle engineering—from heat-load simulation and equipment procurement to certified installation, ductwork fabrication, and rapid-response preventative maintenance.',
    subcategories: [
      {
        title: 'Residential Climate Systems',
        desc: 'Conventional splits & inverter single-split units offering ultra-low power consumption, quiet operation, and smart climate control.',
        badge: 'Inverter & Smart Tech'
      },
      {
        title: 'Light Commercial Units',
        desc: 'Floor standing units, 4-way ceiling cassettes, exposed ceiling units, and ducted splits for retail outlets, clinics, and banks.',
        badge: 'High-Capacity Zoning'
      },
      {
        title: 'Commercial & VRV/VRF Systems',
        desc: 'Daikin VRV/VRF multi-zone installations, rooftop packaged units, and Heat Recovery Ventilators (HRV) for high-rises and factories.',
        badge: 'Central Architecture'
      },
      {
        title: 'Industrial Copper Piping & Ducting',
        desc: 'Specialized in-house copper refrigeration line brazing under inert nitrogen purge, and heavy-gauge galvanized sheet metal ducting.',
        badge: 'Photo-Driven Capability'
      }
    ]
  },
  {
    id: 'vshift-elevators',
    vertical: 'elevators',
    title: 'V-Shift Elevators',
    badge: 'Expansion Division • Est. 2024',
    description:
      'Engineered vertical transportation solutions combining European and Asian mechanical standards with local architectural integration. Dedicated to maximum safety, ride smoothness, and energy regeneration.',
    subcategories: [
      {
        title: 'Passenger Elevators',
        desc: 'Gearless traction and machine-room-less (MRL) passenger lifts for corporate headquarters, hospitals, and premium private residences.',
        badge: 'VVVF Precision Ride'
      },
      {
        title: 'Industrial Cargo & Freight Lifts',
        desc: 'High-tonnage hydraulic and traction cargo lifts with reinforced steel floors and oversized doors engineered for chemical and food plants.',
        badge: 'Heavy Tonnage Duty'
      },
      {
        title: 'Imported & Semi-Imported Systems',
        desc: 'Turnkey imported cabin packages or semi-imported hybrid assemblies custom-configured to client budget and architectural dimensions.',
        badge: 'Custom Architecture'
      },
      {
        title: 'Modernization & Maintenance AMC',
        desc: 'Controller upgrades, microprocessor micro-stepping, automatic rescue devices (ARD), and scheduled safety inspection contracts.',
        badge: '24/7 Safety Assurance'
      }
    ]
  }
];
