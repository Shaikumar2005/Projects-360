import "./PolicyPages.css";

const PrivacyPolicy = () => {
  return (
    <section className="policy-page">
      <div className="policy-container">
        <h1>Privacy Policy</h1>
        <p className="policy-updated">Last updated: July 23, 2026</p>

        <p>
          Projects360 ("we", "us", "our") respects your privacy. This policy
          explains what information we collect when you register for our
          workshops, and how we use it.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          When you register for a workshop, we collect: your full name,
          email address, phone number, college name, department, and year of
          study. This information is submitted voluntarily through our
          registration form.
        </p>

        <h2>2. Payment Information</h2>
        <p>
          Payments are processed by <strong>Razorpay</strong>, a PCI-DSS
          compliant payment gateway. We do not collect, store, or have
          access to your card number, UPI ID, or banking credentials — these
          are handled entirely and securely by Razorpay.
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information you provide to:</p>
        <ul>
          <li>Confirm your workshop registration and seat</li>
          <li>Send you registration confirmation and workshop details via email</li>
          <li>Contact you regarding workshop schedule changes, if any</li>
          <li>Issue certificates, where applicable</li>
        </ul>
        <p>
          We do not sell, rent, or share your personal information with
          third parties for marketing purposes.
        </p>

        <h2>4. Third-Party Services</h2>
        <p>
          We use the following third-party services to operate our
          registration process:
        </p>
        <ul>
          <li><strong>Razorpay</strong> — for secure payment processing</li>
          <li><strong>EmailJS</strong> — for sending registration confirmation emails</li>
        </ul>
        <p>
          These services may process your data according to their own
          privacy policies.
        </p>

        <h2>5. Data Retention</h2>
        <p>
          We retain your registration information for as long as necessary
          to fulfil the purpose of the workshop and for reasonable
          record-keeping afterward.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your
          personal data by contacting us at the email below.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Any changes
          will be posted on this page with an updated revision date.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          For privacy-related questions, contact us at:{" "}
          <strong>[your business email here]</strong>
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;