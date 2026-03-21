import { motion } from 'framer-motion';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TimelinePreview = () => {
  return (
    <section className="py-8 sm:py-10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -right-10 top-0 w-40 h-40 bg-sunset-purple/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-white/85 backdrop-blur-md border border-[#7C3AED]/20 shadow-[0_6px_24px_rgba(124,58,237,0.16)] px-4 py-3 sm:px-6 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover-lift"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED] shadow-inner">
              <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-sans text-[#7C3AED] font-semibold tracking-wide uppercase">
                Event Timeline
              </p>
              <p className="text-sm sm:text-base font-sans text-[#5B4B5C]">
                Full-day flow from <span className="font-semibold text-[#4C1D95]">8:45 AM</span> to{' '}
                <span className="font-semibold text-[#4C1D95]">5:00 PM</span>.
              </p>
            </div>
          </div>

          <Link
            to="/timeline"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#7C3AED] text-white text-sm font-semibold shadow-md hover:shadow-[0_10px_24px_rgba(124,58,237,0.5)] hover:translate-y-[-1px] transition-all"
          >
            View full timeline
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelinePreview;

