// STYLES //
import './Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title" data-num="04" data-animate="fade-up">
          <h2 className="section-title__description">Get In Touch</h2>
        </div>

        <h2 className="main-title" data-animate="fade-up">
          Have an idea or an epic project in mind? Talk to us. Let us work together and
          make something great. Shoot us a message at
        </h2>
        <a
          href="mailto:info@linivu.com"
          className="contact__email"
          data-animate="fade-up"
        >
          info@linivu.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
