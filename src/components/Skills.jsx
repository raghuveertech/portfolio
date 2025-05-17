import '@scss/Skills.scss';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiWebpack,
  SiGit,
  SiTypescript,
  SiSass,
  SiTailwindcss,
  SiVercel,
  SiPostgresql,
  SiJest,
  SiFigma,
} from 'react-icons/si';
import Marquee from 'react-marquee-slider';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <SiHtml5 className='html5' /> },
    { name: 'CSS3', icon: <SiCss3 className='css3' /> },
    { name: 'JavaScript', icon: <SiJavascript className='javascript' /> },
    { name: 'TypeScript', icon: <SiTypescript className='typescript' /> },
    { name: 'React', icon: <SiReact className='react' /> },
    { name: 'Next.js', icon: <SiNextdotjs className='nextdotjs' /> },
    { name: 'Node.js', icon: <SiNodedotjs className='nodedotjs' /> },
    { name: 'Express.js', icon: <SiExpress className='express' /> },
    { name: 'MongoDB', icon: <SiMongodb className='mongodb' /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className='postgresql' /> },
    { name: 'Sass', icon: <SiSass className='sass' /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className='tailwindcss' /> },
    { name: 'Webpack', icon: <SiWebpack className='webpack' /> },
    { name: 'Git', icon: <SiGit className='git' /> },
    { name: 'Vercel', icon: <SiVercel className='vercel' /> },
    { name: 'Jest', icon: <SiJest className='jest' /> },
    { name: 'Figma', icon: <SiFigma className='figma' /> },
  ];

  return (
    <section className='skills-container'>
      <div id='skills' className='skills'>
        <Marquee
          velocity={20} // Speed in pixels per second
          direction='rtl' // Right-to-left for natural scrolling
          resetAfterTries={200} // Ensures smooth looping
          onInit={() => console.log('Marquee initialized')}
          onFinish={() => console.log('Marquee finished')}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className='skill-item'
              aria-label={`Expertise in ${skill.name}`}
            >
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
