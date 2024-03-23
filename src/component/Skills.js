import React, { useEffect, useState } from 'react';

const Skills = () => {
    const [skillsVisible, setSkillsVisible] = useState(false);

    useEffect(() => {
        const skillElements = document.querySelectorAll('.skill');

        const showSkills = () => {
            skillElements.forEach((skill, index) => {
                setTimeout(() => {
                    skill.classList.add('appear');
                }, index * 200); // Adjust the delay as needed
            });
        };

        showSkills();
        setSkillsVisible(true);
    }, []);

    return (
        <div className={`skills-section ${skillsVisible ? 'visible' : ''}`}>
            <h1 className="section-title">Skills</h1>
            <div className="skills-list">
                <div className="skill">
                    <h3>HTML</h3>
                </div>
                <div className="skill">

                    <h3>CSS</h3>
                </div>

                <div className="skill">

                    <h3>Java Script</h3>
                </div>
                <div className="skill">

                    <h3>React Js</h3>
                </div>
                <div className="skill">

                    <h3>Java OOP</h3>
                </div>
                <div className="skill">

                    <h3>C</h3>
                </div>
                <div className="skill">

                    <h3>C++</h3>
                </div>
                <div className="skill">

                    <h3>Node JS</h3>
                </div>
                <div className="skill">

                    <h3>Wordpress</h3>
                </div>
                <div className="skill">

                    <h3>Problem Solving</h3>
                </div>
                <div className="skill">

                    <h3>Wordpress</h3>
                </div>
                <div className="skill">
                    <h3>Responsive Web Design</h3>
                </div>
                <div className="skill">
                    <h3> Git/Github</h3>
                </div>
                <div className="skill">
                    <h3>RESTful APIs</h3>
                </div>
              
                <div className="skill">
                    <h3>Database Management</h3>
                </div>
                <div className="skill">
                    <h3>Backend Development</h3>
                </div>
                <div className="skill">
                    <h3>Frontend Frameworks</h3>
                </div>
                <div className="skill">
                    <h3>Webpack</h3>
                </div>
                <div className="skill">
                    <h3>Unit Testing</h3>
                </div>
              
                <div className="skill">
                    <h3>Web Security</h3>
                </div>
                <div className="skill">
                    <h3>Performance Optimization</h3>
                </div>
               
                <div className="skill">
                    <h3>Debugging and Troubleshooting</h3>
                </div>
                <div className="skill">
                    <h3>Mobile App Development</h3>
                </div>
              
                <div className="skill">
                    <h3>Cloud Platforms</h3>
                </div>
             
                <div className="skill">
                    <h3>Machine Learning/(AI)</h3>
                </div>
                <div className="skill">
                    <h3>Blockchain Development</h3>
                </div>
            </div>
        </div>
    );
};

export default Skills;