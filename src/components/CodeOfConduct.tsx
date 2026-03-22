import { useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
    {
        title: "1. Respect and Inclusivity",
        content: "All participants are expected to treat each other with respect, kindness, and professionalism, regardless of background, gender, identity, experience level, or beliefs. Discrimination, harassment, or inappropriate behavior of any kind will not be tolerated."
    },
    {
        title: "2. Professional Behavior",
        content: "Maintain a professional attitude throughout the event. Disruptive behavior, offensive language, or actions that disturb sessions or participants are strictly prohibited."
    },
    {
        title: "3. Engagement and Participation",
        content: "Participants are encouraged to actively engage in sessions, workshops, and networking opportunities. Please respect speakers by allowing them to complete their sessions and ask questions only during designated Q&A segments."
    },
    {
        title: "4. Event Environment",
        content: "Help us maintain a positive environment by:\n• Keeping noise levels appropriate\n• Avoiding unnecessary disruptions\n• Maintaining cleanliness of the venue"
    },
    {
        title: "5. Safety and Security",
        content: "Participants are responsible for their personal belongings. The organizing team is not liable for any loss or damage. Follow all venue rules and safety instructions at all times."
    },
    {
        title: "6. Punctuality and Cooperation",
        content: "Attendees are expected to arrive on time and cooperate with event volunteers and organizers to ensure smooth execution of the event."
    },
    {
        title: "7. Compliance with Organizers",
        content: "All participants must follow instructions given by the event organizers, volunteers, and venue authorities. Failure to comply may result in removal from the event without prior notice."
    },
    {
        title: "8. Zero Tolerance Policy",
        content: "Any form of harassment, discrimination, or misconduct will lead to immediate action, which may include removal from the event and restriction from future AWS community events."
    },
    {
        title: "9. Digital and Online Conduct",
        content: "For online participants, respectful communication must be maintained in chats, Q&A sessions, and virtual interactions. Spamming, trolling, or inappropriate content will not be tolerated."
    },
    {
        title: "10. Reporting Issues",
        content: "If you experience or witness any violation of this code, please report it to the organizing team immediately. All concerns will be handled confidentially and seriously."
    }
];

const CodeOfConduct = () => {
    // Exact same scroll fixing logic requested for FAQ
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        });
    }, []);

    return (
        <section className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-[#fcfaff]">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -left-64 top-1/4 w-[500px] h-[500px] bg-red-200/30 rounded-full blur-[120px]" />
                <div className="absolute -right-64 bottom-1/4 w-[500px] h-[500px] bg-violet-200/40 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 text-[#7C3AED] font-semibold text-sm uppercase tracking-widest mb-4">
                        <span className="w-8 h-px bg-[#7C3AED]" />
                        AWS Student Community Day
                        <span className="w-8 h-px bg-[#7C3AED]" />
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-[#4C1D95] mb-6">
                        Code of <span className="text-heritage-red">Conduct</span>
                    </h2>
                    <p className="text-[#5B4B5C] font-sans text-lg max-w-3xl mx-auto leading-relaxed">
                        At AWS Student Community Day, we are committed to creating a safe, inclusive, and respectful environment for all attendees, speakers, partners, and volunteers. By attending this event, you agree to follow the code of conduct outlined below.
                    </p>
                </div>

                <div className="bg-white border border-[#7C3AED]/10 rounded-3xl shadow-[0_4px_20px_rgba(124,58,237,0.03)] p-8 md:p-12 mb-10">
                    <div className="space-y-12">
                        {sections.map((section, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <h3 className="text-xl md:text-2xl font-display font-bold text-[#4C1D95] mb-3">
                                    {section.title}
                               </h3>
                                <div className="text-[#5B4B5C] font-sans leading-relaxed text-[15px] sm:text-[17px]">
                                    {section.content.split('\n').map((line, i) => (
                                        <p key={i} className={line.startsWith('•') ? "pl-5 mt-1" : "mt-2"}>
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12 bg-white border border-heritage-red/10 p-8 rounded-3xl shadow-[0_4px_20px_rgba(219,39,119,0.03)] flex flex-col items-center justify-center">
                    <h3 className="text-xl font-display font-bold text-[#4C1D95] mb-2">Need to report an issue?</h3>
                    <p className="text-[#5B4B5C] mb-6 text-sm">Please report any violations to the organizing team immediately. All concerns are confidential.</p>
                    <a href="mailto:awscloudclub.sharda.university@gmail.com" className="inline-flex items-center gap-2 bg-heritage-red hover:bg-red-700 text-white px-8 py-3.5 rounded-full font-semibold transition-colors duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 transform">
                        Contact Organizers
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CodeOfConduct;
