import { motion } from 'framer-motion';
import {
  MapPin,
  Train,
  Bus,
  Car,
  Navigation,
  ArrowRight,
  Clock,
  Footprints,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

/* ─── Types ─────────────────────────────────────────────── */
type Step = {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  tag?: string;
  highlight?: boolean;
  stations?: string[];
  stationColors?: { bg: string; border: string; line: string; inactiveBorder: string };
};

type Route = {
  id: string;
  icon: React.ReactNode;
  label: string;
  badge: string;
  badgeColor: string;
  time: string;
  steps: Step[];
};

/* ─── Route data ─────────────────────────────────────────── */
const routes: Route[] = [
  {
    id: 'metro',
    icon: <Train className="w-6 h-6" />,
    label: 'Delhi Metro',
    badge: 'Recommended',
    badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    time: '~1.5 – 2 hrs',
    steps: [
      {
        icon: <Train className="w-4 h-4" />,
        title: 'Step 1 — Yellow Line (from New Delhi)',
        tag: 'Yellow Line',
        lines: [
          'Direction: Towards Huda City Centre',
          'Platform 1',
          'Change train at Rajiv Chowk',
        ],
        stationColors: { bg: 'bg-[#FBBF24]', border: 'border-[#FBBF24]', line: 'bg-[#FBBF24]/40', inactiveBorder: 'border-[#FBBF24]/60' },
        stations: [
          'New Delhi',
          'Rajiv Chowk (Change Here)'
        ]
      },
      {
        icon: <Train className="w-4 h-4" />,
        title: 'Step 2 — Blue Line (from Rajiv Chowk)',
        tag: 'Blue Line',
        lines: [
          'Direction: Towards Noida',
          'Platform 3',
        ],
        stationColors: { bg: 'bg-[#3B82F6]', border: 'border-[#3B82F6]', line: 'bg-[#3B82F6]/40', inactiveBorder: 'border-[#3B82F6]/60' },
        stations: [
          'Barakhamba', 'Mandi House', 'Supreme Court (Pragati Maidan)',
          'Indraprastha', 'Yamuna Bank', 'Akshardham', 'Mayur Vihar Phase-1',
          'Mayur Vihar Extention', 'New Ashok Nagar', 'Noida Sector 15',
          'Noida Sector 16', 'Noida Sector 18', 'Botanical Garden',
          'Golf Course', 'Noida City Center', 'Noida Sector 34', 'Noida Sector 52'
        ]
      },
      {
        icon: <Footprints className="w-4 h-4" />,
        title: 'Step 3 — Walk to Aqua Line',
        lines: [
          'Exit Sector 52 metro station',
          'Walk ~300 m (10 min walk)',
          'Follow signboards for Sector 51 — Aqua Line',
        ],
      },
      {
        icon: <Train className="w-4 h-4" />,
        title: 'Step 4 — Aqua Line (from Sector 51)',
        tag: 'Aqua Line',
        lines: [
          'Direction: Towards Greater Noida',
          'Platform 2',
          'Get off at: Knowledge Park II',
        ],
        stationColors: { bg: 'bg-[#06B6D4]', border: 'border-[#06B6D4]', line: 'bg-[#06B6D4]/40', inactiveBorder: 'border-[#06B6D4]/60' },
        stations: [
          'Noida Sector 50', 'Noida Sector 76', 'Noida Sector 101', 'Noida Sector 81',
          'NSEZ Noida', 'Noida Sector 83', 'Noida Sector 137', 'Noida Sector 142',
          'Noida Sector 143', 'Noida Sector 144', 'Noida Sector 145', 'Noida Sector 146',
          'Noida Sector 147', 'Noida Sector 148', 'Knowledge Park II'
        ]
      },
      {
        icon: <Car className="w-4 h-4" />,
        title: 'Step 5 — Last Mile to Sharda University',
        highlight: true,
        lines: [
          '🛺 Auto / E-rickshaw → ₹20–50  ← BEST option',
          'Tell driver: "Sharda University, Knowledge Park 3"',
          'Time: 5–10 min',
        ],
      },
      {
        icon: <CheckCircle2 className="w-4 h-4" />,
        title: 'Inside Campus',
        lines: [
          'Enter from main gate',
          'Ask security / students: "Block 45 kidhar hai?"',
          'Walk 5–10 min inside campus',
        ],
      },
    ],
  },
  {
    id: 'bus',
    icon: <Bus className="w-6 h-6" />,
    label: 'Bus Route',
    badge: 'Alternative',
    badgeColor: 'bg-amber-100 text-amber-700 border-amber-200',
    time: '~1 – 1.5 hrs',
    steps: [
      {
        icon: <Bus className="w-4 h-4" />,
        title: 'Step 1 — Reach Anand Vihar ISBT',
        lines: [
          'Anand Vihar ISBT — main bus terminal (East Delhi)',
          'Accessible via Blue Line / Pink Line metro',
        ],
      },
      {
        icon: <Bus className="w-4 h-4" />,
        title: 'Step 2 — Bus to Pari Chowk',
        tag: 'Greater Noida',
        lines: [
          'Take any bus headed to Pari Chowk, Greater Noida',
          'Buses run frequently throughout the day',
          'Travel time: ~45–60 min depending on traffic',
        ],
      },
      {
        icon: <Car className="w-4 h-4" />,
        title: 'Step 3 — Auto from Pari Chowk',
        highlight: true,
        lines: [
          'Take an auto from Pari Chowk',
          'Tell driver: "Sharda University, Knowledge Park 3"',
          'Time: ~10–15 min',
          'Cost: ~₹50–100',
        ],
      },
      {
        icon: <CheckCircle2 className="w-4 h-4" />,
        title: 'Inside Campus',
        lines: [
          'Enter from main gate',
          'Ask security / students: "Block 45 kidhar hai?"',
          'Walk 5–10 min inside campus',
        ],
      },
    ],
  },
  {
    id: 'cab',
    icon: <Car className="w-6 h-6" />,
    label: 'Cab / Bike',
    badge: 'Door-to-door',
    badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
    time: '~50 min – 1.5 hrs',
    steps: [
      {
        icon: <Navigation className="w-4 h-4" />,
        title: 'Route',
        tag: '~40–45 km from Central Delhi',
        lines: [
          'Use Noida–Greater Noida Expressway',
          'Navigate to: Sharda University, Knowledge Park 3, Greater Noida',
          'Search on Google Maps: "Sharda University Greater Noida"',
        ],
      },
      {
        icon: <Clock className="w-4 h-4" />,
        title: 'Travel Time',
        lines: [
          '🚗 Without traffic: ~50 min',
          '🚗 Peak hours (8–10 AM / 5–8 PM): ~1.5 hrs',
        ],
      },
      {
        icon: <Car className="w-4 h-4" />,
        title: 'Cab Options',
        highlight: true,
        lines: [
          '🟡 Ola / Uber — Direct booking recommended',
          '🟢 Rapido Bike — Great for solo travellers',
          'Drop point: Main Gate, Sharda University',
        ],
      },
      {
        icon: <AlertCircle className="w-4 h-4" />,
        title: 'Pro Tips',
        lines: [
          'Start by 7:30 AM to beat rush-hour traffic',
          'Expressway is well-lit and smooth — no tolls from Noida side',
          'Parking available inside campus',
        ],
      },
    ],
  },
];

/* ─── Card component ─────────────────────────────────────── */
function RouteCard({ route, index }: { route: Route; index: number }) {
  const colors: Record<string, { dot: string; line: string; tag: string }> = {
    metro: { dot: 'bg-[#7C3AED]', line: 'border-[#7C3AED]/30', tag: 'bg-[#7C3AED]/10 text-[#4C1D95]' },
    bus:   { dot: 'bg-amber-500',  line: 'border-amber-400/30',  tag: 'bg-amber-50 text-amber-800'   },
    cab:   { dot: 'bg-blue-500',   line: 'border-blue-400/30',   tag: 'bg-blue-50 text-blue-800'     },
  };
  const c = colors[route.id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="rounded-3xl bg-white/80 backdrop-blur-md border border-[#7C3AED]/15 shadow-[0_12px_40px_rgba(124,58,237,0.10)] overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-4 border-b border-[#7C3AED]/10">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED]">
            {route.icon}
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-[#4C1D95] leading-tight">{route.label}</h3>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${route.badgeColor}`}>
                {route.badge}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] text-[#5B4B5C] font-sans">
                <Clock className="w-3 h-3" /> {route.time}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="px-5 py-5 space-y-0 relative">
        {/* Vertical connector line */}
        <div className={`absolute left-[2.35rem] top-6 bottom-6 border-l-2 border-dashed ${c.line}`} />

        {route.steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 * i }}
            className="relative flex gap-4 pb-5 last:pb-0"
          >
            {/* Dot */}
            <div className={`relative z-10 mt-1 flex-shrink-0 w-6 h-6 rounded-full ${c.dot} flex items-center justify-center text-white shadow-md`}>
              {step.icon}
            </div>

            {/* Content */}
            <div className={`flex-1 rounded-2xl px-4 py-3 ${step.highlight ? 'bg-[#7C3AED]/6 border border-[#7C3AED]/20' : 'bg-transparent'}`}>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <p className="text-sm font-semibold text-[#4C1D95] font-display">{step.title}</p>
                {step.tag && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${c.tag}`}>{step.tag}</span>
                )}
              </div>
              <ul className="space-y-1">
                {step.lines.map((line, j) => (
                  <li key={j} className="flex items-start gap-1.5 text-xs text-[#5B4B5C] font-sans leading-relaxed">
                    <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0 text-[#7C3AED]/50" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              
              {/* Sequential Station Details */}
              {step.stations && (
                <div className="mt-3 p-3 bg-white/60 rounded-xl border border-[#7C3AED]/10 h-44 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-[#7C3AED]/20 [&::-webkit-scrollbar-thumb]:rounded-full shadow-inner">
                  <div className="relative pl-3 space-y-3">
                    <div className={`absolute left-[3px] top-1.5 bottom-1.5 w-[2px] rounded-full ${step.stationColors ? step.stationColors.line : 'bg-[#7C3AED]/20'}`} />
                    {step.stations.map((station, idx) => (
                      <motion.div
                        key={station}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.05 * idx }}
                        className={`relative flex items-center gap-2 text-[11px] font-sans ${idx === step.stations!.length - 1 ? 'text-[#4C1D95] font-bold' : 'text-[#5B4B5C]'}`}
                      >
                        <div 
                          className={`absolute -left-[15px] w-2 h-2 rounded-full border-[1.5px] ${
                            (idx === 0 || idx === step.stations!.length - 1) 
                              ? (step.stationColors ? `${step.stationColors.bg} ${step.stationColors.border}` : 'bg-[#7C3AED] border-[#7C3AED]') 
                              : `bg-white ${step.stationColors ? step.stationColors.inactiveBorder : 'border-[#7C3AED]/60'}`
                          }`} 
                        />
                        {station}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Main section ───────────────────────────────────────── */
const Venue = () => {
  return (
    <section id="venue" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-sunset-purple/20 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sunset-pink/20 rounded-full blur-[130px]" />
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-[#7C3AED]" />
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#4C1D95]">
              Venue &amp; <span className="text-[#7C3AED]">How to Reach</span>
            </h2>
            <MapPin className="w-6 h-6 text-[#7C3AED]" />
          </div>
          <p className="text-[#5B4B5C] font-sans text-base max-w-xl mx-auto">
            Block 45, Sharda University, Knowledge Park 3, Greater Noida — here's every way to get here.
          </p>

          {/* Venue pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-5 text-sm font-sans">
            {[
              { icon: <MapPin className="w-4 h-4" />, text: 'Block 45, Sharda University' },
              { icon: <Clock className="w-4 h-4" />, text: '8:45 AM – 5:00 PM' },
              { icon: <Navigation className="w-4 h-4" />, text: 'Knowledge Park 3, Greater Noida' },
            ].map((pill) => (
              <span
                key={pill.text}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-[#7C3AED]/25 shadow-sm text-[#5B4B5C]"
              >
                <span className="text-[#7C3AED]">{pill.icon}</span>
                {pill.text}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Map + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden border border-[#7C3AED]/20 shadow-[0_20px_60px_rgba(124,58,237,0.15)] mb-12"
        >
          <div className="relative">
            <iframe
              title="Sharda University Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.2135497449354!2d77.47987697543694!3d28.470165775742655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1e4b3b3b3b3%3A0x8e2b2b2b2b2b2b2b!2sSharda%20University!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map overlay bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/95 via-white/70 to-transparent px-6 py-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-[#4C1D95] font-display font-semibold text-sm">
                <MapPin className="w-4 h-4 text-[#7C3AED]" />
                Sharda University, Knowledge Park 3, Greater Noida
              </div>
              <a
                href="https://maps.google.com/?q=Sharda+University+Greater+Noida"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#5B21B6] text-white text-xs font-bold px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-md shadow-[#7C3AED]/20"
              >
                <Navigation className="w-3.5 h-3.5" />
                Open in Google Maps
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Route cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {routes.map((route, i) => (
            <RouteCard key={route.id} route={route} index={i} />
          ))}
        </div>

        {/* Bottom tip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 rounded-2xl bg-[#7C3AED]/6 border border-[#7C3AED]/20 px-6 py-5 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-[#4C1D95] font-display">Quick tip for the day</p>
              <p className="text-xs text-[#5B4B5C] font-sans mt-0.5 leading-relaxed">
                Arrive by <strong>8:30 AM</strong> to avoid registration queues. The metro + auto combo (steps 1–5) is the most reliable and cost-effective route from Delhi.
              </p>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=Sharda+University+Greater+Noida"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-[#7C3AED]/30 hover:border-[#7C3AED] text-[#7C3AED] text-xs font-bold px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#7C3AED]/5 shadow-sm flex-shrink-0"
          >
            <Navigation className="w-3.5 h-3.5" />
            Navigate Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Venue;
