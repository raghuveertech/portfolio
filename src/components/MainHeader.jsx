import { Link } from 'react-scroll';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import '@scss/main-header.scss';
import { useState } from 'react';

const MainHeader = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className='container'>
        <Link
          className='logo'
          to='introduction'
          smooth={true}
          duration={500}
          offset={-80}
          onClick={() => setMobileMenuOpen(false)}
        >
          <img src='images/raghuveer-logo.jpg' alt='Raghuveer' />
        </Link>
        <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <button
            className='close-menu'
            onClick={() => setMobileMenuOpen(false)}
          >
            <AiOutlineClose />
          </button>
          <ul>
            <li>
              <Link
                to='introduction'
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass='active'
                onClick={() => setMobileMenuOpen(false)}
              >
                Introduction
              </Link>
            </li>
            <li>
              <Link
                to='latestWork'
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass='active'
                onClick={() => setMobileMenuOpen(false)}
              >
                Latest Work
              </Link>
            </li>
            <li>
              <Link
                to='experience'
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass='active'
                onClick={() => setMobileMenuOpen(false)}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to='testimonials'
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass='active'
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to='contact'
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass='active'
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button className='button download-resume'>Download Resume</button>
        <button className='mobile-menu' onClick={() => setMobileMenuOpen(true)}>
          <AiOutlineMenu />
        </button>
      </div>
    </header>
  );
};

export default MainHeader;
