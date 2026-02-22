
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Speakers, { Team } from './components/Speakers';
import Sponsors from './components/Sponsors';
import Ambassadors from './components/Ambassadors';
import CommunityPartners from './components/CommunityPartners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#F3EDEE] min-h-screen text-[#4C1D95] font-sans selection:bg-sunset-purple selection:text-[#4C1D95]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Speakers />
        <Sponsors />
        <CommunityPartners />
        <Team />
        <Ambassadors />
      </main>
      <Footer />
    </div>
  );
}

export default App;
