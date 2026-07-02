import "./Internships.css";
import {
  FaLaptopCode,
  FaChartBar,
  FaBullhorn,
  FaUserTie,
  FaMicrochip,
  FaCode,
  FaPaintBrush,
  FaDatabase,
} from "react-icons/fa";

const formLink = "https://forms.gle/rim1wKiQ8X6MtNAY6";

const internships = [
  {
    title: "Software Development",
    icon: <FaLaptopCode />,
    category: "Technology",
  },
  {
    title: "Full Stack Development",
    icon: <FaCode />,
    category: "Technology",
  },
  {
    title: "Web Development",
    icon: <FaLaptopCode />,
    category: "Technology",
  },
  {
    title: "UI / UX Design",
    icon: <FaPaintBrush />,
    category: "Design",
  },
  {
    title: "Data Science",
    icon: <FaDatabase />,
    category: "Data",
  },
  {
    title: "Machine Learning",
    icon: <FaDatabase />,
    category: "AI",
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn />,
    category: "Marketing",
  },
  {
    title: "Finance",
    icon: <FaChartBar />,
    category: "Business",
  },
  {
    title: "Human Resources",
    icon: <FaUserTie />,
    category: "Management",
  },
  {
    title: "Embedded Systems",
    icon: <FaMicrochip />,
    category: "Hardware",
  },
  {
    title: "Power BI",
    icon: <FaChartBar />,
    category: "Analytics",
  },
  {
    title: "Business Analytics",
    icon: <FaChartBar />,
    category: "Analytics",
  },
];

function Internships() {
  return (
    <section className="internships" id="internships">
      <div className="internships-header">
        <span>OUR INTERNSHIPS</span>

        <h2>
          Kickstart Your <span>Career</span>
        </h2>

        <p>
          Learn from industry mentors, work on real-world projects, and earn
          certificates that strengthen your resume.
        </p>
      </div>

      <div className="internship-grid">
        {internships.map((item, index) => (
          <div className="internship-card" key={index}>
            <div className="icon">{item.icon}</div>

            <span className="badge">{item.category}</span>

            <h3>{item.title}</h3>

            <p>
              Practical learning • Live Projects • Industry Mentorship •
              Certificate
            </p>

            <a
              href={formLink}
              target="_blank"
              rel="noreferrer"
              className="apply-btn"
            >
              Apply Now →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Internships;