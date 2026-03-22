
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TimelinePage from './pages/TimelinePage';
import FAQ from './components/FAQ';
import CodeOfConduct from './components/CodeOfConduct';
import SponsorshipDeck from './components/SponsorshipDeck';
import CommunityGuidelines from './components/CommunityGuidelines';

function App() {
  return (
    <div className="bg-[#F3EDEE] min-h-screen text-[#4C1D95] font-sans selection:bg-sunset-purple selection:text-[#4C1D95]">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/sponsorship-deck" element={<SponsorshipDeck />} />
          <Route path="/community-guidelines" element={<CommunityGuidelines />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
