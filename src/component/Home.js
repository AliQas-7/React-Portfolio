import { useState, useEffect } from 'react';
import './Style.css';
import useTypewriterEffect from './useTypewriterEffect';
import { Link } from 'react-router-dom';
import profilePicture from '../media/myimage.jpg';

const Home = ({ mode }) => {
  const [showContent, setShowContent] = useState(false);
  const [typewriterShown, setTypewriterShown] = useState(false);

  const welcomeText = "Hi, I'm Ali Qas and Welcome to My Portfolio QashInCode";
  const footerText = "Thank You for Visiting Soft Qashe!"


  const aboutMeText = `I am a passionate and enthusiastic Software Engineering student with a strong desire to excel in the world of programming and technology. 
My journey in the realm of computer science has been nothing short of exhilarating, and I am eager to further explore the endless possibilities it offers. 
I have a keen interest in web development, mobile app development, and artificial intelligence. My dedication to learning and problem-solving drives me to continuously improve my skills and take on challenging projects. 
When I'm not coding, you can find me exploring new technologies, playing video games, or reading tech blogs.`;

  const projectsSummaryText = `This portfolio is my canvas to display the culmination of my efforts, knowledge, and experiences. 
I invite you to explore the projects I've worked on, which cover a wide range of technologies and domains. 
From responsive web applications to interactive mobile apps, each project showcases my ability to apply my skills effectively. 
My goal is not only to create innovative solutions but also to contribute to meaningful projects that positively impact people's lives. 
I am always open to new opportunities and collaborations, so feel free to reach out and discuss potential projects or ideas. 
Let's collaborate and embark on a journey of growth together.`;


const typewriterEffectHeader = useTypewriterEffect(welcomeText, 150);
const typewriterEffectFooter = useTypewriterEffect(footerText, 150);


useEffect(() => {
  if (!typewriterShown) {
    setTypewriterShown(true);
    setTimeout(() => {
      setShowContent(true);
    }, 100); // Delay to allow the typewriter effect to complete
  }
}, [typewriterShown]);

return (
  <div className={`home-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
    <div className="profile-container">
      <div className="profile-picture-container">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
      </div>
    </div>

    {showContent && (
      <>
        <h1 className={`welcome-header show`}>
          {typewriterEffectHeader}
        </h1>

        <div className={`home-content visible`}>
          <div className='about-me'>
            <h2 className="section-title">About Me</h2>
            <p>{aboutMeText}</p>
            <Link to="/contactus">
              <button className="btn btn-primary">Contact Me</button>
            </Link>
          </div>

          <div className='portfolio-summary'>
            <h2 className="section-title">About Portfolio</h2>
            <p>{projectsSummaryText}</p>
            <Link to="/Projects">
              <button className="btn btn-primary">See Portfolio</button>
            </Link>
          </div>
        </div>

        <h1 className={`footer-text show`}>
          {typewriterEffectFooter}
        </h1>
      </>
    )}
  </div>
);
};

export default Home;