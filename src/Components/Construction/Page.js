import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeConstruct from './HomeConstruct';
import NavbarConstruct from './NavbarConstruct';
import ProjectConstruct from './ProjectConstruct';
import FooterConstruct from './FooterConstruct';

function Page() {
  return (
    <div>
      <NavbarConstruct />
      <Routes>
        <Route index element={<HomeConstruct />} />
        <Route path="projects" element={<ProjectConstruct />} />
        {/* Add more routes as needed */}
      </Routes>
      <FooterConstruct />
    </div>
  );
}

export default Page;