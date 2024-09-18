import React, { useState } from 'react';
import './CareerPlot.css'; // Import the CSS file
import page1 from '../Assets/Email1.png';
import page2 from '../Assets/Email2.png';
import page3 from '../Assets/Email3.png';
import Footer from '../FooterPlot';
import Man from '../Assets/person2.png'

const Career = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    designation: '',
    resume: null,
  });

  // State for job positions
  const [jobPositions] = useState([
    {
      title: 'Team Leader',
      description: 'Responsible for managing and motivating a team of  sales representatives to achieve sales targets and drive revenue growth',
      location: 'Rajajinagar 6th Block',
      workMode:'offline',
      applyLink: 'rohaninfrabuilderrs@gmail.com',
    },{
      title: 'Business Development Executive',
      description: 'Responsible for identifying new business opportunities and partnerships.',
      location: 'Rajajinagar 6th Block',
      workMode: 'offline',
      applyLink: 'rohaninfrabuilderrs@gmail.com',
},

{
  title: 'Digital Marketing',
  description: 'Manage digital campaigns, SEO, and social media strategies to boost online presence.',
  location: 'Rajajinagar 6th Block',
  workMode: 'offline',
  applyLink: 'rohaninfrabuilderrs@gmail.com',
}

  ]);

  // Handler for form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <>
    <div className="marquee-container">
      <div className="marquee">
        <p>The future belongs to those who believe in the beauty of their dreams.</p>
      </div>
    </div>
      <div className='banner'>
        <img src={page1} alt="Banner Image 1" />
        <img src={page2} alt="Banner Image 2" />
        <img src={page3} alt="Banner Image 3" />
      </div>

      {/* Positions Container */}
      <div className="positions-container">
         <div className='position'>
         <h2>Available Positions</h2>
         </div>
        <div className='cards'>
        {jobPositions.map((position, index) => (
          <div key={index} className="position-item">
            <h3>{position.title}</h3>
            <p className="position-description">{position.description}</p>
            <p className="position-location">Location: {position.location}</p>
            <p className="position-salary">workMode: {position.workMode}</p>
            <a
              href={position.applyLink}
              className="apply-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </div>
        ))}
        </div>
      </div>

      {/* Careers Page */}
      
      <div className='submit-page'>
        <div>
          <img src={Man}></img>
        </div>
      <div className="careers-page">
        {/* Form Container */}
        <div className="form-container">
          <h2>SEND YOUR RESUME</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <select
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                required
              >
                <option value="">Select Designation</option>
                <option value="Teameader">Team Leader</option>
                <option value="BDE">BDE</option>
                <option value="DMI">Digital Marketing Intern</option>
              </select>
            </div>
            <div className="form-row">
              <input
                type="file"
                name="resume"
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-button">Apply Now</button>
          </form>
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default Career;
