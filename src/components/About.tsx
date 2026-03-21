
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Mic, Clock, Star, Sparkles, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const slideImages = [
    { src: '/logo.png',     alt: 'AWS Student Community Day Delhi NCR', fit: 'contain' },
    { src: '/sharda.jpeg',  alt: 'Sharda University',                   fit: 'cover'   },
];

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);
    const [counters, setCounters] = useState({
        attendees: 0,
        speakers: 0,
        hours: 0,
        workshops: 0
    });

    // Auto-cycle slides every 3 s
    useEffect(() => {
        const timer = setInterval(() => {
            setSlideIndex(prev => (prev + 1) % slideImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const stats = [
        { icon: Users, label: 'Attendees', value: '800+', target: 800 },
        { icon: Mic, label: 'Speakers', value: '10+', target: 10 },
        { icon: Clock, label: 'Hours of Content', value: '8+', target: 8 },
        { icon: Star, label: 'Workshops', value: '1+', target: 1 },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.3, // Trigger when 30% of the element is visible
                rootMargin: '0px'
            }
        );

        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            observer.observe(aboutSection);
        }

        return () => {
            if (aboutSection) {
                observer.unobserve(aboutSection);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        
        const duration = 2000; // 2 seconds for animation
        const steps = 60; // 60 frames for smooth animation
        const increment = {
            attendees: 800 / steps,
            speakers: 10 / steps,
            hours: 8 / steps,
            workshops: 1 / steps
        };
        
        let currentStep = 0;
        const interval = setInterval(() => {
            if (currentStep <= steps) {
                setCounters(() => ({
                    attendees: Math.min(Math.floor(increment.attendees * currentStep), 800),
                    speakers: Math.min(Math.floor(increment.speakers * currentStep), 10),
                    hours: Math.min(Math.floor(increment.hours * currentStep), 8),
                    workshops: Math.min(Math.floor(increment.workshops * currentStep), 1)
                }));
                currentStep++;
            } else {
                clearInterval(interval);
            }
        }, duration / steps);
        
        return () => clearInterval(interval);
    }, [isVisible]);

    return (
        <section id="about" className="py-24  relative overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96  rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96  rounded-full blur-[100px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]  rounded-full blur-3xl"></div>
                
                {/* Animated grid pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 mb-6">
                        <Sparkles className="w-6 h-6 text-[#7C3AED]" />
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-[#4C1D95]">
                            What is <span className=" text-[#7C3AED]">AWS SCD?</span>
                        </h2>
                        <Sparkles className="w-6 h-6 text-[#7C3AED]" />
                    </div>
                    <div className="w-32 h-1.5  mx-auto rounded-full"></div>
                    <p className="text-[#5B4B5C] max-w-3xl mx-auto text-lg mt-6 font-sans leading-relaxed">
                        AWS Cloud Club Sharda University is a student-run AWS community helping peers learn cloud, DevOps, AI/ML and security through hands-on events. 
                        Our Student Community Day brings that energy into one day focused on inclusive, career-ready cloud learning.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-[#5B4B5C] space-y-8 text-lg leading-relaxed font-sans"
                    >
                        <div className="relative group">
                            <div className="absolute -left-4 top-0 w-1 h-full  rounded-full"></div>
                            <p className="pl-8 group-hover:translate-x-2 transition-transform">
                                <strong className="text-[#4C1D95] text-xl">AWS Cloud Club @ Sharda University</strong> is a student-led technical community that makes cloud education more accessible, inclusive and hands-on.
                            </p>
                        </div>
                        <div className="  p-6 rounded-2xl border border-[#7C3AED]/20 hover-lift">
                            <div className="flex items-center gap-3 mb-3">
                                <Zap className="w-5 h-5 text-[#7C3AED]" />
                                <span className="font-semibold text-[#4C1D95]">AWS Cloud Club Sharda University</span>
                            </div>
                            <p>
                                We run workshops, hands-on labs, bootcamps, hackathons and real projects so students can practice AWS, cloud architecture, DevOps, AI/ML and security beyond classroom theory.
                            </p>
                        </div>
                        <div className="  p-6 rounded-2xl border border-[#7C3AED]/20 hover-lift">
                            <div className="flex items-center gap-3 mb-3">
                                <Sparkles className="w-5 h-5 text-[#7C3AED]" />
                                <span className="font-semibold text-[#4C1D95]">AWS Cloud Club Student Community Day</span>
                            </div>
                            <p>
                                A one-day, student-led cloud learning event with keynotes, technical workshops, hands-on labs, mentorship and networking—open to both club members and non-members, built to bridge the cloud skills gap with a “Diversity is Cloud Accessibility” mindset.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm mt-2">
                            <span className="text-[#5B4B5C] font-sans">
                                Stay connected with upcoming meetups and activities.
                            </span>
                            <a
                                href="https://www.meetup.com/aws-cloud-club-at-sharda-university/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center px-4 py-2 rounded-full bg-[#7C3AED] text-white font-semibold text-xs shadow-sm hover:bg-[#5B21B6] transition-colors"
                            >
                                Join us on Meetup
                            </a>
                        </div>
                    </motion.div>

                    {/* Enhanced Event Showcase */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0  rounded-3xl rotate-3 opacity-60 blur-xl group-hover:opacity-80 transition-all duration-500"></div>
                        <div className="relative   rounded-3xl border border-[#7C3AED]/20 h-72 md:h-96 flex items-center justify-center overflow-hidden hover:border-sunset-purple/50 transition-all duration-500">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(139,92,246,0.1)_100%)]"></div>
                            {/* Auto-cycling image slideshow */}
                            <div className="relative w-full h-full">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={slideIndex}
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        {slideImages[slideIndex].fit === 'contain' ? (
                                            <motion.img
                                                src={slideImages[slideIndex].src}
                                                alt={slideImages[slideIndex].alt}
                                                className="object-contain drop-shadow-xl p-8"
                                                style={{ maxHeight: '220px', maxWidth: '90%' }}
                                                animate={{ y: [0, -10, 0] }}
                                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                            />
                                        ) : (
                                            <img
                                                src={slideImages[slideIndex].src}
                                                alt={slideImages[slideIndex].alt}
                                                className="w-full h-full object-cover rounded-3xl"
                                            />
                                        )}
                                    </motion.div>
                                </AnimatePresence>

                                {/* Dot indicators */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                    {slideImages.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSlideIndex(i)}
                                            className={`h-2 rounded-full transition-all duration-300 ${
                                                i === slideIndex
                                                    ? 'bg-[#7C3AED] w-5'
                                                    : 'bg-[#7C3AED]/30 w-2'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Enhanced Stats Grid with Animated Counters */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -8, scale: 1.05 }}
                            className="bg-white  shadow-[0_4px_20px_rgba(124,58,237,0.15)] p-6 rounded-2xl border border-[#7C3AED]/20 text-center hover:border-sunset-purple/50 hover:bg-gradient-to-br hover:from-sunset-purple/20 hover:to-sunset-pink/20 transition-all duration-300 hover-lift group"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full  flex items-center justify-center border border-[#7C3AED]/20 shadow-lg group-hover:scale-110 transition-transform">
                                <stat.icon className="w-8 h-8 text-[#7C3AED]" />
                            </div>
                            <div className="text-4xl font-display font-bold text-[#4C1D95] mb-2 group-hover:text-[#7C3AED] transition-colors">
                                <span className="inline-block min-w-[3ch] text-right">
                                    {index === 0 ? counters.attendees : 
                                     index === 1 ? counters.speakers : 
                                     index === 2 ? counters.hours : 
                                     counters.workshops}
                                </span>
                                {stat.value.includes('+') && '+'}
                            </div>
                            <div className="text-[#5B4B5C] font-medium font-sans uppercase tracking-widest text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
