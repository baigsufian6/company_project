import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeConstruct from './HomeConstruct';
import NavbarConstruct from './NavbarConstruct';
import ProjectConstruct from './ProjectConstruct';
import FooterConstruct from './FooterConstruct';
import CareerConstruct from './CareerConstruct';
import ContactConstruct from './ContactConstruct';
import AboutConstruct from './AboutConstruct';
import Calculate from './Calculate';

function Page() {
  return (
    <div>
      <NavbarConstruct />
      <Routes>
        <Route index element={<HomeConstruct />} />
        <Route path="projects" element={<ProjectConstruct />} />
        <Route path ="careers" element={<CareerConstruct />} />
        <Route path ="contact" element={<ContactConstruct />} />
        <Route path ="about" element={<AboutConstruct />} />
        <Route path ="calculate" element={<Calculate />} />
        {/* Add more routes as needed */}
      </Routes>
      <FooterConstruct />
    </div>
  );
}

export default Page;