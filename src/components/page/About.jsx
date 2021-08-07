// STYLES //
import './About.scss';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title" data-num="01">
          <h2 className="section-title__description">Who We Are</h2>
        </div>

        <div className="grid">
          <div className="about__intro">
            <h3 className="main-title">
              Linivu is a small web design studio based in Cape Town. We are dedicated to
              building great digital products and experiences.
            </h3>
            <p className="lead">
              We take a structured approach to web design. Our development process was
              created to ensure every project is delivered on-time and on-budget. Once
              your web design project kicks off, here's what to expect:
            </p>
          </div>
          <div className="about__image"></div>
        </div>
        <div className="grid">
          <div className="about__process">
            <div className="about__process-box">
              <div className="about__process-number">1</div>
              <h3 className="about__process-heading">Define</h3>
            </div>
            <p className="about__process-description">
              The first order of business is to sit down with your team and create a
              detailed set of design and technical specifications. These specifications
              serve as a road map for the rest of the web design process.
            </p>
          </div>
          <div className="about__process">
            <div className="about__process-box">
              <div className="about__process-number">2</div>
              <h3 className="about__process-heading">Design</h3>
            </div>
            <p className="about__process-description">
              Wire frames are your first chance to visualize your website. While they're
              not nearly as detailed as the final site will be, they give us a visual
              representation of the site's overall layout.
            </p>
          </div>
          <div className="about__process">
            <div className="about__process-box">
              <div className="about__process-number">3</div>
              <h3 className="about__process-heading">Build</h3>
            </div>
            <p className="about__process-description">
              At the same time, we'll kick off the technical side of the web design
              process. This will include deploying your CMS, creating your custom theme
              and page designs, and setting up your website's analytics.
            </p>
          </div>
          <div className="about__process">
            <div className="about__process-box">
              <div className="about__process-number">4</div>
              <h3 className="about__process-heading">Launch</h3>
            </div>
            <p className="about__process-description">
              Once we're sure that your site is ready to be released to the public, we'll
              deploy it on your public domain. Then, we'll shift into a monthly support
              process that will continue for 12 months.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
