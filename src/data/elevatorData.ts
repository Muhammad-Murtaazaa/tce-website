export type ElevatorCategory =
  | 'all'
  | 'passenger'
  | 'panoramic'
  | 'hospital'
  | 'villa'
  | 'doors';

export interface ElevatorSeriesItem {
  id: string;
  category: Exclude<ElevatorCategory, 'all'>;
  categoryLabel: string;
  badge: string;
  title: string;
  subtitle: string;
  modelCodes: string;
  image: string;
  bestFor: string;
  description: string;
  specs: {
    ceiling: string;
    carWall: string;
    handrail: string;
    flooring: string;
  };
  features: string[];
}

export const ELEVATOR_SERIES_DATA: ElevatorSeriesItem[] = [
  {
    id: 'vshift-cat-1',
    category: 'passenger',
    categoryLabel: 'Passenger Lifts',
    badge: 'Corporate & Commercial',
    title: 'Hairline & Mirror Etched Passenger Cabins',
    subtitle: 'Clean Architectural Stainless Steel with Precision LED Downlights',
    modelCodes: 'FJT-K001 ~ FJT-K008',
    image: '/elevators/passenger-hairline-k001-k008.png',
    bestFor: 'Corporate Towers, Bank Branches & Educational Campuses',
    description: 'Engineered with precision hairline stainless steel, custom acrylic lighting arches, and multi-pattern mirror etched panels providing clean, corporate aesthetics.',
    specs: {
      ceiling: 'Hairline stainless steel, acrylic arch & LED downlights',
      carWall: 'Hairline stainless steel & mirror-etched artistic panels',
      handrail: 'Stainless steel flat tube & single round tube',
      flooring: 'High-density PVC & Italian polished marble inlays'
    },
    features: [
      'Whisper-quiet VVVF drive with micro-leveling precision ±2mm',
      'Anti-fingerprint hairline brushed stainless steel',
      'Energy-efficient recessed LED optical illumination',
      'Micro-stroke push buttons with braille indicators'
    ]
  },
  {
    id: 'vshift-cat-2',
    category: 'passenger',
    categoryLabel: 'Executive Passenger',
    badge: 'Executive & High-Rise',
    title: 'Black Titanium Mirror & Modern Etched Series',
    subtitle: 'Deep Architectural Black Titanium with Champagne Gold Accents',
    modelCodes: 'FJT-K009 ~ FJT-K016',
    image: '/elevators/passenger-black-titanium-k009-k016.png',
    bestFor: 'Financial HQs, Executive Boardrooms & Commercial Plazas',
    description: 'Combines deep PVD black titanium hairline finishes with warm champagne gold mirror panels, intricate damask etching, and natural wood grain finishes.',
    specs: {
      ceiling: 'Black titanium mirror, champagne gold LED light-emitting panel',
      carWall: 'Black titanium hairline, mirror etched, champagne gold & wood',
      handrail: 'Black titanium double round tube & champagne gold tube',
      flooring: 'Polished geometric marble parquet & wear-resistant PVC'
    },
    features: [
      'PVD vacuum-ion electroplated black titanium finish',
      'Integrated 720° acoustic dampening for ultra-quiet ride',
      'Dual COP emergency telephone & intercom console',
      'Overload weight sensors with automated bypass'
    ]
  },
  {
    id: 'vshift-cat-3',
    category: 'passenger',
    categoryLabel: 'Luxury Hospitality',
    badge: 'Hospitality & Premium',
    title: 'Titanium Gold & Rose Gold Mirror Series',
    subtitle: 'Opulent Warm Gold Mirror Etching with Backlit Acrylic Ceilings',
    modelCodes: 'FJT-K017 ~ FJT-K024',
    image: '/elevators/passenger-titanium-rose-gold-k017-k024.png',
    bestFor: '5-Star Hotels, Luxury Retail Malls, Marquees & Banquet Centers',
    description: 'Rich titanium gold and rose gold mirror etching with custom classical lattices, soft concealed perimeter illumination, and bronze hairline accents.',
    specs: {
      ceiling: 'Titanium gold mirror, acrylic arch & rose gold LED downlights',
      carWall: 'Titanium gold hairline, rose gold etched mirror, wood veneer plate',
      handrail: 'Titanium gold mirror single tube & rose gold hairline handrails',
      flooring: 'Classic border marble inlays & premium acoustic PVC'
    },
    features: [
      'Double-layer safety laminated glass and mirror backing',
      'Multi-zone LED downlights with automated standby dimming',
      'Scratch-resistant PVD titanium surface treatment',
      'Automatic Rescue Device (ARD) emergency landing battery pack'
    ]
  },
  {
    id: 'vshift-cat-4',
    category: 'passenger',
    categoryLabel: 'Presidential Suite',
    badge: 'Presidential & Luxury',
    title: 'Presidential Wood Grain, Leather & Bronze Series',
    subtitle: 'Solid Wood Carving, Leather Soft Bags & Bronze Baked Enamel',
    modelCodes: 'FJT-K025 ~ FJT-K032',
    image: '/elevators/passenger-presidential-wood-k025-k032.png',
    bestFor: 'Presidential Suites, Diplomatic Residences, VIP Clubs & Mansions',
    description: 'The pinnacle of vertical mobility craftsmanship. Features handcrafted real wood with carved grain, hand-stitched leather panels, bronze enamel, and crystal pendant lamps.',
    specs: {
      ceiling: 'Real wood carved frame, luxury lamp & bronze baked enamel',
      carWall: 'Solid wood veneer, imitation leather soft bag, bronze mirror',
      handrail: 'Solid wooden handrails & bronze-painted hairline tubes',
      flooring: 'Hand-inlaid luxury marble medallion & antique parquet'
    },
    features: [
      'Handcrafted solid wood paneling with fire-retardant coating',
      'Bespoke chandelier and concealed warm architectural light strips',
      'Soft-touch leather upholstery with sound-absorbent acoustic core',
      'VIP access card reader and biometric floor security integration'
    ]
  },
  {
    id: 'vshift-cat-5',
    category: 'panoramic',
    categoryLabel: 'Panoramic Glass',
    badge: 'Observation Glass',
    title: 'Panoramic Geometric Glass Observation Cabins',
    subtitle: 'Semi-Circular, Square & Cutting-Angle 6+6 Laminated Safety Glass',
    modelCodes: 'FJT-P001 ~ FJT-P003',
    image: '/elevators/panoramic-geometric-glass-p001-p003.png',
    bestFor: 'Shopping Malls, Modern Atriums, Mixed-Use Plazas & Retail Centers',
    description: 'Engineered with 3-sided 6+6mm safety laminated observation glass, upper/lower streamlined decorative covers, and sound-isolation acoustic glass technology.',
    specs: {
      ceiling: 'Mirror stainless steel with acrylic light-emitting panel',
      carWall: '6+6mm safety laminated glass (3PCS) & hairline stainless steel',
      handrail: 'φ25 stainless steel dual-tube & single tube',
      flooring: 'Wear-resistant PVC & decorative stone flooring'
    },
    features: [
      'High-strength 6+6mm PVB interlayer safety laminated glass',
      'Available in semi-circular, square, and cut-angle aerodynamic shapes',
      'High-transparency panoramic sightseeing with UV heat rejection',
      'Aerodynamic wind-deflecting lower and upper shroud cowlings'
    ]
  },
  {
    id: 'vshift-cat-6',
    category: 'panoramic',
    categoryLabel: 'Iconic Panoramic',
    badge: 'Iconic Scenic Towers',
    title: 'Circular & Titanium Gold Panoramic Glass Cabs',
    subtitle: 'Round Acrylic Domes, Gold Foil Ceilings & Exterior Shaft Cabs',
    modelCodes: 'FJT-P004 ~ FJT-P007',
    image: '/elevators/panoramic-round-gold-p004-p007.png',
    bestFor: 'Airports, Iconic High-Rise Towers, Scenic Resorts & Hill Stations',
    description: 'Showcasing full cylindrical round glass cabins, titanium mirror scenic car bodies, and external glass hoistway installations offering 180° to 270° unobstructed vistas.',
    specs: {
      ceiling: 'Central round acrylic dome, gold foil finish & LED backlight belt',
      carWall: 'Curved panoramic safety glass, titanium stainless steel mirror',
      handrail: 'Titanium mirror stainless steel round pipe & flat handrails',
      flooring: 'Bespoke marble medallion & heavy commercial PVC'
    },
    features: [
      'Curved cylindrical tempered laminated glass for 270° views',
      'External hoistway all-weather rain & temperature protection',
      'Gold foil illuminated ceiling with perimeter starry night effect',
      'High-speed roller guide shoes ensuring turbulence-free glide'
    ]
  },
  {
    id: 'vshift-cat-7',
    category: 'hospital',
    categoryLabel: 'Hospital & Medical',
    badge: 'Healthcare Certified',
    title: 'Hospital Stretcher & Medical Bed Lifts',
    subtitle: 'Extra-Deep Hospital Cabins with Telescopic & Through-Opening Doors',
    modelCodes: 'FJT-B001, FJT-B002',
    image: '/elevators/hospital-bed-stretcher-b001-b002.png',
    bestFor: 'Hospitals, Surgical Trauma Centers, Specialized Clinics & ICUs',
    description: 'Engineered to strict international healthcare hospital standards. Features extended depth for emergency hospital beds and stretchers, dual control COP panels, and jerk-free S-curve acceleration.',
    specs: {
      ceiling: 'Hairline stainless steel with antibacterial LED energy lights',
      carWall: 'Hairline stainless steel with impact-resistant bumper strips',
      handrail: 'Double flat stainless steel bed guardrails on 3 sides',
      flooring: 'Seamless anti-static, anti-bacterial hospital grade PVC'
    },
    features: [
      'Extra-deep 2100mm+ cabin clearance accommodating full medical beds with IV poles',
      'Flexible door configurations: Center opening, telescopic, 4-panel & through-opening',
      'Dual full-height Car Operating Panels (COP) for standing doctors and bed attendants',
      'Priority code-blue medical emergency key switch with non-stop direct dispatch'
    ]
  },
  {
    id: 'vshift-cat-8',
    category: 'villa',
    categoryLabel: 'Villa Well-Frames',
    badge: 'Bespoke Structural Shaft',
    title: 'Architectural Aluminum Alloy Glass Well-Frames',
    subtitle: 'Self-Supporting Modular Glass Hoistways with High-Grade Baked Finishes',
    modelCodes: 'Traction, Steel Belt & Strong Drive Villa Lifts',
    image: '/elevators/villa-shaft-aluminum-well-frame.png',
    bestFor: 'Luxury Multi-Story Villas, Penthouses, Duplex Apartments & Farmhouses',
    description: 'An independent architectural glass shaft design that requires no concrete civil hoistway. Built with high-strength industrial aluminum alloy and tempered laminated glass.',
    specs: {
      ceiling: 'Integrated LED perimeter light well with glass roof option',
      carWall: 'Safety laminated glass side plates (Transparent, Grey, Brown, Frosted)',
      handrail: 'Custom aluminum & stainless architectural profile',
      flooring: 'Reinforced glass bottom / natural solid stone flooring'
    },
    features: [
      'No reinforced concrete civil shaft needed—installs in stairwells or outdoors',
      'Available in White, Champagne Gold, Rose Gold, Filigree Grey, and Obsidian Black',
      'Traction, steel-belt, or strong-drive machinery options with zero pit requirements',
      'Corrosion-resistant structural aluminum alloy with 50-year structural life'
    ]
  },
  {
    id: 'vshift-cat-9',
    category: 'villa',
    categoryLabel: 'Platform Home Lifts',
    badge: 'Compact Pitless Platform',
    title: 'Compact Platform Villa & Home Elevators',
    subtitle: 'Minimal Footprint with Glass Swing Doors & Multi-Color Body Options',
    modelCodes: 'FJT-H001 ~ FJT-H004',
    image: '/elevators/villa-platform-compact-h001-h004.png',
    bestFor: 'Private Residences, Retrofit Homes, Duplexes & Elderly Accessibility',
    description: 'Compact platform residential elevators designed for existing homes. Offers white and transparent glass swing doors, water-plating black hairline steel, and over 200 RAL body color choices.',
    specs: {
      ceiling: 'Black titanium mirror, hidden lamp & LED downlights',
      carWall: 'Water-plating black hairline, mirror etched stainless steel',
      handrail: 'Ergonomic slimline aluminum & stainless steel handrail',
      flooring: 'Seamless acoustic PVC & decorative lightweight composite marble'
    },
    features: [
      'Requires only 50mm shallow pit or simple ramp installation',
      'Available in Frosted White, Rose Gold, and Champagne Gold finishes',
      'Low 220V single-phase household power consumption (<1.5 kW)',
      'Integrated smart touchscreen COP with one-touch home security intercom'
    ]
  },
  {
    id: 'vshift-cat-10',
    category: 'villa',
    categoryLabel: 'Luxury Villa Cabins',
    badge: 'Art Glass & Warm Bronze',
    title: 'Champagne Gold & Rose Gold Wire-Drawn Villa Cabs',
    subtitle: 'Artistic Ink Glass, Hidden Light Bands & Rose Gold Wire-Drawing',
    modelCodes: 'FJT-H005 ~ FJT-H012',
    image: '/elevators/villa-luxury-etched-h005-h012.png',
    bestFor: 'Luxury Mansions, Executive Farmhouses & Designer Private Residences',
    description: 'Features champagne gold sand-blast etching, bronze hairline anti-fingerprint steel, landscape ink art decorative glass, and warm concealed ambient lighting.',
    specs: {
      ceiling: 'Rose gold wire-drawn stainless steel, hidden LED light band',
      carWall: 'Rose gold wire-drawn, bronze hairline anti-fingerprint, art glass',
      handrail: 'Metal art handrails & rose gold wire-drawn flat rails',
      flooring: 'Fine parquet marble medallions & custom stone mosaic'
    },
    features: [
      'Anti-fingerprint nano-ceramic protective topcoat on bronze stainless steel',
      'Custom landscape and calligraphic ink art glass backdrops',
      'Indirect ambient lighting designed for warm residential interior harmony',
      'Ultra-smooth VVVF home drive system with whisper operation under 45 dB'
    ]
  },
  {
    id: 'vshift-cat-11',
    category: 'villa',
    categoryLabel: 'Villa Panoramic Cabins',
    badge: 'Full-Glass Panoramic & Wood',
    title: 'Wood Veneer & Full-Glass Panoramic Villa Cabs',
    subtitle: 'Natural Wood Finishes, Antique Parquet & 360° Glass Villa Cabins',
    modelCodes: 'FJT-H013 ~ FJT-H020',
    image: '/elevators/villa-wood-glass-panoramic-h013-h020.png',
    bestFor: 'Architectural Designer Villas, Modern Glass Staircases & Penthouses',
    description: 'Combines warm natural wood veneers, art glass botanicals, and full-glass panoramic villa cabins with silver aluminum, champagne titanium, and piano-painted black frames.',
    specs: {
      ceiling: 'Wood decoration, piano-painted steel plate, LED downlights',
      carWall: 'Natural wood veneer, safety laminated glass, marble inlay',
      handrail: 'Titanium stainless steel flat handrail & single tube',
      flooring: 'Antique solid wood parquet & natural marble floor'
    },
    features: [
      'Panoramic full-glass villa cabins available in 4 designer chassis finishes',
      'Authentic solid wood parquet flooring matching high-end residential interiors',
      'Natural wood veneer car walls with acoustic sound deadening',
      'Smartphone app elevator call and child safety lock functionality'
    ]
  },
  {
    id: 'vshift-cat-12',
    category: 'doors',
    categoryLabel: 'Landing Doors Series 1',
    badge: 'Architectural Stainless & Glass',
    title: 'Precision Etched Stainless & Glass Landing Doors',
    subtitle: 'Hairline Stainless Steel, Framed Glass & Intricate Etched Patterns',
    modelCodes: 'FJT-TM01 ~ FJT-TM20',
    image: '/elevators/landing-doors-hairline-etched-tm01-tm20.png',
    bestFor: 'Commercial Plazas, Financial Branch Entrances & Modern Hospitals',
    description: 'Engineered 2-panel center opening and telescopic landing doors featuring hairline stainless steel, framed glass observation panels, and geometric etched motifs.',
    specs: {
      ceiling: 'Matching elevator architrave and landing indicator transom',
      carWall: '1.5mm architectural stainless steel door leaves with reinforced core',
      handrail: 'Full-height architectural jambs with integrated call station',
      flooring: 'High-wear aluminum alloy / bronze sill guide tracks'
    },
    features: [
      '2-hour fire-rated door construction compliant with international codes',
      'Impact-absorbing rubber gaskets and silent roller suspension hangers',
      'High-contrast digital floor indicator and directional illumination',
      'Micro-gap door interlocking mechanism with multi-beam infrared light curtain'
    ]
  },
  {
    id: 'vshift-cat-13',
    category: 'doors',
    categoryLabel: 'Landing Doors Series 2',
    badge: 'Titanium Gold & Rose Gold',
    title: 'Luxury Titanium Gold & Rose Gold Landing Doors',
    subtitle: 'Mirror Gold Damask, Geometric Bronze & Industrial Gear Laser Motifs',
    modelCodes: 'FJT-TM21 ~ FJT-TM44',
    image: '/elevators/landing-doors-titanium-rose-tm21-tm44.png',
    bestFor: 'Luxury Commercial Towers, 5-Star Hotel Lobbies & Executive Suites',
    description: 'Premium architectural landing door series featuring mirror titanium gold damask, rose gold floral motifs, warm bronze brushed textures, and industrial laser-cut patterns.',
    specs: {
      ceiling: 'Luxury wide-architrave header with concealed LED backlighting',
      carWall: 'PVD vacuum-plated titanium gold & rose gold stainless steel leaves',
      handrail: 'Heavy architectural landing architraves in matching tones',
      flooring: 'Heavy-duty extruded brass and bronze door sill runners'
    },
    features: [
      '24 custom artistic landing door motifs for floor-by-floor differentiation',
      'Wear-resistant vacuum PVD coating preventing tarnish and scratches',
      'Heavy-duty magnetic door locks with emergency key release',
      'Seamless integration with all V-Shift and third-party elevator landing jambs'
    ]
  }
];
