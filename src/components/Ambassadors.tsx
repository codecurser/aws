
import PersonCard from './PersonCard';

const Ambassadors = () => {
    const ambassadors: Array<{ name: string; role: string; company: string; type: 'ambassador' }> = [
        { name: 'Student A', role: 'Campus Ambassador', company: 'IIT Delhi', type: 'ambassador' },
        { name: 'Student B', role: 'Campus Ambassador', company: 'DTU', type: 'ambassador' },
        { name: 'Student C', role: 'Campus Ambassador', company: 'NSUT', type: 'ambassador' },
        { name: 'Student D', role: 'Campus Ambassador', company: 'IGDTUW', type: 'ambassador' },
    ];

    return (
        <section id="ambassadors" className="py-24 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-[#4C1D95] mb-6">Top Campus <span className="text-[#7C3AED]">Ambassadors</span></h2>
                    <p className="text-[#2D1B36] font-sans text-lg">Celebrating the leaders driving cloud adoption on campus.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {ambassadors.map((a, i) => <PersonCard key={i} {...a} />)}
                </div>

                <div className="text-center mt-12">
                    <a href="#" className="font-display text-lg text-[#7C3AED] hover:text-[#4C1D95] transition-colors border-b-2 border-marigold hover:border-white pb-1">View Leaderboard</a>
                </div>
            </div>
        </section>
    );
};

export default Ambassadors;
