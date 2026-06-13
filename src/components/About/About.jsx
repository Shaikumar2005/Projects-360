import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        <div className="about-left">

          <span className="section-tag">
            ABOUT US
          </span>

          <h2>
            Building Excellence Through
            <span> Innovation & Expertise</span>
          </h2>

          <p>
            Projects 360° is a forward-thinking company dedicated
            to delivering high-quality project management,
            engineering, and consulting solutions.
          </p>

          <p>
            Our mission is to transform ideas into successful
            outcomes through strategic planning, innovative
            thinking, and flawless execution. We work closely
            with our clients to ensure every project is delivered
            on time, within budget, and beyond expectations.
          </p>

          <div className="about-buttons">

            <a href="#services" className="about-btn">
              Our Services
            </a>

          </div>

        </div>

        <div className="about-right">

          <div className="about-card">
  <h3>Expert Team</h3>
  <p>
    Skilled professionals delivering reliable engineering,
    consulting, and project solutions.
  </p>
</div>

<div className="about-card">
  <h3>Quality Focus</h3>
  <p>
    We maintain the highest standards to ensure every
    project meets client expectations.
  </p>
</div>

<div className="about-card">
  <h3>Timely Delivery</h3>
  <p>
    Efficient planning and execution help us deliver
    projects on schedule and within budget.
  </p>
</div>

        </div>

      </div>

    </section>
  );
}

export default About;