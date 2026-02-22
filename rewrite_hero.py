import codecs

new_hero = """
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, minutes: 0, seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('2026-03-27T00:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const timeBlocks = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds }
    ];

    return (
        <div className="flex gap-3 sm:gap-6 p-4 sm:p-6 rounded-3xl border border-[#7C3AED]/20 bg-white/50 backdrop-blur-md w-fit">
            {timeBlocks.map((block, idx) => (
                <div key={idx} className="flex flex-col items-center">
                    <span className="text-[#5B4B5C] font-sans text-xs sm:text-sm font-bold mb-2 sm:mb-3">{block.label}</span>
                    <div className="bg-white text-[#4C1D95] font-display font-bold text-3xl sm:text-4xl w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl shadow-[0_4px_20px_rgba(124,58,237,0.05)] border border-[#7C3AED]/10">
                        {block.value.toString().padStart(2, '0')}
                    </div>
                </div>
            ))}
        </div>
    );
};

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center overflow-hidden pt-16 group bg-[#F3EDEE]">
            {/* Enhanced Banner Background with Multiple Layers - Reduced Opacity */}
            <div className="absolute inset-0">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-[3s] ease-in-out group-hover:scale-105"
                    style={{
                        backgroundImage: 'url(/banner.jpg)',
                        filter: 'blur(2px)',
                        opacity: 0.1,
                        transform: 'scale(1.05)'
                    }}
                ></div>
                
                {/* Radial gradient vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(243,237,238,0.7)_50%,rgba(243,237,238,1)_100%)]"></div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#7C3AED]/30 rounded-full animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-[#5B21B6]/30 rounded-full animate-pulse delay-75"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full z-10 py-12 flex items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="space-y-10 max-w-3xl"
                >

                    {/* Huge text left aligned */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-6xl sm:text-7xl md:text-8xl lg:text-[140px] font-display text-[#4C1D95] leading-[0.95] font-bold tracking-tight"
                    >
                        AWS SCD
                        <br />
                        <span className="text-[#7C3AED]">Delhi</span>
                        <br />
                        2026
                    </motion.h1>

                    {/* Countdown */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <Countdown />
                    </motion.div>

                    {/* Event Details */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-4"
                    >
                        <div className="flex items-center text-[#5B4B5C] font-sans font-medium text-lg">
                            <Calendar className="w-5 h-5 text-[#7C3AED] mr-3" />
                            March 27, 2026
                        </div>
                        <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#7C3AED]/30"></div>
                        <div className="flex items-center text-[#5B4B5C] font-sans font-medium text-lg">
                            <MapPin className="w-5 h-5 text-[#7C3AED] mr-3" />
                            Sharda University
                        </div>
                    </motion.div>

                    {/* CTA buttons */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 pt-2"
                    >
                        <motion.a
                            href="#tickets"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative px-8 py-4 bg-[#7C3AED] hover:bg-[#5B21B6] text-white rounded-xl font-bold text-lg shadow-sm shadow-[#7C3AED]/10 transition-all duration-300 w-fit"
                        >
                            <span className="flex items-center justify-center">
                                Secure Spot
                                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </motion.a>
                        <motion.a
                            href="#about"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 bg-transparent hover:bg-[#7C3AED]/5 text-[#7C3AED] rounded-xl font-bold text-lg transition-all duration-300 border border-[#7C3AED]/30 shadow-sm w-fit flex justify-center items-center"
                        >
                            Learn More
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Skyline Silhouette (Minimal Version) */}
            <div className="absolute bottom-0 right-0 w-1/2 md:w-1/3 z-0 opacity-[0.03] pointer-events-none">
                <img src="/assets/pattern.svg" alt="Pattern" className="w-full h-auto object-cover" />
            </div>
            
            <div className="absolute bottom-0 left-0 w-full z-10 h-32 bg-gradient-to-t from-[#F3EDEE] to-transparent pointer-events-none"></div>
        </div>
    );
};

export default Hero;
"""

with codecs.open("src/components/Hero.tsx", "w", "utf-8") as f:
    f.write(new_hero.strip() + "\\n")
