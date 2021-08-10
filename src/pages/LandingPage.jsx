// COMPONENTS //
import Home from '../components/page/Home';
import About from '../components/page/About';
import Services from '../components/page/Services';
import Contact from '../components/page/Contact';

const LandingPage = () => {
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
