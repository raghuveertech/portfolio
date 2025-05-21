import { useEffect, useState } from 'react';
import { CgArrowUp } from 'react-icons/cg';
import { Link } from 'react-scroll';
import MainHeader from '@components/MainHeader';
import Introduction from '@components/Introduction';
import LatestWork from './components/LatestWork';
import Experience from '@components/Experience';
import Testimonials from './components/Testimonials';
import Contact from '@components/Contact';
import { Analytics } from '@vercel/analytics/react';
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
      <LatestWork />
      <Experience />
      <Testimonials />
      <Contact />
      <Analytics />
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
