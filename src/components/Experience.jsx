import '@scss/experience.scss';

const Experience = () => {
  return (
    <section className='section experience' id='experience'>
      <div className='row'>
        <div className='header'>
          <h2 className='section-header'>Experience</h2>
        </div>
        <div className='list-items'>
          <div className='list-item'>
            <h3 className='company'>Edifecs Technologies Private Limited</h3>
            <h3 className='position'>Lead Software Engineer</h3>
            <p className='duration'>March 2024 - Present</p>
            <p className='technologies'>ReactJS, SCSS, SQL</p>
          </div>
          <div className='list-item'>
            <h3 className='company'>Cendyn India Private Limited</h3>
            <h3 className='position'>Senior Software Engineer</h3>
            <p className='duration'>September 2022 - March 2024</p>
            <p className='technologies'>ReactJS, SCSS, Figma</p>
          </div>
          <div className='list-item'>
            <h3 className='company'>OSI Digital</h3>
            <h3 className='position'>Senior Software Engineer</h3>
            <p className='duration'>March 2022 - September 2022</p>
            <p className='technologies'>ReactJS, Redux, Figma</p>
          </div>
          <div className='list-item'>
            <h3 className='company'>
              Pegasus (Travel Tripper India Pvt. Ltd.)
            </h3>
            <h3 className='position'>Senior Web Developer</h3>
            <p className='duration'>March 2017 - March 2022</p>
            <p className='technologies'>
              HTML, SCSS, JavaScript, JQuery, Photoshop, Figma
            </p>
          </div>
          <div className='list-item'>
            <h3 className='company'>OSI Technologies</h3>
            <h3 className='position'>Software Engineer</h3>
            <p className='duration'>July 2015 - September 2016</p>
            <p className='technologies'>
              Photoshop, HTML, SCSS, JavaScript, JQuery, AngularJS
            </p>
          </div>
          <div className='list-item'>
            <h3 className='company'>Warriorz Soft Technologies</h3>
            <h3 className='position'>Associate Software Engineer</h3>
            <p className='duration'>May 2013 - July 2015</p>
            <p className='technologies'>PHP, MySQL</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
