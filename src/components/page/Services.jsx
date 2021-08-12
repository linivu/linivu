// DATA //
import data from '../../data';

// STYLES //
import './Services.scss';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title" data-num="02" data-animate="fade-up">
          <h2 className="section-title__description">{data.services.title}</h2>
        </div>

        <div className="grid">
          <h3 className="main-title" data-animate="fade-up">
            {data.services.mainTitle}
          </h3>
          <p className="lead" data-animate="fade-up">
            {data.services.lead}
          </p>
        </div>

        <div className="grid">
          {data.services.items.map((item) => (
            <div className="service__item" key={item.no} data-animate="fade-up">
              <div
                className={`services__item-icon ${item.heading
                  .split(' ')[0]
                  .toLowerCase()}`}
              ></div>
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
