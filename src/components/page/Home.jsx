import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

// STYLES //
import './Home.scss';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__bg">
        <div className="overlay"></div>
      </div>

      <div className="home__content">
        <div className="home__content-box">
          <h1 className="home__content-heading">Hello.</h1>
          <p className="home__content-description">
            We are Linivu. We create awesome &amp; stunning digital solutions.
          </p>
        </div>
        <div className="home__content-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.inkedin.com" target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <a href="#about" className="scroll">
          Scroll Down
        </a>
      </div>
    </section>
  );
};

export default Home;
