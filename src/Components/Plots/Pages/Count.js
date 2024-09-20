import React, { useEffect, useState } from "react";
import "./Count.css"; // Link to your CSS file

const StatItem = ({ target, text }) => {

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Animation duration in milliseconds
    const increment = target / duration * 10;

    const updateCount = () => {
      start += increment;
      if (start < target) {
        setCount(Math.ceil(start));
        setTimeout(updateCount, 10); // Update every 10ms
      } else {
        setCount(target);
      }
    };
    updateCount();
  }, [target]);

  return (
    <div className="stat-item">
      <span className="stat-target">{count}+</span>
      <span className="stat-text">{text}</span>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="stats">
      <StatItem target={2} text="Branches" />
      <StatItem target={1000} text="Happy Customers" />
      <StatItem target={30} text="Projects" />
    </div>
  );
};

export default Stats;
