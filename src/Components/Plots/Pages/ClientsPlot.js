import React, { useEffect } from "react";
import { client } from '../export'; // Ensure the path is correct based on your project structure
import { FaStar } from 'react-icons/fa';
import AOS from 'aos';
import './clientPlot.css'; // Import your custom CSS file
import 'aos/dist/aos.css';

const Clients = () => {

    useEffect(() => {
        // Scroll to the top of the page
        window.scrollTo(0, 0);
    }, []);
      
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);

    return (
        <section id='testimonials' className='testimonials-container'>
            <div className='testimonials-header'>
                <h1 data-aos='zoom-in' className='clients-title'>FEEDBACK</h1>
                <h1 data-aos='zoom-in' className='clients-subtitle'>
                    Our Happy Clients<br />
                </h1>
            </div>

            <div id='clients-box' className='clients-grid'>
                {client && client.length > 0 ? (
                    client.map((item, index) => (
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="200"
                            key={index}
                            className="client-card"
                        >
                            <div className="client-details">
                                <img
                                    src={item.image}
                                    alt={`${item.name}'s feedback`}  
                                    className="client-image"
                                />
                                <div className="client-info">
                                    <h1 className="client-name">
                                        {item.name}
                                    </h1>
                                    <h2 className="client-text">{item.text}</h2>
                                </div>
                            </div>
                            <p className="client-feedback">
                                {item.feedback}
                            </p>
                            <div className="client-rating">
                                <FaStar className="star-icon" />
                                <FaStar className="star-icon" />
                                <FaStar className="star-icon" />
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No clients available at the moment.</p>
                )}
            </div>
        </section>
    );
};

export default Clients;
