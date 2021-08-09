import data from '../../data/data';

// STYLES //
import './About.scss';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title" data-num="01">
          <h2 className="section-title__description">{data.about.title}</h2>
        </div>

        <div className="grid">
          <div className="about__intro">
            <h3 className="main-title">{data.about.mainTitle}</h3>
            <p className="lead">{data.about.lead}</p>
          </div>
          <div className="about__image"></div>
        </div>
        <div className="grid">
          {data.about.process.map((process) => (
            <div className="about__process" key={process.no}>
              <div className="about__process-box">
                <div className="about__process-number">{process.no}</div>
                <h3 className="about__process-heading">{process.heading}</h3>
              </div>
              <p className="about__process-description">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
