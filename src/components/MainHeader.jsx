import { Link } from 'react-scroll';

const MainHeader = () => {
  return (
    <header className='main-header'>
      <Link to='introduction' smooth={true} duration={500} offset={-80}>
        Raghuveer Panchagnula
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='introduction' smooth={true} duration={500} offset={-80}>
              Introduction
            </Link>
          </li>
          <li>
            <Link to='skillset' smooth={true} duration={500} offset={-80}>
              Skillset
            </Link>
          </li>
          <li>
            <Link to='latestWork' smooth={true} duration={500} offset={-80}>
              Latest Work
            </Link>
          </li>
          <li>
            <Link to='experience' smooth={true} duration={500} offset={-80}>
              Experience
            </Link>
          </li>
          <li>
            <Link to='testimonials' smooth={true} duration={500} offset={-80}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to='contact' smooth={true} duration={500} offset={-80}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
