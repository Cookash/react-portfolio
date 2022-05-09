import "../styles/Projects.css";

export default function Projects() {
    const [project, updateProjects]
  return (
    <div className="projects" id="projects">
      <h2 class="projects-section-header">My current projects</h2>

      <div class="projects-grid">
        <div className="project project-name">
          <a href="/" target="_blank" class="project-tile">
            <img
              class="project-image"
              src="https://th.bing.com/th/id/R.3a3f3324c1a7c2b087f3e14e62fcc34b?rik=OjHjB66yHgcWfw&pid=ImgRaw&r=0"
              alt="project"
            />
            <p class="project-title">
              <span class="code">&lt;</span>
              Title
              <span class="code">&#47;&gt;</span>
            </p>
          </a>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
}
