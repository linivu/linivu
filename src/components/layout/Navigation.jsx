// STYLES //
import './Navigation.scss';

const Navigation = ({ isOpen, setIsOpen }) => {
  const navLinks = ['home', 'about', 'services', 'works'];

  return (
    <nav className={`nav ${isOpen ? 'open' : ''}`}>
      <ul className={`nav__list ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <li>
            <a href={`#${link}`} className="nav__link">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
