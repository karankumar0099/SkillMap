import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Hero/Home';
import Skills from './Pages/Skills/Skills';
import SkillInput from './Pages/Skillinput/SkillInput';
import OfficialRoadmaps from './Pages/OfficialRoadmaps/OfficialRoadmaps';
import Roadmap from './Components/Roadmap/Roadmap';
import StepDetail from './Pages/Steps/StepDetail';
import Contact from './Pages/Contact/Contact';
import AiTutor from './Pages/AiTutor/AiTutor';
import RoadmapChatSelection from './Pages/RoadmapChatSelection/RoadmapChatSelection';
import Portfolio from './Pages/Portfolio/Portfolio';

const PageWrapper = ({ children }) => (
  <div className="page-animate">
    {children}
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
        <Route path="/official-roadmaps" element={<PageWrapper><OfficialRoadmaps /></PageWrapper>} />
        <Route path="/skill-input" element={<PageWrapper><SkillInput /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/ai-tutor" element={<PageWrapper><AiTutor /></PageWrapper>} />
        <Route path="/roadmap-chat" element={<PageWrapper><RoadmapChatSelection /></PageWrapper>} />
        <Route path="/roadmap/:id" element={<PageWrapper><Roadmap /></PageWrapper>} />
        <Route path="/step/:id" element={<PageWrapper><StepDetail /></PageWrapper>} />
        <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
