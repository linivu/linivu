import { useEffect } from 'react';
import scrollReveal from '../utilities/scrollReveal';

// COMPONENTS //
import Home from '../components/page/Home';
import About from '../components/page/About';
import Services from '../components/page/Services';
import Works from '../components/page/Works';
import Contact from '../components/page/Contact';

const LandingPage = () => {
  useEffect(() => {
    scrollReveal();
  }, []);

  return (
    <main className="main">
      <Home />
      <About />
      <Services />
      <Works />
      <Contact />
    </main>
  );
};

export default LandingPage;
