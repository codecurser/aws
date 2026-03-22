import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, MessageSquare, BookOpen, Globe, Lightbulb, Smartphone, Share2, Network, Shield, TrendingUp } from 'lucide-react';

const guidelines = [
    {
        title: "1. Purpose of the Community",
        icon: <Users className="w-6 h-6 text-violet-600" />,
        content: "The AWS Student Community Day ecosystem is built to create a collaborative, learning-driven, and growth-oriented environment for everyone involved. Our goal is to encourage knowledge sharing, innovation, and build meaningful connections while supporting continuous learning in cloud technology."
    },
    {
        title: "2. Community Culture",
        icon: <Heart className="w-6 h-6 text-red-500" />,
        content: "We aim to foster a culture that is supportive, collaborative, curious, and respectful. We value different perspectives and prioritize helping others learn and grow together rather than competing."
    },
    {
        title: "3. Communication Guidelines",
        icon: <MessageSquare className="w-6 h-6 text-blue-500" />,
        content: "Healthy communication is key. Be clear, polite, and constructive. Share ideas without dismissing others, listen actively, and keep discussions relevant. Focus on building conversations, not arguments."
    },
    {
        title: "4. Knowledge Sharing",
        icon: <BookOpen className="w-6 h-6 text-emerald-500" />,
        content: "We encourage sharing insights, resources, and experiences. Help peers solve problems, encourage beginners, and always give proper credit when sharing external content."
    },
    {
        title: "5. Inclusivity & Collaboration",
        icon: <Globe className="w-6 h-6 text-indigo-500" />,
        content: "Our community thrives on diversity. We welcome participants from all backgrounds and skill levels, promoting teamwork in workshops, discussions, and networking events."
    },
    {
        title: "6. Participation & Engagement",
        icon: <Lightbulb className="w-6 h-6 text-amber-500" />,
        content: "To get the most out of the community, attend sessions actively, ask thoughtful questions, and contribute to a positive, energetic environment during all activities."
    },
    {
        title: "7. Digital Community Etiquette",
        icon: <Smartphone className="w-6 h-6 text-slate-600" />,
        content: "On platforms like WhatsApp, Discord, and LinkedIn: stay on-topic, avoid spam or excessive self-promotion, and use professional language that respects everyone's time."
    },
    {
        title: "8. Content Sharing Guidelines",
        icon: <Share2 className="w-6 h-6 text-pink-500" />,
        content: "Ensure shared content is relevant and verified. Respect intellectual property, give credit where it's due, and avoid unsolicited promotions without permission."
    },
    {
        title: "9. Networking & Collaboration",
        icon: <Network className="w-6 h-6 text-cyan-600" />,
        content: "Build genuine connections, not just contacts. Respect others' boundaries, follow up professionally after interactions, and explore collaboration opportunities with integrity."
    },
    {
        title: "10. Community Responsibility",
        icon: <Shield className="w-6 h-6 text-orange-600" />,
        content: "Every member influences the environment. Be a positive influence, support new members, report issues responsibly, and help us maintain a welcoming and safe space."
    },
    {
        title: "11. Growth Mindset",
        icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
        content: "We believe in continuous improvement. Be open to feedback, learn from others' journeys, and encourage innovation and experimentation within the AWS ecosystem."
    }
];

const CommunityGuidelines = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, []);

    return (
        <section className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-[#fcfaff]">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -left-64 top-1/4 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[120px]" />
                <div className="absolute -right-64 bottom-1/4 w-[500px] h-[500px] bg-violet-100/40 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 text-[#7C3AED] font-semibold text-sm uppercase tracking-widest mb-4">
                        <span className="w-8 h-px bg-[#7C3AED]" />
                        AWS SCD Delhi NCR
                        <span className="w-8 h-px bg-[#7C3AED]" />
                    </span>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-[#4C1D95] mb-6">
                        Community <span className="text-emerald-600">Guidelines</span>
                    </h1>
                    <p className="text-[#5B4B5C] font-sans text-lg max-w-3xl mx-auto leading-relaxed">
                        Our guidelines ensure that AWS Student Community Day remains a collaborative, growth-oriented, and safe space for everyone to learn and connect.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {guidelines.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="bg-white p-8 rounded-3xl border border-[#7C3AED]/5 shadow-[0_4px_20px_rgba(124,58,237,0.03)] hover:shadow-xl hover:border-[#7C3AED]/10 transition-all group"
                        >
                            <div className="mb-5 bg-gray-50 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-[#7C3AED]/10 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-display font-bold text-[#4C1D95] mb-3">{item.title}</h3>
                            <p className="text-[#5B4B5C] font-sans leading-relaxed text-[15px] sm:text-base">
                                {item.content}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-block bg-white p-8 rounded-[2rem] border border-dashed border-[#7C3AED]/20 shadow-sm">
                        <p className="text-[#5B4B5C] font-sans italic text-lg">
                            "Every member contributes to the community environment. Be a positive influence and support each other."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunityGuidelines;
