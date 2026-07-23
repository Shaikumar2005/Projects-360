import { useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import "./WorkshopRegistration.css";

// Single source of truth for the backend URL — used by both calls below.
// Move this to a .env value later if you deploy (e.g. VITE_API_URL).
const API_BASE_URL = "http://localhost:5000";

// ₹19 workshop pass → amount must be in paise
const WORKSHOP_AMOUNT_PAISE = 1900;

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

        // Create Order — body was missing before, and the response was never captured
        const orderResponse = await axios.post(
          `${API_BASE_URL}/api/create-order`,
          { amount: WORKSHOP_AMOUNT_PAISE }
        );

        const order = orderResponse.data;

        const options = {

            key: order.key,

            amount: order.amount,

            currency: order.currency,

            name: "Projects360",

            description: "AI & Digital Marketing Workshop",

            order_id: order.order_id,

            prefill: {
                name: formData.name,
                email: formData.email,
                contact: formData.phone,
            },

            theme: {
                color: "#2563eb",
            },

            handler: async function (response) {

                try {

                    // fixed: was a relative "/api/verify-payment" which hits the
                    // frontend dev server instead of the backend on port 5000
                    const verify = await axios.post(
                      `${API_BASE_URL}/api/verify-payment`,
                      {
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                      }
                    );

                    if (verify.data.success) {

                        await emailjs.send(

                            "service_hu9oqch",

                            "template_okkyd76",

                            {
                                name: formData.name,
                                email: formData.email,
                                phone: formData.phone,
                                college: formData.college,
                                department: formData.department,
                                year: formData.year,
                                workshop: formData.workshop,
                            },

                            "zzWH1cvYsM9xlK4f0"

                        );

                        setSubmitted(true);

                        setFormData({

                            name: "",
                            email: "",
                            phone: "",
                            college: "",
                            department: "",
                            year: "",
                            workshop:
                                "AI & Digital Marketing Workshop",

                        });

                    } else {

                        alert("Payment verification failed. Please contact support.");

                    }

                } catch (err) {

                    alert("Payment verification failed.");

                    console.log(err);

                }

            },

            modal: {
                ondismiss: function () {
                    // user closed the checkout modal without paying
                    setLoading(false);
                },
            },

        };

        const razorpay = new window.Razorpay(options);

        razorpay.on("payment.failed", function (response) {

            alert(
              `Payment Failed: ${response.error?.description || "Please try again."}`
            );

        });

        razorpay.open();

    }

    catch (err) {

        console.log(err);

        alert("Unable to start payment.");

    }

    finally {

        setLoading(false);

    }

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
                    <option value="Other">Other</option>
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
