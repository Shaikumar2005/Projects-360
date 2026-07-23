import "./PolicyPages.css";

const CancellationPolicy = () => {
  return (
    <section className="policy-page">
      <div className="policy-container">
        <h1>Cancellation Policy</h1>
        <p className="policy-updated">Last updated: July 23, 2026</p>

        <h2>1. Cancellation by Participant</h2>
        <p>
          Once a workshop registration is confirmed and payment is
          completed, participants cannot cancel their registration for a
          refund, as the registration fee is non-refundable (see our{" "}
          <a href="/refund-policy">Refund Policy</a>). However, if you are
          unable to attend, please inform us in advance at{" "}
          <strong>[your business email here]</strong> so we can keep our
          records updated.
        </p>

        <h2>2. Cancellation or Rescheduling by Projects360</h2>
        <p>
          Projects360 reserves the right to cancel, postpone, or reschedule
          a workshop due to insufficient registrations, instructor
          unavailability, technical issues, or other unforeseen
          circumstances.
        </p>
        <p>If a workshop is cancelled by us:</p>
        <ul>
          <li>Registered participants will be notified via email and/or phone as soon as possible</li>
          <li>Participants will be offered either a full refund or a seat in the next available batch of the same workshop, at their choice</li>
        </ul>

        <h2>3. Rescheduled Workshops</h2>
        <p>
          If a workshop is rescheduled to a new date, your existing
          registration will automatically carry over to the new date unless
          you inform us otherwise within 3 days of the rescheduling notice.
        </p>

        <h2>4. Contact Us</h2>
        <p>
          For any cancellation-related queries, contact us at:{" "}
          <strong>[your business email here]</strong> or{" "}
          <strong>[your business phone number here]</strong>.
        </p>
      </div>
    </section>
  );
};

export default CancellationPolicy;