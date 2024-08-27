import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeConstruct from './HomeConstruct';
import NavbarConstruct from './NavbarConstruct';
import ProjectConstruct from './ProjectConstruct';
import FooterConstruct from './FooterConstruct';
import CareerConstruct from './CareerConstruct';

function Page() {
  return (
    <div>
      <NavbarConstruct />
      <Routes>
        <Route index element={<HomeConstruct />} />
        <Route path="projects" element={<ProjectConstruct />} />
        <Route path ="careers" element={<CareerConstruct />} />
        {/* Add more routes as needed */}
      </Routes>
      <FooterConstruct />
    </div>
  );
}

export default Page;