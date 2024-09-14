import {React,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import construction from "./imagess/career-page-img.jpg";
import architect from "./imagess/career-page-img-1.webp";
import potta from "./imagess/CTA-Career-Page.webp";
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

  return (
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
              onClick={handleClick}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </section>
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
