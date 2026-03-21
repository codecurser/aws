import { motion } from 'framer-motion';
import { Bot, Code2, Cloud, Users, Clock, Target, CheckCircle2, ChevronRight, LayoutTemplate, Briefcase, Linkedin } from 'lucide-react';

import imgMayank from '../assets/myank.png';
import imgVishnu from '../assets/vishnu.png';

export default function Workshop() {
  const speakers = [
    {
      name: 'Mayank Singh',
      role: 'AWS Speaker',
      image: imgMayank,
      linkedin: 'https://www.linkedin.com/in/mpsingh18/',
      color: 'from-violet-500 to-purple-600',
    },
    {
      name: 'Vishnu Vashist',
      role: 'AWS Speaker',
      image: imgVishnu,
      linkedin: 'https://www.linkedin.com/in/vishnu-vashist/',
      color: 'from-sky-500 to-blue-600',
    },
  ];

  const highlights = [
    'Introduction to AI Agents and Agentic AI',
    'Practical implementation using Python',
    'Integration with external APIs (National Weather Service API)',
    'Development of a functional Weather AI Agent',
    'Deployment using AWS cloud services',
  ];

  const technologies = [
    'Python (Core Development)',
    'REST APIs (HTTP Requests)',
    'Amazon Bedrock',
    'AWS Lambda',
    'Amazon API Gateway',
  ];

  const projectCapabilities = [
    'Retrieving real-time weather data',
    'Understanding user queries',
    'Generating context-aware responses',
    'Operating on AWS infrastructure',
  ];

  return (
    <section id="workshop" className="py-24 relative overflow-hidden border-t border-[#7C3AED]/20">
      {/* Background styling matching existing SCD theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-200/20 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-300/15 rounded-full blur-[130px]" />
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-[#7C3AED]/30 shadow-sm text-[#7C3AED] font-semibold text-sm uppercase tracking-widest mb-6">
            <Bot className="w-4 h-4" />
            Special Workshop
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#4C1D95] leading-tight max-w-4xl">
            Building Intelligent <span className="text-[#7C3AED]">AI Agents</span> Using Amazon Web Services
          </h2>
          <p className="text-[#5B4B5C] max-w-3xl text-lg mt-6 font-sans leading-relaxed">
            This hands-on workshop introduces participants to the design and development of intelligent AI agents using Amazon Web Services (AWS) and Python. Get ready to explore Agentic AI, where systems autonomously make decisions and interact with external APIs in real time!
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 border border-[#7C3AED]/25 shadow-sm text-[#4C1D95] font-semibold">
              <Clock className="w-5 h-5 text-[#7C3AED]" />
              1.5 – 2 Hours
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 border border-[#7C3AED]/25 shadow-sm text-[#4C1D95] font-semibold">
              <Users className="w-5 h-5 text-[#7C3AED]" />
              200+ Participants
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 border border-[#7C3AED]/25 shadow-sm text-[#4C1D95] font-semibold">
              <Target className="w-5 h-5 text-[#7C3AED]" />
              Students, Developers, AI Enthusiasts
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Hands-On Project Card */}
            <div className="rounded-3xl bg-white/80 backdrop-blur-md border border-[#7C3AED]/20 shadow-[0_12px_40px_rgba(124,58,237,0.08)] overflow-hidden p-8 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7C3AED]/5 rounded-bl-[100px] pointer-events-none" />
              <h3 className="text-2xl font-display font-bold text-[#4C1D95] mb-4 flex items-center gap-3">
                <LayoutTemplate className="w-6 h-6 text-[#7C3AED]" />
                Hands-On Project: Weather AI Agent
              </h3>
              <p className="text-[#5B4B5C] font-sans leading-relaxed mb-6">
                Participants will build a functional Weather AI Agent that retrieves live weather data through external APIs and processes it to generate meaningful, conversational responses to user queries. The agent will be capable of:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {projectCapabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#7C3AED]/5 rounded-xl p-4 border border-[#7C3AED]/10">
                    <CheckCircle2 className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-[#4C1D95]">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid for Highlights & Tech */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Highlights */}
              <div className="rounded-3xl bg-[#FDF8FF]/80 backdrop-blur-md border border-[#7C3AED]/15 shadow-sm p-8">
                <h3 className="text-xl font-display font-bold text-[#4C1D95] mb-5 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#7C3AED]" />
                  Key Highlights
                </h3>
                <ul className="space-y-3">
                  {highlights.map((hlt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#5B4B5C] font-sans">
                      <ChevronRight className="w-4 h-4 text-[#7C3AED] mt-0.5 flex-shrink-0" />
                      {hlt}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="rounded-3xl bg-[#FDF8FF]/80 backdrop-blur-md border border-[#7C3AED]/15 shadow-sm p-8">
                <h3 className="text-xl font-display font-bold text-[#4C1D95] mb-5 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-[#7C3AED]" />
                  Technologies Covered
                </h3>
                <ul className="space-y-3">
                  {technologies.map((tech, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#5B4B5C] font-sans">
                      <Cloud className="w-4 h-4 text-[#7C3AED] mt-0.5 flex-shrink-0" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Speakers Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:mt-0 mt-4"
          >
            <h3 className="text-xl font-display font-bold text-[#4C1D95] pl-2 uppercase tracking-wide">
              Workshop Speakers
            </h3>
            
            {speakers.map((spk, idx) => (
              <div key={idx} className="group relative rounded-3xl overflow-hidden shadow-lg border border-[#7C3AED]/20 h-auto sm:h-80 lg:h-72">
                <img
                  src={spk.image}
                  alt={spk.name}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <a
                  href={spk.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-[#0077B5] hover:border-[#0077B5] transition-all duration-300 shadow-lg"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <div className="absolute bottom-0 left-0 right-0 z-10 p-6 flex flex-col justify-end">
                  <span className={`inline-flex items-center w-max px-3 py-1 mb-2 rounded-full text-[10px] uppercase font-bold tracking-wider text-white bg-gradient-to-r ${spk.color}`}>
                    {spk.role}
                  </span>
                  <p className="text-white font-display font-bold text-2xl leading-tight drop-shadow-md">
                    {spk.name}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
