import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface PersonCardProps {
    name: string;
    role: string;
    company: string;
    image?: string;
    social?: {
        linkedin?: string;
        twitter?: string;
        github?: string;
    };
    type?: 'speaker' | 'ambassador';
}

const PersonCard: React.FC<PersonCardProps> = ({ name, role, company, image, social = {}, type = 'speaker' }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className={`bg-white shadow-[0_4px_20px_rgba(124,58,237,0.05)] rounded-xl overflow-hidden border border-[#7C3AED]/20 shadow-xl ${type === 'ambassador' ? 'hover:border-india-green/50' : 'hover:border-india-saffron/50'
            } transition-colors group`}
    >
        <div className="aspect-square bg-white shadow-[0_4px_20px_rgba(124,58,237,0.05)] overflow-hidden relative">
            {/* Placeholder / Image */}
            <div className={`w-full h-full flex items-center justify-center ${image ? 'bg-[#F3EDEE]' : 'bg-gradient-to-br from-violet-400 to-purple-600'} text-white`}>
                {image ? (
                    <img src={image} alt={name} className="w-full h-full object-cover transition-all duration-500 scale-100 group-hover:scale-105" />
                ) : (
                    <span className="text-5xl font-black font-display opacity-80 uppercase tracking-wider">{name.split(' ').map(n=>n[0]).join('').slice(0, 2)}</span>
                )}
            </div>

            {/* Social Overlay */}
            <div className="absolute inset-0 bg-[#F3EDEE]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
                {social.linkedin && <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#4C1D95] hover:text-[#7C3AED] transition-colors"><Linkedin size={18} /></a>}
                {social.twitter && <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="text-[#4C1D95] hover:text-[#7C3AED] transition-colors"><Twitter size={18} /></a>}
                {social.github && <a href={social.github} target="_blank" rel="noopener noreferrer" className="text-[#4C1D95] hover:text-[#7C3AED] transition-colors"><Github size={18} /></a>}
            </div>
        </div>
        <div className="p-3 text-center">
            <h3 className="text-[17px] font-bold text-[#4C1D95] font-display mb-0.5 leading-tight">{name}</h3>
            <p className="text-[#7C3AED] text-[11px] font-bold font-sans uppercase tracking-wider">{role}</p>
            {company && <p className="text-[#5B4B5C] text-[10px] mt-1.5 font-sans leading-snug font-semibold bg-[#7C3AED]/5 rounded border border-[#7C3AED]/10 py-1 px-1.5 mx-auto w-fit">{company}</p>}
        </div>
    </motion.div>
);

export default PersonCard;
