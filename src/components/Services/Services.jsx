import "./Services.css";

import consultancy from "../../assets/consultancy.jpg";
import project from "../../assets/project.jpg";
import internship from "../../assets/internship.jpg";
import uiux from "../../assets/uiux.jpg";
import patent from "../../assets/patent.jpg";
import research from "../../assets/research.jpg";

function Services() {

  const services = [
    {
      image: consultancy,
      title: "Consultancy",
      desc: "Professional consulting services to guide businesses towards growth and success.",
      price: "Contact for Quote"
    },
    {
      image: project,
      title: "Project Development",
      desc: "End-to-end project planning, execution and management solutions.",
      price: "Starts at ₹1,500"
    },
    {
      image: internship,
      title: "Internship Programs",
      desc: "Industry-oriented internship opportunities with practical exposure.",
      price: "Starts at ₹99"
    },
    {
      image: uiux,
      title: "UI/UX Design",
      desc: "Modern user interface and user experience design solutions.",
      price: "Starts at ₹299"
    },
    {
      image: patent,
      title: "Patent Support",
      desc: "Guidance and assistance for patent filing and innovation protection.",
      price: "Contact for Quote"
    },
    {
      image: research,
      title: "Research & Development",
      desc: "Advanced research solutions to support innovation and technological growth.",
        price: "Starts at ₹799"
    }
  ];

  return (
    <section className="services" id="services">

      <div className="section-header">
        <span>OUR SERVICES</span>
        <h2>
          Solutions Designed For Success
        </h2>
      </div>

      <div className="services-grid">

        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>

            <div className="service-content">

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

              <div className="service-price">
                {service.price}
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;