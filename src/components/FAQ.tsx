import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: React.ReactNode;
}

const faqs: FAQItem[] = [
    {
        question: "What is AWS Cloud Club Student Community Day?",
        answer: "A one-day, student-led tech summit bringing together AWS learning, cloud innovation, and career development through hands-on workshops, expert talks, and networking experiences."
    },
    {
        question: "When and where will the event take place?",
        answer: "The AWS Cloud Club Student Community Day Delhi-NCR 2026 will be held on 27th March 2026, from 8:45 AM to 5:00 PM. Venue: Anand Swaroop Auditorium, Block 45"
    },
    {
        question: "What can I expect from the event?",
        answer: (
            <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Keynote sessions</li>
                <li>Technical talks</li>
                <li>Hands-on workshops</li>
                <li>Panel discussions</li>
                <li>Networking opportunities</li>
                <li>Career guidance</li>
            </ul>
        )
    },
    {
        question: "Do I need to carry any ID proof?",
        answer: "Yes, a valid government or college ID is required for entry."
    },
    {
        question: "Will I receive a certificate?",
        answer: "Yes, participation certificates will be distributed during the closing ceremony."
    },
    {
        question: "Will food be provided during the event?",
        answer: (
            <>
                Yes, food and refreshments will be provided for participants throughout the event. This includes:
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm sm:text-base">
                    <li>Light snacks during breaks</li>
                    <li>Lunch during the scheduled lunch break (1:25 PM – 2:30 PM)</li>
                </ul>
            </>
        )
    },
    {
        question: "Will there be networking opportunities?",
        answer: "Yes, dedicated networking sessions and mentorship interactions are included."
    },
    {
        question: "Is prior AWS or coding experience required?",
        answer: "No, the event is designed for all skill levels, including beginners, intermediate learners, and advanced participants."
    },
    {
        question: "Can I interact with speakers and mentors?",
        answer: "Yes, there will be Q&A sessions, networking breaks, and panel discussions where you can directly interact with industry experts."
    },
    {
        question: "Where can I get event updates?",
        answer: (
            <>
                Updates will be shared via:
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm sm:text-base">
                    <li>Official AWS Cloud Club channels</li>
                    <li>LinkedIn page</li>
                    <li>Email notifications</li>
                </ul>
            </>
        )
    }
];

const FAQBlock = ({ faq, index }: { faq: FAQItem, index: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="mb-4"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full text-left px-6 py-5 rounded-2xl flex items-center justify-between transition-all duration-300 border ${
                    isOpen 
                        ? 'bg-[#7C3AED]/5 border-[#7C3AED]/30 shadow-md' 
                        : 'bg-white border-[#7C3AED]/10 shadow-[0_4px_20px_rgba(124,58,237,0.03)] hover:shadow-[0_4px_20px_rgba(124,58,237,0.08)] hover:border-[#7C3AED]/20'
                }`}
            >
                <span className={`font-display font-semibold text-[15px] sm:text-[17px] pr-4 ${isOpen ? 'text-[#4C1D95]' : 'text-[#5B4B5C]'}`}>
                    {index + 1}. {faq.question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 p-1.5 rounded-full ${isOpen ? 'bg-[#7C3AED] text-white' : 'bg-[#F3EDEE] text-[#5B4B5C]'}`}
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </button>
            
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-5 pt-3 text-[#5B4B5C] font-sans leading-relaxed text-[15px] sm:text-base">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    // Reset window scroll to the absolute top smoothly upon navigating to this standalone page
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto' // Instant snap looks cleaner for page transitions
        });
    }, []);

    return (
        <section id="faq" className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-[#fcfaff]">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -left-64 top-1/4 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[120px]" />
                <div className="absolute -right-64 bottom-1/4 w-[500px] h-[500px] bg-violet-200/40 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-14">
                    <span className="inline-flex items-center gap-2 text-[#7C3AED] font-semibold text-sm uppercase tracking-widest mb-4">
                        <span className="w-8 h-px bg-[#7C3AED]" />
                        Got Questions?
                        <span className="w-8 h-px bg-[#7C3AED]" />
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-[#4C1D95] mb-5">
                        Frequently Asked <span className="text-[#7C3AED]">Questions</span>
                    </h2>
                    <p className="text-[#5B4B5C] font-sans text-lg max-w-2xl mx-auto">
                        Everything you need to know about the AWS Cloud Club Student Community Day.
                    </p>
                </div>

                <div className="mx-auto mt-8">
                    {faqs.map((faq, index) => (
                        <FAQBlock key={index} faq={faq} index={index} />
                    ))}
                </div>
                
                <div className="text-center mt-12 bg-white border border-[#7C3AED]/10 p-8 rounded-3xl shadow-[0_4px_20px_rgba(124,58,237,0.03)] flex flex-col items-center justify-center">
                    <h3 className="text-xl font-display font-bold text-[#4C1D95] mb-2">Still have questions?</h3>
                    <p className="text-[#5B4B5C] mb-6 text-sm">We're here to help! Reach out to our organizing team.</p>
                    <a href="mailto:awscloudclub.sharda.university@gmail.com" className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#4C1D95] text-white px-8 py-3.5 rounded-full font-semibold transition-colors duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 transform">
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
