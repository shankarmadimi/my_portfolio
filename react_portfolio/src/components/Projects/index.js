import './index.scss';
import Loader from 'react-loaders';
import portfolioImage from '../../assets/images/portfolioImage.png'; // Using your image name
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimateLetters';

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const ProjectsArray = "Projects".split("");

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    return (
        <>
            <div className='projectpage'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={ProjectsArray} idx={15} />
                </h1>
                <div className='projects'>
                    <div className='project'>
                        <img src={portfolioImage} alt="React Portfolio" className='projectImg' />
                        <div className='projectContent'>
                            <h3>React Portfolio</h3>
                            <p>A modern portfolio website built with React, SCSS, and React Router, showcasing my skills, projects, and experience.</p>
                            <div className='skills'>
                                <h4>Skills</h4>
                                <ul>
                                    <li>React</li>
                                    <li>SCSS</li>
                                    <li>React Router</li>
                                    <li>Responsive Design</li>
                                </ul>
                            </div>
                            <a href="https://github.com/shankarmadimi/my_portfolio" target="_blank" rel="noreferrer">Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="ball-beat" />
        </>
    );
}

export default Projects;
