import { useEffect } from 'react';
import stickyNavbar from '../utilities/stickyNavbar';

// COMPONENTS //
import Home from '../components/page/Home';
import About from '../components/page/About';
import Services from '../components/page/Services';
import Contact from '../components/page/Contact';

const LandingPage = () => {
  useEffect(() => {
    stickyNavbar();
  });

  return (
    <main className="main">
      <Home />
      <About />
      <Services />
      <Contact />
    </main>
  );
};

export default LandingPage;
