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
            {/* Placeholder Image */}
            <div className="w-full h-full flex items-center justify-center bg-[#DFA8F0] text-[#2D1B36]">
                {image ? <img src={image} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" /> : <span className="text-4xl font-display opacity-30">?</span>}
            </div>

            {/* Social Overlay */}
            <div className="absolute inset-0 bg-[#DFA8F0]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                {social.linkedin && <a href={social.linkedin} className="text-[#4C1D95] hover:text-[#7C3AED] transition-colors"><Linkedin size={20} /></a>}
                {social.twitter && <a href={social.twitter} className="text-[#4C1D95] hover:text-[#7C3AED] transition-colors"><Twitter size={20} /></a>}
                {social.github && <a href={social.github} className="text-[#4C1D95] hover:text-[#7C3AED] transition-colors"><Github size={20} /></a>}
            </div>
        </div>
        <div className="p-4 text-center">
            <h3 className="text-xl font-bold text-[#4C1D95] font-display mb-1">{name}</h3>
            <p className="text-[#7C3AED] text-sm font-medium font-sans uppercase tracking-wider">{role}</p>
            {company && <p className="text-[#2D1B36] text-xs mt-1 font-sans">{company}</p>}
        </div>
    </motion.div>
);

export default PersonCard;
