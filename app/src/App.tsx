import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Methodology from './pages/Methodology';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import MedicalDisclaimer from './pages/MedicalDisclaimer';
import PrivacyPolicy from './pages/PrivacyPolicy';

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/medical-disclaimer" element={<MedicalDisclaimer />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Layout>
  );
}
