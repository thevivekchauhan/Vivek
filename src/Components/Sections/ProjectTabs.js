import React, { useEffect, useState } from "react";
import axios from "axios";
import podcast from "../Project_image/podcast.png";
import Govhub from "../Project_image/GovHub.png";
import Jewellery from "../Project_image/jewellery.png";
import vivekcodex from "../Project_image/vivekcodex.png";
import vivekpassx from "../Project_image/vivekpassx.png";
import Youtube from "../Project_image/Youtube.png";


const ProjectTabs = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedCategoryName, setSelectedCategoryName] = useState("");

  const projects = [
    {
      id: "manual_project",
      name: "Find government job",
      image: Govhub,
      liveLink: "https://thevivekchauhan.github.io/GovHub/",
      description:
        "The purpose of this website is to serve as a centralized platform for individuals seeking employment opportunities within government agencies at various levels, including local, state, and federal.",
      imageWidth: 400,
      imageHeight: 200,
    },
    {
      id: "htmlCssJs",
      name: "Jewellery Website",
      image: Jewellery,
      liveLink: "https://thevivekchauhan.github.io/sonu/",
      description:
        "I've designed my portfolio to present my expertise, past projects, and experiences in an attractive format, offering potential employers and clients a detailed look at my capabilities and accomplishments.",
      imageWidth: 400,
      imageHeight: 200,
    },
    {
      id: "react",
      name: "vivekcodex",
      image: vivekcodex,
      liveLink: "https://vivekcodex.netlify.app/",
      description:
        " I have developed this website to help you send secret messages securely. Whether it's for your friends, partner (GF, BF), or siblings, you can share coded messages that only those who know this website can understand, so share the link. Keep your conversations private and secure.",
      imageWidth: 400,
      imageHeight: 200,
    },
    {
      id: "react",
      name: "vivekpassx",
      image: vivekpassx,
      liveLink: "https://vivekpassx.netlify.app/",
      description:
        " I have developed this website to help how strong your password is. It is a password strength checker tool that helps you to create a strong password. It is a free online tool that helps you to create a strong password.",
      imageWidth: 400,
      imageHeight: 200,
    },
    {
      id: "podcasts",
      name: "Podcast",
      image: podcast,
      liveLink: "https://podcasts.apple.com/us/podcast/vivek-chauhan/id1526873795",
      description:
        "I share valuable insights, second is that building a community or connecting with individuals.",
      imageWidth: 400,
      imageHeight: 200,
    },
    {
      id: "youtube",
      name: "YouTube",
      image: Youtube,
      liveLink: "https://youtube.com/@thevivekchauhan?si=Rc_JfiGQ0R7XTCod",
      description: "This is my YouTube channel and I am a travel vlogger.",
      imageWidth: 400,
      imageHeight: 200,
    },
  ];

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div className="MySection" id="projects">
      <div className="row tabsCategory border-top border-end border-bottom">
        <div className="col-md-2 m-0 p-0 border-end">
          <div className="border-bottom">
            <h3 className="p-2 m-0 small border-end">Live_Projects</h3>
          </div>

          <ul className="TabTitle pe-3 pt-3">
            {categories.map((category) => (
              <li
                key={category.id}
                className={`itemCategory ${
                  selectedCategoryId === category.id ? "active" : ""
                }`}
              >
                <label className="form-check-label d-flex justify-content-between">
                  <div className="d-flex justify-content-start">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedCategoryId === category.id}
                      onChange={() => handleCategoryChange(category.id)}
                    />
                    {category.name}
                  </div>
                  <span className="badge CatCount">{category.count}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-10 p-0 myCatT">
          <div className="border-bottom">
            <h3 className="p-2 m-0 small catName border-end">
              {selectedCategoryName} <i className="bi bi-x"></i>
            </h3>
          </div>

          <div className="categoryProjectList p-3">
            {/* Projects Section */}
            <div className="tab-content active">
              <div className="row">
                {projects.map((project, index) => (
                  <div key={project.id} className="col-md-6 mb-4">
                    <div className="project-card border p-3 rounded">
                      <h5 className="card-title">{project.name}</h5>
                      <img
                        src={project.image}
                        alt={project.name}
                        className="img-fluid rounded mb-3"
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          width: project.imageWidth,
                          height: project.imageHeight,
                        }}
                      />
                      <p className="card-text">{project.description}</p>
                      <a
                        href={project.liveLink}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Live Project
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* End Projects Section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTabs;
