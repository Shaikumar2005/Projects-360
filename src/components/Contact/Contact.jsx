import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-header">

        <span>CONTACT US</span>

        <h2>
          Let's Build Something
          <span> Great Together</span>
        </h2>

        <p>
          Have a project idea or need professional guidance?
          Reach out to us and we'll get back to you soon.
        </p>

      </div>

      <div className="contact-container">
<form
  action="https://formspree.io/f/mpqeonbo"
  method="POST"
  className="contact-form"
>

  <input
    type="hidden"
    name="_subject"
    value="New Contact Form Submission - Projects 360"
  />

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
  />

  <input
    type="tel"
    name="phone"
    placeholder="Mobile Number"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Email Address"
    required
  />

  <textarea
    name="message"
    rows="6"
    placeholder="Tell us about your project..."
    required
  />

  <button type="submit">
    Send Message
  </button>

</form>
      </div>

    </section>
  );
}

export default Contact;