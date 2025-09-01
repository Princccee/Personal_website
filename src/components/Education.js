import React from "react";

const education = [
  {
    degree: "B.Tech in Computer Science",
    university: "IIIT Dharwad",
    year: "Nov 2022 - Present",
    detail: "GPA: 8.22",
  },
  {
    degree: "Intermediate in PCM",
    university: "Guru Vasisth High School",
    year: "April 2019 - June 2021",
    detail: "Percentage: 84.6%",
  },
  {
    degree: "Matriculation",
    university: "St Xavier's High School",
    year: " Jan 2009 - May 2019",
    detail: "Percentage: 92.8%",
  },
];

const Education = () => {
  return (
    <div className="timeline" id="education">
      <div className="timeline-container">

        {education.map((item, index) => (
          <div key={index} className={`timeline-row ${index%2===0 ? "timeline-left" : "timeline-right" }`}>
            <div className="timeline-content active">
            <h3 className="timeline-heading">{item.degree}</h3>
              <p className="timeline-subheading">{item.university}</p>
              <p className="timeline-duration">{item.year}</p>
              <p className="timeline-detail">{item.detail}</p>
            </div>

            <div className="timeline-content" />
          </div>
        ))}
      </div>
      <div className="timneline-spine"> </div>
    </div>
  );
}

export default Education;
