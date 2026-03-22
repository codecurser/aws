import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

/* ─── Sponsor data ───────────────────────────────────────────────────── */
interface Sponsor {
    name: string;
    tagline: string;
    website: string;
    logoUrl: string;
    glowColor: string;   // rgba glow on hover
    borderColor: string; // border highlight on hover
}
const sponsors: Sponsor[] = [
    {
        name: 'Logitech',
        tagline: 'Hardware Partner',
        website: 'https://www.logitech.com',
        logoUrl: '/sponsors/logitech.png',
        glowColor: 'rgba(30, 64, 175, 0.15)',
        borderColor: '#1d9bf0',
    },
    {
        name: 'TruScholar',
        tagline: 'Credential Partner',
        website: 'https://truscholar.io',
        logoUrl: '/sponsors/truscholar.png',
        glowColor: 'rgba(124, 58, 237, 0.18)',
        borderColor: '#7C3AED',
    },
    {
        name: 'Pearson',
        tagline: 'Knowledge Partner',
        website: 'https://www.pearson.com',
        logoUrl: '/sponsors/pearson.png',
        glowColor: 'rgba(14, 165, 233, 0.18)',
        borderColor: '#0ea5e9',
    },
];

/* ─── 3-D Tilt Card ──────────────────────────────────────────────────── */
const SponsorCard: React.FC<{ sponsor: Sponsor; index: number }> = ({ sponsor: s, index }) => {
    const ref = useRef<HTMLAnchorElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 260, damping: 22 });
    const springY = useSpring(y, { stiffness: 260, damping: 22 });

    const rotateX = useTransform(springY, [-0.5, 0.5], ['10deg', '-10deg']);
    const rotateY = useTransform(springX, [-0.5, 0.5], ['-10deg', '10deg']);

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const rect = ref.current!.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    const handleMouseLeave = () => { x.set(0); y.set(0); };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: 900 }}
            className="w-full max-w-sm flex-1"
        >
            <motion.a
                ref={ref}
                href={s.website}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="sponsor-card group relative flex flex-col items-center justify-center text-center
                           rounded-3xl p-10 cursor-pointer overflow-hidden block"
            >
                {/* Glass background */}
                <div className="absolute inset-0 rounded-3xl bg-white/70 backdrop-blur-md border border-white/60
                                shadow-lg group-hover:shadow-2xl transition-shadow duration-500" />

                {/* Animated glow blob */}
                <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 60% 40%, ${s.glowColor} 0%, transparent 70%)` }}
                />

                {/* Shimmer border on hover */}
                <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{ boxShadow: `0 0 0 1.5px ${s.borderColor}00` }}
                    whileHover={{ boxShadow: `0 0 0 1.5px ${s.borderColor}` }}
                    transition={{ duration: 0.3 }}
                />

                {/* Sparkle dots (decorative) */}
                <span className="absolute top-5 right-6 w-1.5 h-1.5 rounded-full bg-violet-300/60 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-75 scale-0 group-hover:scale-100" />
                <span className="absolute bottom-7 left-7 w-1 h-1 rounded-full bg-sky-300/70 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-150 scale-0 group-hover:scale-100" />
                <span className="absolute top-8 left-8 w-1 h-1 rounded-full bg-purple-400/50 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 scale-0 group-hover:scale-100" />

                {/* Tagline badge */}
                <motion.span
                    initial={{ opacity: 0, y: -8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 + 0.35, duration: 0.4 }}
                    className="relative z-10 text-[10px] font-black uppercase tracking-[0.18em] px-3.5 py-1
                               rounded-full bg-violet-100 text-[#7C3AED] border border-violet-200/60 mb-8
                               group-hover:bg-violet-200/70 transition-colors duration-300"
                >
                    {s.tagline}
                </motion.span>

                {/* LOGO — big & prominent */}
                <div className="relative z-10 flex items-center justify-center w-full mb-8"
                     style={{ height: '110px' }}>
                    <motion.img
                        src={s.logoUrl}
                        alt={s.name}
                        className="object-contain w-full"
                        style={{ maxHeight: '100px', maxWidth: '240px' }}
                        initial={{ scale: 0.85, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.15 + 0.2, duration: 0.5, ease: 'easeOut' }}
                        whileHover={{ scale: 1.07 }}
                    />
                </div>

                {/* Company name */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.4, duration: 0.4 }}
                    className="relative z-10 text-lg font-bold text-[#4C1D95] tracking-wide
                               group-hover:text-[#7C3AED] transition-colors duration-300"
                >
                    {s.name}
                </motion.p>

                {/* Animated bottom shimmer bar */}
                <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] rounded-full"
                    style={{ background: `linear-gradient(90deg, transparent, ${s.borderColor}, transparent)` }}
                    initial={{ width: 0 }}
                    whileHover={{ width: '75%' }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                />
            </motion.a>
        </motion.div>
    );
};

/* ─── Section ────────────────────────────────────────────────────────── */
const Sponsors = () => (
    <section id="sponsors" className="py-28 relative overflow-hidden bg-[#F4F0F5]">

        {/* Background ambient blobs */}
        <div className="absolute inset-0 pointer-events-none">
            <motion.div
                className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-200/30 rounded-full blur-[130px]"
                animate={{ scale: [1, 1.12, 1], x: [0, 20, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-sky-200/25 rounded-full blur-[120px]"
                animate={{ scale: [1, 1.08, 1], x: [0, -16, 0] }}
                transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-100/20 rounded-full blur-[100px]"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-center mb-20"
            >
                <motion.span
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2.5 text-[#7C3AED] font-semibold text-xs uppercase tracking-[0.2em] mb-5"
                >
                    <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#7C3AED]" />
                    Our Sponsors
                    <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#7C3AED]" />
                </motion.span>

                <h2 className="text-4xl md:text-5xl font-display font-bold text-[#4C1D95] leading-tight">
                    Powered by{' '}
                    <span className="relative">
                        <span className="text-[#7C3AED]">Industry Leaders</span>
                        <motion.span
                            className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-violet-400 to-purple-300"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                        />
                    </span>
                </h2>

                <p className="text-[#5B4B5C] max-w-lg mx-auto text-base mt-5 leading-relaxed">
                    Proudly supported by organizations shaping the future of education, technology, and credentialing.
                </p>
            </motion.div>

            {/* Cards */}
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-7">
                {sponsors.map((s, i) => (
                    <SponsorCard key={s.name} sponsor={s} index={i} />
                ))}
            </div>

            {/* Divider */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-20 flex items-center gap-4"
            >
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-purple-200" />
                <span className="text-xs font-semibold text-[#7C3AED]/50 uppercase tracking-widest whitespace-nowrap">
                    Interested in sponsoring?
                </span>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-200" />
            </motion.div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-7 text-center"
            >
                <motion.a
                    href="mailto:sponsor@scddelhi.com"
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full
                               bg-[#7C3AED] text-white text-sm font-bold
                               shadow-lg shadow-violet-300/50 hover:bg-[#6D28D9] transition-colors duration-300"
                >
                    Get in Touch
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </motion.a>
            </motion.div>

        </div>
    </section>
);

export default Sponsors;
