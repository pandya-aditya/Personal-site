import React from 'react';
import './style/Resume.css'; // Import the CSS file

const Resume = () => {
  // Define the path to the resume PDF
  const resumePath = `${process.env.PUBLIC_URL}/Aditya_Pandya_Resume.pdf`;

  return (
    <div className="resume-container">
      <h1 className="resume-header">Resume</h1>

      {/* Display the resume PDF */}
      <iframe
        src={resumePath}
        title="Resume PDF"
        className="resume-iframe"
      ></iframe>

      {/* Download button */}
      <a href={resumePath} download="Aditya_Pandya_Resume.pdf">
        <button className="resume-button">Download Resume</button>
      </a>
    </div>
  );
};

export default Resume;
