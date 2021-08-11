import discovr from '../../images/discovr.png';
import omnifood from '../../images/omnifood.png';

// STYLES //
import './Works.scss';

const Works = () => {
  return (
    <section id="works" className="works">
      <div className="container">
        <div className="grid">
          <div className="section-title" data-num="03">
            <h2 className="section-title__description">Recent Works</h2>
          </div>
          <h3 className="main-title">
            Here are some of our projects we have done lately. Feel free to check them
            out.
          </h3>
        </div>

        <div className="grid">
          <div className="works__item">
            <img src={discovr} alt="works item img" width="768" height="465" />
            <div className="overlay"></div>
            <div className="works__item-intro">
              <p className="type">Web App</p>
              <p className="name">Discovr</p>
            </div>
            <a
              href="https://discovr.linivu.com"
              target="_blank"
              rel="noopener"
              className="works__item-preview"
            >
              Preview
            </a>
          </div>
          <div className="works__item">
            <img src={omnifood} alt="works item img" width="768" height="465" />
            <div className="overlay"></div>
            <div className="works__item-intro">
              <p className="type">Website</p>
              <p className="name">Omnifood</p>
            </div>
            <a
              href="https://omnifood.linivu.com"
              target="_blank"
              rel="noopener"
              className="works__item-preview"
            >
              Preview
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
