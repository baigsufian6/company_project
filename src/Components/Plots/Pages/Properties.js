// import React, { useEffect } from "react";
// import { property } from '../export';
// import { FaBath, FaShareAlt, FaBed, FaPlus, FaMapMarkerAlt, FaHeart,FaVideo, FaCamera, FaCircle, FaUserCircle } from 'react-icons/fa';
// import { MdDashboard } from 'react-icons/md';

// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Properties = () => {
//     useEffect(() => {
//         AOS.init({
//             offset: 200,
//             duration: 800,
//             easing: 'ease-in-sine',
//             delay: 100,
//         });
//     }, [])


//     return (
//         <div >
//             <section id='properties' className="lg:w-[90%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10">
//                 <div className='flex flex-col justify-center items-start gap-4'>
//                     <h1 data-aos='zoom-in' className="text-red-500 dark:text-white">PROPERTIES</h1>
//                     <h1 data-aos='zoom-in' className="text-black text-4xl font-semibold dark:text-white">Explore the latest</h1>
//                 </div>
//                 <div id='grid-box' className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>
//                     {
//                         property.map((item, index) => (
//                             <div data-aos='zoom-in' data-aos-delay="200" key={index} className='bg-white dark:bg-gray-800 rounded-xl w-full'>
//                                 <div id='image-box' className='bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end'
//                                     style={{ backgroundImage: `url(${item.images})` }}>
//                                     <div id='top' className='flex justify-between items-end w-full'>
//                                     <div className='flex justify-center items-center gap-4'>
//                                             <div className='p-2 border-2 border-gray-200 hover:bg-black
//                                              cursor-pointer transform hover:scale-110 transition-transform duration-300'>
//                                                 <FaShareAlt className='size-4 text-red-400'/>
//                                             </div>

//                                             <div className='p-2 border-2 border-gray-200 hover:bg-black
//                                              cursor-pointer transform hover:scale-110 transition-transform duration-300'>
//                                                 <FaHeart className='size-4 text-red-400'/>
//                                             </div>

//                                             <div className='p-2 border-2 border-gray-200 hover:bg-black
//                                              cursor-pointer transform hover:scale-110 transition-transform duration-300'>
//                                                 <FaPlus className='size-4 text-red-400'/>
//                                             </div>
//                                         </div>
//                                         {/* <div>
//                                         <div><button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black rounded-xl'>Featured</button></div>
//                                         </div>
                                        
                                        

//                                         <div className='flex justify-between items-center gap-3'>
//                                             <button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]'>sales</button>
//                                             <button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]'>Active</button>
//                                         </div> */}
//                                     </div>
//                                     <div id='bottom' className='flex justify-between items-end w-full'>
//                                         <div className='flex justify-start items-center gap-2'>
//                                             <FaMapMarkerAlt className='size-4 text-white' />
//                                             <h1 className='text-white text-xl font-semibold'>{item.address}</h1>
//                                         </div>

//                                         <div className='flex justify-center items-center gap-4'>
//                                             {/* <FaVideo className='size-4 text-white' />
//                                             <FaCamera className='size-4 text-white ' /> */}
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='px-6 py-3 flex flex-col justify-center items-start gap-2  w-full'>
//                                     <h1 className='text-xl text-black font-semibold dark:text-white'>
//                                         {item.name}
//                                     </h1>
//                                     <p className='dark:text-white text-xl'>{item.about}</p>
//                                     <div id='icons' className='flex justify-center items-start gap-4'>
                                
//                                          <div className='flex justify-center items-center gap-2'>
//                                             <MdDashboard className='size-5 text-red-400' />
//                                             <h1 className='dark:text-white text-xl'>{item.area}</h1>
//                                         </div> 
//                                     </div>
//                                     {/* <div className='w-full h-[1px] bg-gray-200 mt-8'></div> */}

//                                     <div id='owner-info' className='flex justify-between items-center w-full mt-2'>
//                                         {/* <div className='flex justify-center items-center gap-2'>
//                                             <FaUserCircle className='size-5 text-red-400' />
//                                             <h1 className='dark:text-white text-xl'>{item.owner}</h1>
//                                         </div> */}

                                       
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     }
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Properties;

import React, { useState, useEffect } from "react";
import { property } from '../export';
import { FaBath, FaShareAlt, FaBed, FaPlus, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Properties.css'; // Import the CSS file

const Properties = () => {
    const [modalImage, setModalImage] = useState(null); // State for the modal image

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);

    // Function to handle image click and open modal
    const openModal = (image) => {
        setModalImage(image);
    };

    // Function to close the modal
    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <div>
            <section id='properties' className="properties-section">
                <div className='properties-header'>
                    <h1 data-aos='zoom-in' className="properties-title">PROPERTIES</h1>
                    <h1 data-aos='zoom-in' className="properties-subtitle">Explore the latest</h1>
                </div>
                <div id='grid-box' className='properties-grid'>
                    {
                        property.map((item, index) => (
                            <div 
                                data-aos='zoom-in' 
                                data-aos-delay="200" 
                                key={index} 
                                className='property-card'
                                onClick={() => openModal(item.images)} // Open modal on click
                            >
                                <div id='image-box' className='property-image' style={{ backgroundImage: `url(${item.images})` }}>
                                    <div id='top' className='property-card-top'>
                                        <div className='property-icons'>
                                            <div className='property-icon'>
                                                <FaShareAlt className='icon-color'/>
                                            </div>
                                            <div className='property-icon'>
                                                <FaHeart className='icon-color'/>
                                            </div>
                                            <div className='property-icon'>
                                                <FaPlus className='icon-color'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div id='bottom' className='property-card-bottom'>
                                        <div className='property-location'>
                                            <FaMapMarkerAlt className='location-icon' />
                                            <h1 className='location-text'>{item.address}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className='property-details'>
                                    <h1 className='property-name'>{item.name}</h1>
                                    <p className='property-description'>{item.about}</p>
                                    <div id='icons' className='property-info'>
                                        <div className='property-info-item'>
                                            <MdDashboard className='icon-color' />
                                            <h1 className='property-area'>{item.area}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* Modal */}
                {modalImage && (
                    <div className="modal" onClick={closeModal}>
                        <span className="close">&times;</span>
                        <img className="modal-content" src={modalImage} alt="Zoomed Property" />
                    </div>
                )}
            </section>
        </div>
    );
}

export default Properties;
