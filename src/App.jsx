import { useEffect, useState } from 'react';
import { CgArrowUp } from 'react-icons/cg';
import { Link } from 'react-scroll';
import MainHeader from '@components/MainHeader';
import Introduction from '@components/Introduction';
import Skills from '@components/Skills';
import Contact from '@components/Contact';
import '@scss/app.scss';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsScrolled(window.scrollY > 100);
        setShowBackToTop(window.scrollY > 500);
      }, 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className='main'>
      <MainHeader isScrolled={isScrolled} />
      <Introduction />
      <Skills />
      {/* <section className='section' id='latestWork'>
        <h2>Latest Work</h2>
        <p>Here are some of my latest projects:</p>
        <ul>
          <li>Project 1: A web application built with React and Node.js</li>
          <li>Project 2: A Python script for data analysis</li>
          <li>Project 3: A mobile app built with React Native</li>
        </ul>
      </section>
      <section className='section' id='experience'>
        <h2>Experience</h2>
        <p>I have worked at several companies, including:</p>
        <ul>
          <li>Company 1: Software Engineer</li>
          <li>Company 2: Frontend Developer</li>
          <li>Company 3: Backend Developer</li>
        </ul>
      </section>
      <section className='section' id='testimonials'>
        <h2>Testimonials</h2>
        <p>Here are some testimonials from my colleagues and clients:</p>
        <ul>
          <li>"Raghuveer is a great developer!"</li>
          <li>"I enjoyed working with Raghuveer on this project."</li>
          <li>"Raghuveer is very knowledgeable and helpful."</li>
        </ul>
      </section> */}
      <Contact />
      {showBackToTop && (
        <Link
          to='introduction'
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          activeClass='active'
          className='scroll-to-top'
        >
          <CgArrowUp />
        </Link>
      )}
    </div>
  );
};

export default App;
