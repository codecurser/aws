
import PersonCard from './PersonCard';

import imgPrince from '../assets/ambassadors/prince.jpg';
import imgAnjali from '../assets/ambassadors/anjali.jpg';
import imgAryan from '../assets/ambassadors/aryan goel.png';
import imgSuhani from '../assets/ambassadors/suhani.jpg';
import imgDeepanshu from '../assets/ambassadors/deepanshu.jpg';
import imgDivya from '../assets/ambassadors/divya.jpg';
import imgAman from '../assets/ambassadors/mohd aman.jpg';
import imgPrabhav from '../assets/ambassadors/prabhav varshney.jpg';

const Ambassadors = () => {
    // The new 8 Student Ambassadors
    const ambassadors: Array<{ name: string; role: string; company: string; type: 'ambassador'; image?: string; social?: { linkedin?: string } }> = [
        { name: 'Prince', role: 'Campus Ambassador', company: 'PIET', image: imgPrince, type: 'ambassador', social: { linkedin: 'https://www.linkedin.com/in/starboyprince/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BOgbFn52CQUaPkRmwm2lmKQ%3D%3D' } },
        { name: 'Anjali Talan', role: 'Campus Ambassador', company: 'Sharda University', image: imgAnjali, type: 'ambassador', social: { linkedin: 'https://www.linkedin.com/in/anjalitalan/' } },
        { name: 'Aryan Goel', role: 'Campus Ambassador', company: 'ABES Engineering College', image: imgAryan, type: 'ambassador', social: { linkedin: 'https://www.linkedin.com/in/aryannngoel' } },
        { name: 'Suhani Siddiqui', role: 'Campus Ambassador', company: 'JSS Academy of Tech Ed, Noida', image: imgSuhani, type: 'ambassador', social: { linkedin: 'https://www.linkedin.com/in/suhani-s-3aa9a21aa' } },
        { name: 'Deepanshu Saxena', role: 'Campus Ambassador', company: 'BPIT', image: imgDeepanshu, type: 'ambassador', social: { linkedin: 'https://www.linkedin.com/in/deepanshu005' } },
        { name: 'Divya Mishra', role: 'Campus Ambassador', company: 'KIET + IIT Madras (BS)', image: imgDivya, type: 'ambassador', social: { linkedin: 'https://www.linkedin.com/in/divya-mishra-b9b4b9381' } },
        { name: 'Mohammed Aman', role: 'Campus Ambassador', company: 'St. Andrews Institute of Tech', image: imgAman, type: 'ambassador', social: { linkedin: 'https://www.linkedin.com/in/mohd-aman-021261236' } },
        { name: 'Prabhav Varshney', role: 'Campus Ambassador', company: 'GL Bajaj', image: imgPrabhav, type: 'ambassador', social: { linkedin: 'https://www.linkedin.com/in/prabhav-varshney-82bb02399' } },
    ];

    return (
        <section id="ambassadors" className="py-24 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-[#4C1D95] mb-6">Top Campus <span className="text-[#7C3AED]">Ambassadors</span></h2>
                    <p className="text-[#5B4B5C] font-sans text-lg">Celebrating the leaders driving cloud adoption on campus.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
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
