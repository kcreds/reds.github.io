function selectButton(buttonType) {
    const ownBtn = document.getElementById("own");
    const commercialBtn = document.getElementById("commercial");
  
    ownBtn.classList.remove("btn-custom-active");
    commercialBtn.classList.remove("btn-custom-active");
  
    const ownProjects = document.querySelectorAll("#own-projects .projects-item");
    const commercialProjects = document.querySelectorAll("#commercial-projects .projects-item");
    const separators = document.querySelectorAll(".project-separator");
  
    if (buttonType === 'own') {
      ownBtn.classList.add("btn-custom-active");
  
      ownProjects.forEach((project, index) => {
        project.style.animationDelay = `${index * 0.2}s`;
        project.classList.remove("hidden");
        project.classList.add("projects-slide-top");

        separators.forEach((separator, index) => {
            separator.classList.remove("animate-separator");
          });
      });
  
      commercialProjects.forEach(project => {
        project.classList.add("hidden");
        project.classList.remove("projects-slide-top");
      });
    } else {
      commercialBtn.classList.add("btn-custom-active");
  
      commercialProjects.forEach((project, index) => {
        project.style.animationDelay = `${index * 0.2}s`;
        project.classList.remove("hidden");
        project.classList.add("projects-slide-top");
      });

      separators.forEach((separator, index) => {
        separator.classList.remove("animate-separator");
        setTimeout(() => separator.classList.add("animate-separator"), index * 2); // Opóźnienie
      });
  
      ownProjects.forEach(project => {
        project.classList.add("hidden");
        project.classList.remove("projects-slide-top");
      });
    }
  }

// Domyślnie wybierz opcję "Własne"
window.addEventListener('DOMContentLoaded', (event) => {
    selectButton('own');
});