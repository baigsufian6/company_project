import React from 'react';
import { useDarkMode } from '../DarkModeContext'; // Corrected path
import { FaBriefcase, FaLocationArrow, FaCalendarDay } from 'react-icons/fa';

const CareerPage = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? 'dark bg-black text-white' : 'light bg-gray-100 text-gray-800'} min-h-screen`}>
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Join Our Team</h1>
        <p className="text-xl mt-2">Explore exciting career opportunities at Rohan Infra.</p>
      </header>

      <section className="px-10 py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Current Openings</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Job Listing Example */}
            <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-3">Team Leader</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Lead and manage the team.</p>
              <div className="flex items-center mb-3">
                <FaBriefcase className="text-gray-500 mr-2" />
                <span>Full-Time</span>
              </div>
              <div className="flex items-center mb-3">
                <FaLocationArrow className="text-gray-500 mr-2" />
                <span>Rajajinagar, Bangalore</span>
              </div>
              <div className="flex items-center mb-3">
                <FaCalendarDay className="text-gray-500 mr-2" />
                <span>Apply By: 30th September 2024</span>
              </div>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">Apply Now</button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-3">Business Development Executive</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Responsible for identifying new business opportunities, building client relationships, and driving sales growth for the company.</p>
              <div className="flex items-center mb-3">
                <FaBriefcase className="text-gray-500 mr-2" />
                <span>Full-Time</span>
              </div>
              <div className="flex items-center mb-3">
                <FaLocationArrow className="text-gray-500 mr-2" />
                <span>Rajajinagar, Bangalore</span>
              </div>
              <div className="flex items-center mb-3">
                <FaCalendarDay className="text-gray-500 mr-2" />
                <span>Apply By: 30th September 2024</span>
              </div>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">Apply Now</button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-3">Digital Marketing Intern</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Assist with online marketing campaigns and manage social media accounts.</p>
              <div className="flex items-center mb-3">
                <FaBriefcase className="text-gray-500 mr-2" />
                <span>Internship</span>
              </div>
              <div className="flex items-center mb-3">
                <FaLocationArrow className="text-gray-500 mr-2" />
                <span>Rajajinagar, Bangalore</span>
              </div>
              <div className="flex items-center mb-3">
                <FaCalendarDay className="text-gray-500 mr-2" />
                <span>Apply By: 30th September 2024</span>
              </div>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">Apply Now</button>
            </div>

            {/* Repeat the above block for other job listings */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CareerPage;
