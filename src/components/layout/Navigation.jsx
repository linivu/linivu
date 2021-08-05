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
      <ul className={`nav__list ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link, i) => (
          <li key={i}>
            <a href={`#${link}`} className="nav__link" onClick={onClickHandler}>
              {link}
            </a>
          </li>
        ))}
        <Button href="mailto:info@linivu.com" className="btn btn--primary">
          Get In Touch
        </Button>
      </ul>
    </nav>
  );
};

export default Navigation;
