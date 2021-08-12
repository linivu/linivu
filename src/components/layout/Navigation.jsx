// COMPONENTS //
import Button from '../global/Button';

// STYLES //
import './Navigation.scss';

const Navigation = ({ isOpen, setIsOpen }) => {
  const navLinks = ['home', 'about', 'services', 'works'];

  const onClickHandler = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`nav ${isOpen ? 'open' : ''}`}>
      <div className={`nav__list ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link, i) => (
          <span key={i}>
            <a
              href={`#${link}`}
              className={`nav__link link ${link}-link`}
              onClick={onClickHandler}
            >
              {link}
            </a>
          </span>
        ))}
        <Button
          href="#contact"
          className="btn btn--primary link"
          onClick={onClickHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="plane"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
          Get In Touch
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
