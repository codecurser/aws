import { motion } from 'framer-motion';
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
        <div className="flex gap-4 sm:gap-6 p-4 sm:p-6 rounded-3xl border border-[#7C3AED]/30 bg-[#F3EDEE]/40 backdrop-blur-md w-fit">
            {timeBlocks.map((block, idx) => (
                <div key={idx} className="flex flex-col items-center">
                    <span className="text-[#5B4B5C] font-sans text-sm sm:text-base font-bold mb-2 sm:mb-3">{block.label}</span>
                    <div className="bg-white text-[#4C1D95] font-sans font-bold text-3xl sm:text-5xl w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center rounded-2xl shadow-sm border border-[#7C3AED]/10">
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
            {/* User Provided Background Image */}
            <div className="absolute inset-0 z-0">
                <div 
                    className="absolute inset-0 bg-cover bg-bottom bg-no-repeat opacity-90"
                    style={{
                        backgroundImage: 'url(/hero-bg.png)',
                    }}
                ></div>
                {/* Smooth fade-out at bottom into the beige color */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#F3EDEE] via-[#F3EDEE]/30 to-transparent"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full z-10 py-12 flex flex-col items-start justify-center min-h-[80vh]">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="space-y-8 max-w-3xl"
                >
                    {/* Event Date Tag */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#7C3AED]/30 bg-white/50 text-[#7C3AED] font-bold text-sm tracking-wide shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[#7C3AED] mr-2 animate-pulse"></span>
                        MARCH 27, 2026 • NEW DELHI
                    </div>

                    {/* Huge layered typography like KCD */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-[80px] sm:text-[100px] md:text-[130px] lg:text-[160px] font-sans text-white leading-[0.85] font-black tracking-tighter"
                        style={{
                            WebkitTextStroke: '2px #4C1D95',
                            textShadow: '4px 4px 0px #4C1D95',
                        }}
                    >
                        AWS SCD
                        <br />
                        <span className="text-[#4C1D95]" style={{ WebkitTextStroke: '0', textShadow: 'none' }}>Delhi</span>
                        <br />
                        2026
                    </motion.h1>

                    {/* Countdown matching request */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <Countdown />
                    </motion.div>

                </motion.div>
            </div>



        </div>
    );
};

export default Hero;