
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TimelinePage from './pages/TimelinePage';

function App() {
  return (
    <div className="bg-[#F3EDEE] min-h-screen text-[#4C1D95] font-sans selection:bg-sunset-purple selection:text-[#4C1D95]">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<TimelinePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
