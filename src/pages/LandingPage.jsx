import { useEffect } from 'react';
import stickyNavbar from '../utilities/stickyNavbar';

// COMPONENTS //
import Home from '../components/page/Home';
import About from '../components/page/About';
import Services from '../components/page/Services';

const LandingPage = () => {
  useEffect(() => {
    stickyNavbar();
  });

  return (
    <main className="main">
      <Home />
      <About />
      <Services />
    </main>
  );
};

export default LandingPage;
