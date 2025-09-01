import React from 'react';
import { Link as RouterLink, BrowserRouter as Router } from 'react-router-dom';
import './Projects.css';

// Create a context for images
const images = require.context('./images', false, /\.(png|jpe?g|svg)$/);
const icon = require.context('./images/icon', false, /\.(png|jpe?g|svg)$/);

const projects = [
  {
    title: 'QuickPort – Door-to-Door Delivery Application ',
    technologies: ['SpringBoot', 'JWT', 'REST', 'websockets', 'MapBox', 'Razorpay', 'mySql', 'Docker'],
    summary: '',
    screenshot: 'door-to-door-delivery-service.jpg',
    github: 'https://github.com/Princccee/QuickPort',
    // liveURL: 'https://koustubhsahu.github.io/Personal-Website-Template/',
  },
  {
    title: 'Smart-doc AI',
    technologies: ['Django', 'Docker', 'Gemini', 'NLP', 'spaCy', 'Git', 'HTML'],
    summary: '',
    screenshot: 'smart-doc-ai.png',
    github: 'https://github.com/Princccee/Smart-Doc-AI',
    // liveURL: 'https://koustubhsahu.github.io/Personal-Website-Template/',
  },
  {
    title: 'AI-Research Agent System',
    technologies: ['Django', 'Docker', 'Gemini', 'Google custom search', 'Huggingface', 'Kaggle'],
    summary: '',
    screenshot: 'ai-research-agent.jpg',
    github: 'https://github.com/Princccee/Research_agent',
    // liveURL: 'https://koustubhsahu.github.io/Personal-Website-Template/',
  },

  // {
  //   title: 'AI-Research Agent System',
  //   technologies: ['Django', 'Docker', 'Gemini', 'Google custom search', 'Huggingface', 'Kaggle'],
  //   summary: '',
  //   screenshot: 'ai-research-agent.jpg',
  //   github: 'https://github.com/Princccee/Research_agent',
  //   // liveURL: 'https://koustubhsahu.github.io/Personal-Website-Template/',
  // },
  // {
  //   title: 'AI-Research Agent System',
  //   technologies: ['Django', 'Docker', 'Gemini', 'Google custom search', 'Huggingface', 'Kaggle'],
  //   summary: '',
  //   screenshot: 'ai-research-agent.jpg',
  //   github: 'https://github.com/Princccee/Research_agent',
  //   // liveURL: 'https://koustubhsahu.github.io/Personal-Website-Template/',
  // },
  // {
  //   title: 'AI-Research Agent System',
  //   technologies: ['Django', 'Docker', 'Gemini', 'Google custom search', 'Huggingface', 'Kaggle'],
  //   summary: '',
  //   screenshot: 'ai-research-agent.jpg',
  //   github: 'https://github.com/Princccee/Research_agent',
  //   // liveURL: 'https://koustubhsahu.github.io/Personal-Website-Template/',
  // },
  
];

// function getProjectImage(imageName) {
//   // const obj = {backgroundImage: `url(./images/${imageName})`};
//   const obj = {backgroundImage: `url(${images(`./${imageName}`)})`};
//   return obj;
// }

const Projects = () => {
  return (
    <div className="projects section" id="projects">
      <h2>Projects</h2>
      <div className="project-container">

        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div 
              className="project-screenshot"
              style= {project.screenshot ? { backgroundImage: `url(${images(`./${project.screenshot}`)})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' } : {backgroundColor: 'rgba(240,240,240,0.5)'}}
              aria-label={project.title}
            >
              <h2>{project.screenshot ? "" : project.title}</h2>
              <span class="project-summary">{project.summary}
              <span class="project-links">
                <Router>
                  {project.liveURL ? <RouterLink to={project.liveURL} target="_blank"><img src={icon(`./live-link.svg`)} alt="live-link"/></RouterLink> : null}
                  {project.github ? <RouterLink to={project.github} target="_blank"><img src={icon(`./code.svg`)} alt="code"/></RouterLink> : null}
                  {/* <img src={icon(`./live-link.svg`)} alt="live-link"/> */}
                  {/* <img src={icon(`./code.svg`)} alt="code"/> */}
                  {/* <RouterLink to={project.live}><img src={icon(`./live-link.svg`)} alt="live-link"/></RouterLink>
                  <RouterLink to={project.live}><img src={icon(`./live-link.svg`)} alt="live-link"/></RouterLink> */}
                </Router>
              </span>
              </span>
              
            </div>
            <div className="project-content" >
              <h3 class="project-title">{project.title}</h3>
              {/* <p class="project-summary">{project.summary}</p> */}
              <div class="project-technologies">
                {project.technologies.map((technology, index) => (
                  <span key={index} class="project-technology">{technology}</span>
                ))}
              </div>            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
