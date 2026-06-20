import "./Internships.css";

const formLink =
  "https://forms.gle/rim1wKiQ8X6MtNAY6";

const internships = [
  "Software Development",
  "Web Development",
  "Full Stack Development",
  "Mobile App Development",
  "UI/UX Design",
  "Front End Development",
  "Flutter",
  "Data Science",
  "Data Analysis using Python",
  "Machine Learning",
  "Computer Vision",
  "Data Engineering",
  "Business Intelligence",
  "Digital Marketing",
  "Business Development",
  "Finance",
  "Operations",
  "Human Resources",
  "Data Analysis Using MS Excel",
  "Power BI",
  "Tableau",
  "Business Analytics",
  "Data Reporting",
  "Financial Data",
  "Healthcare Data",
  "Java Developer",
  "Python Developer",
  "Java Script Developer",
  ".Net Developer",
  "iOS Developer",
  "C/C++",
  "IOT Development",
  "Embedded Systems",
  "Quality Assurance",
  "Technical Writing",
  "Customer Support",
  "Content Creation",
  "Business Process Outsourcing",
  "Auto CAD"
];

function Internships() {
  return (
    <section className="internships" id="internships">

      <div className="internships-header">
        <span>INTERNSHIP PROGRAMS</span>

        <h2>
          Explore Our <span>Internships</span>
        </h2>

        <p>
          Industry-focused internship programs with practical training,
          mentorship, certification and real-world project exposure.
        </p>
      </div>

      <div className="internship-grid">

        {internships.map((item, index) => (
          <div className="internship-card" key={index}>

            <h3>{item}</h3>

            <p>
              Practical training, project experience and
              industry mentorship.
            </p>

            <a
              href={formLink}
              target="_blank"
              rel="noreferrer"
              className="apply-btn"
            >
              Apply Now
            </a>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Internships;