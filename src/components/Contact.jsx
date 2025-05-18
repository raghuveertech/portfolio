import '@scss/contact.scss';
import { BsLinkedin, BsYoutube } from 'react-icons/bs';
import { LuHeartHandshake } from 'react-icons/lu';

const Contact = () => {
  return (
    <section className='section contact' id='contact'>
      <h2 className='section-header'>Contact Me</h2>
      <p className='email'>
        <a href='mailto:raghuveerp25@gmail.com'>raghuveerp25@gmail.com</a>
      </p>
      <p className='phone'>
        <a href='tel:+919000188804'>+91 90001 88804</a>
      </p>
      <div className='soical'>
        <a
          href='https://www.linkedin.com/in/raghuveertech/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn Profile'
        >
          <BsLinkedin />
        </a>
        <a
          href='https://www.youtube.com/@raghuveertech'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='YouTube Channel'
        >
          <BsYoutube />
        </a>
      </div>
      <div className='thank-you'>
        <p>Thank you!</p>
        <LuHeartHandshake className='heart' />
      </div>
    </section>
  );
};

export default Contact;
