import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <span className="hero-tag">
          ENGINEERING • CONSULTING • PROJECT MANAGEMENT
        </span>

        <h1>
          Transforming Ideas Into
          <span> Successful Projects</span>
        </h1>

        <p>
          Projects 360° delivers innovative engineering,
          consulting and project management solutions that
          help businesses execute projects with confidence,
          efficiency and excellence.
        </p>

        <div className="hero-buttons">

          <a href="#services" className="btn-primary">
            Explore Services
          </a>

          <a href="#contact" className="btn-secondary">
            Contact Us
          </a>

        </div>

      </div>

      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

    </section>
  );
}

export default Hero;