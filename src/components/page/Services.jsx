// DATA //
import data from '../../data';

import design from '../../images/icons/design.svg';
import branding from '../../images/icons/branding.svg';
import development from '../../images/icons/development.svg';
import seo from '../../images/icons/seo.svg';

// STYLES //
import './Services.scss';

const Services = () => {
  // console.log(design);
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title" data-num="02">
          <h2 className="section-title__description">{data.services.title}</h2>
        </div>

        <div className="grid">
          <h3 className="main-title">{data.services.mainTitle}</h3>
          <p className="lead">{data.services.lead}</p>
        </div>

        <div className="grid">
          {data.services.items.map((item) => (
            <div className="service__item" key={item.no}>
              <img
                src={item.icon}
                alt={item.heading}
                className="services__item-icon"
              ></img>
              <h2 className="services__item-heading">{item.heading}</h2>
              <p className="services__item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
