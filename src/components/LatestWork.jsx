import '@scss/latest-work.scss';

const LatestWork = () => {
  return (
    <section className='section latest-work' id='latestWork'>
      <h2 className='section-header'>Latest Work</h2>
      <div className='container'>
        <div className='item'>
          <div className='image-container'>
            <img src='images/profile-hub.png' />
          </div>
          <div className='content'>
            <h3 className='project-title'>Profile Hub</h3>
            <p className='project-description'>
              A web application that allows users to create and manage their
              profiles, connect with others, and share their experiences.
            </p>
            <p className='technologies'>
              React, Node.js, Express, MongoDB, JWT
            </p>
            <a
              href='https://profilehubweb.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='button secondary'
            >
              View Project
            </a>
          </div>
        </div>
        <div className='item'>
          <div className='content'>
            <h3 className='project-title'>Photo Quiz</h3>
            <p className='project-description'>
              A fun and interactive quiz game built on React JS.
            </p>
            <p className='technologies'>React JS </p>
            <a
              href='https://photo-quiz.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='button secondary'
            >
              View Project
            </a>
          </div>{' '}
          <div className='image-container'>
            <img src='images/photo-quiz.png' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
