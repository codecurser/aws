import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Users, BarChart, Zap, Shield, Crown, Award, Coffee, Ticket, Globe } from 'lucide-react';

const stats = [
    { city: "Chennai", count: "600+" },
    { city: "Indore", count: "600+" },
    { city: "Pune", count: "650+" },
    { city: "Trivandrum", count: "400+" },
    { city: "Nepal", count: "3,800+" },
];

const tiers = [
    { name: "Platinum", price: "₹1,50,000", icon: <Crown className="w-6 h-6" />, color: "from-blue-100 to-blue-50 border-blue-200 text-blue-700" },
    { name: "Gold", price: "₹1,20,000", icon: <Award className="w-6 h-6" />, color: "from-amber-100 to-amber-50 border-amber-200 text-amber-700" },
    { name: "Silver", price: "₹80,000", icon: <Award className="w-6 h-6" />, color: "from-slate-200 to-slate-50 border-slate-300 text-slate-700" },
    { name: "Bronze", price: "₹50,000", icon: <Award className="w-6 h-6" />, color: "from-orange-100 to-orange-50 border-orange-200 text-orange-700" },
];

const addOns = [
    { item: "Workshop Sponsorship", price: "₹30,000", icon: <Zap className="w-5 h-5 text-violet-600" /> },
    { item: "Lanyard Sponsorship", price: "₹18,000", icon: <Ticket className="w-5 h-5 text-pink-600" /> },
    { item: "Coffee Break Sponsorship", price: "₹25,000", icon: <Coffee className="w-5 h-5 text-amber-600" /> },
];

const SponsorshipDeck = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, []);

    return (
        <section className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-[#fcfaff]">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -left-64 top-1/4 w-[500px] h-[500px] bg-violet-200/40 rounded-full blur-[120px]" />
                <div className="absolute -right-64 bottom-1/4 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Hero section */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-[#7C3AED]/10 text-[#7C3AED] px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6"
                    >
                        <Globe className="w-4 h-4" /> SCD Delhi NCR 2026
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-[#4C1D95] mb-8">
                        Sponsorship <span className="text-[#7C3AED]">Opportunities</span>
                    </h1>
                    <p className="text-[#5B4B5C] font-sans text-xl max-w-3xl mx-auto leading-relaxed">
                        Partner with the flagship student-led cloud conference. Engage with 1000+ developers, students, and industry leaders at the heart of Delhi NCR.
                    </p>
                </div>

                {/* Impact section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(124,58,237,0.08)] border border-[#7C3AED]/10"
                    >
                        <div className="bg-[#7C3AED]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                            <Rocket className="w-8 h-8 text-[#7C3AED]" />
                        </div>
                        <h2 className="text-3xl font-display font-bold text-[#4C1D95] mb-6">Our Impact</h2>
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, i) => (
                                <div key={i} className="group">
                                    <p className="text-3xl font-display font-bold text-[#7C3AED] group-hover:scale-110 transition-transform origin-left">{stat.count}</p>
                                    <p className="text-[#5B4B5C] font-semibold text-sm uppercase tracking-wider">{stat.city}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    
                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-md border border-[#7C3AED]/10 flex items-center justify-center">
                                <Users className="w-6 h-6 text-[#7C3AED]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-display font-bold text-[#4C1D95] mb-2">Audience Profile</h3>
                                <p className="text-[#5B4B5C]">Leading university students, software engineers, AI/ML enthusiasts, and startup founders.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-md border border-[#7C3AED]/10 flex items-center justify-center">
                                <Target className="w-6 h-6 text-[#7C3AED]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-display font-bold text-[#4C1D95] mb-2">Expected Reach</h3>
                                <p className="text-[#5B4B5C]">Targeting 800–1000+ attendees and 30+ tech communities across the Delhi NCR region.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-md border border-[#7C3AED]/10 flex items-center justify-center">
                                <Zap className="w-6 h-6 text-[#7C3AED]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-display font-bold text-[#4C1D95] mb-2">Brand Visibility</h3>
                                <p className="text-[#5B4B5C]">Multi-channel promotions through social media, on-ground booths, and post-event recognition.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tiers section */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-[#4C1D95] mb-4">Sponsorship Tiers</h2>
                        <p className="text-[#5B4B5C]">Select a partnership level that best aligns with your goals.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {tiers.map((tier, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className={`p-8 rounded-3xl border-2 flex flex-col items-center text-center bg-gradient-to-b ${tier.color} transition-transform hover:-translate-y-2`}
                            >
                                <div className="mb-4">{tier.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                                <p className="text-2xl font-display font-black">{tier.price}</p>
                                <span className="text-[10px] mt-2 opacity-60 uppercase font-black tracking-widest">Investment</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Silver focus & Add-ons */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                    <div className="lg:col-span-2">
                        <div className="bg-[#4C1D95] text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Shield className="w-32 h-32" />
                            </div>
                            <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-3">
                                <Award className="text-slate-300 w-8 h-8" />
                                Silver Sponsorship <span className="text-slate-300">₹80,000</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                                <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-slate-300 rounded-full" /> Exhibit booth space</div>
                                <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-slate-300 rounded-full" /> Logo on website/materials</div>
                                <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-slate-300 rounded-full" /> 5 complimentary passes</div>
                                <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-slate-300 rounded-full" /> Workshop opportunity</div>
                                <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-slate-300 rounded-full" /> Logo on attendee badges</div>
                                <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-slate-300 rounded-full" /> Half-page booklet ad</div>
                            </div>
                            <p className="mt-8 text-white/60 text-xs italic">* Prices exclude 18% GST</p>
                        </div>
                    </div>
                    
                    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-[#7C3AED]/10 border-dashed">
                        <h3 className="text-xl font-display font-bold text-[#4C1D95] mb-6">Add-on Options</h3>
                        <div className="space-y-6">
                            {addOns.map((addon, i) => (
                                <div key={i} className="flex justify-between items-center border-b border-[#7C3AED]/5 pb-4 last:border-0">
                                    <div className="flex items-center gap-3">
                                        {addon.icon}
                                        <span className="text-sm font-bold text-[#5B4B5C]">{addon.item}</span>
                                    </div>
                                    <span className="text-sm font-black text-[#7C3AED]">{addon.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center bg-white border border-[#7C3AED]/10 p-12 rounded-[3rem] shadow-lg">
                    <h2 className="text-3xl font-display font-bold text-[#4C1D95] mb-4">Partner With Us</h2>
                    <p className="text-[#5B4B5C] mb-8 text-lg">Position your brand as a technology leader in the AWS ecosystem.</p>
                    <a href="mailto:awscloudclub.sharda.university@gmail.com" className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#4C1D95] text-white px-10 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl">
                        Request Full Prospectus
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SponsorshipDeck;
