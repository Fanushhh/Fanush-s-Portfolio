import {projectDetails} from "./data.js";

const hamburgerButton = document.querySelector(".hamburger");
const navbar = document.querySelector("nav ul");
const projectContainer = document.querySelector(".projects-grid-container");
hamburgerButton.addEventListener("click", function () {
  navbar.classList.toggle("show");
});

function loadData(data) {
  data.map((project) => {
    return (projectContainer.innerHTML += `
        <div class="project">
                <div class="project-img-container">
                  <img
                    src=${project.img}
                    alt=${project.description}
                  />
                  <div class="project-links">
                    <a target="_blank" href=${project.github}
                      ></i>github</a
                    >
                    <a target="_blank" href=${project.url}
                      >live site</a
                    >
                  </div>
                </div>
                <div class="project-description">
                  <div class="project-details">
                    <p class="project-title">
                      ${project.name}
                      
                    </p>
                    
                  </div>
                  <div class="project-skills">
                    ${project.tech.map((tech) => {
                      return `<span> ${tech}</span>`;
                    })}
                  </div>
                  
                </div>
              </div>
        
        `);
  });
}

loadData(projectDetails);
