import "./Services.css";

import consultancy from "../../assets/consultancy.jpg";
import project from "../../assets/project.jpg";
import internship from "../../assets/internship.jpg";
import patent from "../../assets/patent.jpg";
import research from "../../assets/research.jpg";

function Services() {

  const services = [
    {
      image: consultancy,
      number: "01",
      title: "Business Consultancy",
      desc: "Helping businesses grow through strategic planning, technical consulting and innovative solutions.",
      price: "Contact Us"
    },
    {
      image: project,
      number: "02",
      title: "Project Development",
      desc: "From concept to deployment, we build high-quality academic and industrial projects.",
      price: "Starting ₹1,500"
    },
    {
      image: internship,
      number: "03",
      title: "Internship Programs",
      desc: "Industry-oriented internship programs with mentorship, certification and live projects.",
      price: "Starting ₹99"
    },
    {
      image: patent,
      number: "04",
      title: "Patent Assistance",
      desc: "Complete guidance for patent filing, documentation and intellectual property protection.",
      price: "Contact Us"
    },
    {
      image: research,
      number: "05",
      title: "Research & Development",
      desc: "Innovative R&D solutions for students, startups and organizations.",
      price: "Starting ₹799"
    }
  ];

  return (
    <section className="services" id="services">

      <div className="services-heading">

        <span>OUR SERVICES</span>

        <h2>What We Offer</h2>

        <p>
          We provide industry-focused services that empower students,
          startups and businesses to achieve their goals.
        </p>

      </div>

      <div className="service-list">

        {services.map((service, index) => (

          <div className="service-box" key={index}>

            <div className="service-left">

              <img
                src={service.image}
                alt={service.title}
              />

            </div>

            <div className="service-right">

              <h1>{service.number}</h1>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

              <div className="bottom">

                <span>{service.price}</span>

                <button>Explore</button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;