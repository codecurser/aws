
import { motion } from 'framer-motion';
import { Linkedin, Mic, Award, Crown, Twitter, Github } from 'lucide-react';

// Speaker images
import imgAdityaJaiswal from '../assets/Aditya Jaiswal.png';
import imgAnjaliKumari from '../assets/Anjali Kumari.png';
import imgArkodyutiSaha from '../assets/Arkodyuti Saha.png';
import imgAshishKumar from '../assets/Ashish Kumar.png';
import imgDrSunilPathak from '../assets/Dr Sunil Pathak.png';
import imgGouravSharma from '../assets/Gourav Sharma.png';
import imgNitinPandit from '../assets/Nitin Pandit.png';
import imgTanishiMookerjee from '../assets/Tanishi Mookerjee.png';

/* ─── Types ─────────────────────────────────────────────────────────── */
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
    vip?: boolean; // Chief / Keynote / Guest of Honour
}

/* ─── Badge config ───────────────────────────────────────────────────── */
const badgeMeta: Record<TalkType, { label: string; icon: React.ReactNode; color: string }> = {
    'Technical Talk': {
        label: 'Technical Talk',
        icon: <Mic className="w-3 h-3" />,
        color: 'bg-violet-600/90 text-white',
    },
    'Guest of Honour and Technical Speaker': {
        label: 'Guest of Honour',
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
interface SpeakerCardProps {
    speaker: Speaker;
    index: number;
    large?: boolean;
}

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
            {/* ── Full-bleed photo ── */}
            <img
                src={speaker.image}
                alt={speaker.name}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* ── Always-visible bottom gradient ── */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            {/* ── VIP shimmer ring on hover ── */}
            {speaker.vip && (
                <div className="absolute inset-0 rounded-3xl border-2 border-amber-300/0 group-hover:border-amber-300/60 transition-all duration-500 pointer-events-none" />
            )}

            {/* ── Talk-type badge — top left ── */}
            <div className="absolute top-4 left-4 z-10">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-lg ${badge.color}`}>
                    {badge.icon}
                    {badge.label}
                </span>
            </div>

            {/* ── LinkedIn icon — top right ── */}
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

            {/* ── Bottom info panel ── */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
                <h3 className={`font-display font-bold text-white leading-tight mb-1 ${large ? 'text-2xl' : 'text-xl'}`}>
                    {speaker.name}
                </h3>

                {/* Animated reveal: LinkedIn CTA */}
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

                {/* Hover shimmer bar */}
                <div className="mt-3 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-violet-400 via-purple-300 to-violet-400 transition-all duration-500 rounded-full" />
            </div>
        </motion.div>
    );
};

/* ─── Speakers Section ───────────────────────────────────────────────── */
const Speakers = () => {
    const vipSpeakers: Speaker[] = [
        {
            name: 'Dr. Sunil Pathak',
            talkType: 'Chief Guest and Keynote Speaker',
            image: imgDrSunilPathak,
            linkedin: 'https://www.linkedin.com/in/dr-sunil-pathak-7b45922b/',
            vip: true,
        },
        {
            name: 'Nitin Pandit',
            talkType: 'Guest of Honour and Keynote Speaker',
            image: imgNitinPandit,
            linkedin: 'https://www.linkedin.com/in/nitinpanditofficial/',
            vip: true,
        },
        {
            name: 'Arkodyuti Saha',
            talkType: 'Guest of Honour and Technical Speaker',
            image: imgArkodyutiSaha,
            linkedin: 'https://www.linkedin.com/in/arkodyutisaha/',
            vip: true,
        },
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
            {/* Background blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-violet-300/20 rounded-full blur-[120px]" />
                <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-purple-400/15 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* ── Section header ── */}
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

                {/* ── VIP / Keynote speakers ── */}
                <div className="mb-6">
                    <div className="flex items-center gap-3 mb-8">
                        <Crown className="w-5 h-5 text-amber-500" />
                        <h3 className="text-lg font-display font-semibold text-[#4C1D95] uppercase tracking-widest">Keynote & Guests of Honour</h3>
                        <div className="flex-1 h-px bg-gradient-to-r from-amber-300/60 to-transparent" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {vipSpeakers.map((spk, i) => (
                            <SpeakerCard key={spk.name} speaker={spk} index={i} large />
                        ))}
                    </div>
                </div>

                {/* ── Technical speakers ── */}
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



interface TeamMember {
    name: string;
    role: string;
    company: string;
    social: {
        linkedin?: string;
        twitter?: string;
        github?: string;
    };
    image?: string;
}

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
    return (
        <div
            className="bg-white/60 backdrop-blur-xl shadow-lg hover:shadow-2xl shadow-purple-900/5 hover:shadow-purple-900/10 p-8 rounded-[2rem] border border-white/80 flex flex-col items-center relative overflow-hidden group transition-all duration-300 w-[300px] h-[360px] flex-shrink-0"
        >
            {/* Decorative background flare */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-300/30 blur-3xl rounded-full transition-opacity opacity-0 group-hover:opacity-100 duration-700 pointer-events-none"></div>
            
            {/* Avatar placeholder with upcoming image support */}
            <div className="relative w-28 h-28 mb-6 rounded-[1.5rem] bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center shadow-inner border border-purple-200/50 group-hover:border-purple-300 group-hover:rotate-3 transition-transform duration-500 overflow-hidden">
                {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                    // Default generic user icon since images are coming later
                    <div className="w-full h-full bg-[#E9DDDF]/50 flex items-center justify-center text-[#6A2C91]/40">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                )}
                
                <div className="absolute inset-[-4px] rounded-[1.6rem] border border-purple-200/50 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
            </div>
            
            {/* Info */}
            <div className="text-center z-10 w-full flex-1 flex flex-col justify-between">
                <div>
                    <h4 className="text-2xl font-bold font-display text-[#4A1F6B] mb-2 group-hover:text-[#6A2C91] transition-colors truncate px-2">{member.name}</h4>
                    <div className="h-0.5 w-12 mx-auto bg-gradient-to-r from-transparent via-[#C08ACF] to-transparent mb-4 opacity-50 group-hover:opacity-100 group-hover:w-16 transition-all duration-500"></div>
                    <p className="text-[#6A2C91] font-semibold text-sm mb-4 text-balance leading-relaxed h-[40px] flex items-center justify-center">{member.role}</p>
                </div>
                <div>
                    <span className="inline-block text-[#5B4B5C] text-xs px-4 py-1.5 bg-white/80 backdrop-blur-md rounded-full font-medium border border-purple-100 shadow-sm">{member.company}</span>
                </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 mt-6 pt-6 w-full border-t border-purple-100 relative z-10">
                {member.social.linkedin && (
                    <motion.a
                        href={member.social.linkedin}
                        whileHover={{ scale: 1.15, y: -2 }}
                        className="text-[#5B4B5C] hover:text-[#6A2C91] transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md border border-purple-50"
                    >
                        <Linkedin className="w-4 h-4" />
                    </motion.a>
                )}
                {member.social.twitter && (
                    <motion.a
                        href={member.social.twitter}
                        whileHover={{ scale: 1.15, y: -2 }}
                        className="text-[#5B4B5C] hover:text-[#6A2C91] transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md border border-purple-50"
                    >
                        <Twitter className="w-4 h-4" />
                    </motion.a>
                )}
                {member.social.github && (
                    <motion.a
                        href={member.social.github}
                        whileHover={{ scale: 1.15, y: -2 }}
                        className="text-[#5B4B5C] hover:text-[#6A2C91] transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md border border-purple-50"
                    >
                        <Github className="w-4 h-4" />
                    </motion.a>
                )}
            </div>
        </div>
    );
};

export const Team = () => {
    const team: TeamMember[] = [
        { name: 'Utkarsh Gaur', role: 'Captain', company: 'Core Team', social: { linkedin: '#' } },
        { name: 'Shweta', role: 'Engagement & Experience Lead', company: 'Core Team', social: { linkedin: '#' } },
        { name: 'Vashu Kaushik', role: 'Program & Content Lead', company: 'Core Team', social: { linkedin: '#' } },
        { name: 'Manav Mehta', role: 'Creative Lead', company: 'Core Team', social: { linkedin: '#' } },
        { name: 'Aditya Maheshwari', role: 'Finance Head', company: 'Core Team', social: { linkedin: '#' } },
        { name: 'Vidit Gupta', role: 'Logistics Head', company: 'Core Team', social: { linkedin: '#' } },
        { name: 'Shubham Shukla', role: 'Community & Partners Lead', company: 'Core Team', social: { linkedin: '#' } },
        { name: 'Yash Kumar Chaudhary', role: 'Sponsorship Lead', company: 'Core Team', social: { linkedin: '#' } },
        { name: 'Anshvi', role: 'Marketing & Media Lead', company: 'Core Team', social: { linkedin: '#' } },
    ];

    return (
        <section id="team" className="py-20  border-t border-[#7C3AED]/20 relative overflow-hidden">
            {/* Enhanced Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96  rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96  rounded-full blur-[100px]"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="w-8 h-8  rounded-full flex items-center justify-center text-[#4C1D95] font-bold">🚀</div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-[#4C1D95]">
                            Meet the <span className=" text-[#7C3AED]">Team</span>
                        </h2>
                        <div className="w-8 h-8  rounded-full flex items-center justify-center text-[#4C1D95] font-bold">🚀</div>
                    </div>
                    <div className="w-32 h-1.5  mx-auto rounded-full"></div>
                    <p className="text-[#5B4B5C] max-w-3xl mx-auto text-lg mt-6 font-sans leading-relaxed">
                        The passionate team behind AWS Student Community Day Delhi NCR.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h3 className="inline-block px-8 py-3 rounded-full bg-purple-100 border border-purple-200 text-purple-800 font-display font-bold text-xl md:text-2xl shadow-sm tracking-wide">
                        Organizing Team
                    </h3>
                </motion.div>
                
                <RadialCarousel team={team} />
            </div>
        </section>
    )
}

const RadialCarousel = ({ team }: { team: TeamMember[] }) => {
    // We'll map the team into a pseudo-3D carousel scroll.
    return (
        <div className="relative w-full overflow-hidden py-16 px-4 group">
            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-400/10 blur-[120px] rounded-full point-events-none"></div>

            <div 
                className="flex w-max animate-[scroll-left_linear_infinite] hover:[animation-play-state:paused] mx-auto"
                style={{ animationDuration: '40s' }}
            >
                {/* We render 3 sets for a smooth infinite scroll */}
                {[...team, ...team, ...team].map((member, i) => {
                    return (
                        <div key={i} className="px-4 md:px-6 flex-shrink-0 transition-transform duration-500 hover:scale-105 hover:-translate-y-4 hover:z-50 relative">
                            <TeamCard member={member} />
                        </div>
                    );
                })}
            </div>

            {/* Seamless edge fades */}
            <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#F3EDEE] via-[#F3EDEE]/90 to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#F3EDEE] via-[#F3EDEE]/90 to-transparent pointer-events-none z-10"></div>
        </div>
    );
}

export default Speakers;
