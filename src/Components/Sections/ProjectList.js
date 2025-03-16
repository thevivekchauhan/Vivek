import React, { useEffect, useState } from "react";
import axios from "axios";

const ProjectList = ({ categoryId }) => {
  const [projects, setProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(6); // Number of projects initially visible

  useEffect(() => {
    // Fetch projects by category ID
    axios
      .get(
        `https://mohitgoyal.in/wp-json/wp/v2/project?project-category=${categoryId}`
      )
      .then(async (response) => {
        const projectsData = await Promise.all(
          response.data.map(async (project) => {
            return {
              ...project,
            };
          })
        );
        setProjects(projectsData);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, [categoryId]);

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  const truncateText = (text, limit) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + "...";
  };

  return (
    <div>
      {projects.length > 0 ? (
        <div className="row projectRow px-3">
          {projects.slice(0, visibleProjects).map((project) => (
            <div key={project.id} className="colProject p-0 m-0">
              <div className="card bg-transparent p-0">
                <div className="card-body">
                  <h2 className="card-title projectTitle ">
                    {project.title.rendered}
                  </h2>
                  <p className="card-text small">
                    {truncateText(project.acf.short_description, 74)}
                  </p>
                  <div className="d-flex align-items-center gap-3">
                    <a
                      className="btn gap-2 align-items-center d-flex"
                      href={project.acf.project_link}
                    >
                      <i className="bi bi-eye"></i> preview
                    </a>
                    <a
                      className="btn  gap-2 align-items-center d-flex"
                      href={project.acf.code_link}
                    >
                      {" "}
                      <i className="bi bi-code-slash"></i> view-code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="loader"></div>
      )}
      {visibleProjects < projects.length && (
        <div className="row justify-content-center py-3 ">
          <div className="col-md-4 justify-content-center d-flex">
            <button
              className="btn btn-primary repoBtn "
              onClick={loadMoreProjects}
            >
              _load_more
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
