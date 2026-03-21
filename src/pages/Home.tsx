import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import TimelinePreview from '../components/TimelinePreview';
import About from '../components/About';
import Speakers, { Team } from '../components/Speakers';
import Workshop from '../components/Workshop';
import Sponsors from '../components/Sponsors';
import CommunityPartners from '../components/CommunityPartners';
import Ambassadors from '../components/Ambassadors';
import Venue from '../components/Venue';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      // small timeout to ensure sections are rendered
      setTimeout(() => {
        const el = document.getElementById(state.scrollTo!);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <TimelinePreview />
      <About />
      <Speakers />
      <Workshop />
      <Sponsors />
      <CommunityPartners />
      <Team />
      <Ambassadors />
      <Venue />
    </>
  );
};

export default Home;


