

const CommunityPartners = () => {
    const mainPartners = [
        'Event info', 
        'AWSCC MIMT', 
        'EventDevX', 
        'SWE IGDTUW'
    ];
    
    const mentions = [
        'EverHack', 
        'AWSCC PIET', 
        'NerdsRoom', 
        'PRAKSHA app', 
        'IEEE JSSATEN'
    ];

    return (
        <section className="py-20 bg-[#F3EDEE] border-y border-[#7C3AED]/20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-xl font-display font-semibold text-[#5B4B5C] uppercase tracking-[0.3em] mb-12">
                    Community Partners
                </h3>
                
                {/* Highlighted Top 4 */}
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-10 opacity-100 mb-12">
                    {mainPartners.map((p, i) => (
                        <div key={`main-${i}`} className="text-3xl md:text-4xl font-black font-display text-[#4C1D95] hover:text-[#7C3AED] shadow-sm bg-white/40 px-6 py-3 rounded-2xl border border-[#7C3AED]/10 transition-all duration-300 cursor-default hover:scale-110 transform">
                            {p}
                        </div>
                    ))}
                </div>

                {/* Rest / Mentions in the original design */}
                <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 opacity-70">
                    {mentions.map((p, i) => (
                        <div key={`mention-${i}`} className="text-2xl font-bold font-sans text-[#7C3AED] hover:text-[#4C1D95] transition-all duration-300 cursor-default hover:scale-105 transform">
                            {p}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommunityPartners;
