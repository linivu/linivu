// STYLES //
import './HamburgerMenu.scss';

const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={onClickHandler}>
      <span className="bar"></span>
    </button>
  );
};

export default HamburgerMenu;
