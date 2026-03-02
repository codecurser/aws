import { useState, useEffect } from 'react';
import { Menu, X, Ticket } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false); // scrolling down & past 50px
            } else {
                setIsVisible(true); // scrolling up
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Speakers', href: '#speakers' },
        { name: 'Sponsors', href: '#sponsors' },
        { name: 'Team', href: '#team' },
    ];

    const handleSectionNav = (href: string) => {
        const isHash = href.startsWith('#');
        if (!isHash) return;

        const targetId = href.slice(1);

        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: targetId } });
            return;
        }

        const el = document.getElementById(targetId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className={`fixed w-full z-50 bg-[#DFA8F0] border-b border-[#7C3AED]/20 shadow-sm transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 flex items-center group cursor-pointer">
                        {/* New Logo Image */}
                        <img 
                            src="/logo.png" 
                            alt="AWS SCD Logo" 
                            className="h-12 w-auto mr-3 group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="flex flex-col">
                            <span className="text-2xl font-display font-bold text-[#4C1D95] leading-none">
                                AWS SCD
                            </span>
                            <span className="text-[#2D1B36] text-[10px] tracking-[0.2em] uppercase mt-1 group-hover:text-[#7C3AED] transition-colors">Delhi NCR</span>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleSectionNav(link.href);
                                    }}
                                    className="relative text-[#2D1B36] hover:text-[#4C1D95] px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group overflow-hidden hover:bg-[#7C3AED]/10"
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7C3AED] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                            <a
                                href="https://konfhub.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-[#7C3AED] hover:bg-[#5B21B6] text-white px-6 py-3 rounded-full text-sm font-bold shadow-sm shadow-[#7C3AED]/10 transition-all duration-300 hover:scale-105 hover:shadow-[#7C3AED]/10 flex items-center"
                            >
                                <Ticket className="w-4 h-4 mr-2" />
                                Get Tickets
                            </a>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-[#7C3AED] hover:bg-[#7C3AED]/10 focus:outline-none border border-[#7C3AED] transition-all duration-300"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-[#DFA8F0]  border-b border-sunset-purple/30">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[#2D1B36] hover:text-[#7C3AED] hover:bg-[#7C3AED]/10 block px-4 py-3 rounded-lg text-base font-medium font-display tracking-wide transition-all duration-300"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSectionNav(link.href);
                                    setIsOpen(false);
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#"
                            className="bg-[#7C3AED] hover:bg-[#5B21B6] text-white block px-4 py-3 rounded-lg text-base font-bold text-center mt-4 mx-2 shadow-sm shadow-[#7C3AED]/10 transition-all duration-300 hover:scale-105"
                        >
                            Get Tickets
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
