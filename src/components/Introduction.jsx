import '@scss/introduction.scss';
import { Link } from 'react-scroll';
import Skills from '@components/Skills';
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
            className='button primary'
            to='contact'
            smooth={true}
            duration={500}
            offset={-80}
          >
            Contact Me
          </Link>
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
      <div className='skills-container'>
        <Skills />
      </div>
    </section>
  );
};

export default Introduction;
