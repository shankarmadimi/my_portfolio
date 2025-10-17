import './index.scss';
import Loader from 'react-loaders';

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
                        <img src={process.env.PUBLIC_URL + '/Ds Visualizer.png'} alt="Data Structure Visualizer" className='projectImg' />
                        <div className='projectContent'>
                            <h3>Data Structure Visualizer</h3>
                            <p>An interactive web application for learning data structures through visual animations and step-by-step operations.</p>
                            <div className='skills'>
                                <h4>Skills</h4>
                                <ul>
                                    <li>Next.js 14</li>
                                    <li>TypeScript</li>
                                    <li>Shadcn/ui</li>
                                    <li>React Flow</li>
                                    <li>Framer Motion</li>
                                </ul>
                            </div>
                            <a href="https://github.com/shankarmadimi/Ds-visualizer?tab=readme-ov-file" target="_blank" rel="noreferrer">Source Code</a>
                        </div>
                    </div>
                    <div className='project'>
                        <img src={process.env.PUBLIC_URL + '/cricket face-off predictor.png'} alt="Cricket Face-Off Predictor" className='projectImg' />
                        <div className='projectContent'>
                            <h3>Cricket Face-Off Predictor</h3>
                            <p>A web application to predict cricket match outcomes and provide insights using machine learning.</p>
                            <div className='skills'>
                                <h4>Skills</h4>
                                <ul>
                                    <li>Python</li>
                                    <li>Flask</li>
                                    <li>React.js</li>
                                    <li>Node.js</li>
                                    <li>Scikit-learn</li>
                                </ul>
                            </div>
                            <a href="https://github.com/shankarmadimi/cricket-predictor" target="_blank" rel="noreferrer">Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="ball-beat" />
        </>
    );
}

export default Projects;
