import './index.scss';
import { useState,useEffect } from 'react';
import AnimatedLetters from '../AnimateLetters';
import Loader from 'react-loaders';
import cursor from '../../assets/images/cursorIcon.png';
import ui from '../../assets/images/uiIcon.png';
import server from '../../assets/images/serverIcon.png';
const About=()=>{
    const [letterClass,setLetterClass]=useState('text-animate');
    const aboutArray="About Me".split("");
    useEffect(()=>{
        setTimeout(()=>{
            return setLetterClass('text-animate-hover');
        },3000);
    },[]);
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={aboutArray} idx={15} />
                </h1>
                <p>
    I'm a passionate third-year <span>Computer Science</span> student at MIC, 
    specializing in <span>Web Development</span> and <span>Data Structures & Algorithms (DSA)</span>.  
    I am driven by the ambition to secure a position in a leading IT company where I can work on 
    cutting-edge technologies and deliver impactful solutions.
</p>
<p>
    My core technical strengths lie in <span>Web Development</span> and efficient 
    <span> Problem-Solving</span> using Data Structures & Algorithms. I enjoy building creative, 
    user-centric applications that drive seamless user experiences.
</p>
<p align="LEFT">
    Beyond coding, I am a huge <span>cricket enthusiast</span> and a movie lover.  
    I strongly believe in balancing my passion for technology with my love for sports and entertainment.  
</p>
<p>
    Above all, I am a family-oriented individual who deeply cares about my loved ones.  
    My ultimate goal is to make my <span>family proud</span> by achieving my dreams and 
    establishing myself as a successful <span>Software Developer</span> in a reputed organization.
</p>

            </div>
            <div className="content">
                <ul className="aboutItems">
                    <li className="aboutItem">
                        <img src={cursor} alt="Cursor icon" />
                        <div className="aboutItemText">
                            <h3>Full Stack Developer</h3>
                            <p>
                                Experienced in creating responsive, user-friendly websites with MERN Stack.
                            </p>
                        </div>
                    </li>
                    <li className="aboutItem">
                        <img src={server} alt="Server icon" />
                        <div className="aboutItemText">
                            <h3>Data Structures Enthusiast</h3>
                            <p>
                                Solved 100+ coding problems in data structures, with strong skills in algorithms and data management.
                            </p>
                        </div>
                    </li>
                    <li className="aboutItem">
                        <img src={ui} alt="UI icon" />
                        <div className="aboutItemText">
                            <h3>Design thinker</h3>
                            <p> 
                                Experienced in applying design thinking methodologies to solve problems creatively and effectively. 
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <Loader type="ball-beat"/>
        </>
    );
};
export default About;