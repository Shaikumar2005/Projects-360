import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Internships from "../components/Internships/Internships";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
       <Internships />
      <Projects />
      <Contact />
      <Footer />
     
    </>
  );
}

export default Home;