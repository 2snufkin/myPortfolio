import React from "react";
import GithubRepoCard from "../githubRepoCard/GithubRepoCard"; // Assuming the component file is in the same directory

const ProjectSection = ({ theme, projects, title }) => {
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <div style={{ marginTop: "5rem" }}>
        <h2
          className="project-title"
          style={{
            color: theme.highlight,
            backgroundColor: theme.imageHighlight,
          }}
        >
          {title}
        </h2>
      </div>

      <div className="repo-cards-div-main">
        {projects.map((project) => (
          <GithubRepoCard key={project.id} repo={project} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
