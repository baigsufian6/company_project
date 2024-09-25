// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // Assuming you're using this for dark mode
// import area1 from '../Assets/new2.png';
// import area2 from '../Assets/new1.png';
// import area3 from '../Assets/new3.png';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './PopularAreas.css'; // Import the CSS file

// const PopularAreas = () => {

//     useEffect(() => {
//         AOS.init({
//             offset: 200,
//             duration: 800,
//             easing: 'ease-in-sine',
//             delay: 100,
//         });
//     }, []);

//     const navigate = useNavigate();

//     return (
//         <>
//             <div>
//                 <section className="popular-areas-section">
//                     <div id='top' className='section-top'>
//                         <div>
//                             <h1 data-aos='zoom-in' className='section-title'>LATEST PROJECTS</h1>
//                         </div>
//                         <div className='project-grid'>
//                             <div 
//                                 data-aos='zoom-in' 
//                                 data-aos-delay='400' 
//                                 style={{ backgroundImage: `url(${area1})` }}
//                                 className='project-box'
//                                 onClick={() => navigate('./project1')}
//                             ></div>
//                             <div 
//                                 data-aos='zoom-in' 
//                                 data-aos-delay='400' 
//                                 style={{ backgroundImage: `url(${area2})` }}
//                                 className='project-box'
//                                 onClick={() => navigate('./project2')}
//                             ></div>
//                             <div 
//                                 data-aos='zoom-in' 
//                                 data-aos-delay='400' 
//                                 style={{ backgroundImage: `url(${area3})` }}
//                                 className='project-box'
//                                 onClick={() => navigate('./project3')}
//                             ></div>
//                         </div>
//                     </div>
//                     <div id='bottom' className='section-bottom'>
//                         <div data-aos='slide-up' data-aos-delay="200" className="stats-box">
//                             <h1 className='stats-number'>52+</h1>
//                             <h1 className="stats-text">PROJECTS ARE SOLD OUT</h1>
//                         </div>
//                         <div data-aos='slide-up' data-aos-delay="200" className="stats-box">
//                             <h1 className='stats-number'>2.5K+</h1>
//                             <h1 className="stats-text">CUSTOMERS SATISFACTION</h1>
//                         </div>
//                         <div data-aos='slide-up' data-aos-delay="200" className="stats-box">
//                             <h1 className='stats-number'>7+</h1>
//                             <h1 className="stats-text">LATEST PROJECTS</h1>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </>
//     );
// }

// export default PopularAreas;







import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import area1 from '../Assets/new2.png';
import area2 from '../Assets/new1.png';
import area3 from '../Assets/new3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './PopularAreas.css'; // Importing the CSS file

const PopularAreas = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);

    const navigate = useNavigate();

    return (
        <div>
            <section className="popular-areas-section">
                <div id="top" className="popular-areas-top">
                    <div className="bolo">
                        <h1 data-aos="zoom-in" className="popular-areas-title">LATEST PROJECTS</h1>
                    </div>
                    <div className="popular-areas-grid">
                        <div 
                            data-aos="zoom-in" 
                            data-aos-delay="400" 
                            style={{ backgroundImage: `url(${area1})` }}
                            className="area-card"
                            onClick={() => navigate('')}  // Correct path
                        ></div>
                        <div 
                            data-aos="zoom-in" 
                            data-aos-delay="400" 
                            style={{ backgroundImage: `url(${area2})` }}
                            className="area-card"
                            onClick={() => navigate('')}  // Correct path
                        ></div>
                        <div 
                            data-aos="zoom-in" 
                            data-aos-delay="400" 
                            style={{ backgroundImage: `url(${area3})` }}
                            className="area-card"
                            onClick={() => navigate('')}  // Correct path
                        ></div>
                    </div>
                </div>
                <div id="bottom" className="popular-areas-stats">
                    <div data-aos="slide-up" data-aos-delay="200" className="stat-box">
                        <h1 className="stat-number">52+</h1>
                        <h1 className="stat-description">PROJECTS ARE SOLD OUT</h1>
                    </div>
                    <div data-aos="slide-up" data-aos-delay="200" className="stat-box">
                        <h1 className="stat-number">2.5K+</h1>
                        <h1 className="stat-description">CUSTOMERS SATISFACTION</h1>
                    </div>
                    <div data-aos="slide-up" data-aos-delay="200" className="stat-box">
                        <h1 className="stat-number">7+</h1>
                        <h1 className="stat-description">LATEST PROJECTS</h1>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PopularAreas;
