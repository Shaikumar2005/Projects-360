import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">

  <div className="nav-logo">
      <img src={logo} alt="Projects 360" />
  </div>

  <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
  </ul>

  <a href="#contact" className="quote-btn">
      Contact Us
  </a>

</nav>
  );
}

export default Navbar;