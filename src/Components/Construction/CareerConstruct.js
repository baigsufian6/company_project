import {React,useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import construction from "./imagess/career-page-img.jpg";
import architect from "./imagess/career-page-img-1.webp";
import potta from "./imagess/CTA-Career-Page.webp";
import { X ,Upload } from 'lucide-react';
import { FaFile } from 'react-icons/fa';
import "./construct.css";

function CareerConstruct() {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="rightcon-career-main-page">
      <JoinUs />
      <CurrentJobOpenings />
      <HowWeBuildOurTeam />
      <NextChapter />
    </div>
  );
}

function JoinUs() {
  return (
    <section className="rightcon-join-us">
      <h1 className="rightcon-join-us__title">Join Us Today!</h1>
      <h2 className="rightcon-join-us__subtitle">
        Design Your <span className="rightcon-highlight">Career</span>, Design
        the <span className="rightcon-highlight">Future</span>
      </h2>
      <p className="rightcon-join-us__description">
        Where Every Role Contributes to Building a Promising Tomorrow.
      </p>
      <div className="rightcon-join-us__image-container">
        <img
          src={construction}
          alt="Construction worker"
          className="rightcon-join-us__image"
        />
        <img
          src={architect}
          alt="Architect"
          className="rightcon-join-us__image"
        />
      </div>
    </section>
  );
}

function CurrentJobOpenings() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/construction/contact"); // This will navigate to the Career page
  };

  const [showApplyModal, setShowApplyModal] = useState(false);
  const [filename, setFilename] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [resume, setResume] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const jobs = [
    {
      title: "Site Engineer",
      experience: "2 Years of Experience",
      description:
        "Responsible for overseeing construction activities, ensuring adherence to project specifications and timelines. Collaborate with project managers and subcontractors to address site issues.",
    },
    {
      title: "Project Head",
      experience: "4 Years of Experience",
      description:
        "Lead architectural design projects, managing a team of architects and designers. Develop creative and innovative design solutions, ensuring compliance with building codes and client requirements.",
    },
    {
      title: "Interns",
      experience: "Freshers",
      description:
        "Support architectural teams in various stages of design and planning. Assist in drafting and rendering, conduct research, and contribute to project meetings. Ideal for architecture students or recent graduates seeking hands-on experience.",
    },
    {
      title: "Sales Executives",
      experience: "2-3 Years of Experience",
      description:
        "Drive sales and meet targets for construction-related products or services. Identify and cultivate new business opportunities, build relationships with clients, and provide product knowledge.",
    },
  ];

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowApplyModal(true); // Show modal on button click
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]); // Store uploaded resume
  };

  // Regex patterns for validation
  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', phone: '' };

    // Name should only contain alphabets and spaces
    if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name should only contain alphabets and spaces.';
      valid = false;
    }

    // Email validation (basic regex for email format)
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }

    // Phone number validation (10 digits)
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number should be 10 digits long.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    // Handle form submission (e.g., send data to backend)
    alert(`Application submitted for ${selectedJob.title} with resume: ${resume?.name}`);
    setShowApplyModal(false); // Close modal after submission
  };

  const handleResumeUploads = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFilename(file.name); // Update the filename state
    }
  };



  return (
    <div>
      <section className="rightcon-job-openings">
        <h2 className="rightcon-job-openings__title">Current Job Openings</h2>
        <div className="rightcon-job-openings__list">
          {jobs.map((job, index) => (
            <div key={index} className="rightcon-job-card">
              <h3 className="rightcon-job-card__title">{job.title}</h3>
              <p className="rightcon-job-card__description">{job.description}</p>
              <p className="rightcon-job-card__experience">{job.experience}</p>
              <button
                className="rightcon-job-card__apply-btn"
                onClick={() => handleApplyClick(job)}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {showApplyModal && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100000]">
       <div className="bg-white p-8 rounded-lg max-w-md w-full shadow-2xl">
         <div className="flex justify-between items-center mb-6">
           <h2 className="text-2xl font-bold text-blue-900">Apply for {selectedJob.title}</h2>
           <button
             onClick={() => setShowApplyModal(false)}
             className="text-blue-900 hover:text-red-600 transition-colors duration-300"
           >
             <X size={24} />
           </button>
         </div>
         <form onSubmit={handleSubmit} className="space-y-4">
           <input
             className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 text-blue-900 placeholder-blue-400"
             type="text"
             name="name"
             placeholder="Your Name"
             value={formData.name}
             onChange={handleFormChange}
             required
           />
           {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
 
           <input
             className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 text-blue-900 placeholder-blue-400"
             type="email"
             name="email"
             placeholder="Your Email"
             value={formData.email}
             onChange={handleFormChange}
             required
           />
           {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
 
           <input
             className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 text-blue-900 placeholder-blue-400"
             type="tel"
             name="phone"
             placeholder="Your Phone Number"
             value={formData.phone}
             onChange={handleFormChange}
             required
           />
           {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
 
           <div className="relative">
           <input
            id="file-upload"
            className="sr-only"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeUploads}
            required
           />
             <label
               htmlFor="file-upload"
               className="flex items-center justify-center w-full p-3 border border-blue-300 rounded-md cursor-pointer bg-blue-50 hover:bg-blue-100 transition-colors duration-300"
             >
               <Upload className="mr-2 text-blue-600" size={20} />
               <span className="text-blue-600">Upload Resume</span>
               {filename && (
              <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded-md">
              <div className="flex items-center flex-wrap">
              <FaFile className="text-blue-500 mr-2 mb-1" />
              <p className="text-sm text-blue-700 font-medium mr-1">Uploaded File:</p>
              <p className="text-sm text-blue-600 break-all">{filename}</p>
              </div>
              </div>
              )}
            </label>
           </div>
 
           <button
             type="submit"
             className="w-full bg-blue-600 text-white p-4 rounded-md hover:bg-blue-700 transition-colors duration-300 font-bold text-lg shadow-md"
           >
             Submit Application
           </button>
         </form>
       </div>
     </div>
      )}
    </div>
  );
}

function HowWeBuildOurTeam() {
  return (
    <section className="rightcon-team-building">
      <h2 className="rightcon-team-building__title">How we build our team?</h2>
      <ul className="rightcon-team-building__list">
        <li className="rightcon-team-building__item">
          See all our openings on the hiring portal & directly apply with your
          CV, Cover Letter and Portfolio (wherever applicable).
        </li>
        <li className="rightcon-team-building__item">
          Don't see a suitable role? We might have bigger plans for you! Drop a
          line at careers. rohaninfrabuilderrs@gmail.com
        </li>
        <li className="rightcon-team-building__item">
          If you know an ex employee or have worked with one, ask for their
          referral code and mention it when you apply via our hiring portal.
        </li>
        <li className="rightcon-team-building__item">
          There's no humble way to put it - we receive hundreds of CVs every day
          and we're grateful for your love but you might experience some delay
          in our response.
        </li>
        <li className="rightcon-team-building__item">
          Rest assured, if we do see a right fit, our HR team will reply to your
          email within 7-14 working days. If unfortunately, the stars don't
          align, don't lose hope, as we'll keep your CV on record for future
          opportunities.
        </li>
      </ul>
    </section>
  );
}

function NextChapter() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/construction/contact"); // This will navigate to the Career page
  };
  return (
    <div className="wraping">
      <section className="rightcon-next-chapter">
        <div className="flexing">
          <h2 className="rightcon-next-chapter__title">
            Your next chapter begins here reach out, apply, and join the
            Rohan Infra family today!
          </h2>
          <button
            className="rightcon-next-chapter__join-btn"
            onClick={handleClick}
          >
            Join Now
          </button>
        </div>
      </section>
      <img
        src={potta}
        alt="Students"
        className="rightcon-next-chapter__image"
      />
    </div>
  );
}

export default CareerConstruct;
