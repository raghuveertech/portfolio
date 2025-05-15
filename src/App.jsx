import MainHeader from '@components/MainHeader';
import '@scss/app.scss';

const App = () => {
  return (
    <div className='main'>
      <MainHeader />
      <section className='section' id='introduction'>
        <h2>Introduction</h2>
      </section>
      <section className='section' id='skillset'>
        <h2>Skillset</h2>
        <p>
          I am a software engineer with a passion for building scalable web
          applications. I have experience in React, Node.js, and Python.
        </p>
        <p>
          I enjoy working on challenging problems and learning new technologies.
        </p>
      </section>
      <section className='section' id='latestWork'>
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
      </section>
      <section className='section' id='contact'>
        <h2>Contact</h2>
        <p>If you would like to get in touch, please reach out to me at:</p>
        <ul>
          <li>Email:</li>
        </ul>
      </section>
    </div>
  );
};

export default App;
