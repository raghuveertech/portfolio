import { Link } from 'react-scroll';
import Skills from '@components/Skills';
import '@scss/introduction.scss';

const Introduction = () => {
  return (
    <section className='section introduction' id='introduction'>
      <div className='row'>
        <div className='content'>
          <h1 className='heading'>Hi, I'm Raghuveer</h1>
          <h2 className='subheading'>
            Fullstack JavaScript Developer | UI/UX Designer
          </h2>
          <Link
            className='button'
            to='contact'
            smooth={true}
            duration={500}
            offset={-80}
          >
            Contact Me
          </Link>
          <div className='mobile-resume'>
            <a
              href='https://docs.google.com/document/d/11LewGhyz8oYZsuyucywji49uHzSIGW7ws4EUCM0kzdQ/edit?tab=t.0'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='button solid'>Full Resume</button>
            </a>
          </div>
        </div>
        <div className='image'>
          <div className='image-wrapper'>
            <div className='main-image'>
              <img
                src='images/raghuveer-panchagnula.jpg'
                alt='Raghuveer Panchagnula'
              />
            </div>
          </div>
        </div>
      </div>
      <Skills />
    </section>
  );
};

export default Introduction;
