import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Clock, Sparkles, Code2, Users } from 'lucide-react';

type TimelineItem = {
  label: string;
  start: string;
  end: string;
  minutes: number;
  description: string;
  highlight?: boolean;
  parallelTag?: string;
};

const mainTimeline: TimelineItem[] = [
  {
    label: 'Registration & Check-in',
    start: '8:45 AM',
    end: '9:30 AM',
    minutes: 45,
    description: 'Badge pickup, welcome kits, and arrival formalities.',
    highlight: true,
  },
  {
    label: 'Breakfast, Networking & Soft Start',
    start: '9:30 AM',
    end: '10:00 AM',
    minutes: 30,
    description: 'Grab breakfast, meet fellow attendees, and settle in before the day kicks off.',
  },
  {
    label: 'Opening Ceremony & Event Overview',
    start: '10:00 AM',
    end: '10:10 AM',
    minutes: 10,
    description: 'Welcome to SCD! A quick run-through of what the day holds.',
    highlight: true,
  },
  {
    label: 'Chief Guest Keynote – Dr. Sunil Pathak',
    start: '10:10 AM',
    end: '10:30 AM',
    minutes: 20,
    description: 'Sustainability and Technology for Development — a vision for a smarter, greener future.',
    highlight: true,
  },
  {
    label: 'Guest of Honour Keynote – Nitin Pandit',
    start: '10:30 AM',
    end: '10:55 AM',
    minutes: 25,
    description: 'AI and Cloud Computing — where modern infrastructure meets intelligent systems.',
    highlight: true,
  },
  {
    label: 'Energy Reset',
    start: '10:55 AM',
    end: '11:00 AM',
    minutes: 5,
    description: 'A quick pause to recharge before the next keynote.',
  },
  {
    label: 'Guest of Honour – Arkodyuti Saha',
    start: '11:00 AM',
    end: '11:25 AM',
    minutes: 25,
    description: 'AWS Developer Relations and Community Leadership — building ecosystems that last.',
    highlight: true,
  },
  {
    label: 'Sponsored Technical Session',
    start: '11:25 AM',
    end: '11:50 AM',
    minutes: 25,
    description: 'Developer Productivity with AWS Kiro — tools shaping how developers build.',
  },
  {
    label: 'Icebreaker & Audience Engagement',
    start: '11:50 AM',
    end: '12:00 PM',
    minutes: 10,
    description: 'Interactive activities and fun moments to energize the crowd.',
  },
  {
    label: 'Technical Talk – Tanishi Mookerjee',
    start: '12:00 PM',
    end: '12:25 PM',
    minutes: 25,
    description: 'AI and Machine Learning in Cloud — practical perspectives on intelligent cloud applications.',
  },
  {
    label: 'Technical Talk – Ashish Kumar',
    start: '12:25 PM',
    end: '12:50 PM',
    minutes: 25,
    description: 'Cloud Infrastructure and DevOps — building resilient, automated pipelines at scale.',
  },
  {
    label: 'Quick Engagement Break & Transition',
    start: '12:50 PM',
    end: '1:00 PM',
    minutes: 10,
    description: 'Mini activity and transition to the next set of sessions.',
  },
  {
    label: 'Technical Talk – Anjali Kumari',
    start: '1:00 PM',
    end: '1:25 PM',
    minutes: 25,
    description: 'Career Development and Software Engineering — navigating growth in the tech industry.',
  },
  {
    label: 'Lunch Break & Networking',
    start: '1:25 PM',
    end: '2:30 PM',
    minutes: 65,
    description: 'Recharge over lunch and connect with speakers, peers, and community leaders.',
    highlight: true,
  },
  {
    label: 'Panel Discussion – Industry Insights & Q&A',
    start: '2:30 PM',
    end: '3:15 PM',
    minutes: 45,
    description: '5 industry leaders share insights on careers, cloud, and what\'s next — followed by live Q&A.',
    highlight: true,
    parallelTag: 'Parallel with workshops',
  },
  {
    label: 'Technical Talk – Gourav Sharma',
    start: '3:15 PM',
    end: '3:40 PM',
    minutes: 25,
    description: 'Cloud Architecture and Infrastructure Automation — designing for scale and reliability.',
  },
  {
    label: 'Engagement & Energy Reset – Sagar Kumar (Google)',
    start: '3:40 PM',
    end: '4:05 PM',
    minutes: 25,
    description: 'An engaging session with Sagar Kumar from Google to re-energize the audience.',
  },
  {
    label: 'Technical Talk – Aditya Jaiswal',
    start: '4:05 PM',
    end: '4:30 PM',
    minutes: 25,
    description: 'DevOps and Cloud Automation — bridging development and operations with modern tooling.',
  },
  {
    label: 'Quick Activity',
    start: '4:30 PM',
    end: '4:40 PM',
    minutes: 10,
    description: 'A final burst of fun and interaction before the closing.',
  },
  {
    label: 'Closing Remarks, Certificates & Group Photo',
    start: '4:40 PM',
    end: '5:00 PM',
    minutes: 20,
    description: 'Farewell words, certificate distribution, and a group photo to cap off an amazing day.',
    highlight: true,
  },
];

const workshopTimeline: TimelineItem[] = [
  {
    label: 'Registration & Technical Setup',
    start: '1:00 PM',
    end: '1:10 PM',
    minutes: 10,
    description: 'Get seated, connect to Wi-Fi, and ensure tools & accounts are ready.',
  },
  {
    label: 'Workshop Introduction & Objectives',
    start: '1:10 PM',
    end: '1:20 PM',
    minutes: 10,
    description: 'What we\'ll build, what you\'ll learn, and how we\'ll work together.',
  },
  {
    label: 'Concept Overview',
    start: '1:20 PM',
    end: '1:35 PM',
    minutes: 15,
    description: 'Short theory on the AWS / cloud concept powering the hands-on lab.',
  },
  {
    label: 'Tool & Platform Walkthrough',
    start: '1:35 PM',
    end: '1:50 PM',
    minutes: 15,
    description: 'Guided tour of the AWS console or dev tools you\'ll use today.',
  },
  {
    label: 'Hands-on Activity – Part 1',
    start: '1:50 PM',
    end: '2:15 PM',
    minutes: 25,
    description: 'Build the core of your project step-by-step with mentors on hand.',
    highlight: true,
  },
  {
    label: 'Buffer / Short Break',
    start: '2:15 PM',
    end: '2:20 PM',
    minutes: 5,
    description: 'Reset, fix blockers, and get ready to extend your build.',
  },
  {
    label: 'Hands-on Activity – Part 2',
    start: '2:20 PM',
    end: '2:45 PM',
    minutes: 25,
    description: 'Add features, polish, and deploy or demo your project.',
    highlight: true,
  },
  {
    label: 'Review & Output Explanation',
    start: '2:45 PM',
    end: '2:55 PM',
    minutes: 10,
    description: 'Walk through what you built, key learnings, and common gotchas.',
  },
  {
    label: 'Q&A & Closing',
    start: '2:55 PM',
    end: '3:00 PM',
    minutes: 5,
    description: 'Open floor for questions and final wrap-up.',
  },
];

const Timeline = () => {
  return (
    <section id="schedule" className="py-24 relative overflow-hidden">
      {/* Background glow & grid, matching other sections */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sunset-purple/25 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sunset-pink/25 rounded-full blur-[120px]" />
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
          <div className="inline-flex items-center gap-3 mb-5">
            <Sparkles className="w-6 h-6 text-[#7C3AED]" />
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#4C1D95]">
              Event <span className="text-[#7C3AED]">Timeline</span>
            </h2>
            <Sparkles className="w-6 h-6 text-[#7C3AED]" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm sm:text-base text-[#5B4B5C] font-sans">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-[#7C3AED]/30 shadow-sm">
              <CalendarDays className="w-4 h-4 text-[#7C3AED]" />
              March 27, 2026
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-[#7C3AED]/30 shadow-sm">
              <MapPin className="w-4 h-4 text-[#7C3AED]" />
              Block 45, Sharda University
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-[#7C3AED]/30 shadow-sm">
              <Clock className="w-4 h-4 text-[#7C3AED]" />
              8:45 AM – 5:00 PM
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] gap-10 lg:gap-14 items-start">
          {/* Main day timeline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="absolute left-3 sm:left-4 top-0 bottom-0 border-l-2 border-dashed border-[#7C3AED]/40 pointer-events-none" />

            <div className="space-y-5">
              {mainTimeline.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  className="relative pl-10 sm:pl-14"
                >
                  {/* Time dot */}
                  <div className="absolute left-0 top-4 sm:top-5 w-3 h-3 rounded-full bg-white border-2 border-[#7C3AED] shadow-md" />

                  <div
                    className={`rounded-2xl border bg-white/80 backdrop-blur-md shadow-[0_10px_30px_rgba(124,58,237,0.12)] transition-all hover-lift ${
                      item.highlight
                        ? 'border-[#7C3AED]/60'
                        : 'border-[#7C3AED]/20'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 px-4 pt-4 pb-1 sm:px-6 sm:pt-5 sm:pb-2">
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#7C3AED] font-sans">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>
                          {item.start} – {item.end}
                        </span>
                      </div>
                      <span className="text-[11px] sm:text-xs px-3 py-1 rounded-full bg-[#7C3AED]/8 text-[#4C1D95] font-semibold tracking-wide">
                        {item.minutes} min
                      </span>
                    </div>

                    <div className="px-4 pb-4 sm:px-6 sm:pb-5 space-y-1.5">
                      <h3 className="font-display text-base sm:text-lg font-semibold text-[#4C1D95]">
                        {item.label}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5B4B5C] font-sans leading-relaxed">
                        {item.description}
                      </p>
                      {item.parallelTag && (
                        <div className="inline-flex items-center gap-1 mt-2 px-3 py-1 rounded-full bg-sunset-purple/10 text-[11px] text-[#7C3AED] font-semibold tracking-wide">
                          <Code2 className="w-3 h-3" />
                          <span>{item.parallelTag}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Workshop card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-sunset-purple/90 via-sunset-pink/90 to-sunset-orange/90 text-white p-[1px] shadow-[0_20px_60px_rgba(124,58,237,0.5)]">
              <div className="rounded-3xl bg-[#F3EDEE]">
                <div className="rounded-3xl bg-gradient-to-b from-[#FDF8FF]/95 via-[#F3EDEE] to-[#F9EEF8] px-5 py-6 sm:px-7 sm:py-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED] shadow-inner">
                      <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg sm:text-xl font-display font-semibold text-[#4C1D95]">
                        Parallel Technical Workshop
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5B4B5C] font-sans">
                        Deep-dive, hands-on build track running alongside main sessions.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5 text-[11px] sm:text-xs font-sans">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-[#4C1D95] font-semibold">
                      <Clock className="w-3 h-3" />
                      1:00 PM – 3:00 PM
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] font-semibold">
                      <Users className="w-3 h-3" />
                      Limited Seats
                    </span>
                  </div>

                  <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
                    {workshopTimeline.map((item) => (
                      <div
                        key={item.label}
                        className={`rounded-2xl border bg-white/80 px-4 py-3 sm:px-4 sm:py-3.5 flex flex-col gap-1 hover-lift ${
                          item.highlight
                            ? 'border-[#7C3AED]/60'
                            : 'border-[#7C3AED]/20'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-semibold text-[#7C3AED] font-sans">
                            {item.start} – {item.end}
                          </span>
                          <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full bg-[#7C3AED]/8 text-[#4C1D95] font-semibold">
                            {item.minutes} min
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm font-display text-[#4C1D95]">
                          {item.label}
                        </p>
                        <p className="text-[11px] sm:text-xs text-[#5B4B5C] font-sans leading-snug">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-[11px] sm:text-xs text-[#7C3AED] font-sans">
                    Workshops run in a separate hall while the main track continues, so attendees
                    can choose the experience that fits their cloud journey.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;


