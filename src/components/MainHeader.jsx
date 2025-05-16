import { Link } from 'react-scroll';
import '@scss/main-header.scss';

const MainHeader = ({ isScrolled }) => {
  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className='container'>
        <Link
          className='logo'
          to='introduction'
          smooth={true}
          duration={500}
          offset={-80}
        >
          <img src='images/raghuveer-logo.jpg' alt='Raghuveer' />
        </Link>
        <nav className='main-nav'>
          <ul>
            <li>
              <Link
                to='introduction'
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass='active'
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
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button className='button'>Download Resume</button>
      </div>
    </header>
  );
};

export default MainHeader;
