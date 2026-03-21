
import { Instagram, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#F3EDEE] border-t border-[#7C3AED]/20 pt-20 pb-10 relative overflow-hidden">
            {/* Footer Decor */}
            <div className="absolute top-0 left-0 w-full h-1 "></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-heritage-red/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center mb-6">
                            <img 
                                src="/logo.png" 
                                alt="AWS SCD Logo" 
                                className="h-10 w-auto mr-3"
                            />
                            <span className="text-3xl font-display font-bold text-[#4C1D95]">
                                AWS SCD
                            </span>
                        </div>
                        <p className="text-[#5B4B5C] text-sm leading-relaxed mb-6">
                            The premier student-led cloud conference in Delhi NCR.
                            Bridging the gap between campus learning and industry cloud native innovation.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://x.com/awscloudclubsu" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white shadow-[0_4px_20px_rgba(124,58,237,0.05)] flex items-center justify-center text-[#5B4B5C] hover:bg-india-saffron hover:text-[#4C1D95] transition-all transform hover:-translate-y-1"><Twitter size={18} /></a>
                            <a href="https://www.linkedin.com/company/aws-cloud-club-sharda-university/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white shadow-[0_4px_20px_rgba(124,58,237,0.05)] flex items-center justify-center text-[#5B4B5C] hover:bg-india-blue hover:text-[#4C1D95] transition-all transform hover:-translate-y-1"><Linkedin size={18} /></a>
                            <a href="https://www.instagram.com/aws_cloud_club_su?igsh=bjBvM252a2NxZXpv" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white shadow-[0_4px_20px_rgba(124,58,237,0.05)] flex items-center justify-center text-[#5B4B5C] hover:bg-rani-pink hover:text-[#4C1D95] transition-all transform hover:-translate-y-1"><Instagram size={18} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[#4C1D95] font-bold mb-6 font-display text-lg border-b border-[#7C3AED]/20 pb-2 inline-block">Explore</h4>
                        <ul className="space-y-3 text-sm text-[#5B4B5C]">
                            <li><a href="#about" className="hover:text-[#7C3AED] transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-india-saffron rounded-full mr-2 opacity-0 hover:opacity-100"></span>About</a></li>
                            <li><a href="#speakers" className="hover:text-[#7C3AED] transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-india-saffron rounded-full mr-2 opacity-0 hover:opacity-100"></span>Speakers</a></li>
                            <li><a href="#sponsors" className="hover:text-[#7C3AED] transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-india-saffron rounded-full mr-2 opacity-0 hover:opacity-100"></span>Sponsors</a></li>
                            <li><a href="#team" className="hover:text-[#7C3AED] transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-india-saffron rounded-full mr-2 opacity-0 hover:opacity-100"></span>Team</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[#4C1D95] font-bold mb-6 font-display text-lg border-b border-[#7C3AED]/20 pb-2 inline-block">Resources</h4>
                        <ul className="space-y-3 text-sm text-[#5B4B5C]">
                            <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Code of Conduct</a></li>
                            <li><a href="#" className="hover:text-[#7C3AED] transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Sponsorship Deck</a></li>
                            <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Community Guidelines</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[#4C1D95] font-bold mb-6 font-display text-lg border-b border-[#7C3AED]/20 pb-2 inline-block">Contact</h4>
                        <p className="text-[#5B4B5C] text-sm mb-4">
                            Questions? We're here to help.
                        </p>
                        <a href="mailto:awscloudclub.sharda.university@gmail.com" className="flex items-center text-[#4C1D95] hover:text-[#7C3AED] transition-colors group break-words">
                            <Mail size={18} className="mr-2 flex-shrink-0 group-hover:animate-bounce" />
                            <span className="break-all text-xs lg:text-sm">awscloudclub.sharda.university@gmail.com</span>
                        </a>
                    </div>
                </div>

                <div className="border-t border-[#7C3AED]/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#5B4B5C]">
                    <p>&copy; 2026 AWS Student Community Day Delhi NCR.</p>
                    <p className="flex items-center mt-4 md:mt-0">
                        Made with <Heart size={14} className="text-heritage-red mx-1 fill-heritage-red" /> in <span className="text-[#7C3AED] ml-1 font-bold">Bharat</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
