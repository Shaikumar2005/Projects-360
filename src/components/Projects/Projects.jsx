import "./Projects.css";

import ecommerce from "../../assets/E-Commerce.jpg";
import banking from "../../assets/banking.jpg";

function Projects() {
  const projects = [
    {
      image: ecommerce,
      title: "E-Commerce Management System",
      category: "Successful Project",
      desc: "A complete online platform with product management, order tracking, secure payments, and customer analytics."
    },
    {
      image: banking,
      title: "Digital Banking Solution",
      category: "Successful Project",
      desc: "A modern banking application featuring account management, fund transfers, transaction history, and security integration."
    }
  ];

  return (
    <section className="projects" id="projects">

      <div className="projects-header">
        <span>OUR PROJECTS</span>

        <h2>
          Successful Projects We Have
          <span> Delivered</span>
        </h2>

        <p>
          We transform innovative ideas into real-world solutions
          that create value for businesses and customers.
        </p>
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <img
              src={project.image}
              alt={project.title}
            />

            <div className="project-overlay">

              <span>{project.category}</span>

              <h3>{project.title}</h3>

              <p>{project.desc}</p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;