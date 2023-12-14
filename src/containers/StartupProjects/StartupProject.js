import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
       
      <div className="projects-container ">
        {bigProjects.projects.map((project, i) => {
          return (
            <div className="card-wrap" key={i}>
              <div className={`card-header ${project.class}`}>
              
                  <img
                    src={project.image}
                    alt={project.projectName}
                    className="card-image"
                  ></img>
            
              </div>
              <div className="card-content">
                <h1 className="card-title">{project.projectName}</h1>
                <p className="card-text">{project.projectDesc}</p>
                <button
                  className={`card-btn ${project.class}`}
                  onClick={() => openUrlInNewTab(project.url)}
                >
                  View
                </button>
              </div>
            </div>
          );
        })}
       
     
      </div>
      </div>
    </Fade>
  );
}
