import React from "react";
import "../styles/Education.css";
import "../styles/global.css";


const Education = () => {
  return (
    <div className="education" id="education">
      {/* Section Heading */}
      <h1 className="section-heading">Education</h1>

      <div className="education-container">
        <div className="education-entry">
          <div className="education-year">2022 - Present</div>
          <div className="education-details">
            <h2>Rajagiri School of Engineering & Technology</h2>
            <p>B.Tech in Computer Science & Engineering</p>
            <p>Kakkanad, Kochi</p>
          </div>
        </div>

        <div className="education-entry">
          <div className="education-year">2020 - 2022</div>
          <div className="education-details">
            <h2>St. Joseph’s School, Kuriachira</h2>
            <p>Higher Secondary Education</p>
            <p>Thrissur, Kerala</p>
          </div>
        </div>

        <div className="education-entry">
          <div className="education-year">2008 - 2020</div>
          <div className="education-details">
            <h2>Don Bosco ICSE School, Mannuthy</h2>
            <p>Schooling (ICSE)</p>
            <p>Thrissur, Kerala</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
