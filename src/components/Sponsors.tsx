import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Star, Trophy, Crown } from 'lucide-react';

interface SponsorCardProps {
    sponsor: string;
    tier: 'platinum' | 'gold' | 'silver';
    index: number;
    scrollRight?: boolean;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ sponsor, tier, index, scrollRight = false }) => {
    const tierConfig = {
        platinum: {
            gradient: 'from-gray-100 via-gray-50 to-white',
            border: 'border-gray-200/50',
            shadow: 'shadow-[#7C3AED]/10',
            icon: Crown,
            iconColor: 'text-[#5B4B5C]',
            hoverScale: 1.06
        },
        gold: {
            gradient: 'from-amber-50 via-yellow-50 to-amber-100',
            border: 'border-amber-200/50',
            shadow: 'shadow-amber-900/10',
            icon: Trophy,
            iconColor: 'text-amber-600',
            hoverScale: 1.05
        },
        silver: {
            gradient: 'from-slate-50 via-gray-50 to-slate-100',
            border: 'border-slate-200/50',
            shadow: 'shadow-slate-900/10',
            icon: Star,
            iconColor: 'text-slate-600',
            hoverScale: 1.04
        }
    };

    const config = tierConfig[tier];
    const Icon = config.icon;

    return (
        <motion.div
            initial={{ opacity: 0, x: scrollRight ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{ 
                scale: config.hoverScale,
                y: -3,
                rotateX: 3,
                rotateY: 3
            }}
            className="group relative"
        >
            {/* Card with 3D effect - More Compact */}
            <div className={`relative bg-gradient-to-br ${config.gradient} ${config.border}  rounded-xl p-5 min-h-[140px] w-[240px] border shadow-lg ${config.shadow} transition-all duration-500 hover:shadow-xl`}>
                
                {/* Tier indicator - Smaller */}
                <div className="absolute top-2 right-2">
                    <div className={`p-1.5 rounded-full bg-white/80  border ${config.border}`}>
                        <Icon className={`w-3 h-3 ${config.iconColor}`} />
                    </div>
                </div>

                {/* Glass effect overlay */}
                <div className="absolute inset-0  rounded-xl pointer-events-none"></div>
                
                {/* Sponsor content - More compact */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                        <div className="flex items-center mb-3">
                            <Building2 className="w-4 h-4 text-[#5B4B5C] mr-2" />
                            <div className="h-px  flex-1"></div>
                        </div>
                        
                        <h3 className="text-lg font-bold text-gray-800 mb-1 font-display leading-tight">
                            {sponsor}
                        </h3>
                        
                        <p className="text-xs text-[#5B4B5C] font-sans capitalize">
                            {tier} Partner
                        </p>
                    </div>
                    
                    {/* Bottom accent - Smaller */}
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex space-x-0.5">
                            <div className="w-1.5 h-1.5 rounded-full"></div>
                            <div className="w-1.5 h-1.5 rounded-full delay-75"></div>
                            <div className="w-1.5 h-1.5 rounded-full delay-150"></div>
                        </div>
                        <span className="text-xs text-[#5B4B5C] font-sans">Partner</span>
                    </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0  rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>

            {/* Shadow effect - Smaller */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[80%] h-3  rounded-full blur-lg group-hover:scale-110 transition-transform duration-500"></div>
        </motion.div>
    );
};

interface SponsorTierProps {
    title: string;
    tier: 'platinum' | 'gold' | 'silver';
    sponsors: string[];
    description: string;
}

const SponsorTier: React.FC<SponsorTierProps> = ({ title, tier, sponsors, description }) => {
    // Calculate how many cards per row based on screen size
    const getCardsPerRow = () => {
        if (typeof window !== 'undefined') {
            const width = window.innerWidth;
            if (width >= 1280) return 4; // xl
            if (width >= 1024) return 3; // lg
            if (width >= 768) return 2; // md
            return 1; // sm and below
        }
        return 4; // default for SSR
    };

    const cardsPerRow = getCardsPerRow();
    
    return (
        <div className="mb-16">
            {/* Tier header - More compact */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <h3 className={`text-2xl md:text-3xl font-display font-bold mb-3 ${
                    tier === 'platinum' ? 'text-[#5B4B5C]' :
                    tier === 'gold' ? 'text-[#7C3AED]' :
                    'text-[#5B4B5C]'
                } uppercase tracking-widest`}>
                    {title}
                </h3>
                <p className="text-[#5B4B5C] max-w-2xl mx-auto font-sans text-sm">
                    {description}
                </p>
            </motion.div>

            {/* Sponsor cards grid - Tighter spacing */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center">
                {sponsors.map((sponsor, index) => {
                    const rowNumber = Math.floor(index / cardsPerRow);
                    const isInSecondRow = rowNumber === 1;
                    
                    return (
                        <SponsorCard 
                            key={`${tier}-${sponsor}`} 
                            sponsor={sponsor} 
                            tier={tier}
                            index={index}
                            scrollRight={isInSecondRow}
                        />
                    );
                })}
            </div>
        </div>
    );
};

const Sponsors = () => {
    return (
        <section id="sponsors" className="py-16  relative overflow-hidden">
            {/* Enhanced background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03]"></div>
                <div className="absolute top-0 left-0 w-full h-full "></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-[#4C1D95] mb-4">
                        Our <span className=" text-[#7C3AED]">Sponsors</span>
                    </h2>
                    <p className="text-[#5B4B5C] max-w-3xl mx-auto text-base md:text-lg font-sans leading-relaxed">
                        We're proud to partner with industry leaders and innovators who share our vision 
                        for advancing cloud computing and fostering community growth.
                    </p>
                </motion.div>

                <SponsorTier
                    title="Platinum"
                    tier="platinum"
                    sponsors={['AWS', 'Konfhub', 'CloudTech', 'DataCorp']}
                    description="Our premier partners who provide exceptional support and resources to make this event extraordinary."
                />

                <SponsorTier
                    title="Gold"
                    tier="gold"
                    sponsors={['Company A', 'Company B', 'Company C', 'StartupX', 'TechHub']}
                    description="Valued partners who contribute significantly to the success and reach of our community event."
                />

                <SponsorTier
                    title="Silver"
                    tier="silver"
                    sponsors={['Startup X', 'Community Y', 'DevTool Z', 'Cloud Corp', 'AI Labs', 'Web3 Studio']}
                    description="Supportive partners who help enrich our event with diverse perspectives and resources."
                />

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="  rounded-2xl p-8 border border-[#7C3AED]/20">
                        <h3 className="text-2xl font-bold text-[#4C1D95] mb-4 font-display">
                            Become a Partner
                        </h3>
                        <p className="text-[#5B4B5C] mb-6 font-sans text-base max-w-2xl mx-auto">
                            Join us in creating an unforgettable experience for the cloud community. 
                            Your support helps empower the next generation of cloud professionals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <motion.a 
                                href="mailto:contact@awsscd.com" 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="group inline-flex items-center px-6 py-3 bg-[#7C3AED] hover:bg-[#5B21B6] text-white rounded-full font-bold font-sans tracking-wide transition-all shadow-sm shadow-[#7C3AED]/10 hover:shadow-[#7C3AED]/10"
                            >
                                <span className="mr-2">🤝</span>
                                Sponsorship Inquiry
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </motion.a>
                            <motion.a 
                                href="#"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="group inline-flex items-center px-6 py-3 bg-transparent border border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED]/10 rounded-full font-bold font-sans tracking-wide transition-all"
                            >
                                <span className="mr-2">📄</span>
                                Download Prospectus
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Sponsors;
