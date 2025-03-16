import React, { useState } from "react";
import Contact from "./AboutCompartments/contact";

import data from "./AboutCompartments/Accordian/data";
import Title from "./AboutCompartments/Accordian/Title";
import Content from "./AboutCompartments/Accordian/Content";
import GitHubProfile from "./AboutCompartments/GitHubProfile";
export default function About() {
  const [activeTab, setActiveTab] = useState(data[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const [personalInfoOpen, setPersonalInfoOpen] = useState(true);
  const [contactOpen, setContactOpen] = useState(true);

  const togglePersonalInfo = () => {
    setPersonalInfoOpen(!personalInfoOpen);
  };

  const toggleContact = () => {
    setContactOpen(!contactOpen);
  };

  return (
    <div className="MySection" id="about-me">
      <div className="row border-top border-bottom m-0">
        <div className="col-md-1 sidebarAbout p-0 pt-5 justify-content-center d-flex">
          <div className="d-flex flex-column gap-4 ">
            <a
              className=" pe-cursor link-offset-2 link-underline-opacity-0"
              href="#"
            >
              <i className="bi bi-house "></i>
            </a>
            <a
              className="link-offset-2 link-underline-opacity-0 pe-cursor"
              href="#about-me"
            >
              <i className="bi bi-file-person "></i>
            </a>
            <a
              className="link-offset-2 link-underline-opacity-0 pe-cursor"
              href="#projects"
            >
              <i className="bi bi-cast "></i>
            </a>
            {/* <a
              className="link-offset-2 link-underline-opacity-0 pe-cursor"
              href="#contact"
            >
              <i className="bi bi-person-lines-fill "></i>
            </a> */}
          </div>
        </div>

        {/* Personal Info */}

        <div className="col-md-2 m-0 p-0 infoTitle border-end ">
          <div>
            <h3
              onClick={togglePersonalInfo}
              className={
                personalInfoOpen
                  ? "active small px-3 py-2 pe-cursor m-0 "
                  : "small px-3 py-2 border-bottom"
              }
            >
              Personal Info
            </h3>
            {personalInfoOpen && (
              <Title
                tabs={data}
                activeTab={activeTab}
                handleTabClick={handleTabClick}
              ></Title>
            )}
          </div>
          <div>
            <h3
              onClick={toggleContact}
              className={
                "border-top contactTab pe-cursor small px-3 py-2 mt-5 mb-0" +
                (contactOpen ? " active" : " border-bottom")
              }
            >
              Contact
            </h3>
            {contactOpen && <Contact></Contact>}
          </div>

          <div className="accordion" id="accordionExample"></div>
        </div>
        <div className="col-md-6 p-0 bodyContainerText">
          <Content tabs={data} activeTab={activeTab}></Content>
        </div>
        <div className="col-md-3 p-0 GitRepository ">
          <GitHubProfile></GitHubProfile>
        </div>
      </div>
    </div>
  );
}
