import  { useState } from 'react';
import emailjs from '@emailjs/browser';
import './WorkshopRegistration.css';

const WorkshopRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    department: '',
    year: '',
    workshop: 'AI & Digital Marketing Workshop',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_hu9oqch', // e.g. service_x7k2m9p
        'template_okkyd76', // e.g. template_ab12cd3
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          college: formData.college,
          department: formData.department,
          year: formData.year,
          workshop: formData.workshop,
        },
        'zzWH1cvYsM9xlK4f0' // e.g. aBcD1234EfGh5678
      );

      setSubmitted(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        college: '',
        department: '',
        year: '',
        workshop: 'AI & Digital Marketing Workshop',
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Registration failed. Please try again.');
    }

    setLoading(false);
  };

  return (
    <section className="workshop-section" id="register">
      <div className="workshop-container">

        {/* LEFT SIDE */}
        <div className="workshop-left">
          <h1>AI & Digital Marketing Workshop 2026</h1>

          <p className="subtitle">
            Learn AI tools, content creation, branding, lead generation,
            and digital marketing strategies from industry mentors.
          </p>

          <div className="info-grid">
            <div className="info-card">
              📅 <strong>2 August 2026</strong>
            </div>

            <div className="info-card">
              ⏰ <strong>6:00 PM – 7:00 PM</strong>
            </div>

            <div className="info-card">
              📍 <strong>Online / Chennai</strong>
            </div>

            <div className="info-card">
              🏆 <strong>Certificate Included</strong>
            </div>
          </div>

          <div className="info-box">
            <h3>What you’ll learn</h3>
            <ul>
              <li>Top AI tools for students and professionals</li>
              <li>Personal branding & LinkedIn growth</li>
              <li>Content creation using AI</li>
              <li>Lead generation strategies</li>
              <li>Career opportunities in digital marketing</li>
            </ul>
          </div>

          <div className="info-box">
            <div className="price-row">
              <div>
                <p className="price-label">Student Pass</p>
                <h2>₹19</h2>
              </div>

              <span className="limited">25 Seats Left</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="workshop-right">
          <div className="form-card">
            <h2>Register Now</h2>
            <p>Fill in your details to reserve your seat.</p>

            {submitted && (
              <div className="success-message">
                ✅ Registration submitted successfully! Check your email.
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label>College Name</label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="Enter your college name"
                  required
                />
              </div>

              <div className="two-column">

                <div className="form-group">
                  <label>Department</label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    placeholder="CSE / IT / ECE"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Year</label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                  </select>
                </div>

              </div>

              <div className="form-group">
                <label>Workshop</label>
                <input
                  type="text"
                  name="workshop"
                  value={formData.workshop}
                  readOnly
                />
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Submitting...' : 'Register for ₹19'}
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkshopRegistration;