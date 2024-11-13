import React, { useState, useEffect, useRef } from 'react';
import './style/Experience.css';

const experienceData = [
  {
    title: "Software Developer",
    company: "Andromeda360",
    date: "September 2024 - December 2024",
    description: "Developed software using cloud computing and open source libraries in Python",
    details: "Developed and deployed OpenAI’s GPT-4 and Groq’s ChatGroq models on the Banavo AI Platform for customer segmentation, anomaly detection, and conversational analytics, integrating AWS API. They created and tested end-to-end ML workflows with open-source tools (LangChain, FastAPI, Boto3) covering dataset selection, data transformation, and model training. Aditya also authored technical documentation, blog posts, and a research report on custom data training for LLMs and autonomous agent framework development.",
    image: `${process.env.PUBLIC_URL}/images/Andromeda360.jpg`,
  },
  {
    title: "AI Developer",
    company: "Counting Opinions",
    date: "December 2023 - May 2024",
    description: "Developed an AI based custom user data representation tool for clients",
    details: "Developed an AI-powered data visualization chatbot using OpenAI’s GPT model, allowing users to generate insights and visualizations with Python libraries like Plotly and Matplotlib. Managed large datasets of over a million data points, improved legacy programs to increase data usability by 25%, and created complex retrieval-augmented generation (RAG) pipelines. Led a small developer team while overseeing project timelines and deliverables.",
    image: `${process.env.PUBLIC_URL}/images/countingopinions.jpeg`,
  },
  {
    title: "Software Solutions Intern",
    company: "Bruce Power",
    date: "February 2023 - June 2023",
    description: "Led large-scale technology updates and software installations...",
    details: "Led a major legacy technology removal project, updating over 10,000 infrastructure items, installing critical software on 400+ computers, and conducting quality assurance testing with detailed reports on bugs and improvements. Worked with IT technicians to install and update technology, resolving user software issues.",
    image: `${process.env.PUBLIC_URL}/images/bruce-power.png`,
  },
];

const Experience = () => {
  const [selected, setSelected] = useState(null);
  const itemsRef = useRef([]);

  const handleClick = (index) => {
    setSelected(index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting && selected !== index) {
            entry.target.classList.add('active');
          } else if (selected !== index) {
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, [selected]);

  return (
    <div className="experience-container">
      <h1>Experience</h1>
      <div className="timeline">
        {experienceData.map((experience, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className={`timeline-item ${selected === index ? 'selected' : ''}`}
            onClick={() => handleClick(index)}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h2>{experience.title} - {experience.company}</h2>
              <p className="timeline-date">{experience.date}</p>
              <p className="timeline-description">{experience.description}</p>
              {selected === index && (
                <div className="timeline-details">
                  <p>{experience.details}</p>
                </div>
              )}
            </div>
            <img
              src={experience.image}
              alt={`${experience.title} at ${experience.company}`}
              className="timeline-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;