import React, { useEffect, useState } from "react";
import axios from "axios";
import podcast from "../Project_image/podcast.png";
import vivekresumebuilder from "../Project_image/vivekresumebuilder.png";
import vivekspace from "../Project_image/vivekspace.png";
import viway from "../Project_image/viway.png";
import Windows from "../Project_image/homeWindows.png";
import mac from "../Project_image/finderMAC.png";
import vivekroom from "../Project_image/Vivek's_Room.png";
import Govhub from "../Project_image/GovHub.png";
import Jewellery from "../Project_image/jewellery.png";
import vivekcodex from "../Project_image/vivekcodex.png";
import vivekpassx from "../Project_image/vivekpassx.png";
import Youtube from "../Project_image/Youtube.png";
import vivekportfoliox from "../Project_image/vivekportfoliox.png";

const ProjectTabs = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedCategoryName, setSelectedCategoryName] = useState("");

  const projects = [
    {
      id: "manual_project",
      name: "BuildMyResume",
      image: vivekresumebuilder,
      liveLink: "https://vivekresumebuilder.vercel.app/",
      description:
      "You can build a comprehensive, professional resume that effectively showcases your qualifications and makes a strong impression on potential employers.",
      imageWidth: 400,
      imageHeight: 200,
    },
    {
      id: "manual_project",
      name: "Vivek Space",
      image: vivekspace,
      liveLink: "https://vivekspace.vercel.app/",
      description:
      "A showcase of rooms and spaces I’ve built, blending design, functionality, and craftsmanship. Each project reflects my commitment to quality and creating environments that inspire.",
      imageWidth: 400,
      imageHeight: 200,
    },
    {
      id: "manual_project",
      name: "MAC OS",
      image: mac,
      liveLink: "https://vivekmac.vercel.app/",
      description:
        "This project was built to serve as a macOS-inspired operating system, enabling users to experience a refined, Apple-style interface without being confined to proprietary hardware or software limitations.",
      imageWidth: 400,
      imageHeight: 200,
    },
    
    {
      id: "manual_project",
      name: "Windows OS",
      image: Windows,
      liveLink: "https://vivekcore.vercel.app/",
      description:
        "The goal of this platform is to serve as a Windows-inspired operating system, offering a centralized experience for users seeking a familiar yet independently developed desktop environment.",
      imageWidth: 400,
      imageHeight: 200,
    },
     {
      id: "manual_project",
      name: "Vivek's Room",
      image: vivekroom,
      liveLink: "https://vivekroom.vercel.app/",
      description:
        "This immersive 3D portfolio presents my work through a modern digital room setup where each device—from PCs to mobile phones—runs a personalized Windows clone I developed, illustrating cross-device consistency and UI/UX design capabilities.",
      imageWidth: 400,
      imageHeight: 200,
    },
     {
      id: "manual_project",
      name: "Vi Way",
      image: viway,
      liveLink: "https://viway.vercel.app/",
      description:
        "ViWay is a travel vlog platform that curates and showcases engaging travel content. It offers a seamless user experience for discovering and enjoying travel vlogs from various destinations.",
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
      name: "vivekportfoliox",
      image: vivekportfoliox,
      liveLink: "https://vivekportfoliox.netlify.app/",
      description:
        "You can create your portfolio using this website in just four simple steps. Follow the process & your beautiful portfolio!",
      imageWidth: 400,
      imageHeight: 200,
    },
    {
      id: "manual_project",
      name: "Find government job",
      image: Govhub,
      liveLink: "https://thevivekchauhan.github.io/GovHub/",
      description:
        "The purpose of this website is to serve as a centralized platform for individuals seeking employment opportunities within government agencies at various levels.",
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
      liveLink:
        "https://podcasts.apple.com/us/podcast/vivek-chauhan/id1526873795",
      description:
        "I focus on delivering insightful content that adds value to others. At the heart of it is a desire to connect with people and build a supportive community.",
      imageWidth: 400,
      imageHeight: 200,
    },
    {
      id: "youtube",
      name: "YouTube",
      image: Youtube,
      liveLink: "https://youtube.com/@thevivekchauhan?si=Rc_JfiGQ0R7XTCod",
      description: "I’m a travel vlogger capturing the beauty, culture, and stories of places I visit. Follow my journey through cinematic travel videos on this channel.",
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
