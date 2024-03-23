import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom';

const projectsData = [
    {
        title: 'FunText',
        description: 'FunText is a text utility developed in React Js with amazing and fast response functionality. It can help you in utilities like Converting text to Uppercase, Lowercase, Remove Spaces etc',
        technologies: ['HTML', 'CSS', 'React', 'Node.js'],
        image: 'https://th.bing.com/th/id/R.dfbd7ff16d5c91d3c9dcf4dc731126f0?rik=NQP7rOC9PobC2g&pid=ImgRaw&r=0',
        link: 'https://github.com/yourusername/project1'
    },
    {
        title: 'WorldyNews',
        description: 'Worldy News is an app which will deliver you with daily news from the worldwide newsApi. You can also visit diffrent categories like Sports, Technology and Buisness etc.',
        technologies: ['HTML', 'CSS', 'React', 'Node.js'],
        image: 'https://th.bing.com/th/id/R.cfa7ed1fe7e7fd353beeae6da1085276?rik=fHWf%2bd%2f8mUd91w&pid=ImgRaw&r=0',
        link: 'https://github.com/yourusername/project2'
    },


];

const ProjectsPage = () => {

    return (
        <>
            <div className="projects-container">
                <h1 className="section-title">Projects</h1>
                <p className="section-description">
                    Explore some of the exciting projects I've worked on. Projects play a crucial role in
                    showcasing my skills, experience, and creativity. Each project reflects my dedication to
                    problem-solving, collaboration, and innovation. From web applications to mobile apps,
                    these projects demonstrate my passion for turning ideas into tangible solutions.
                    Feel free to browse through them and get a glimpse of my journey in the world of technology.
                </p>
                <div className="projects-list">
                    {projectsData.map((project, index) => (
                        <div key={index} className="project-card">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-description">{project.description}</p>
                            <div className="technologies">
                                {project.technologies.map((tech, idx) => (
                                    <span key={idx} className="technology-tag">{tech}</span>
                                ))}
                            </div>
                            <Link to="/">
                                <button className="btn btn-primary">View on Github</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

                                    
            <p id="coming-soon">
            More Coming Soon &nbsp;
        </p>
        </>

    )
}


export default ProjectsPage;
