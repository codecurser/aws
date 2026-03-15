
import { motion } from 'framer-motion';
import { Star, Award, TrendingUp, Briefcase, Linkedin, Twitter, Github } from 'lucide-react';

interface SpeakerCardProps {
    speaker: {
        name: string;
        role: string;
        company: string;
        social?: { linkedin?: string; twitter?: string; github?: string };
        featured?: boolean;
    };
    index: number;
    compact?: boolean;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, index, compact = false }) => {
    const initials = speaker.name.split(' ').map(n => n[0]).join('');
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ 
                y: -8, 
                scale: compact ? 1.02 : 1.05,
                rotateX: 5,
                rotateY: 5
            }}
            className={`group relative ${
                compact 
                    ? 'bg-white  shadow-[0_4px_20px_rgba(124,58,237,0.15)] p-6 rounded-2xl border border-[#7C3AED]/20 hover:border-sunset-purple/50 transition-all duration-500' 
                    : '  p-8 rounded-3xl border border-[#7C3AED]/20 hover:border-sunset-purple/50 transition-all duration-500'
            }`}
        >
            {/* Glass effect overlay */}
            <div className="absolute inset-0  rounded-inherit pointer-events-none"></div>
            
            {/* Featured badge */}
            {speaker.featured && !compact && (
                <div className="absolute -top-3 -right-3">
                    <div className=" text-[#4C1D95] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                        <Star className="w-3 h-3 fill-current" />
                        Featured
                    </div>
                </div>
            )}
            
            <div className="relative z-10">
                {/* Avatar Section */}
                <div className="flex items-center gap-4 mb-4">
                    <div className={`relative ${
                        compact ? 'w-12 h-12' : 'w-16 h-16'
                    }  rounded-xl flex items-center justify-center text-[#4C1D95] font-bold shadow-lg group-hover:scale-110 transition-transform`}>
                        <span className={compact ? 'text-lg' : 'text-xl'}>{initials}</span>
                        {/* Animated ring */}
                        <div className="absolute inset-0 rounded-xl border-2 border-sunset-purple/30"></div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                        <h3 className={`font-bold text-[#4C1D95] mb-1 group-hover:text-[#7C3AED] transition-colors ${
                            compact ? 'text-base' : 'text-xl'
                        }`}>
                            {speaker.name}
                        </h3>
                        <p className={`text-[#7C3AED] font-medium ${
                            compact ? 'text-xs' : 'text-sm'
                        }`}>
                            {speaker.role}
                        </p>
                    </div>
                </div>
                
                {/* Company and Location */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-[#5B4B5C]">
                        <Briefcase className={`${
                            compact ? 'w-3 h-3' : 'w-4 h-4'
                        }`} />
                        <span className={`${
                            compact ? 'text-xs' : 'text-sm'
                        }`}>{speaker.company}</span>
                    </div>
                    
                    {speaker.featured && (
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full"></div>
                            <div className="w-2 h-2 rounded-full delay-75"></div>
                            <div className="w-2 h-2 rounded-full delay-150"></div>
                        </div>
                    )}
                </div>
                
                {/* Social Links */}
                {speaker.social && (
                    <div className="flex items-center gap-3 pt-3 border-t border-[#7C3AED]/20">
                        {speaker.social.linkedin && (
                            <motion.a
                                href={speaker.social.linkedin}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                className="text-[#5B4B5C] hover:text-[#7C3AED] transition-colors"
                            >
                                <Linkedin className={compact ? 'w-4 h-4' : 'w-5 h-5'} />
                            </motion.a>
                        )}
                        {speaker.social.twitter && (
                            <motion.a
                                href={speaker.social.twitter}
                                whileHover={{ scale: 1.2, rotate: -5 }}
                                className="text-[#5B4B5C] hover:text-[#7C3AED] transition-colors"
                            >
                                <Twitter className={compact ? 'w-4 h-4' : 'w-5 h-5'} />
                            </motion.a>
                        )}
                        {speaker.social.github && (
                            <motion.a
                                href={speaker.social.github}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                className="text-[#5B4B5C] hover:text-[#7C3AED] transition-colors"
                            >
                                <Github className={compact ? 'w-4 h-4' : 'w-5 h-5'} />
                            </motion.a>
                        )}
                    </div>
                )}
            </div>
            
            {/* Hover effect overlay */}
            <div className="absolute inset-0  rounded-inherit opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </motion.div>
    );
};

const Speakers = () => {
    const speakers = [
        { name: 'Dr. Cloud Expert', role: 'Solutions Architect', company: 'AWS', social: { linkedin: '#' }, featured: true },
        { name: 'Jane DevOps', role: 'DevRel Engineer', company: 'TechCorp', social: { twitter: '#' }, featured: true },
        { name: 'John Serverless', role: 'CTO', company: 'Startup.io', social: { github: '#' } },
        { name: 'Priya Python', role: 'ML Engineer', company: 'DataAI', social: { linkedin: '#' } },
        { name: 'Alex Cloud', role: 'Cloud Architect', company: 'CloudTech', social: { twitter: '#' } },
        { name: 'Sarah Dev', role: 'Full Stack Developer', company: 'WebStudio', social: { github: '#' } },
        { name: 'Mike AI', role: 'AI Specialist', company: 'AILabs', social: { linkedin: '#' } },
        { name: 'Lisa K8s', role: 'DevOps Lead', company: 'KubeCorp', social: { twitter: '#' } },
    ];

    const featuredSpeakers = speakers.filter(s => s.featured);
    const allSpeakers = speakers;

    return (
        <section id="speakers" className="py-20  relative overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96  rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96  rounded-full blur-[100px]"></div>
                <div className="absolute inset-0 opacity-20">
                    <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <Star className="w-8 h-8 text-[#7C3AED]" />
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-[#4C1D95]">
                            Featured <span className=" text-[#7C3AED]">Speakers</span>
                        </h2>
                        <Star className="w-8 h-8 text-[#7C3AED]" />
                    </div>
                    <div className="w-32 h-1.5  mx-auto rounded-full"></div>
                    <p className="text-[#5B4B5C] max-w-3xl mx-auto text-lg mt-6 font-sans leading-relaxed">
                        Learn from the brightest minds and industry leaders shaping the future of cloud computing.
                    </p>
                </motion.div>
                
                {/* Featured Speakers - Compact Grid */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <Award className="w-6 h-6 text-[#7C3AED]" />
                        <h3 className="text-2xl font-display font-semibold text-[#4C1D95]">Featured Speakers</h3>
                        <div className="flex-1 h-px "></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {featuredSpeakers.map((speaker, i) => (
                            <SpeakerCard 
                                key={`featured-${speaker.name}`}
                                speaker={speaker} 
                                index={i}
                            />
                        ))}
                    </div>
                </div>
                
                {/* All Speakers - Compact Grid */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <TrendingUp className="w-6 h-6 text-[#7C3AED]" />
                        <h3 className="text-2xl font-display font-semibold text-[#4C1D95]">All Speakers</h3>
                        <div className="flex-1 h-px "></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {allSpeakers.map((speaker, i) => (
                            <SpeakerCard 
                                key={`all-${speaker.name}`}
                                speaker={speaker} 
                                index={i}
                                compact={true}
                            />
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
