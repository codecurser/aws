
import { motion } from 'framer-motion';
import { Linkedin, Mic, Award, Crown } from 'lucide-react';

// Speaker images
import imgAdityaJaiswal    from '../assets/Aditya Jaiswal.png';
import imgAnjaliKumari     from '../assets/Anjali Kumari.png';
import imgArkodyutiSaha    from '../assets/Arkodyuti Saha.png';
import imgAshishKumar      from '../assets/Ashish Kumar.png';
import imgDrSunilPathak    from '../assets/Dr Sunil Pathak.png';
import imgGouravSharma     from '../assets/Gourav Sharma.png';
import imgNitinPandit      from '../assets/Nitin Pandit.png';
import imgTanishiMookerjee from '../assets/Tanishi Mookerjee.png';

// Org team images
import imgUtkarsh          from '../assets/Utkarsh.jpeg';
import imgShweta           from '../assets/Shweta.jpeg';
import imgVashuKaushik     from '../assets/Vashu Kaushik.jpeg';
import imgManavMehta       from '../assets/Manav Mehta.jpeg';
import imgAdityaMaheshwari from '../assets/Aditya Maheswari.jpeg';
import imgViditGupta       from '../assets/Vidit Gupta.jpeg';
import imgAnshvi           from '../assets/Anshvi.jpeg';
import imgAryanSharma      from '../assets/Aryan Sharma.png';
import imgAbhishekGaur     from '../assets/Abhishek Gaur.jpeg';
import imgAstutiPandey     from '../assets/Astuti pandey (2).jpeg';
import imgSuhaniMitra      from '../assets/Suhani mitra.jpeg';

/* ─── Speaker Types ──────────────────────────────────────────────────── */
type TalkType =
    | 'Technical Talk'
    | 'Guest of Honour and Technical Speaker'
    | 'Chief Guest and Keynote Speaker'
    | 'Guest of Honour and Keynote Speaker';

interface Speaker {
    name: string;
    talkType: TalkType;
    image: string;
    linkedin: string;
    vip?: boolean;
}

/* ─── Badge config ───────────────────────────────────────────────────── */
const badgeMeta: Record<TalkType, { label: string; icon: React.ReactNode; color: string }> = {
    'Technical Talk': {
        label: 'Technical Talk',
        icon: <Mic className="w-3 h-3" />,
        color: 'bg-violet-600/90 text-white',
    },
    'Guest of Honour and Technical Speaker': {
        label: 'Guest of Honour + Technical',
        icon: <Award className="w-3 h-3" />,
        color: 'bg-amber-500/90 text-white',
    },
    'Chief Guest and Keynote Speaker': {
        label: 'Chief Guest · Keynote',
        icon: <Crown className="w-3 h-3" />,
        color: 'bg-rose-600/90 text-white',
    },
    'Guest of Honour and Keynote Speaker': {
        label: 'Guest of Honour · Keynote',
        icon: <Crown className="w-3 h-3" />,
        color: 'bg-amber-600/90 text-white',
    },
};

/* ─── Speaker Card ───────────────────────────────────────────────────── */
interface SpeakerCardProps { speaker: Speaker; index: number; large?: boolean; }

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, index, large = false }) => {
    const badge = badgeMeta[speaker.talkType];
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className={`group relative overflow-hidden rounded-3xl cursor-pointer select-none ${
                large ? 'h-[500px]' : 'h-[380px]'
            } ${speaker.vip ? 'ring-2 ring-amber-400/60 ring-offset-2 ring-offset-transparent' : ''}`}
        >
            <img
                src={speaker.image}
                alt={speaker.name}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            {speaker.vip && (
                <div className="absolute inset-0 rounded-3xl border-2 border-amber-300/0 group-hover:border-amber-300/60 transition-all duration-500 pointer-events-none" />
            )}
            <div className="absolute top-4 left-4 z-10">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-lg ${badge.color}`}>
                    {badge.icon}
                    {badge.label}
                </span>
            </div>
            <motion.a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                onClick={e => e.stopPropagation()}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-[#0077B5] hover:border-[#0077B5] transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
            >
                <Linkedin className="w-4 h-4" />
            </motion.a>
            <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
                <h3 className={`font-display font-bold text-white leading-tight mb-1 ${large ? 'text-2xl' : 'text-xl'}`}>
                    {speaker.name}
                </h3>
                <div className="overflow-hidden">
                    <motion.div
                        className="flex items-center gap-2 mt-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <a
                            href={speaker.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors group/link"
                        >
                            <Linkedin className="w-3.5 h-3.5 text-[#0077B5]" />
                            <span className="underline underline-offset-2 group-hover/link:text-white">Connect on LinkedIn</span>
                        </a>
                    </motion.div>
                </div>
                <div className="mt-3 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-violet-400 via-purple-300 to-violet-400 transition-all duration-500 rounded-full" />
            </div>
        </motion.div>
    );
};

/* ─── Speakers Section ───────────────────────────────────────────────── */
const Speakers = () => {
    const vipSpeakers: Speaker[] = [
        { name: 'Dr. Sunil Pathak', talkType: 'Chief Guest and Keynote Speaker',     image: imgDrSunilPathak,  linkedin: 'https://www.linkedin.com/in/dr-sunil-pathak-7b45922b/', vip: true },
        { name: 'Nitin Pandit',     talkType: 'Guest of Honour and Keynote Speaker', image: imgNitinPandit,    linkedin: 'https://www.linkedin.com/in/nitinpanditofficial/',       vip: true },
        { name: 'Arkodyuti Saha',   talkType: 'Guest of Honour and Technical Speaker', image: imgArkodyutiSaha, linkedin: 'https://www.linkedin.com/in/arkodyutisaha/',              vip: true },
    ];

    const technicalSpeakers: Speaker[] = [
        { name: 'Ashish Kumar',      talkType: 'Technical Talk', image: imgAshishKumar,      linkedin: 'https://www.linkedin.com/in/ashishkumar99/' },
        { name: 'Aditya Jaiswal',    talkType: 'Technical Talk', image: imgAdityaJaiswal,    linkedin: 'https://www.linkedin.com/in/adityajaiswal7/' },
        { name: 'Gourav Sharma',     talkType: 'Technical Talk', image: imgGouravSharma,     linkedin: 'https://www.linkedin.com/in/ping2gouravsharma/' },
        { name: 'Tanishi Mookerjee', talkType: 'Technical Talk', image: imgTanishiMookerjee, linkedin: 'https://www.linkedin.com/in/tanishi-mookerjee/' },
        { name: 'Anjali Kumari',     talkType: 'Technical Talk', image: imgAnjaliKumari,     linkedin: 'https://www.linkedin.com/in/anjalikumari22/' },
    ];

    return (
        <section id="speakers" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-violet-300/20 rounded-full blur-[120px]" />
                <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-purple-400/15 rounded-full blur-[120px]" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 text-[#7C3AED] font-semibold text-sm uppercase tracking-widest mb-4">
                        <span className="w-8 h-px bg-[#7C3AED]" />
                        AWS Community Day Delhi NCR
                        <span className="w-8 h-px bg-[#7C3AED]" />
                    </span>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-[#4C1D95]">
                        Meet Our <span className="text-[#7C3AED]">Speakers</span>
                    </h2>
                    <p className="text-[#5B4B5C] max-w-2xl mx-auto text-lg mt-5 font-sans leading-relaxed">
                        Learn from industry leaders and practitioners shaping the future of cloud computing.
                    </p>
                </motion.div>

                {/* VIP / Keynote */}
                <div className="mb-6">
                    <div className="flex items-center gap-3 mb-8">
                        <Crown className="w-5 h-5 text-amber-500" />
                        <h3 className="text-lg font-display font-semibold text-[#4C1D95] uppercase tracking-widest">Keynote &amp; Guests of Honour</h3>
                        <div className="flex-1 h-px bg-gradient-to-r from-amber-300/60 to-transparent" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {vipSpeakers.map((spk, i) => (
                            <SpeakerCard key={spk.name} speaker={spk} index={i} large />
                        ))}
                    </div>
                </div>

                {/* Technical speakers */}
                <div className="mt-14">
                    <div className="flex items-center gap-3 mb-8">
                        <Mic className="w-5 h-5 text-violet-600" />
                        <h3 className="text-lg font-display font-semibold text-[#4C1D95] uppercase tracking-widest">Technical Speakers</h3>
                        <div className="flex-1 h-px bg-gradient-to-r from-violet-300/60 to-transparent" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                        {technicalSpeakers.map((spk, i) => (
                            <SpeakerCard key={spk.name} speaker={spk} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ════════════════════════════════════════════════════════════════════════
   TEAM SECTION - Single Row Scrolling Marquee
   ════════════════════════════════════════════════════════════════════════ */

interface TeamMember {
    name: string;
    role: string;
    image?: string;
    accentFrom: string;
    accentTo: string;
}

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
    const initials = member.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
    return (
        <div className="group relative flex-shrink-0 w-44 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-purple-300/40 transition-all duration-400 cursor-default select-none mx-3"
             style={{ height: '220px' }}>
            {member.image ? (
                <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
            ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${member.accentFrom} ${member.accentTo} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}>
                    <span className="text-5xl font-black text-white/30 font-display">{initials}</span>
                </div>
            )}
            
            {/* Dark scrim for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
            
            {/* Hover ring effect */}
            <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-violet-400/60 transition-all duration-300 pointer-events-none" />
            
            {/* Info panel at bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-3 flex flex-col justify-end">
                <p className="text-white font-display font-bold text-[15px] leading-tight drop-shadow">{member.name}</p>
                <p className="text-violet-200 text-[10px] mt-1 font-semibold tracking-wide leading-tight line-clamp-2 uppercase">
                    {member.role}
                </p>
            </div>
        </div>
    );
};

/* ─── Team Export ────────────────────────────────────────────────────── */
export const Team = () => {
    // Deduplicated list of team members
    const members: TeamMember[] = [
        { name: 'Utkarsh Gaur',          role: 'Captain · SCD / Finance Advisor',        image: imgUtkarsh,          accentFrom: 'from-violet-600', accentTo: 'to-purple-800' },
        { name: 'Shweta',                role: 'Head · Attendee Exp & Mktg',             image: imgShweta,           accentFrom: 'from-pink-500',   accentTo: 'to-rose-700'  },
        { name: 'Suhani Mitra',          role: 'Member · Attendee Experience',           image: imgSuhaniMitra,      accentFrom: 'from-pink-400',   accentTo: 'to-rose-600'  },
        { name: 'Arman Kumar',           role: 'Member · Attendee Experience',           image: undefined,           accentFrom: 'from-pink-500',   accentTo: 'to-rose-700'  },
        { name: 'Masood Aslam',          role: 'Member · Attendee Experience',           image: undefined,           accentFrom: 'from-pink-500',   accentTo: 'to-rose-700'  },
        { name: 'Aditya Maheshwari',     role: 'Head · Finance',                         image: imgAdityaMaheshwari, accentFrom: 'from-emerald-500',accentTo: 'to-teal-700'  },
        { name: 'Yash Kumar',            role: 'Head · Sponsorship',                     image: undefined,           accentFrom: 'from-amber-500',  accentTo: 'to-orange-700'},
        { name: 'Aditya Pratap',         role: 'Co-Lead · Sponsorship',                  image: undefined,           accentFrom: 'from-amber-400',  accentTo: 'to-orange-600'},
        { name: 'Gauri Rawat',           role: 'Member · Sponsorship',                   image: undefined,           accentFrom: 'from-amber-500',  accentTo: 'to-orange-700'},
        { name: 'Shubham Shukla',        role: 'Head · Partnerships',                    image: undefined,           accentFrom: 'from-sky-500',    accentTo: 'to-blue-700'  },
        { name: 'Ashutosh K Singh',      role: 'Member · Partnerships',                  image: undefined,           accentFrom: 'from-sky-400',    accentTo: 'to-blue-600'  },
        { name: 'Pranav Chauhan',        role: 'Member · Partnerships',                  image: undefined,           accentFrom: 'from-sky-500',    accentTo: 'to-blue-700'  },
        { name: 'Suwarna Rajey',         role: 'Member · Partnerships',                  image: undefined,           accentFrom: 'from-sky-500',    accentTo: 'to-blue-700'  },
        { name: 'Vidit Gupta',           role: 'Head · Operations',                      image: imgViditGupta,       accentFrom: 'from-slate-500',  accentTo: 'to-slate-700' },
        { name: 'Dev Tyagi',             role: 'Member · Operations',                    image: undefined,           accentFrom: 'from-slate-400',  accentTo: 'to-slate-600' },
        { name: 'Vashu Kaushik',         role: 'Head · Program & Content',               image: imgVashuKaushik,     accentFrom: 'from-violet-500', accentTo: 'to-purple-700'},
        { name: 'Aryan Sharma',          role: 'Member · Program&Content/Creative',      image: imgAryanSharma,      accentFrom: 'from-violet-500', accentTo: 'to-purple-700'},
        { name: 'Abhishek Gaur',         role: 'Member · Program & Content',             image: imgAbhishekGaur,     accentFrom: 'from-violet-400', accentTo: 'to-purple-600'},
        { name: 'Astuti Pandey',         role: 'Member · Program & Content',             image: imgAstutiPandey,     accentFrom: 'from-violet-400', accentTo: 'to-purple-600'},
        { name: 'Mohammad Sameer',       role: 'Member · Program & Content',             image: undefined,           accentFrom: 'from-violet-500', accentTo: 'to-purple-700'},
        { name: 'Anshvi',                role: 'Lead · Marketing/Creative',              image: imgAnshvi,           accentFrom: 'from-rose-500',   accentTo: 'to-pink-700'  },
        { name: 'Manav Mehta',           role: 'Head · Creative',                        image: imgManavMehta,       accentFrom: 'from-orange-500', accentTo: 'to-red-700'   },
    ];

    return (
        <section id="team" className="py-24 border-t border-[#7C3AED]/20 relative overflow-hidden">
            {/* Inline styles for scrolling animation */}
            <style>
                {`
                @keyframes scrollMarquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: scrollMarquee 45s linear infinite;
                }
                .marquee-container:hover .animate-marquee {
                    animation-play-state: paused;
                }
                `}
            </style>
            
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-200/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-300/15 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10"
                >
                    <span className="inline-flex items-center gap-2 text-[#7C3AED] font-semibold text-sm uppercase tracking-widest mb-4">
                        <span className="w-8 h-px bg-[#7C3AED]" />
                        AWS Community Day Delhi NCR
                        <span className="w-8 h-px bg-[#7C3AED]" />
                    </span>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-[#4C1D95]">
                        Meet the <span className="text-[#7C3AED]">Team</span>
                    </h2>
                    <p className="text-[#5B4B5C] max-w-2xl mx-auto text-lg mt-5 font-sans leading-relaxed">
                        The passionate people behind AWS Student Community Day Delhi NCR.
                    </p>
                </motion.div>
                
                {/* Full-width continuous scrolling marquee */}
                <div className="marquee-container overflow-hidden whitespace-nowrap relative w-[100vw] ml-[calc(-50vw+50%)] py-8">
                    {/* Gradient fade on the left and right edges for a seamless appearance */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F3EDEE] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F3EDEE] to-transparent z-10 pointer-events-none" />
                    
                    <div className="inline-flex animate-marquee">
                        {/* 
                          We map the members array twice.
                          The animation moves the entire block by 50% continuously.
                        */}
                        {[...members, ...members].map((m, i) => (
                            <TeamCard key={"team-"+i} member={m} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Speakers;
