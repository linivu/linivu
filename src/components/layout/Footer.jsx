// STYLES //
import data from '../../data';
import './Footer.scss';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="find">
            <h3>Where to find us</h3>
            <p>8 Dock Road</p>
            <p>V &amp; A Waterfront</p>
            <p>Cape Town, 8001</p>
            <p>+27 72 676 5789</p>
          </div>
          <div className="follow">
            <h3>Follow us</h3>
            <a href="https://www.facebook.com" target="_blank" rel="noopener">
              Facebook
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener">
              LinkedIn
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener">
              Github
            </a>
          </div>
          <div className="cta">
            <div className="line"></div>
            <a href="mailto:info@linivu.com">Lets Talk</a>
            <p className="copy">Copyright&copy; Linivu {date}.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
