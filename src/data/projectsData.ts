export type VerticalType = 'all' | 'hvac' | 'elevators';

export type SectorType =
  | 'all'
  | 'Healthcare'
  | 'Industrial'
  | 'Corporate'
  | 'F&B'
  | 'Retail'
  | 'Education'
  | 'Religious'
  | 'Residential';

export interface Project {
  id: string;
  name: string;
  location: string;
  vertical: 'hvac' | 'elevators';
  sector: Exclude<SectorType, 'all'>;
  system: string;
  brandOrType: string;
  description: string;
  year?: string;
  logo?: string;
  image?: string;
}

export const PROJECTS_LIST: Project[] = [
  // HVAC Projects (24 real projects)
  {
    id: 'hvac-1',
    name: 'Ayat Hospital',
    location: 'Chungi #1, Multan',
    vertical: 'hvac',
    sector: 'Healthcare',
    system: 'Air Conditioning Supply & Comprehensive Installation',
    brandOrType: 'Midea Commercial Inverter',
    description: 'Clean-air patient ward cooling and operating theater climate stability with uninterrupted thermal efficiency.',
    logo: '/Ayat Hospital.png',
    image: '/projects/Ayat Hospital Chungi.png'
  },
  {
    id: 'hvac-2',
    name: 'Allied Bank Regional Head Office',
    location: 'Multan',
    vertical: 'hvac',
    sector: 'Corporate',
    system: 'Daikin Variable Refrigerant Volume (VRV)',
    brandOrType: 'Daikin VRV System',
    description: 'Centralized high-efficiency corporate HVAC with individual thermal zoning and automated building setback controls.',
    logo: '/Allied Bank.png',
    image: '/projects/Allied bank head office multan.png'
  },
  {
    id: 'hvac-3',
    name: 'The Arena Marquee',
    location: 'DHA Multan',
    vertical: 'hvac',
    sector: 'F&B',
    system: 'Rooftop Packaged Units & Central Air Distribution',
    brandOrType: 'Daikin & Clint Rooftop Packages',
    description: 'High-tonnage rapid chill capacity engineered for extreme peak guest density and high-ceiling air circulation.',
    logo: '/Daikin.png',
    image: '/projects/the arena marquww dha multan.png'
  },
  {
    id: 'hvac-4',
    name: 'PEP Complex',
    location: 'DHA Bahawalpur',
    vertical: 'hvac',
    sector: 'Corporate',
    system: 'Daikin VRV Multi-Split Inverter Architecture',
    brandOrType: 'Daikin VRV',
    description: 'Modern administrative complex conditioning with multi-tier refrigerant piping and low-noise air distribution.',
    logo: '/DHA Bahawalpur.png',
    image: '/projects/pep compleex bha bahawalpur.png'
  },
  {
    id: 'hvac-5',
    name: 'The Hanna Mall',
    location: 'DHA Quetta',
    vertical: 'hvac',
    sector: 'Retail',
    system: 'Central VRV Climate Engineering',
    brandOrType: 'Daikin VRV',
    description: 'Wide-area shopping concourse climate control operating efficiently across severe winter heating and summer cooling cycles.',
    logo: '/DHA qUETTA.png',
    image: '/projects/the hanna mall dha quetta.png'
  },
  {
    id: 'hvac-6',
    name: 'Pak Arab Fertilizer',
    location: 'Industrial Zone, Multan',
    vertical: 'hvac',
    sector: 'Industrial',
    system: 'Industrial Rooftop & Heavy-Duty VRV Systems',
    brandOrType: 'Daikin Heavy Industrial',
    description: 'Corrosion-resistant treated coils and precision thermal balancing for continuous 24/7 plant operations.',
    logo: '/Pakarab.png',
    image: '/projects/pak arab fertilizer multan.png'
  },
  {
    id: 'hvac-7',
    name: 'City Center Mall',
    location: 'SP Chowk, Multan Cantt',
    vertical: 'hvac',
    sector: 'Retail',
    system: 'Commercial VRV Multi-Floor Air Conditioning',
    brandOrType: 'Green Air VRV',
    description: 'High-footfall commercial shopping center installation with multi-zone digital thermostats.',
    logo: '/city gym.png',
    image: '/projects/city center multan.png'
  },
  {
    id: 'hvac-8',
    name: 'Sharif Complex',
    location: 'Brand Road, Multan',
    vertical: 'hvac',
    sector: 'Corporate',
    system: 'Multi-Zone Commercial VRV Engineering',
    brandOrType: 'Daikin VRV',
    description: 'Complete mechanical retrofit replacing outdated units with low-vibration, high-energy-efficiency VRV architecture.',
    logo: '/Sharif COmplex.png',
    image: '/projects/sahirf complex multan.png'
  },
  {
    id: 'hvac-9',
    name: '14th Street Pizza Co.',
    location: 'All South Punjab Branches',
    vertical: 'hvac',
    sector: 'F&B',
    system: 'Kitchen Exhaust Thermal Balancing & Dining Room Cooling',
    brandOrType: 'Commercial Packaged Splits',
    description: 'Turnkey climate conditioning overcoming intense commercial pizza ovens to maintain 22°C dining comfort.',
    logo: '/14 street pizza.png',
    image: '/projects/14th street pizza.png'
  },
  {
    id: 'hvac-10',
    name: 'DG Mall Soha Future Park',
    location: 'Faisalabad',
    vertical: 'hvac',
    sector: 'Retail',
    system: 'Large Scale Commercial VRF Network',
    brandOrType: 'Midea & Daikin VRF',
    description: 'Multi-story lifestyle mall climate setup with intelligent building management integration.',
    logo: '/SOHA future park.png',
    image: '/projects/dg mall soha future park.png'
  },
  {
    id: 'hvac-11',
    name: 'Al-Shifa Hospital',
    location: 'Faisalabad',
    vertical: 'hvac',
    sector: 'Healthcare',
    system: 'Medical Grade Clean Air VRV Engineering',
    brandOrType: 'Daikin VRV',
    description: 'Sterile environment climate control with high static pressure ducting and HEPA filtration integration.',
    logo: '/Shifa International HOspital.png',
    image: '/projects/al shifa faisalbad.png'
  },
  {
    id: 'hvac-12',
    name: 'University of Management and Technology (UMT)',
    location: 'Lahore',
    vertical: 'hvac',
    sector: 'Education',
    system: 'Institutional Multi-Tier VRV System',
    brandOrType: 'Green Air VRV',
    description: 'High-efficiency auditorium, laboratory, and classroom cooling engineered for variable student density.',
    logo: '/UMT.png',
    image: '/projects/umt lahore.png'
  },
  {
    id: 'hvac-13',
    name: 'PCPA Office',
    location: 'Industrial Estate, Multan',
    vertical: 'hvac',
    sector: 'Corporate',
    system: 'Daikin Split Air Conditioning Suite',
    brandOrType: 'Daikin Inverter Splits',
    description: 'Corporate executive suites outfitted with silent, high-efficiency inverter climate units.',
    logo: '/PCPA-removebg-preview.png',
    image: '/projects/pcpa office industrial estate multan.png'
  },
  {
    id: 'hvac-14',
    name: 'PepsiCo Beverages Plant',
    location: 'Industrial Estate, Multan',
    vertical: 'hvac',
    sector: 'Industrial',
    system: 'Variable Refrigerant Flow (VRF) Central Installation',
    brandOrType: 'Commercial VRF',
    description: 'Heavy industrial quality control labs and administrative facility climate engineering with continuous uptime.',
    logo: '/Pepsico-Emblem-removebg-preview.png',
    image: '/projects/pak arab fertilizer multan.png'
  },
  {
    id: 'hvac-15',
    name: 'Suncrop Foods Processing Complex',
    location: 'Industrial Estate, Multan',
    vertical: 'hvac',
    sector: 'Industrial',
    system: 'Daikin VRV, Hisense VRF & Packaged Rooftop Units',
    brandOrType: 'Daikin & Hisense Dual Architecture',
    description: 'Extensive food processing and corporate climate solution maintaining strict humidity and hygiene standards.',
    logo: '/Suncrop-Foods-Logo-removebg-preview.png',
    image: '/projects/patron chemicals industrial estate.png'
  },
  {
    id: 'hvac-16',
    name: 'Yaqoob Group Industrial Plant',
    location: 'Industrial Estate, Multan',
    vertical: 'hvac',
    sector: 'Industrial',
    system: 'Heavy Commercial Inverter Split Units',
    brandOrType: 'Midea & Daikin Commercial',
    description: 'Factory floor administrative zones and dispatch bays engineered for thermal resilience during peak 48°C ambient heat.',
    logo: '/Yaqoob Group.png',
    image: '/projects/fazal cloths head office.png'
  },
  {
    id: 'hvac-17',
    name: 'Yaqoob Group Corporate Office',
    location: 'DHA Multan',
    vertical: 'hvac',
    sector: 'Corporate',
    system: 'Precision Inverter Air Conditioning',
    brandOrType: 'Daikin Inverter Systems',
    description: 'Architectural executive office climate distribution with concealed refrigerant lines and customized diffusers.',
    logo: '/Yaqoob Group.png',
    image: '/projects/Allied bank head office multan.png'
  },
  {
    id: 'hvac-18',
    name: 'Patron Chemicals Manufacturing',
    location: 'Industrial Estate, Multan',
    vertical: 'hvac',
    sector: 'Industrial',
    system: 'Chemical Resistant Air Conditioning & Ventilation',
    brandOrType: 'Midea Commercial',
    description: 'Specially coated condensing units and insulated copper ducting designed for chemical manufacturing environments.',
    logo: '/Patron group.png',
    image: '/projects/patron chemicals industrial estate.png'
  },
  {
    id: 'hvac-19',
    name: 'Fazal Cloth Mills Head Office',
    location: 'Multan',
    vertical: 'hvac',
    sector: 'Industrial',
    system: 'High-Efficiency Multi-Zone Air Conditioning',
    brandOrType: 'Daikin Commercial',
    description: 'Corporate management tower conditioning for one of Pakistan’s largest textile manufacturing groups.',
    logo: '/Fazal Cloth.png',
    image: '/projects/fazal cloths head office.png'
  },
  {
    id: 'hvac-20',
    name: 'KFC (Kentucky Fried Chicken)',
    location: 'South Punjab Regional Outlets',
    vertical: 'hvac',
    sector: 'F&B',
    system: 'Commercial Restaurant Air Conditioning & Exhaust Balancing',
    brandOrType: 'Commercial High-Capacity Splits',
    description: 'Turnkey fast-casual cooling installations with rapid temperature recovery under continuous door openings.',
    logo: '/KFC.png',
    image: '/projects/kfc south punjab.png'
  },
  {
    id: 'hvac-21',
    name: 'UCH Power Plant',
    location: 'Dera Murad Jamali',
    vertical: 'hvac',
    sector: 'Industrial',
    system: 'Severe Desert Climate Inverter Conditioning',
    brandOrType: 'Daikin Heavy Duty',
    description: 'Critical electrical control room and technician station climate maintenance in high-ambient, dusty terrain.',
    logo: '/UCH.png',
    image: '/projects/uch power plant.png'
  },
  {
    id: 'hvac-22',
    name: 'Servo Oil Regional Office',
    location: 'Multan',
    vertical: 'hvac',
    sector: 'Corporate',
    system: '4-Way Ceiling Cassette Inverter Units',
    brandOrType: 'Daikin Cassette Systems',
    description: 'Uniform 360-degree airflow delivery across open-plan executive and engineering workstations.',
    logo: '/SERVO.png',
    image: '/projects/servo oil office.png'
  },
  {
    id: 'hvac-23',
    name: 'Sheikh Ameen Mosque',
    location: 'New Multan',
    vertical: 'hvac',
    sector: 'Religious',
    system: 'High-Capacity Daikin VRV Multi-Zone System',
    brandOrType: 'Daikin VRV High Ambient',
    description: 'Whisper-quiet prayer hall cooling with rapid pre-cool staging for Friday congregational peak loads.',
    logo: '/SILSILA AMEENA.png',
    image: '/projects/sheikha ameen mousque new nmultan.png'
  },
  {
    id: 'hvac-24',
    name: 'Fauji Fertilizer Company (FFC)',
    location: 'Goth Machi Complex',
    vertical: 'hvac',
    sector: 'Industrial',
    system: 'Heavy Commercial Rooftop Package Units',
    brandOrType: 'Daikin Packaged Rooftops',
    description: 'Rugged packaged mechanical cooling engineered to meet rigorous industrial safety and chemical-grade protocols.',
    logo: '/FFC.png',
    image: '/projects/ffc gouth machi.png'
  },

  // Elevator (V-Shift) Projects (9 real projects)
  {
    id: 'vshift-1',
    name: 'PCPA Office Headquarters',
    location: 'Industrial Estate, Multan',
    vertical: 'elevators',
    sector: 'Corporate',
    system: 'V-Shift Gearless Passenger Elevator',
    brandOrType: 'V-Shift MRL Passenger',
    description: 'High-finish stainless steel passenger lift with VVVF variable frequency drive and micro-leveling precision.',
    logo: '/PCPA-removebg-preview.png',
    image: '/projects/pcpa office industrial estate multan.png'
  },
  {
    id: 'vshift-2',
    name: 'Sharif Complex Commercial Hub',
    location: 'Brand Road, Multan',
    vertical: 'elevators',
    sector: 'Corporate',
    system: 'Heavy-Duty Freight & Cargo Lift',
    brandOrType: 'V-Shift Industrial Cargo',
    description: 'High-capacity cargo transport lift engineered for commercial merchandise transit with reinforced checker plate flooring.',
    logo: '/Sharif COmplex.png',
    image: '/projects/sahirf complex multan.png'
  },
  {
    id: 'vshift-3',
    name: 'Residence of Mr. Zahid',
    location: 'Royal Orchard, Multan',
    vertical: 'elevators',
    sector: 'Residential',
    system: 'Architectural Panoramic Residential Lift',
    brandOrType: 'V-Shift Luxury Home Series',
    description: 'Whisper-quiet luxury residential passenger elevator featuring custom glass panels, mirror stainless steel, and ARD battery backup.',
    logo: '/royal orchard.png',
    image: '/projects/residence of mr rahid royal orchad.png'
  },
  {
    id: 'vshift-4',
    name: 'Servo Oil Corporate Complex',
    location: 'Multan',
    vertical: 'elevators',
    sector: 'Corporate',
    system: '4-Unit Integrated Passenger Elevator Bank',
    brandOrType: 'V-Shift Quad Passenger Bank',
    description: 'Full vertical transportation overhaul consisting of 4 high-speed synchronized elevators with intelligent traffic dispatch.',
    logo: '/SERVO.png',
    image: '/projects/servo oil office.png'
  },
  {
    id: 'vshift-5',
    name: 'City Gym Fitness Facility',
    location: 'SP Chowk, Multan Cantt',
    vertical: 'elevators',
    sector: 'Retail',
    system: 'High-Cycle Commercial Passenger Lift',
    brandOrType: 'V-Shift Commercial Passenger',
    description: 'Durable, high-frequency passenger elevator serving multi-tier gym and wellness floors.',
    logo: '/city gym.png',
    image: '/projects/city gym sp chowck multan.png'
  },
  {
    id: 'vshift-6',
    name: 'Suncrop Foods Industrial Facility',
    location: 'Industrial Estate, Multan',
    vertical: 'elevators',
    sector: 'Industrial',
    system: 'Dual Installation: Heavy Cargo + Passenger Lift',
    brandOrType: 'V-Shift Industrial Dual Pack',
    description: 'Combined heavy tonnage cargo elevator for pallet transport alongside a smooth VVVF executive passenger elevator.',
    logo: '/Suncrop-Foods-Logo-removebg-preview.png',
    image: '/projects/patron chemicals industrial estate.png'
  },
  {
    id: 'vshift-7',
    name: 'Nuchem Chemical Industries',
    location: 'Industrial Estate, Multan',
    vertical: 'elevators',
    sector: 'Industrial',
    system: 'Industrial Passenger Elevators',
    brandOrType: 'V-Shift Heavy Duty Passenger',
    description: 'Corrosion-guarded electrical components and robust structural hoistway mechanics built for plant operations.',
    logo: '/Nuchem.png',
    image: '/projects/uch power plant.png'
  },
  {
    id: 'vshift-8',
    name: 'Yaqoob Group Corporate Office',
    location: 'R-Block, DHA Multan',
    vertical: 'elevators',
    sector: 'Corporate',
    system: 'Executive MRL Passenger Elevator',
    brandOrType: 'V-Shift Prime MRL',
    description: 'Smooth gearless machine-room-less elevator providing seamless floor transit with energy regeneration.',
    logo: '/Yaqoob Group.png',
    image: '/projects/city center multan.png'
  },
  {
    id: 'vshift-9',
    name: 'Sinaco Engineers Pvt Ltd',
    location: 'Multan',
    vertical: 'elevators',
    sector: 'Corporate',
    system: 'High-Precision Commercial Passenger Lifts',
    brandOrType: 'V-Shift Precision Series',
    description: 'Modernized vertical mobility infrastructure with digital floor indicators and touch-free sensor car operating panels.',
    logo: '/Sinaco Engineers.png',
    image: '/projects/al shifa faisalbad.png'
  }
];

export interface ClientLogo {
  name: string;
  label: string;
  category: string;
  logo: string;
}

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: 'PepsiCo', label: 'PepsiCo Industrial', category: 'Multinational FMCG', logo: '/Pepsico-Emblem-removebg-preview.png' },
  { name: 'KFC', label: 'KFC Pakistan', category: 'Global QSR Chain', logo: '/KFC.png' },
  { name: 'Allied Bank', label: 'Allied Bank Ltd', category: 'Commercial Banking', logo: '/Allied Bank.png' },
  { name: 'FFC', label: 'Fauji Fertilizer Co', category: 'Heavy Industrial', logo: '/FFC.png' },
  { name: 'Pak Arab', label: 'Pak Arab Fertilizer', category: 'Industrial Chemicals', logo: '/Pakarab.png' },
  { name: 'UMT', label: 'University of Management & Tech', category: 'Higher Education', logo: '/UMT.png' },
  { name: 'Al-Shifa', label: 'Al-Shifa Hospital', category: 'Healthcare Network', logo: '/Shifa International HOspital.png' },
  { name: 'Suncrop', label: 'Suncrop Foods', category: 'Food Processing', logo: '/Suncrop-Foods-Logo-removebg-preview.png' },
  { name: 'Fazal Cloth', label: 'Fazal Cloth Mills', category: 'Textile Industry', logo: '/Fazal Cloth.png' },
  { name: 'Yaqoob Group', label: 'Yaqoob Group of Companies', category: 'Diversified Conglomerate', logo: '/Yaqoob Group.png' },
  { name: 'Servo Oil', label: 'Servo Oil Corp', category: 'Petroleum & Lubricants', logo: '/SERVO.png' },
  { name: 'Patron Chemicals', label: 'Patron Chemicals Group', category: 'Chemical Processing', logo: '/Patron group.png' },
  { name: '14th Street Pizza', label: '14th Street Pizza Co.', category: 'Fast Casual Chain', logo: '/14 street pizza.png' },
  { name: 'Nuchem', label: 'Nuchem Chemical Industries', category: 'Chemical Production', logo: '/Nuchem.png' },
  { name: 'Sinaco', label: 'Sinaco Engineers Pvt Ltd', category: 'Engineering & Manufacturing', logo: '/Sinaco Engineers.png' },
  { name: 'PCPA', label: 'PCPA Headquarters', category: 'Corporate Association', logo: '/PCPA-removebg-preview.png' },
  { name: 'DHA Quetta', label: 'The Hanna Mall DHA', category: 'Prime Commercial Retail', logo: '/DHA qUETTA.png' },
  { name: 'DHA Bahawalpur', label: 'PEP Complex DHA', category: 'Administrative Authority', logo: '/DHA Bahawalpur.png' }
];
