import "./Footer.css";

import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* COMPANY */}

        <div className="footer-col">

          <h2>PROJECTS 360°</h2>

          <p>
            Transforming innovative ideas into successful
            digital products through web development,
            UI/UX design, consultancy, research,
            internships and project solutions.
          </p>

          <div className="social-icons">

            <a
              href="https://www.linkedin.com/company/projectsthreesixty/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/projects360__/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            

            <a
              href="mailto:projectsthreesixty.com@gmail.com"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* QUICK LINKS */}

        <div className="footer-col">

          <h3>Quick Links</h3>

          <a href="#about">About Us</a>

          <a href="#services">Services</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact Us</a>

        </div>

        {/* CONTACT */}

        <div className="footer-col">

          <h3>Contact Info</h3>

          <p>
            <FaMapMarkerAlt className="footer-icon" />
            Chennai, Tamil Nadu, India
          </p>

          <p>
            <FaPhoneAlt className="footer-icon" />
            +91 97904 46227
          </p>

          <p>
            <FaEnvelope className="footer-icon" />
             admin@projects360.in
          </p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Projects 360°. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;