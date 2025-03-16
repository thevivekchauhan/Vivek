import React, { useEffect, useState } from "react";
import axios from "axios";

function GitHubRepositories() {
  const [repositories, setRepositories] = useState([]);
  const [visibleRepositories, setVisibleRepositories] = useState(5);

  useEffect(() => {
    async function fetchRepositories() {
      try {
        const response = await axios.get(
          "https://api.github.com/users/thevivekchauhan/repos?sort=updated&direction=desc"
        );
        setRepositories(response.data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    }

    fetchRepositories();
  }, []);
  const loadMoreRepositories = () => {
    setVisibleRepositories(
      (prevVisibleRepositories) => prevVisibleRepositories + 5
    );
  };

  return (
    <div className="githubData">
      {repositories.length > 0 ? (
        <div className="border-end">
          <h3 className="border-bottom  small p-2  m-0">_my_repository</h3>
          <div className="row gap-3 projectSidbar  m-0">
            {repositories.slice(0, visibleRepositories).map((repository) => (
              <div className="col border-bottom p-2" key={repository.id}>
                <div className="card ">
                  <div className="card-body">
                    <div className="imageProfie row align-items-center mb-3">
                      <div className="col-md-3">
                        <img
                          className="profileImage"
                          src={repository.owner.avatar_url}
                          alt={repository.name}
                        />
                      </div>
                      <div className="col-md-9 small ">
                        <h3 className=" small m-0">{repository.owner.login}</h3>
                        <p className="small m-0">
                          _updated_at:
                          {new Date(repository.updated_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="respeDetails border p-3 rounded">
                      <h5 className="card-title">{repository.name}</h5>
                      <h6 className="card-title small">
                        language: {repository.language}
                      </h6>
                      <a
                        href={repository.html_url}
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        _visit-repository_
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {visibleRepositories < repositories.length && (
            <div className="text-center py-2 border-end border-top loadMore">
              <button className="btn  " onClick={loadMoreRepositories}>
                Load More <i className="bi bi-arrow-clockwise"></i>
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="loader "></div>
      )}
    </div>
  );
}

export default GitHubRepositories;
