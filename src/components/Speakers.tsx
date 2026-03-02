
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
                    <div className="flex items-center gap-2 text-[#2D1B36]">
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
                                className="text-[#2D1B36] hover:text-[#7C3AED] transition-colors"
                            >
                                <Linkedin className={compact ? 'w-4 h-4' : 'w-5 h-5'} />
                            </motion.a>
                        )}
                        {speaker.social.twitter && (
                            <motion.a
                                href={speaker.social.twitter}
                                whileHover={{ scale: 1.2, rotate: -5 }}
                                className="text-[#2D1B36] hover:text-[#7C3AED] transition-colors"
                            >
                                <Twitter className={compact ? 'w-4 h-4' : 'w-5 h-5'} />
                            </motion.a>
                        )}
                        {speaker.social.github && (
                            <motion.a
                                href={speaker.social.github}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                className="text-[#2D1B36] hover:text-[#7C3AED] transition-colors"
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
                    <p className="text-[#2D1B36] max-w-3xl mx-auto text-lg mt-6 font-sans leading-relaxed">
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

export const Team = () => {
    const team = [
        { name: 'Organizer 1', role: 'Lead Organizer', company: 'College Name', social: { linkedin: '#' } },
        { name: 'Organizer 2', role: 'Tech Lead', company: 'College Name', social: { twitter: '#' } },
        { name: 'Organizer 3', role: 'Design Lead', company: 'College Name', social: { github: '#' } },
        { name: 'Organizer 4', role: 'Community Lead', company: 'College Name', social: { linkedin: '#' } },
        { name: 'Organizer 5', role: 'Content Lead', company: 'College Name', social: { twitter: '#' } },
        { name: 'Organizer 6', role: 'Operations Lead', company: 'College Name', social: { github: '#' } },
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
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="w-8 h-8  rounded-full flex items-center justify-center text-[#4C1D95] font-bold">🚀</div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-[#4C1D95]">
                            Meet the <span className=" text-[#7C3AED]">Team</span>
                        </h2>
                        <div className="w-8 h-8  rounded-full flex items-center justify-center text-[#4C1D95] font-bold">🚀</div>
                    </div>
                    <div className="w-32 h-1.5  mx-auto rounded-full"></div>
                    <p className="text-[#2D1B36] max-w-3xl mx-auto text-lg mt-6 font-sans leading-relaxed">
                        The passionate team behind AWS Student Community Day Delhi NCR.
                    </p>
                </motion.div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            whileHover={{ y: -8, scale: 1.05 }}
                            className="bg-white  shadow-[0_4px_20px_rgba(124,58,237,0.15)] p-6 rounded-3xl border border-[#7C3AED]/20 text-center hover:border-sunset-purple/50 hover:bg-gradient-to-br hover:from-sunset-purple/20 hover:to-sunset-pink/20 transition-all duration-500 group"
                        >
                            <div className="w-16 h-16 mx-auto mb-4  rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                <span className="text-2xl">👤</span>
                            </div>
                            <h4 className="text-xl font-bold text-[#4C1D95] mb-2 group-hover:text-[#7C3AED] transition-colors">{member.name}</h4>
                            <p className="text-[#7C3AED] font-medium mb-1">{member.role}</p>
                            <p className="text-[#2D1B36] text-sm">{member.company}</p>
                            
                            {/* Social Links */}
                            <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-[#7C3AED]/20">
                                {member.social.linkedin && (
                                    <motion.a
                                        href={member.social.linkedin}
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        className="text-[#2D1B36] hover:text-[#7C3AED] transition-colors"
                                    >
                                        <Linkedin className="w-4 h-4" />
                                    </motion.a>
                                )}
                                {member.social.twitter && (
                                    <motion.a
                                        href={member.social.twitter}
                                        whileHover={{ scale: 1.2, rotate: -5 }}
                                        className="text-[#2D1B36] hover:text-[#7C3AED] transition-colors"
                                    >
                                        <Twitter className="w-4 h-4" />
                                    </motion.a>
                                )}
                                {member.social.github && (
                                    <motion.a
                                        href={member.social.github}
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        className="text-[#2D1B36] hover:text-[#7C3AED] transition-colors"
                                    >
                                        <Github className="w-4 h-4" />
                                    </motion.a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Speakers;
