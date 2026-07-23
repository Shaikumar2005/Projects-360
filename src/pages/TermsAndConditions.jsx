import "./PolicyPages.css";

const TermsAndConditions = () => {
  return (
    <section className="policy-page">
      <div className="policy-container">
        <h1>Terms & Conditions</h1>
        <p className="policy-updated">Last updated: July 23, 2026</p>

        <p>
          Welcome to Projects360. By accessing our website or registering for
          any of our workshops, you agree to the following terms and
          conditions. Please read them carefully before proceeding with
          registration.
        </p>

        <h2>1. About Us</h2>
        <p>
          Projects360 organizes online and offline skill-development
          workshops for students, covering topics such as AI tools, digital
          marketing, and career-oriented technical training.
        </p>

        <h2>2. Registration</h2>
        <p>
          By registering for a workshop, you confirm that the information you
          provide (name, email, phone number, college, department, and year)
          is accurate and complete. Your seat is confirmed only after
          successful payment of the registration fee.
        </p>

        <h2>3. Payments</h2>
        <p>
          All payments are processed securely through Razorpay. We do not
          store your card, UPI, or banking details on our servers. Please
          refer to our <a href="/refund-policy">Refund Policy</a> and{" "}
          <a href="/cancellation-policy">Cancellation Policy</a> for details
          on refunds and cancellations.
        </p>

        <h2>4. Workshop Conduct</h2>
        <p>
          Workshop dates, times, and formats (online/offline) are
          communicated at the time of registration and may be subject to
          change due to unforeseen circumstances. We will make reasonable
          efforts to notify registered participants of any changes.
        </p>

        <h2>5. Code of Conduct</h2>
        <p>
          Participants are expected to engage respectfully with instructors
          and fellow participants. Projects360 reserves the right to remove
          any participant from a workshop for disruptive or inappropriate
          behavior, without refund.
        </p>

        <h2>6. Intellectual Property</h2>
        <p>
          All workshop materials, presentations, and content shared during
          sessions are the intellectual property of Projects360 and/or its
          instructors, and may not be reproduced or redistributed without
          permission.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          Projects360 provides workshops on an "as-is" basis for educational
          purposes. We are not liable for any indirect or consequential loss
          arising from participation in our workshops.
        </p>

        <h2>8. Changes to These Terms</h2>
        <p>
          We may update these terms from time to time. Continued use of our
          website after changes are posted constitutes acceptance of the
          updated terms.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          For any questions regarding these terms, please contact us at:{" "}
          <strong>[your business email here]</strong> or{" "}
          <strong>[your business phone number here]</strong>.
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;