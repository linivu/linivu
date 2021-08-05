import { useState } from 'react';

// COMPONENTS //
import Logo from '../global/Logo';
import HamburgerMenu from './HamburgerMenu';

// STYLES //
import './Header.scss';
import Navigation from './Navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
