// src/Pages/Project.js
import React from 'react';
import PopularAreas from './PopularAreas';
import Properties from './Properties';
import { useState, useEffect } from "react";
import { property } from '../export'; // Assuming the property array is imported from another file
import { FaBath, FaShareAlt, FaBed, FaPlus, FaMapMarkerAlt, FaHeart, FaVideo, FaCamera, FaCircle, FaUserCircle } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageModal from './ImageModal'; // Import the modal component
import './Properties.css'; // Import the CSS file
import Footer from '../FooterPlot';


const ProjectPlot = () => {
    return (
        <>
          <div className='popular'>
          <PopularAreas />
          <Properties />
          <Footer/>
          </div>
        </>
    );
};

export default ProjectPlot;
