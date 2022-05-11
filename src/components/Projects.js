import "../styles/Projects.css";

export default function Projects() {
  const projectsData = require("../data/projects.json");
  console.log(projectsData);
  return (
    <div className="projects" id="projects">
      <h2 className="projects-section-header">My current projects</h2>

      <div className="projects-grid"></div>
      {projectsData.map((project) => {
        return (
          <div className="project" key={project.title}>
            <a href={project.link} target="_blank" rel="noreferrer" className="project-tile">
              <img
                className="project-image"
                src={project.img}
                alt={project.title + " image"}
              />
              <p className="project-title">
                <span className="code">&lt;</span>
                {project.title}
                <span className="code">&#47;&gt;</span>
              </p>
              <p className="project-description">{project.description}</p>{" "}
            </a>
          </div>
        );
      })}
    </div>
  );
}
