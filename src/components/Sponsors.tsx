import React from 'react';
import { motion } from 'framer-motion';
import { Star, Trophy, Crown, ArrowRight, Sparkles } from 'lucide-react';

interface SponsorCardProps {
    sponsor: string;
    tier: 'platinum' | 'gold' | 'silver';
}

const SponsorCard: React.FC<SponsorCardProps> = ({ sponsor, tier }) => {
    const tierConfig = {
        platinum: {
            containerClass: "w-[240px] md:w-[280px] h-[120px]",
            gradient: "bg-gradient-to-br from-white/80 to-purple-50/50",
            border: "border-purple-300/50",
            shadow: "shadow-purple-500/10",
            icon: Crown,
            iconColor: "text-purple-600",
            badgeBg: "bg-purple-100",
            glow: "group-hover:shadow-[0_0_30px_-5px_theme(colors.purple.400)]"
        },
        gold: {
            containerClass: "w-[200px] md:w-[240px] h-[100px]",
            gradient: "bg-gradient-to-br from-white/80 to-amber-50/50",
            border: "border-amber-300/50",
            shadow: "shadow-amber-500/10",
            icon: Trophy,
            iconColor: "text-amber-600",
            badgeBg: "bg-amber-100",
            glow: "group-hover:shadow-[0_0_25px_-5px_theme(colors.amber.400)]"
        },
        silver: {
            containerClass: "w-[160px] h-[80px]",
            gradient: "bg-gradient-to-br from-white/80 to-slate-50/50",
            border: "border-slate-300/50",
            shadow: "shadow-slate-500/10",
            icon: Star,
            iconColor: "text-slate-600",
            badgeBg: "bg-slate-100",
            glow: "group-hover:shadow-[0_0_20px_-5px_theme(colors.slate.400)]"
        }
    };

    const config = tierConfig[tier];
    const Icon = config.icon;

    return (
        <div className={`group relative ${config.containerClass}`}>
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-md`}></div>
            
            <div className={`relative h-full ${config.gradient} ${config.border} border backdrop-blur-sm rounded-2xl p-5 shadow-lg ${config.shadow} transition-all duration-300 ${config.glow} hover:-translate-y-2 hover:scale-[1.02] flex flex-col justify-center items-center overflow-hidden`}>
                
                {/* Background flare on hover */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white opacity-0 group-hover:opacity-20 blur-3xl rounded-full transition-opacity duration-500 pointer-events-none"></div>

                {/* Tier indicator badge */}
                <div className={`absolute top-3 right-3 px-2 py-1 rounded-full ${config.badgeBg} border ${config.border} flex items-center space-x-1 backdrop-blur-md`}>
                    <Icon className={`w-3 h-3 ${config.iconColor}`} />
                </div>
                
                {/* Content */}
                <div className="flex flex-col items-center justify-center text-center mt-2 z-10 w-full">
                    <h3 className="text-xl font-bold text-[#4A1F6B] font-display tracking-tight group-hover:scale-105 transition-transform duration-300 truncate w-full px-4">
                        {sponsor}
                    </h3>
                    <div className="h-0.5 w-8 bg-gradient-to-r from-transparent via-[#C08ACF] to-transparent mt-3 opacity-50"></div>
                </div>
            </div>
        </div>
    );
};

interface SponsorTierProps {
    title: string;
    tier: 'platinum' | 'gold' | 'silver';
    sponsors: string[];
    description: string;
    direction?: 'left' | 'right';
    speed?: number; // Duration in seconds
}

const SponsorTier: React.FC<SponsorTierProps> = ({ title, tier, sponsors, description, direction = 'left', speed = 30 }) => {
    // Duplicate the sponsors array so there are enough items to fill a wide screen
    // Then the marquee effect will clone this entire base block twice!
    const baseSponsors = [...sponsors, ...sponsors, ...sponsors];

    return (
        <div className="mb-10 overflow-hidden w-full relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center mb-6 text-center"
            >
                <div className="inline-flex items-center justify-center space-x-2 mb-3">
                    <span className="h-px w-8 bg-[#C08ACF]/50"></span>
                    <h3 className={`text-2xl font-display font-bold uppercase tracking-widest ${
                        tier === 'platinum' ? 'text-purple-700' :
                        tier === 'gold' ? 'text-amber-600' :
                        'text-slate-600'
                    }`}>
                        {title}
                    </h3>
                    <span className="h-px w-8 bg-[#C08ACF]/50"></span>
                </div>
                <p className="text-[#6A2C91] max-w-2xl font-sans text-sm md:text-base opacity-80 px-4">
                    {description}
                </p>
            </motion.div>

            {/* Seamless Infinite Scrolling Marquee Wrapper */}
            <div className="relative flex w-full overflow-hidden group">
                {/* The animated track */}
                <div 
                    className={`flex w-max ${direction === 'left' ? 'animate-[scroll-left_linear_infinite]' : 'animate-[scroll-right_linear_infinite]'} group-hover:[animation-play-state:paused]`}
                    style={{ animationDuration: `${speed}s` }}
                >
                    {/* First Block */}
                    <div className="flex gap-6 md:gap-8 px-3 md:px-4">
                        {baseSponsors.map((sponsor, index) => (
                            <div key={`block1-${tier}-${sponsor}-${index}`} className="flex-shrink-0">
                                <SponsorCard 
                                    sponsor={sponsor} 
                                    tier={tier}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Second Identical Block (Crucial for a seamless loop!) */}
                    <div className="flex gap-6 md:gap-8 px-3 md:px-4">
                        {baseSponsors.map((sponsor, index) => (
                            <div key={`block2-${tier}-${sponsor}-${index}`} className="flex-shrink-0">
                                <SponsorCard 
                                    sponsor={sponsor} 
                                    tier={tier}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gradient Fades on edges for smooth entry/exit */}
                <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-[#E9DDDF] via-[#E9DDDF]/80 to-transparent pointer-events-none z-10"></div>
                <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-[#E9DDDF] via-[#E9DDDF]/80 to-transparent pointer-events-none z-10"></div>
            </div>
        </div>
    );
};

const Sponsors = () => {
    return (
        <section id="sponsors" className="py-12 relative overflow-hidden bg-[#E9DDDF]">
            {/* Elegant Background Styling */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Subtle Grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#C08ACF_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.15]"></div>
                
                {/* Soft Glowing Orbs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300/20 blur-[100px] rounded-full mix-blend-multiply"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-300/20 blur-[120px] rounded-full mix-blend-multiply"></div>
            </div>
            
            <div className="max-w-[100vw] mx-auto py-10 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 px-4"
                >
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 mb-6 shadow-sm">
                        <Sparkles className="w-4 h-4 text-[#6A2C91] mr-2" />
                        <span className="text-sm font-semibold text-[#6A2C91] uppercase tracking-wider">Partnerships</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-[#4A1F6B] mb-6">
                        Supported By <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A2C91] to-[#A865C1]">Industry Leaders</span>
                    </h2>
                    <p className="text-[#5B4B5C] max-w-2xl mx-auto text-lg font-sans leading-relaxed">
                        We're proud to partner with organizations who share our vision 
                        for advancing the community and fostering innovation.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    <SponsorTier
                        title="Platinum"
                        tier="platinum"
                        sponsors={['AWS', 'Konfhub', 'CloudTech', 'DataCorp']}
                        description="Our premier partners providing exceptional support and resources to make this event extraordinary."
                        direction="left"
                        speed={40}
                    />

                    <SponsorTier
                        title="Gold"
                        tier="gold"
                        sponsors={['Stripe', 'Vercel', 'MongoDB', 'StartupX', 'TechHub']}
                        description="Valued partners contributing significantly to the success and broad reach of our community."
                        direction="right"
                        speed={45}
                    />

                    <SponsorTier
                        title="Silver"
                        tier="silver"
                        sponsors={['Supabase', 'Clerk', 'Figma', 'Cloud Corp', 'AI Labs', 'Web3 Studio']}
                        description="Supportive partners enriching our ecosystem with diverse perspectives and essential tools."
                        direction="left"
                        speed={35}
                    />
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="mt-12 max-w-4xl mx-auto px-4"
                >
                    <div className="relative rounded-3xl p-8 md:p-12 overflow-hidden bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center group">
                        
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-extrabold text-[#4A1F6B] mb-4 font-display">
                                Ready to make an impact?
                            </h3>
                            <p className="text-[#6A2C91] mb-8 font-sans text-lg max-w-2xl mx-auto">
                                Join us in creating an unforgettable experience. 
                                Your support helps empower the next generation of professionals.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <motion.a 
                                    href="mailto:contact@example.com" 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center px-8 py-4 bg-[#6A2C91] hover:bg-[#4A1F6B] text-[#E9DDDF] rounded-full font-bold font-sans transition-colors xl:shadow-lg shadow-purple-900/20"
                                >
                                    Sponsorship Inquiry
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </motion.a>
                                <motion.a 
                                    href="#"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center px-8 py-4 bg-white/50 hover:bg-white border-2 border-[#A865C1]/30 hover:border-[#A865C1] text-[#6A2C91] rounded-full font-bold font-sans transition-all"
                                >
                                    Download Prospectus
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Sponsors;
