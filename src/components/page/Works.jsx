import data from '../../data';
import discovr from '../../images/discovr.jpg';
import omnifood from '../../images/omnifood.jpg';

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
          {data.works.items.map((item) => (
            <div className="works__item" key={item.no}>
              <img src={item.image} alt="works item img" width="768" height="465" />
              <div className="overlay"></div>
              <div className="works__item-intro">
                <p className="type">{item.type}</p>
                <p className="name">{item.name}</p>
              </div>
              <a
                href={item.preview}
                target="_blank"
                rel="noopener"
                className="works__item-preview"
              >
                Preview
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
