import './index.scss'; // Importing the component-specific styles
import { Link } from 'react-router-dom'; // Importing Link for navigation
import {useState,useEffect} from 'react'; // Importing useState and useEffect hooks
import AnimatedLetters from '../AnimateLetters'; // Importing AnimatedLetters component
import Logo from './Logo'; // Importing Logo component
import Loader from 'react-loaders'; // Importing Loader component for page loading animation

const Home=()=>{ 
    const [letterClass,setLetterClass]=useState('text-animate'); // State to control text animation class
    const nameArray=" Shankar Madimi,".split(""); // Splitting the name into an array of letters
    const jobArray="Full stack Developer".split(""); // Splitting the job title into an array of letters
    const helloArray="Hello,".split(""); // Splitting the greeting text into an array of letters

    // useEffect to change the animation class after 5 seconds
    useEffect(()=>{
        setTimeout(()=>{
            return setLetterClass('text-animate-hover');
        },5000);
    },[]);

    return (
        <>
        <div className="container Home-page"> {/* Main container for the home page */}
            <div className="text-zone"> {/* Text content area */}
                <h1> {/* Main animated heading */}
                    <AnimatedLetters letterClass={letterClass}
                    strArray={helloArray} idx={15} /> {/* Animate the "Hello," text */}
                    <br />
                    <span className={`${letterClass} _20`}>I</span> 
                    <span className={`${letterClass} _21`}>'m</span> 
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray} idx={22} /> {/* Animate the name */}
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray} idx={42} /> {/* Animate the job title */}
                </h1>
                <h2> {/* Subheading */}
                Full stack Developer | React Developer |
                <br />Data Structure Enthusiast
                </h2>
                <Link to="/contact" className='contact-button'>CONTACT ME</Link> {/* Contact button */}
            </div>
            <Logo /> {/* Logo component */}
        </div>
        <Loader type="ball-beat"/> {/* Page loader animation */}
        </>
    );
};

export default Home; // Exporting the Home component
