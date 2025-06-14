import 'leaflet/dist/leaflet.css'; // Leaflet CSS
import Loader from 'react-loaders'; 
import { useState, useEffect, useRef } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimateLetters';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Importing Leaflet to access custom icons

const Contact = () => {
    const contactArray = "Contact Me".split("");
    const refForm = useRef();
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_xk00qsa', 'template_qbjftnv',
                refForm.current,
                '2W8a6QN-kFovz9frO'
            )
            .then(
                () => {
                    alert('Message sent successfully!');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send message! Please try again');
                }
            );
    };

    // Define a custom icon for the marker
    const markerIcon = new L.Icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png', // Default Leaflet marker icon
        iconSize: [25, 41], // Size of the marker
        iconAnchor: [12, 41], // The point of the icon that will be at the marker’s location
        popupAnchor: [1, -34], // The point from which the popup should open relative to the iconAnchor
    });

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={contactArray} idx={15} letterClass={letterClass} />
                    </h1>
                    <p>
                        I am a third-year student seeking internship opportunities, particularly in projects that challenge my skills and 
                        contribute to real-world solutions. I am skilled in data structures and algorithms, full-stack development, and computer 
                        science fundamentals. If you have any projects or questions, feel free to reach out to me using the contact form below. 
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="from_name" placeholder='Enter your name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Enter your email' required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Enter your message' name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="submit-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Shankar Madimi
                    <br />
                    India,
                    <br />
                    4-221-1 TF-5, post office road,
                    <br />
                    Gollapudi, Vijayawada,
                    <br /> 
                    AndhraPradesh - 521225.
                    <br />
                    <span>madimishankar5@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[16.539148, 80.576326]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[16.539148, 80.576326]} icon={markerIcon}>
                            <Popup>Want to chat? Drop by for coffee! ☕</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="ball-beat" />
        </>
    );
};

export default Contact;
