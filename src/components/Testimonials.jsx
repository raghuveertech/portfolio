import '@scss/testimonials.scss';

const Testimonials = () => {
  return (
    <section className='section testimonials' id='testimonials'>
      <h2 className='section-header'>Testimonials</h2>
      <div className='container'>
        <div className='testimonial-item'>
          <p className='testimonial-text'>
            "Raghuveer has always been one of my all-time favorite developers.
            Whenever I faced a challenge or had a question, he was my go-to
            person—always ready with thoughtful, effective solutions. His
            positive attitude and unwavering commitment helped us hit every
            milestone and elevated the entire project. A true professional and
            an incredible teammate!"
          </p>
          <p className='testimonial-author'>
            - Briana, Director, Project Management.
          </p>
        </div>
        <div className='testimonial-item'>
          <p className='testimonial-text'>
            "Working with Raghuveer was an absolute pleasure. He consistently
            demonstrated a proactive approach, communicated updates with
            clarity, and responded to feedback swiftly and thoughtfully. His
            professionalism and collaborative spirit made the entire experience
            smooth and stress-free."
          </p>
          <p className='testimonial-author'>
            - Nayeem, Digital Product Manager.
          </p>
        </div>
        <div className='testimonial-item'>
          <p className='testimonial-text'>
            "When I assigned a task to Raghu, I never had to follow up—he
            consistently delivered high-quality results with timely updates. His
            ability to juggle multiple responsibilities seamlessly was truly
            impressive. Raghu’s dedication, meticulous attention to detail, and
            proactive mindset make him a standout developer I would confidently
            recommend to anyone."
          </p>
          <p className='testimonial-author'>
            - Kesav, Senior Technical Consultant.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
